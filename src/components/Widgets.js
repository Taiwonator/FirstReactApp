import React, {Component} from 'react';
import NoteCounter from '../components/NoteCounter';
import ArrowButtons from '../components/ArrowButtons';
import NoteButton from '../components/NoteButton';

const Widgets = (props) => (
    <div className='widgets'>
        <NoteCounter />
        <ArrowButtons />
        <NoteButton classStates={props.classStates} userInput={props.userInput} toggleAddingNote={props.toggleAddingNote} updateUserInput={props.updateUserInput} />
    </div>
)


export default Widgets;