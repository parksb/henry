import $ from 'jquery';
import Mustache from 'mustache';
import App from './app/app';

const APP = new App();
const GLOBAL_COMPONENTS = APP.getModules()[0];
const LOCAL_COMPONENTS = APP.getModules()[1];

for (let i in GLOBAL_COMPONENTS) {
  const TEMPLATE_PATH = `/components/global/${GLOBAL_COMPONENTS[i]}.html`;

  $.get(TEMPLATE_PATH, (template) => {
    const RENDERED = Mustache.render(template, APP.getJsonData('../data/site.json'));

    $(`#${GLOBAL_COMPONENTS[i]}`).html(RENDERED);
  });
}

for (let i in LOCAL_COMPONENTS) {
  const TEMPLATE_PATH = `/components/${APP.getCurrLocation()}/${LOCAL_COMPONENTS[i]}.html`;

  $.get(TEMPLATE_PATH, (template) => {
    const RENDERED = Mustache.render(template, APP.getJsonData('../data/site.json'));

    $(`#${LOCAL_COMPONENTS[i]}`).html(RENDERED);
  });
}
