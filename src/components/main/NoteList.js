import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
    return (
        <div className="container mb-5 mt-4">
            <div className="d-flex flex-wrap mx-auto">
                {
                    notes.map((note) => (
                        <div className="p-2 col-12 col-md-6 col-lg-4">
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