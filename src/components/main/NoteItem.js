import React from "react";
import NoteItemBody from "./NoteItemBody";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NoteItem({ id, title, createdAt, body}) {
    return (
        <div className="p-2 col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-body p-4">
                    <Link to={`/notes/${id}`}
                     className="card-title text-decoration-none h5 fw-bold text-info" 
                     >{title}
                    </Link>
                    <NoteItemBody title={title} createdAt={createdAt} body={body} />
                </div>
            </div>
        </div>
    );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteItem;