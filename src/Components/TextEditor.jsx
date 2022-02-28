import React, { Component,useContext } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { FormContext } from './FormContext';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class TextEditor extends Component {
  // const [form,setForm] = useContext(FormContext);
  
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div style={{backgroundColor:'wheat',padding:'2px'}}>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}