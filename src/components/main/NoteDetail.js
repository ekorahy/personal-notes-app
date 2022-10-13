import React from "react";
import { showFormattedDate } from "../../utils/index";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import UnarchiveButton from "./UnarchiveButton";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

function NoteDetail({ id, title, createdAt, body, archived, onDelete, onArchive, onUnarchive }) {
    const { theme } = React.useContext(LocaleContext);
    return (
        <div className="container" style={{marginTop: "90px", marginBottom: "150px", padding: "50px"}}>
            <h2 className='text-info fs-1'>{title}</h2>
            <p className={`text-${theme}`}>{showFormattedDate(createdAt)}</p>
            <p className={`text-${theme}`}>{body}</p>
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
    id: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    body: PropTypes.string,
    archived: PropTypes.bool,
    onDelete: PropTypes.func,
    onArchive: PropTypes.func,
    onUnarchive: PropTypes.func,
}

export default NoteDetail;