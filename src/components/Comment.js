import { useState, useRef, useEffect } from 'react';
import { ReactComponent as DownArrow } from '../assets/down-arrow.svg';
import { ReactComponent as UpArrow } from '../assets/up-arrow.svg';
import Action from './Action';

const Comment = ({ comment }) => {
    const [input, setInput] = useState("");

    const onAddComment = () => {};
    return (
        <div>
            <div style={{"display": "flex"}} className={comment.id === 1 ? "inputContainer" : "commentContainer" }> 
                {comment.id === 1 ? (
                <>
                    <input
                        type="text"
                        className='inputContainer__input first_input'
                        autoFocus
                        placeholder='type here...'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Action
                     className={"reply comment"}
                     type="Comment"
                     handleClick={onAddComment}
                    />
                </>
                ) : (
                    <>
                        <span style={{wordWrap: "break-word"}}> {comment.name} </span>
                        <div style={{display: "flex", marginTop: "5px"}}>
                            <Action className={"reply"} type="reply" />
                            <Action className={"reply"} type="edit" />
                            <Action className={"reply"} type="delete" />
                        </div>
                    </>
                ) }
            </div>
                    
            <div style={{paddingLeft: 25}}>
                {comment?.items?.map((cmnt) => {
                    return <Comment key={cmnt.id} comment={cmnt}/>;
                })}
            </div>
        </div>
    );
};

export default Comment;