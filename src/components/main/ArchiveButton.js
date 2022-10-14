import React from "react";
import { MdArchive } from "react-icons/md";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";
import Swal from "sweetalert2";

function ArchiveButton({ id, onArchive }) {
  const { language } = React.useContext(LocaleContext);

  return (
    <button
     type="button" 
     className="btn btn-info floating-button-right p-3 mx-2 text-white fw-400" 
     title={language === "id" ? "Arsipkan" : "Archived"}
     onClick={() => { 
      onArchive(id);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Personal Notes successfully archived!",
        showConfirmButton: false,
        timer: 1000
      });
     }}
    ><MdArchive style={{fontSize: "24px"}} /></button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default ArchiveButton;
