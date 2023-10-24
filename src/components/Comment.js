import { useState, useRef, useEffect } from 'react';
import { ReactComponent as DownArrow } from '../assets/down-arrow.svg';
import { ReactComponent as UpArrow } from '../assets/up-arrow.svg';
import Action from './Action';


// the logic in this file contains manipulating constants using useState and 
// relieing on the DOM updatation thereafter
const Comment = ({ comment }) => {
    const [input, setInput] = useState("");
    const [isEditing, setEditStatus] = useState(false);
    const [isReplyInputVisible, setReplyInput] = useState(false);
    const [deleteEffect, setDeleteEffect] = useState(false);

    const onAddReply = (val) => {
        comment.items.push({id: comment.id + '9', name: val, items: []})
        // let dummyComment = comment.items;
        // dummyComment.push({id: comment.id + '9', name: val, items: []})
        // updateComments({
        //     ...comment,
        //     items: dummyComment
        // })
        setReplyInput(false);
    };

    const onCancelReply = () => {
        setInput("");
        setReplyInput(false);
    }

    const onEditComment = (e) => {
        setEditStatus(true);
    }

    const onSaveComment = (val) => {
        comment.name = val;
        setEditStatus(false)
    }

    const ondeleteComment = () => {
        comment = {};
        setDeleteEffect(true);
    }

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
                    //  handleClick={onAddComment}
                    />
                </>
                ) : (
                    <>
                      
                        {isEditing === false ? (
                         <>
                            <span style={{wordWrap: "break-word"}}> {comment.name} </span>
                            <div style={{display: "flex", marginTop: "5px"}}>
                                <Action className={"reply"} type="reply" handleClick={() => setReplyInput(true)}/>
                                <Action className={"reply"} type="edit" handleClick={(e) => onEditComment(e)}/>
                                <Action className={"reply"} type="delete" handleClick={() => ondeleteComment()}/>
                            </div>
                        </>
                        ): (
                            <>
                                {/* <span style={{wordWrap: "break-word"}} className='inputContainer__input first_input'> {comment.name} </span> */}
                                <input
                                    type="text"
                                    className='inputContainer__input first_input'
                                    autoFocus
                                    placeholder='type here...'
                                    value={input || comment.name}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <div style={{display: "flex", marginTop: "5px"}}>
                                    <Action className={"reply"} type="save" handleClick={() => onSaveComment(input)}/>
                                    <Action className={"reply"} type="cancel" handleClick={() => setEditStatus(false)}/>
                                </div>
                            </>
                        )}
                    </>
                ) }
            </div>
                    
            <div style={{paddingLeft: 25}}>
                { isReplyInputVisible && (
                    <div className='inputContainer'>
                        <input
                            type="text"
                            className='inputContainer__input first_input'
                            autoFocus
                            placeholder='reply...'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Action
                            className={"reply comment"}
                            type="Reply"
                            handleClick={() => onAddReply(input)}
                        />
                        <Action
                            className={"reply comment"}
                            type="Cancel"
                            handleClick={() => onCancelReply(input)}
                        />
                    </div>
                )}

                {comment?.items?.map((cmnt) => {
                    return <Comment key={cmnt.id} comment={cmnt}/>;
                })}
            </div>
        </div>
    );
};

export default Comment;