import React from "react";
import { showFormattedDate } from "../../utils/index";
import PropTypes from "prop-types";
import { ThemeConsumer } from '../../contexts/ThemeContext';

function NoteItemBody({ createdAt, body }) {
    return (
        <ThemeConsumer>
            {({ theme }) => {
                return (
                    <>
                        <h6 className="card-subtitle mb-2 mt-1 text-muted">{showFormattedDate(createdAt)}</h6>
                        <p className={`card-text text-${theme}`}>{body}</p>
                    </>
                )
            }}
        </ThemeConsumer>
    );
}

NoteItemBody.propTypes = {
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteItemBody;