import React from "react";
import { showFormattedDate } from "../../utils/index";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

function NoteItemBody({ createdAt, body }) {
    const { theme } = React.useContext(LocaleContext);
    return (
        <>
            <h6 className="card-subtitle mb-2 mt-1 text-muted">{showFormattedDate(createdAt)}</h6>
            <p className={`card-text text-${theme}`}>{body}</p>
        </>
    );
}

NoteItemBody.propTypes = {
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteItemBody;