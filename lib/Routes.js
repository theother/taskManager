Router.configure({
  layoutTemplate: 'homeLayout',
  // loadingTemplate: 'Loading',
  // notFoundTempalte ':notFound',
});

Router.route('/', {
  name: 'home.link',
  controller: 'home_Controller'
});

// Router.route('/', {
//   name: 'home.link',
//   controller: 'indvProject_Controller'
// });

Router.route('/newTask', {
  name: 'newTask.link',
  layoutTemplate: 'taskLayout',
  template: 'new_Task',
  controller: 'newTask_Controller'
});