import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = React.useState(false);

  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  function AddingNote(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={AddingNote}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onClick={expand}
          onChange={AddingNote}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              props.onAdd(note);
              setNote({ title: "", content: "" });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
