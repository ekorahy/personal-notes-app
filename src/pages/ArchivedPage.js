import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/main/NoteList";
import SearchBar from "../components/main/SearchBar";
import { deleteNote, getArchivedNotes } from "../utils/api";
import { RiArchiveDrawerLine } from "react-icons/ri";
import LocaleContext from "../contexts/LocaleContext";
import Loading from "react-fullscreen-loading";

function ArchivedPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || ""
  });
  const [isLoading, setIsLoading] = React.useState(true);
  const { theme, language } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
      setIsLoading(false);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id); 
    const { data } = await getArchivedNotes();
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
            <h2 className={`text-${theme}`}><RiArchiveDrawerLine /> {language === "id" ? "Catatan Terarsip" : "Archived Notes"}</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
          </div>
          {
            notes.length !== 0 ?
            <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
            : <div className="text-center my-4 text-danger">- {language === "id" ? "Tidak ada catatan" : "No notes"} -</div>
          }
        </div>
      }
    </>
  )
}

export default ArchivedPage;


