import React from "react";
import { MdUnarchive } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ThemeConsumer } from '../../contexts/ThemeContext';

function UnarchiveButton({ id, onUnarchive }) {
    const navigate = useNavigate();
    return (
        <ThemeConsumer>
            {({ language }) => {
                return (
                    <button
                        type="button" 
                        className="btn btn-primary floating-button-right p-3 mx-2 text-white fw-400" 
                        title={language === 'id' ? 'Aktifkan' : 'Activate'}
                        onClick={() => { 
                            onUnarchive(id);
                            navigate("/archived");
                        }}
                    ><MdUnarchive style={{fontSize: "24px"}} /></button>
                )
            }}
        </ThemeConsumer>
    );
}

UnarchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onUnarchive: PropTypes.func.isRequired,
}

export default UnarchiveButton;