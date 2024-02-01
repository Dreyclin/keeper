import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios';

function App() {

    const [fullNote, setFullNote] = useState({});
    const [notes, setNotes] = useState([]);
    const {title, content} = fullNote;

    function handleChange(event) {
        const {value, name} = event.target

        setFullNote(prevValue => {
            return {...prevValue, [name]: value}
        })
    }

    function handleAddClick(event) {
        setNotes([...notes, fullNote]);
        setFullNote({title: "", content: ""});
        event.preventDefault();
    }

    function handleDeleteClick(id) {
        setNotes(prevNote => {
            return prevNote.filter((item, index) => {
                return index !== id
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea change={handleChange} add={handleAddClick} title={title} content={content}/>
            {notes.map((item, index) => {return <Note key={index} id={index} title={item.title} content={item.content} delete={handleDeleteClick}/>})}
            <Footer />
        </div>
    );
}

export default App;
