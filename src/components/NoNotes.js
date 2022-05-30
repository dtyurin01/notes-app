import React from "react";

export default function NoNotes(props){
    function handleClick(){
        return null
    }
    return(
    <div className="noNotes">
        <h2>There are no notes</h2>
        <button class="style-1">Create one ⚡</button>
    </div>
    )
}