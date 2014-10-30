
//Current Page

curPath=function(){var c=window.location.pathname;var b=c.slice(0,-1);var a=c.slice(-1);if(b==""){return"/"}else{if(a=="/"){return b}else{return c}}};

Template.registerHelper('active', function (path) {
  return curPath() == path ? 'active' : '';
});