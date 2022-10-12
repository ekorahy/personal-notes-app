import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/main/NoteList";
import SearchBar from "../components/main/SearchBar";
import { CgNotes } from "react-icons/cg";
import ButtonLink from "../components/main/ButtonLink";
import { MdAdd } from "react-icons/md";
import PropTypes from "prop-types";
import { deleteNote, getActiveNotes } from '../utils/network-data';
import { ThemeConsumer } from '../contexts/ThemeContext';

function NotesPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get("keyword");

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <NotesPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class NotesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            keyword: props.defaultKeyword || "",
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getActiveNotes();

        this.setState(() => {
            return {
                notes: data,
            }
        })
    }

    async onDeleteHandler(id) {
        await deleteNote(id); 

        const { data } = await getActiveNotes();
        this.setState(() => {
            return {
                notes: data,
            }
        });
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
            <ThemeConsumer>
                {({ theme, language }) => {
                    return (
                        <div className="container" style={{marginTop: "140px"}}>
                            <div style={{marginLeft: "20px", paddingRight: "20px"}}>
                                <h2 className={`text-${theme}`}><CgNotes /> {language === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
                                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                            </div>
                            {
                                this.state.notes.length !== 0 ?
                                <NoteList props={this.state.notes.length} notes={notes} onDelete={this.onDeleteHandler} />
                                : <div className="text-center my-4 text-danger">- {language === 'id' ? 'Tidak ada catatan' : 'No notes'} -</div>
                            }
                            <ButtonLink 
                            link={"/add"}
                            className="btn btn-info floating-button-right p-3 mx-2 text-white fw-400" 
                            icon={<MdAdd style={{fontSize: "24px"}} />} 
                            title={language === 'id' ? 'Tambah catatan baru' : 'Add new note'} />
                        </div>
                    )
                }}
            </ThemeConsumer>
        );
    }
}

NotesPageWrapper.propTypes = {
    changeSearchParams: PropTypes.func,
}

NotesPage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
}

export default NotesPageWrapper;