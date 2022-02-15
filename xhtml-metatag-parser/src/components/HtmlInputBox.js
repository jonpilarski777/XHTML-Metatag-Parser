import React from 'react';
import {TextField} from '@material-ui/core';

function HtmlInputBox() {
  return (
    <div>
      <TextField placeholder="Paste your HTML sample here to parse metatag properties" multiline rows={9} maxRows={Infinity}/>

    </div>
  )
}

export default HtmlInputBox;