import React from "react";
import { showFormattedDate } from '../../utils/index';
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import UnarchiveButton from "./UnarchiveButton";

function NoteDetail({ id, title, createdAt, body, archived, onDelete, onArchive, onUnarchive }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{showFormattedDate(createdAt)}</p>
            <p>{body}</p>
            <DeleteButton id={id} onDelete={onDelete} />
            {
                archived? <UnarchiveButton id={id} onUnarchive={onUnarchive} />
                : <ArchiveButton id={id} onArchive={onArchive} />
            }
        </div>
    );
}

export default NoteDetail;