import { useState } from "react";
import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import Meme from "./components/Meme/Meme.jsx";
import "./App.css";

export default () => {
  let [meme, setMeme] = useState({
    imageArr: [],
    imageURL: "",
    topText: "",
    bottomText: "",
  });
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMeme((prev) => {
          return {
            ...meme,
            imageArr: data.data.memes,
            imageURL: data.data.memes[1].url,
          };
        });
      });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Main setMeme={setMeme} />
        <Meme {...meme} />
      </main>
    </>
  );
};
