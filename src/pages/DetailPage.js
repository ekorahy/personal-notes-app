import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/main/NoteDetail";
import { 
    getNote, 
    deleteNote, 
    archiveNote, 
    unarchiveNote, 
} from "../utils/api";
import PageNotFound from "./Error404";
import Loading from "react-fullscreen-loading";
import LocaleContext from "../contexts/LocaleContext";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const { theme } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setIsLoading(false);
    })
  }, [id]);

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

  return (
    <>
      {
        (() => {
          if (isLoading) {
            return <Loading loading={true} background={theme === "dark" ? "#fff" : "#212529"} loaderColor="#0dcaf0" />;
          }

          if (note === null) {
            return (
              <div>
                <PageNotFound />;
              </div>
            )
          }

          return (
            <div>
              <NoteDetail
               {...note}
               onDelete={onDeleteHandler} 
               onArchive={onArchiveHandler} 
               onUnarchive={onUnarchiveHandler} />
            </div>
          )
        })()   
      }  
    </>
  )
}

export default DetailPage;
