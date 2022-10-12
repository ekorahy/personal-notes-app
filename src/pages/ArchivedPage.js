import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/main/NoteList";
import SearchBar from "../components/main/SearchBar";
import { deleteNote, getArchivedNotes } from "../utils/network-data";
import { RiArchiveDrawerLine } from "react-icons/ri";
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../contexts/ThemeContext';

function ArchivedPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get("keyword");

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <ArchivedPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ArchivedPage extends React.Component {
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
        const { data } = await getArchivedNotes();

        this.setState(() => {
            return {
                notes: data,
            }
        })
    }

    async onDeleteHandler(id) {
        await deleteNote(id); 

        this.setState(() => {
            return {
                notes: getArchivedNotes(),
            }
        })
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
                                <h2 className={`text-${theme}`}><RiArchiveDrawerLine /> {language === 'id' ? 'Catatan Arsip' : 'Archive Notes'}</h2>
                                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                            </div>
                            {
                                this.state.notes.length !== 0 ?
                                <NoteList props={this.state.notes.length} notes={notes} onDelete={this.onDeleteHandler} />
                                : <div className="text-center my-4 text-danger">- {language === 'id' ? 'Tidak ada catatan' : 'No notes'} -</div>
                            }
                        </div>
                    )
                }}
            </ThemeConsumer>
        );
    }
}

ArchivedPageWrapper.propTypes = {
    changeSearchParams: PropTypes.func,
}

ArchivedPage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
}

export default ArchivedPageWrapper;