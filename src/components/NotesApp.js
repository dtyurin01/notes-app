import React from "react";
import BlockNote from "./BlockNote";

function NotesApp({createNewNote, data}) {
    return(
        <div className="noteBlock">
            <BlockNote createNewNote={createNewNote} data={data}/>
            <div className="main">
                <div className="controlPanel">Control Panel</div>
                
                <div className="Content">Content here</div>
            </div>
        </div>
    )
}
export default NotesApp