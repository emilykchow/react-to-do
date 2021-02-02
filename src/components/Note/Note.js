import React from "react";
import { Buttons, Cards } from "react-bootstrap";

import "./Note.css";

function Note(props){
    return(
        <div className="note-wrapper">
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <hr />
                    <p className="card-text">{props.content}</p>
                    <button type="button" class="btn btn-primary btn-sm" onClick={() => props.onDelete(props.id)}>Delete</button>
                </div>
            </div> 
        </div>
    )
};

export default Note;