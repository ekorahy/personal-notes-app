import React from "react";
import { MdUnarchive } from "react-icons/md";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";
import Swal from 'sweetalert2';

function UnarchiveButton({ id, onUnarchive }) {
    const { language } = React.useContext(LocaleContext);
    return (
        <button
            type="button" 
            className="btn btn-info floating-button-right p-3 mx-2 text-white fw-400" 
            title={language === 'id' ? 'Aktifkan' : 'Activate'}
            onClick={() => { 
                onUnarchive(id);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Personal Notes successfully unarchived!',
                    showConfirmButton: false,
                    timer: 1000
                });
            }}
        ><MdUnarchive style={{fontSize: "24px"}} /></button>
    );
}

UnarchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onUnarchive: PropTypes.func.isRequired,
}

export default UnarchiveButton;