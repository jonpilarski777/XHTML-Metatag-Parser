import React, {useState} from 'react';
import TextField from '@mui/material/TextField'

function HtmlInputBox() {

const [metaTagProperties, setMetaTagProperties] = useState({
  conformsTo:'',
  certifiedBy: '',
  certifierCredential: '',
  certifierReport: '',
})


console.log(metaTagProperties)


  return (
    <div>
      <TextField 
      placeholder="Paste your HTML sample text in this box" 
      multiline 
      rows={9} 
      maxRows={Infinity}/>
    </div>
  )
}

export default HtmlInputBox;