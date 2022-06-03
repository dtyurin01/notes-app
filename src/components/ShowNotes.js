import React from "react";
import {AiOutlineDelete} from 'react-icons/ai'
import {BiPencil} from 'react-icons/bi'

export default function ShowNotes({data, deleteNote}){
    function getIdAndRemove(e) {
      const id = e.target.getAttribute('value')
      deleteNote(id)
    }
    return data.map(el =>{
        return (
          <div className="divNotes">
            <h4 className="noteTitle" onClick={getIdAndRemove} value={el.id} key={el.id}>{el.title}<span className="icons"><AiOutlineDelete value={el.id}className="icon"/></span></h4>
          </div>
        )
      })
}
