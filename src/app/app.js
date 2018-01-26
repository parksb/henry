import $ from 'jquery';

export default class App {
  // Parse JSON data form the path.
  getJsonData(path) {
    const DATA = JSON.parse($.ajax({
      url: path,
      dataType: 'JSON',
      async: false
    }).responseText);

    return DATA;
  }

  getTheme() {
    const SITE = this.getJsonData('/data/site.json');
    return SITE.site.theme;
  }

  // Get current location from the url path.
  getCurrLocation() {
    let path = window.location.pathname.split('/');

    const CURR_LOCA_IDX = path.length - 1;
    const FILE = path[CURR_LOCA_IDX].split('.'); // [0]: name, [1]: format

    if (FILE[0] === '') {
      FILE[0] = 'index';
    }

    return FILE[0];
  }

  getModules() {
    const STRUCTURE = this.getJsonData(`/theme/${this.getTheme()}/structure.json`);
    const CURR_LOCA = this.getCurrLocation();

    const GLOBAL_MODULES = STRUCTURE.global;
    const LOCAL_MODULES = STRUCTURE[CURR_LOCA];
    
    return [GLOBAL_MODULES, LOCAL_MODULES];
  }
}
