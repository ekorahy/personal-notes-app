import React from "react";
import { FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ThemeConsumer } from '../../contexts/ThemeContext';

function DeleteButton({ id, onDelete }) {
    const navigate = useNavigate();
    return (
        <ThemeConsumer>
            {({ language }) => {
                return (
                    <button
                        type="button" 
                        className="btn btn-danger floating-button-left p-3 mx-2 text-white fw-400"
                        title={language === 'id' ? 'Hapus' : 'Delete'}
                        onClick={() => { 
                            onDelete(id);
                            navigate("/notes");
                        }}
                    ><FiTrash style={{fontSize: "24px"}} /></button>
                )
            }}
        </ThemeConsumer>
    );
}

DeleteButton.propTypes = {
    id: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;