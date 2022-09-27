import React from "react";
import { MdUnarchive } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function UnarchiveButton({ id, onUnarchive }) {
    const navigate = useNavigate();
    return (
        <button
         type="button" 
         class="btn btn-primary floating-button-right p-3 mx-2 text-white fw-400" 
         title="Unarchive Note"
         onClick={() => { 
            onUnarchive(id);
            navigate("/archived");
        }}
        ><MdUnarchive style={{fontSize: "24px"}} /></button>
    );
}

export default UnarchiveButton;