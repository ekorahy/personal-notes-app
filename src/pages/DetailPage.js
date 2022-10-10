import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/main/NoteDetail";
import { 
    getNote, 
    deleteNote, 
    archiveNote, 
    unarchiveNote, 
} from "../utils/network-data";
import PageNotFound from "./Error404";

function DetailPageWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();

    async function onDeleteHandler(id) {
        await deleteNote(id);
        navigate("/notes");
    }

    async function onArchiveHandler(id) {
        await archiveNote(id);
        navigate("/notes");
    }

    async function onUnarchiveHandler(id) {
        await unarchiveNote(id);
        navigate("/archived");
    }

    return <DetailPage id={id} onDelete={onDeleteHandler} onArchive={onArchiveHandler} onUnarchive={onUnarchiveHandler} />;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            note: getNote(props.id),
        };
        
    }

    render() {

        if (this.state.note === undefined) {
            return (
                <div>
                    <PageNotFound />
                </div>
            )
        }

        return (
            <div>
                <NoteDetail
                 {...this.state.note} 
                 onDelete={deleteNote} 
                 onArchive={archiveNote} 
                 onUnarchive={unarchiveNote} />
            </div>
        );
    }
}

export default DetailPageWrapper;