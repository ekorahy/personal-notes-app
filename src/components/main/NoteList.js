import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
    return (
        <div className="container my-5">
            <div className="row row-cols-2 gy-3 gx-3">
                {
                    notes.map((note) => (
                        <div className="col">
                            <NoteItem 
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            {...note} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default NoteList;