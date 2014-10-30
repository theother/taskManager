

newTask_Controller = RouteController.extend({
    onRun: function () {
      this.next()
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