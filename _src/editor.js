UEDITOR_CONFIG = window.UEDITOR_CONFIG || {};

var baidu = window.baidu || {};

window.baidu = baidu;

window.UE = baidu.editor = {
  plugins: {},
  commands: {},
  instants: {},
  I18N: {},
  _customizeUI: {},
  version: "2.6.0",
  listIcons: window.UE ? window.UE.listIcons : {},
};
var dom = (UE.dom = {});
