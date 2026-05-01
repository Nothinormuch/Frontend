export const AsyncPage = () => {
  const comments = [
    { sender: "Bob", comment: "cool" },
    { sender: "Lmango", comment: "epicc" },
  ];
  async function setComments() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        comments.push({ sender: "Joe", comment: "magnifique" });
        throw new Error("Yooo");
        // resolve();
      }, 2000);
    });
  }
  setComments()
    .then(() => {
      console.log(comments);
    })
    .catch((e) => {
      console.log("Bro there was some error, please check it out!"+e)
      console.log(comments);
    });
  console.log(comments);
  return (
    <>
      <h1>Hey</h1>
    </>
  );
};
