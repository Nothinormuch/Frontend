// import parse from "html-react-parser";
import ReactMarkdown from "https://esm.sh/react-markdown@7";
import { useState } from "react";
export default ({ recipe }) => {
  return <ReactMarkdown>{recipe}</ReactMarkdown>;
};
