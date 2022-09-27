import React from "react";
import NoteItemBody from "./NoteItemBody";
import { Link } from 'react-router-dom';

function NoteItem({ id, title, createdAt, body}) {
    return (
        <div className="card" style={{width: "18rem;"}}>
            <div className="card-body">
                <Link to={`/notes/${id}`}
                 className="card-title text-decoration-none h5 fw-bold text-info" 
                 style={{marginLeft: "14px"}}>{title}
                </Link>
                <NoteItemBody title={title} createdAt={createdAt} body={body} />
            </div>
            
        </div>
    );
}

export default NoteItem;