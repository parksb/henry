import $ from 'jquery';
import Mustache from 'mustache';
import App from './app/app';

const APP = new App();
const GLOBAL_MODULES = APP.getModules()[0];
const LOCAL_MODULES = APP.getModules()[1];

for (let i in GLOBAL_MODULES) {
  const TEMPLATE_PATH = `/theme/${APP.getTheme()}/global/${GLOBAL_MODULES[i]}.html`;

  $.get(TEMPLATE_PATH, (template) => {
    const RENDERED = Mustache.render(template, APP.getJsonData('../data/site.json'));

    $(`#${GLOBAL_MODULES[i]}`).html(RENDERED);
  });
}

for (let i in LOCAL_MODULES) {
  const TEMPLATE_PATH = `/theme/${APP.getTheme()}/${APP.getCurrLocation()}/${LOCAL_MODULES[i]}.html`;

  $.get(TEMPLATE_PATH, (template) => {
    const RENDERED = Mustache.render(template, APP.getJsonData('../data/site.json'));

    $(`#${LOCAL_MODULES[i]}`).html(RENDERED);
  });
}
