import { useEffect, useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (note.title.trim() === "" || note.content.trim() === ""){
      setDisabled(true);
    }
    else{
      setDisabled(false);
    }
  }, [note.title, note.content])

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">

        {isExpanded && 
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        }

        <textarea
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
      <Zoom in={isExpanded}>
        <Fab onClick={submitNote} disabled={disabled}>
        <AddIcon />
        </Fab>
      </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
