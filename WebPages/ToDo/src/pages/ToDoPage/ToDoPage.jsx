import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "./ToDoPage.css";
import { useState } from "react";
import {
  onSnapshot,
  orderBy,
  query,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export default () => {
  const navigate = useNavigate();
  const props = useOutletContext();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!props.user) {
      navigate("/login");
    }
  }, [props.user]);
  useEffect(() => {
    let unsubscribe = () => {}; // Initialize as a dummy function

    if (props.user) {
      const q = query(
        props.getTaskCollectionRef(),
        orderBy("createdAt", "desc"),
      );
      unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const items = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setTasks(items);
        },
        (error) => {
          console.error("Snapshot error:", error);
        },
      );
    }

    return () => unsubscribe(); // This will always be a function, preventing errors
  }, [props.user]);
  async function addTask(formData) {
    try {
      const colRef = props.getTaskCollectionRef();
      await addDoc(colRef, {
        text: formData.get("task"),
        completed: false,
        createdAt: new Date(),
      });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }

  async function completeTask(completeTask) {
    const completedTasks = tasks.filter((task) => {
      return task.text === completeTask;
    });
    completedTasks.map(async (task) => {
      try {
        // Specific path: users/[UID]/tasks/[TASK_ID]
        const taskRef = doc(
          props.store,
          "users",
          props.user.uid,
          "tasks",
          task.id,
        );

        await updateDoc(taskRef, {
          completed: !task.completed,
        });
      } catch (error) {
        console.error("Error updating task:", error);
      }
    });
  }
  async function deleteTask(deleteTask) {
    const deletedTasks = tasks.filter((task) => {
      return task.text === deleteTask;
    });
    deletedTasks.map(async (task) => {
      try {
        // Specific path: users/[UID]/tasks/[TASK_ID]
        const taskRef = doc(
          props.store,
          "users",
          props.user.uid,
          "tasks",
          task.id,
        );

        await deleteDoc(taskRef);
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    });
  }

  return (
    <>
      <div className="to-do-wrapper">
        <div className="to-do-container">
          <form action={addTask}>
            <input type="text" name="task" />
            <button>Add</button>
          </form>
          <ul className="to-do-list">
            {tasks.map((task, index) => {
              return (
                <button
                  key={index}
                  className="task-btn"
                  onClick={() => {
                    completeTask(task.text);
                  }}
                >
                  <li
                    key={index}
                    className={"task " + (task.completed ? "completed" : "")}
                  >
                    {task.text}
                  </li>
                  <i class="fa-solid fa-trash"></i>
                </button>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
