import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form className="create-note">
        <input onChange={(event) => {props.change(event)}} name="title" placeholder="Title" value={props.title} />
        <textarea onChange={(event) => {props.change(event)}} name="content" placeholder="Take a note..." value={props.content} rows="3" />
        <button onClick={(event) => {props.add(event)}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
