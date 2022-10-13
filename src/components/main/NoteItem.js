import React from "react";
import NoteItemBody from "./NoteItemBody";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

function NoteItem({ id, title, createdAt, body}) {
    const { theme } = React.useContext(LocaleContext);
    return (
        <div className="p-2 col-12 col-md-6 col-lg-4">
            <div className='card'>
                <div className={`card-body p-4 bg-${theme === 'dark' ? 'white' : 'dark'} rounded`}>
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