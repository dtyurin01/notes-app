import React, {useState} from "react";

export default function NoNotes({data}){
    const [listOfNotes, setlistOfNotes] = useState(data)
    console.log(listOfNotes);
    function handleClick(){
        return setlistOfNotes(prevNote =>{
            console.log(prevNote);
        })
    }
    return(
    <div className="container-center">
        <div className="noNotes">
            <h2>There are no notes</h2>
            <button className="style-1" onClick={handleClick}>Create one ⚡</button>
        </div>
    </div>

    )
}