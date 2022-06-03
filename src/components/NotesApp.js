import React from "react";
import BlockNote from "./BlockNote";
import ControlPanel from "./ControlPanel";

function NotesApp({createNewNote, data, deleteNote, notesLength, deleteAll}) {
    return(
        <div className="noteBlock">
            <BlockNote createNewNote={createNewNote} data={data} deleteNote={deleteNote} notesLength={notesLength} deleteAll={deleteAll}/>
            <div className="main">
                <ControlPanel/>
                
                <div className="Content">Content here</div>
            </div>
        </div>
    )
}
export default NotesApp