import $ from 'jquery';
import Mustache from 'mustache';
import uri from 'urijs';
import App from './app';

const APP = new App();

const URI_DATA = uri().query(true);
const ID = URI_DATA['i'];

const data = JSON.parse($.ajax({
  url: 'pages.json',
  dataType: 'JSON',
  async: false
}).responseText);

const page = data.pages[ID];
const TEMPLATE_PATH = `/components/page/main-container.html`;

$.get(TEMPLATE_PATH, (template) => {
  const RENDERED = Mustache.render(template, page);

  $('#main-container').html(RENDERED);
});
