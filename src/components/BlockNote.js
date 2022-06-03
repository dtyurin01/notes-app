import {AiOutlinePlus} from 'react-icons/ai'
import {RiDeleteBin2Line} from 'react-icons/ri'
import ShowNotes from "./ShowNotes";
function BlockNote({createNewNote, data, deleteNote, notesLength, deleteAll}){
    
    return(
        <div className="listOfNotes">
            <div className="createNewNote"><h4>Create New Note </h4>{notesLength > 0 ? <span className='btn-delete' onClick={deleteAll}><RiDeleteBin2Line/></span> : null} <span className="btnCreate" onClick={() => createNewNote()}><AiOutlinePlus/></span></div>
            <ShowNotes deleteNote={deleteNote} data={data}/>
        </div>
    )
}
export default BlockNote