import React from "react";
import PropTypes from "prop-types";
import { ThemeConsumer } from '../../contexts/ThemeContext';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            arhived: false,
            createdAt: "",
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitChangeEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <ThemeConsumer>
                {({ theme, language }) => {
                    return (
                        <div id="NoteInput" style={{marginTop: "150px", marginBottom: "150px"}}>
                            <h2 className="fs-2 text-center fw-bold text-info">{language === 'id' ? 'Formulir Tambah Catatan Baru' : 'Add New Note Form'}</h2>
                            <form className="mb-5" onSubmit={this.onSubmitChangeEventHandler}>
                                <div className="container w-75">
                                    <div className="mb-3">
                                        <label htmlFor="title" className={`form-label text-${theme}`}>{language === 'id' ? 'Judul' : 'Title'}</label>
                                        <input type="text"
                                        className={`form-control rounded form-control-lg bg-${theme === 'dark' ? 'white' : 'dark'} text-${theme}`} 
                                        id="title" 
                                        value={this.state.title} 
                                        onChange={this.onTitleChangeEventHandler} 
                                        required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="body" className={`form-label text-${theme}`}>{language === 'id' ? 'Isi' : 'Body'}</label>
                                        <textarea
                                        className={`form-control rounded form-control-lg bg-${theme === 'dark' ? 'white' : 'dark'} text-${theme}`}
                                        id="body" 
                                        rows="3" 
                                        value={this.state.body} 
                                        onChange={this.onBodyChangeEventHandler}
                                        required ></textarea>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-info p-2 text-white w-100">{language === 'id' ? 'Kirim' : 'Submit'}</button>
                                    </div>
                                </div>
                            </form>
                            </div>
                    )
                }}
            </ThemeConsumer>
        );
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;