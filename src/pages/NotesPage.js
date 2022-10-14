import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/main/NoteList";
import SearchBar from "../components/main/SearchBar";
import { CgNotes } from "react-icons/cg";
import ButtonLink from "../components/main/ButtonLink";
import { MdAdd } from "react-icons/md";
import { deleteNote, getActiveNotes } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";
import Loading from "react-fullscreen-loading";

function NotesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || ""
  });
  const [isLoading, setIsLoading] = React.useState(true);
  const { theme, language } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
      setIsLoading(false);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id); 
    const { data } = await getActiveNotes();
    setNotes(data);
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams(keyword);
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
        keyword.toLowerCase()
    );
  });

  return (
    <>
      {
        isLoading ? <Loading loading={true} background={theme === "dark" ? "#fff" : "#212529"} loaderColor="#0dcaf0" /> :
        <div className="container" style={{marginTop: "90px"}}>
          <div style={{marginLeft: "20px", paddingRight: "20px"}}>
            <h2 className={`text-${theme}`}><CgNotes /> {language === "id" ? "Catatan Aktif" : "Active Notes"}</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
          </div>
          {
            notes.length !== 0 ? <NoteList notes={filteredNotes} onDelete={onDeleteHandler} /> : 
            <div className="text-center my-4 text-danger">- {language === "id" ? "Tidak ada catatan" : "No notes"} -</div>
          }
            <ButtonLink 
             link={"/add"}
             className="btn btn-info floating-button-right p-3 mx-2 text-white fw-400" 
             icon={<MdAdd style={{fontSize: "24px"}} />} 
             title={language === "id" ? "Tambah catatan baru" : "Add new note"} />
        </div>
      }
    </>
  )
}

export default NotesPage;
