import React, {useState} from "react";

export default function ControlPanel(){
    const [mode, setMode] = useState('write')
    return(
        <div className="controlPanel">
            <div className="changeMode">
                <span className="mode writeMode">Write</span>
                <span className="mode previewMode">Preview</span>
            </div>
        </div>
    )
}