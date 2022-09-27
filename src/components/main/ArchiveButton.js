import React from "react";
import { MdArchive } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ArchiveButton({ id, onArchive }) {
    const navigate = useNavigate();
    return (
        <button
         type="button" 
         class="btn btn-warning floating-button-right p-3 mx-2 text-white fw-400" 
         title="Archive Note"
         onClick={() => { 
            onArchive(id);
            navigate("/notes");
        }}
        ><MdArchive style={{fontSize: "24px"}} /></button>
    );
}

export default ArchiveButton;