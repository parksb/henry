import $ from 'jquery';
import 'markdown-it';
import 'toMark';
import 'codemirror';
import 'squire-rte';

import Editor from 'tui-editor';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';

let editor = new Editor({
  el: document.querySelector('#editor'),
  initialEditType: 'markdown',
  previewStyle: 'vertical',
  height: '700px'
});

$('#editor-form').submit((e) => {
  e.preventDefault();
  console.log(editor.getHtml());
  console.log(editor.getValue());
});
