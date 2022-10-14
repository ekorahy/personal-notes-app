import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/main/NoteInput";
import { addNote } from "../utils/api";
import Swal from "sweetalert2";

function AddNotePage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    const { error } = await addNote(note);
    if (!error) {
      Swal.fire(
        "Add data successfully",
        "Your new personal note has been added successfully!",
        "success"
      )
      navigate("/notes")
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Personal note failed to add!"
      })
    }
  }

  return (
    <section>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}

export default AddNotePage;

