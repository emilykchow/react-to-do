import React, {useState} from "react";
import "./CreateArea.css";
import {Button} from "react-bootstrap";

 class CreateArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        };
    }
    //handlechange
    handleTitleChange(e) {
        this.setState({title: e.target.value});
    }

    handleContentChange(e) {
        this.setState({content: e.target.value});
    }

    submitNote(e){
        e.preventDefault();
        this.props.onNoteAdded({
            title: this.state.title,
            content: this.state.content
        });
        this.setState(() => {
            return {
                title: "",
                content: ""
            };
        });
    }
    

    render() {
        return (
            <div className="createArea-wrapper">
                <form>
                    <input className="create-title" value={this.state.title} placeholder="Enter A Title" onChange={this.handleTitleChange.bind(this)}/>
                    <textarea className="create-content" value={this.state.content} placeholder="Enter Content" onChange={this.handleContentChange.bind(this)}/>
                    <button className="btn btn-primary btn-lg btn-block" type="button" onClick={this.submitNote.bind(this)}>Add</button>
                </form>
            </div>
        );
    }
};

export default CreateArea;