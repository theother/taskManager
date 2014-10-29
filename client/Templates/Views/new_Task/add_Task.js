
Template.add_Task.rendered = function () {
  // $('.ui.selection.dropdown').dropdown();

};


Template.add_Task.helpers({
  testRec: function () {
    return Session.get('createTaskButtonLable');
  },
  createNewTask: function () {
    return Session.get('createNewTask');
  }
});

Template.add_Task.events({
  'click #newTask': function () {
    Session.set('createTaskButtonLable', 'Currently Creating Task');
    return Session.set('createNewTask', true);
  }
});



Template.newTaskForm.events({
  'click #createTask': function () {
    var newTaskProperties = {type: 'newTask'};
    $.each($('#myform').serializeArray(), function() {
        newTaskProperties[this.name] = this.value;
    });
    console.log(newTaskProperties)
    NewTask.insert(newTaskProperties);
    return Session.set('createNewTask', false);
  }
});