import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/main/NoteInput";
import { addNote } from "../utils/network-data";

function AddNotePage() {
    const navigate = useNavigate();

    async function onAddNoteHandler(note) {
        await addNote(note);
        navigate("/notes")
    }

    return (
        <section>
            <NoteInput addNote={onAddNoteHandler} />
        </section>
    )
}

export default AddNotePage;