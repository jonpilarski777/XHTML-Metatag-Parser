import React, {useState} from 'react';
import TextField from '@mui/material/TextField'

function HtmlInputBox() {

  //Using dot notation to handle colon in key names

  const [htmlTextSnippet, setHtmlTextSnippet] = useState({})

  // const [metaTagProperties, setMetaTagProperties] = useState({
  //   ['dcterms:conformsTo']:'',
  //   ['a11y:certifiedBy']: '',
  //   ['a11y:certifierCredential']: '',
  //   ['a11y:certifierReport']: '',
  // })
  // setMetaTagProperties({...metaTagProperties, [e.target.name]:[e.target.value]})
  
  console.log(htmlTextSnippet)

  function handleChange(e) {

    setHtmlTextSnippet({...htmlTextSnippet, [e.target.name]:[e.target.value]})
  
  }
 
  // // function handleSubmit (e) {
  // //   e.preventDefault()
  // //   if (metaTagProperties) {
  // //     console.log(metaTagProperties)
  // //   }
  // // }

  // function extractProperties(e) {

  // }

  return (
    <form autoComplete="off">
      <TextField 
      label ="Paste your sample text in this box" 
      multiline 
      helperText = "Paste your sample HTML sample inside of this box"
      minRows={9} 
      maxRows={Infinity}
      onChange={handleChange}
      />
    </form>
  )
}

export default HtmlInputBox;