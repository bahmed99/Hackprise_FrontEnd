import React, { Component, useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, onEditorStateChange } from "draft-js";
import './BlogEditor.css'
import Button from 'react-bootstrap/Button'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ReactQuill  from 'react-quill'

import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';



export default function BlogEditor() {

  const [content, setContent] = useState("")
  const [article, setArticle] = useState("")
  const [title, setTitle] = useState("")
  const [writer, setWriter] = useState("")
  const [image, setImage] = useState(null)
  const [alert, setAlert] = useState("")
  const [txt, setTxt] = useState("")
  const [loading, setLoading] = useState(false)
  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#1f212d',
    },
  }));
  const classes = useStyles();
  const [openSuccesAlert, setOpenSuccesAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  //SuccesAlert Handler
  const handleClickSuccesAlert = () => {
    setOpenSuccesAlert(true);
  };

  const handleCloseSuccesAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccesAlert(false);
  };
  //ErrorAlert Handler
  const handleClickErrorAlert = () => {
    setOpenErrorAlert(true);
  };

  const handleCloseErrorAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenErrorAlert(false);
  };

  //BlogEditor Content Handler
  function handleContentChange(e) {


    // const blocks = convertToRaw(e.getCurrentContent()).blocks;
    // const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
  
    setContent(e)
    setArticle(e)
    setTxt(e.replace(/<[^>]+>/g, ' '))


  }
  //Title Handler
  function handleTitleChange(e) {
    setTitle(e.target.value)

  }
  //Writer Handler
  function handleWriterChange(e) {
    setWriter(e.target.value)

  }
  //Image Handler
  function handleImage(e) {
    let file = e.target.files[0]
    setImage(file)
  }
  const handleClose = () => {
    setLoading(false);
  };
  //Blog Submit Handler
  function handleSubmit() {
    let dataform = new FormData()
    dataform.append('title', title)
    dataform.append('content', article)
    dataform.append('image', image)
    dataform.append('writer', writer)
    dataform.append('txt', txt)


    setLoading(true)
    axios.post(
     'https://back.hackprise.com/blogs',
      
     dataform
    ).then(response => {

      setLoading(false)
      handleClickSuccesAlert();
      setTimeout(() => {
        window.location.reload();
      }, 8000);
    })


      .catch(error => {

        handleClickErrorAlert();
        setLoading(false)

      }
      )


  }



  return (
    <div className='editor_page'>
      <h2 className="blogtitle"> Title: </h2>
      <input type="text" name="title" className="titleinput" value={title} onChange={handleTitleChange} />
      <h2 className="blogtitle"> Content: </h2>
      <div className="editor">
        {/* <Editor
        editorState={content}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={handleContentChange}
      /> */}
        <ReactQuill value={content}
          onChange={handleContentChange} />
      </div>
      <div>
        <label className="blogtitle"> Blog image:  </label>
        <input className="imageupload" type="file" onChange={handleImage} />


      </div>
      <h2 className="blogtitle"> Written by: </h2>
      <input type="text" name="writer" className="titleinput" value={writer} onChange={handleWriterChange} />
      <br />

      <Button variant="primary" style={{ backgroundColor: '#2ea3dd', marginTop: '5%', marginLeft: '40%', width: '20%' }} onClick={handleSubmit} > Add Blog </Button>
      <Backdrop className={classes.backdrop} open={loading} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar open={openSuccesAlert} autoHideDuration={1000} onClose={handleCloseSuccesAlert}>
        <Alert onClose={handleCloseSuccesAlert} severity='success'>
          Blog has been added successfully !
        </Alert>
      </Snackbar>
      <Snackbar open={openErrorAlert} autoHideDuration={5000} onClose={handleCloseErrorAlert}>
        <Alert onClose={handleCloseErrorAlert} severity='error'>
          There was an error adding blog, please try again !
        </Alert>
      </Snackbar>

    </div>
  );
}