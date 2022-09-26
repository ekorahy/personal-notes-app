import React from "react";
import { FiTrash } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function DeleteButton({ id, onDelete }) {
    const navigate = useNavigate();
    return (
        <button
         type="button" 
         class="btn btn-danger" 
         onClick={() => { 
            onDelete(id);
            navigate("/notes");
        }}
        ><FiTrash /></button>
    );
}

export default DeleteButton;