import React from "react";

function NoteItemBody({ createdAt, body }) {
    return (
        <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{createdAt}</h6>
            <p className="card-text">{body}</p>
        </div>
    );
}

export default NoteItemBody;