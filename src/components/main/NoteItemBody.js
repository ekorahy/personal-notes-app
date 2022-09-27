import React from "react";
import { showFormattedDate } from '../../utils/index';
import PropTypes from 'prop-types';

function NoteItemBody({ createdAt, body }) {
    return (
        <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{showFormattedDate(createdAt)}</h6>
            <p className="card-text">{body}</p>
        </div>
    );
}

NoteItemBody.propTypes = {
    createdAt: PropTypes.bool.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteItemBody;