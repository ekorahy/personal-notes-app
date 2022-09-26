import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function UnarchiveButton({ id, onUnarchive }) {
    const navigate = useNavigate();
    return (
        <button
         type="button" 
         class="btn btn-warning" 
         onClick={() => { 
            onUnarchive(id);
            navigate("/archived");
        }}
        ><FiArrowUp /></button>
    );
}

export default UnarchiveButton;