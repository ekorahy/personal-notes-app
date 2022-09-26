import React from "react";
import NoteList from "../components/main/NoteList";
import { deleteNote, getArchivedNotes } from "../utils/local-data";

class ArchivedPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id); 

        this.setState(() => {
            return {
                notes: getArchivedNotes(),
            }
        })
    }

    render() {
        return (
            <div className="container my-5">
                <h2>Archived List</h2>
                {
                    this.state.notes.length !== 0 ?
                    <NoteList props={this.state.notes.length} notes={this.state.notes} onDelete={this.onDeleteHandler} />
                    : <div className="text-center">Data Kosong</div>
                }
            </div>
        );
    }
}

export default ArchivedPage;