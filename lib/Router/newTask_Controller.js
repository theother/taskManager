

newTask_Controller = RouteController.extend({
    onRun: function () {
      //Renders stars upon loading template
      // console.log('ran');
      // $('.ui.rating').rating();
      // this.next();
    },
    onBeforeAction: function () {
      Session.set('createTaskButtonLable', 'Add New Task');
      //Session open and closed the 'add task' input form
      Session.set('createNewTask', false);
      this.next();
    },
  data: function () {
    return {
      currentTask: function  () {
      return NewTask.find();
      },
    }
  },
  action: function () {
    this.render();
  },
});


newTask_Controller.rendered = function () {
  console.log('test');
}