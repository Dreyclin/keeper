import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios';
import { responsiveFontSizes } from "@material-ui/core";

function App() {

    const [fullNote, setFullNote] = useState({title: "", content: ""});
    const [notes, setNotes] = useState([]);
    const {title, content} = fullNote;

    useEffect(
        () => {
        axios.get('/load').then(response => {
            setNotes(response.data);
            console.log(notes);
        })
    }, [])

    function handleChange(event) {
        const {value, name} = event.target

        setFullNote(prevValue => {
            return {...prevValue, [name]: value}
        })
    }

    function handleAddClick(event) {
        event.preventDefault();

        axios.post('/add', {title, content}).then((response) => {
            setNotes(response.data);
            setFullNote({title: "", content: ""});
        }).catch((err) => {
            console.error("Error adding note: ", err);
        })
    }

    function handleDeleteClick(id) {
        axios.post('/delete', {id}).then((response) => {
            setNotes(response.data);
        })
    }

    return (
        <div>
            <Header />
            <CreateArea change={handleChange} add={handleAddClick} title={title} content={content}/>
            {notes.map((item, index) => {return <Note key={index} id={item._id} title={item.title} content={item.content} delete={handleDeleteClick}/>})}
            <Footer />
        </div>
    );
}

export default App;
