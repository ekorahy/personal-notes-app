import React from "react";
import { FiArrowDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function ArchiveButton({ id, onArchive }) {
    const navigate = useNavigate();
    return (
        <button
         type="button" 
         class="btn btn-success" 
         onClick={() => { 
            onArchive(id);
            navigate("/notes");
        }}
        ><FiArrowDown /></button>
    );
}

export default ArchiveButton;