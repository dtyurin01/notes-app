import React, {useEffect} from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import ShowNotes from "./ShowNotes";
function BlockNote({createNewNote, data}){

    return(
        <div className="listOfNotes">
            <div className="createNewNote"><h4>Create New Note </h4> <span className="btnCreate" onClick={() => createNewNote()}><AiOutlinePlus/></span></div>
            <ShowNotes data={data}/>
        </div>
    )
}
export default BlockNote