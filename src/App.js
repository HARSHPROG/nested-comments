import { useState } from "react";
import Comment from "./components/Comment";
import "./styles.css";

const comments = {
  id: 1,
  items: []
};

function App() {
  const [commentsData, setCommentsData] = useState(comments);

  return (
    <div className="App">
      <Comment comment={commentsData} />
    </div>
  );
}

export default App;
