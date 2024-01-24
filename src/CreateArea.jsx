import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
  
  const [isTyping, setTyping] = useState(false);
  const [textRows, setRows] = useState("1");

  function handleFocus() {
    setTyping(true);
    setRows("3");
  }

  return (
    <div>
      <form className="create-note">
        <input 
        onChange={(event) => { props.change(event) }} 
        name="title" 
        placeholder="Title" 
        value={props.title} 
        style={{display: isTyping ? "block" : "none"}} 
        />
        <textarea 
        onChange={(event) => { props.change(event) }} 
        name="content" 
        placeholder="Take a note..." 
        value={props.content} 
        rows={textRows}
        onFocus={handleFocus} 
        />

        {isTyping && <Zoom in={true}>
          <Fab onClick={(event) => { props.add(event) }}>
            <AddIcon />
          </Fab>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
