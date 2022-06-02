import React from "react";
import {AiOutlineDelete} from 'react-icons/ai'
import {BiPencil} from 'react-icons/bi'

export default function ShowNotes({data}){
    return data.map(el =>{
        return (
          <div className="blockExample" key={ Math.floor(Math.random() * 100)}>
            <h4 className="noteTitle">{el.title}<span className="icons"><AiOutlineDelete className="icon"/><BiPencil className="icon"/></span></h4>
          </div>
        )
      })
}
