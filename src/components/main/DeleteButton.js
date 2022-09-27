import React from "react";
import { FiTrash } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function DeleteButton({ id, onDelete }) {
    const navigate = useNavigate();
    return (
        <button
         type="button" 
         class="btn btn-danger floating-button-left p-3 mx-2 text-white fw-400"
         title="Delete Note"
         onClick={() => { 
            onDelete(id);
            navigate("/notes");
        }}
        ><FiTrash style={{fontSize: "24px"}} /></button>
    );
}

export default DeleteButton;