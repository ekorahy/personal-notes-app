import React from "react";
import NoteItemBody from "./NoteItemBody";
import { Link } from 'react-router-dom';

function NoteItem({ id, title, createdAt, body}) {
    return (
        <div className="card" style={{width: "18rem;"}}>
            <div className="card-body">
                <Link to={`/notes/${id}`}>
                    <h5 className="card-title">{title}</h5>
                </Link>
                <NoteItemBody title={title} createdAt={createdAt} body={body} />
            </div>
            
        </div>
    );
}

export default NoteItem;