import React from "react";
import { MdArchive } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

function ArchiveButton({ id, onArchive }) {
    const navigate = useNavigate();
    const { language } = React.useContext(LocaleContext);
    return (
        <button
            type="button" 
            className="btn btn-info floating-button-right p-3 mx-2 text-white fw-400" 
            title={language === 'id' ? 'Arsipkan' : 'Archived'}
            onClick={() => { 
                onArchive(id);
                navigate("/notes");
            }}
        ><MdArchive style={{fontSize: "24px"}} /></button>
    );
}

ArchiveButton.propTypes = {
    id: PropTypes.string,
    onArchive: PropTypes.func.isRequired,
}

export default ArchiveButton;