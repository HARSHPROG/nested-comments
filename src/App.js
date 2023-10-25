import { useState } from "react";
import CommentManipulateConstUseState from "./components/Approach1/Comment";
import Comment from "./components/Approach2/Comment";
import useNode from "./hooks/useNode";
import "./styles.css";

const comments = {
  id: 1,
  items: [

    // {
    //   id: 123,
    //   name: 'hello',
    //   items: [
    //     {
    //     id: 1234,
    //     name: 'hello World',
    //     items: [
    //       {
    //         id: 12345,
    //         name: 'hello World 123',
    //         items: []
    //         }
    //     ]
    //     }
    //   ]
    // },
    // {
    //   id: 123455,
    //   name: 'react',
    //   items: [
    //     {
    //       id: 1234556,
    //       name: 'javascript',
    //       items: []
    //       }
    //   ]
    //   }
  ]
};

function App() {
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  return (
    <div className="App">
      <p> Naive Approach </p>
      <CommentManipulateConstUseState comment={commentsData} />

      <p> Correct Approach </p>
      <Comment
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
      />
    </div>
  );
}

export default App;
