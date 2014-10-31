
home_Controller = RouteController.extend({
      onRun: function () {
      this.next()
    },
  onBeforeAction: function () {
      Session.set('createProjectButtonLable', 'Add New Project');
      //Session open and closed the 'add task' input form
      Session.set('createNewProject', false);
      this.next();
    },
  data: function  () {
    return {
      createNewProjectForm: function  () {
        return Session.get('createNewProject');
      }
    }
  },
  action: function () {
    this.render();
  },
});


home_Controller.events({
  'click #createNewProject': function () {
    Session.set('createNewProject', true);
  },
  'click #cancleProject': function () {
    Session.set('createNewProject', false);
  },
  'submit form': function (e) {
    console.log(e);
    //e.preventDefault();
    console.log('test');
  },
});