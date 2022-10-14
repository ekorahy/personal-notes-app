import React from "react";
import { FiTrash } from "react-icons/fi";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";
import Swal from "sweetalert2";

function DeleteButton({ id, onDelete }) {
  const { language } = React.useContext(LocaleContext);

  return (
    <button
     type="button" 
     className="btn btn-danger floating-button-left p-3 mx-2 text-white fw-400"
     title={language === "id" ? "Hapus" : "Delete"}
     onClick={() => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          onDelete(id);
          Swal.fire(
            "Deleted!",
            "Your personal note has been deleted.",
            "success"
          )
        }
      })
     }}
    ><FiTrash style={{fontSize: "24px"}} /></button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;
