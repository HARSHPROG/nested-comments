import { useState, useRef, useEffect } from 'react';
import { ReactComponent as DownArrow } from '../assets/down-arrow.svg';
import { ReactComponent as UpArrow } from '../assets/up-arrow.svg';

const Comment = ({ comment }) => {
    return <div> 
        <div>
            <input
                type="text"
                className='inputContainer__input first_input'
                autoFocus
                placeholder='type...'
            />
        </div>
    </div>;
};

export default Comment;