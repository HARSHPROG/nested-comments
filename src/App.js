import { useState } from "react";
import CommentManipulateConstUseState from "./components/Comment";
import "./styles.css";

const comments = {
  id: 1,
  items: [
    {
      id: 123,
      name: 'hello',
      items: [
        {
        id: 1234,
        name: 'hello World',
        items: [
          {
            id: 12345,
            name: 'hello World 123',
            items: []
            }
        ]
        }
      ]
    },
    {
      id: 123455,
      name: 'react',
      items: [
        {
          id: 1234556,
          name: 'javascript',
          items: []
          }
      ]
      }
  ]
};

function App() {
  const [commentsData, setCommentsData] = useState(comments);

  return (
    <div className="App">
      <CommentManipulateConstUseState comment={commentsData} />
    </div>
  );
}

export default App;
