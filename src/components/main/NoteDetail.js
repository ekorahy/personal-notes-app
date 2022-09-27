import React from "react";
import { showFormattedDate } from '../../utils/index';
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import UnarchiveButton from "./UnarchiveButton";
import PropTypes from 'prop-types';

function NoteDetail({ id, title, createdAt, body, archived, onDelete, onArchive, onUnarchive }) {
    return (
        <div className="container" style={{marginTop: "120px", marginBottom: "150px", padding: "50px"}}>
            <h2>{title}</h2>
            <p>{showFormattedDate(createdAt)}</p>
            <p>{body}</p>
            <div className="d-flex justify-content-end">
                <DeleteButton id={id} onDelete={onDelete} />
                {
                    archived? <UnarchiveButton id={id} onUnarchive={onUnarchive} />
                    : <ArchiveButton id={id} onArchive={onArchive} />
                }
            </div>
        </div>
    );
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
}

export default NoteDetail;