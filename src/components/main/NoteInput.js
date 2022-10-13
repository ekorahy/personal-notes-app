import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";
import useInput from "../../hooks/useInput";

function NoteInput({ addNote }) {
    const [ title, onTitleChangeEventHandler ] = useInput('');
    const [ body, onBodyChangeEventHandler ] = useInput('');
    const { theme, language } = React.useContext(LocaleContext);

    const onSubmitChangeEventHandler = (event) => {
        event.preventDefault();
        addNote({
            title: title,
            body: body,
        });
    }

    return (
        <div id="NoteInput" style={{marginTop: "90px", marginBottom: "90px"}}>
            <h2 className="fs-2 text-center fw-bold text-info">{language === 'id' ? 'Formulir Tambah Catatan Baru' : 'Add New Note Form'}</h2>
            <form className="mb-5" onSubmit={onSubmitChangeEventHandler}>
                <div className="container w-75">
                    <div className="mb-3">
                        <label htmlFor="title" className={`form-label text-${theme}`}>{language === 'id' ? 'Judul' : 'Title'}</label>
                        <input type="text"
                        className={`form-control rounded form-control-lg bg-${theme === 'dark' ? 'white' : 'dark'} text-${theme}`} 
                        id="title" 
                        value={title} 
                        onChange={onTitleChangeEventHandler} 
                        required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="body" className={`form-label text-${theme}`}>{language === 'id' ? 'Isi' : 'Body'}</label>
                        <textarea
                        className={`form-control rounded form-control-lg bg-${theme === 'dark' ? 'white' : 'dark'} text-${theme}`}
                        id="body" 
                        rows="3" 
                        value={body} 
                        onChange={onBodyChangeEventHandler}
                        required ></textarea>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-info p-2 text-white w-100">{language === 'id' ? 'Kirim' : 'Submit'}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;