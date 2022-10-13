import React from "react";
import { MdUnarchive } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

function UnarchiveButton({ id, onUnarchive }) {
    const navigate = useNavigate();
    const { language } = React.useContext(LocaleContext);
    return (
        <button
            type="button" 
            className="btn btn-info floating-button-right p-3 mx-2 text-white fw-400" 
            title={language === 'id' ? 'Aktifkan' : 'Activate'}
            onClick={() => { 
                onUnarchive(id);
                navigate("/archived");
            }}
        ><MdUnarchive style={{fontSize: "24px"}} /></button>
    );
}

UnarchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onUnarchive: PropTypes.func.isRequired,
}

export default UnarchiveButton;