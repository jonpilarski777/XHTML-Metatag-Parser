import React from 'react';
import TextField from '@mui/material/TextField'


//<Textareasize> component could also have been used but textfield produced 
function HtmlInputBox() {


  return (
    <div>
      <TextField placeholder="Paste your HTML sample text in this box" multiline rows={9} maxRows={Infinity}/>
    </div>
  )
}

export default HtmlInputBox;