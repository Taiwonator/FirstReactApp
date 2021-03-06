import React, {Component} from 'react';

const Note = (props) => {

    const toggle = () => {
        props.toggleComplete(props.id);
    }

    return (
        <div className={`note ${props.isComplete ? 'complete' : ''}`}>
            <div className="content">
                <label className="left">{props.text} {props.isComplete}
                    <input onChange={() => toggle()} type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <div className="right">
                    <h4 className="time">{props.time}</h4>
                    <div onClick={() => props.deleteNote(props.id)} className="delete"><i className="fa fa-trash-alt"></i></div>
                </div>
            </div>
        <div className="line"></div>
       </div>
    )
}

export default Note;