

newTask_Controller = RouteController.extend({
    onBeforeAction: function () {
      Session.set('createTaskButtonLable', 'Add New Task');
      Session.set('createNewTask', true);
      this.next();
    },
  data: function () {
    return {
      currentTask: function  () {
      return NewTask. find();
      }, 
    }
  },
  action: function () {
    this.render();
  },
});