import React from "react";
import NoteList from "../components/main/NoteList";
import { deleteNote, getActiveNotes } from "../utils/local-data";

class NotesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id); 

        this.setState(() => {
            return {
                notes: getActiveNotes(),
            }
        })
    }

    render() {
        return (
            <div className="container my-5">
                <h2>Notes List</h2>
                {
                    this.state.notes.length !== 0 ?
                    <NoteList props={this.state.notes.length} notes={this.state.notes} onDelete={this.onDeleteHandler} />
                    : <div className="text-center">Data Kosong</div>
                }
                
            </div>
        );
    }
}

export default NotesPage;