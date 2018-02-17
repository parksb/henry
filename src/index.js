import $ from 'jquery';
import Mustache from 'mustache';
import App from './app';

const APP = new App();

const PAGES_PATH = '/pages.json';
const TEMPLATE_PATH = `/components/index/main-container.html`;

$.get(TEMPLATE_PATH, (template) => {
  const RENDERED = Mustache.render(template, APP.getJsonData(PAGES_PATH));

  $('#main-container').html(RENDERED);
});
