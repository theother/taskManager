
Template.newTaskForm.rendered = function () {
  // Rating ui render on template load
  $('.ui.rating').rating();
};
//If new task added it re-render the stars
Tracker.autorun(function () {
  if (NewTask.find().count()) {
    $('.ui.rating').rating();
  };
})



TempCheckpoint = new Mongo.Collection(null);
Session.set('deleteCheckPoint', false);
Session.set('deleteCheckPointData', '');



Template.newTaskForm.helpers({
  emptyCheckPointList: function () {
    if (TempCheckpoint.find().count() === 0) {
      return true;
    };
  },
  checkpoint: function () {
    return TempCheckpoint.find();
  },
  deleteCheckPoint: function () {
    return Session.get('deleteCheckPoint');
  },
  deleteCheckPointName: function () {
    return Session.get('deleteCheckPointData');
  }
});

Template.newTaskForm.events({
  'submit form#checkPointForm': function (e) {
    e.preventDefault();
    //Grab newCheckPoint Value
    var newCheckpoint = $('[name="checkPoint"]').val();
    //Insert val into temp collection
    TempCheckpoint.insert({name: newCheckpoint, completed: false});
    //Reset value to ''
    $('[name="checkPoint"]').val('');
    //Change placeholder
    $('[name="checkPoint"]').attr("placeholder", "Add Another Checkpoint");
  },
  //Trash a checkpoint
  'click #trashCheckpoint': function (e) {
    e.preventDefault();
    //Grab the name and id
    var name = this.name;
    var id = this._id;
    var completed = false;
    //Set session with the the data that is needed to be refered
    //latter to confirm and ten remove
    Session.set('deleteCheckPointData', {name: name, id: id});
    //Show worring alter to confirm
    Session.set('deleteCheckPoint', true);
  },
  'click #cancle_deleteCheckPoint': function (e) {
    e.preventDefault();
    //If cancled the alter will be hidden
    Session.set('deleteCheckPoint', false);
  },
  'click #confirm_deleteCheckPoint': function (e) {
    e.preventDefault();
    //If click yes the checkpoin will be removed
    var id = Session.get('deleteCheckPointData');
    TempCheckpoint.remove({_id: id.id}, function () {
      return Session.set('deleteCheckPoint', false);
    });
  },
  'click #saveTask': function (e) {
    e.preventDefault();

    var name= $('[name="taskName"]').val();
    var desctiption = $('[name="taskDescription"]').val();
    //Inserting as an array -- fix
    var checkpoints = TempCheckpoint.find().fetch();

    //Gets rating
    var priority = $('.ui.rating').rating('get rating');
    //Takes rating array and returns a single value
    function priorityFinder (priority) {
      if (NewTask.find().count() === 0) {
        return priority;
      }else{
        return _.first(priority);
      }
    }
    //Varible for taskData
    var starCount = priorityFinder(priority);



    var taskData = {
      taskName: name,
      taskDescription: desctiption ,
      priority: starCount,
      checkPoints: checkpoints
    };
    NewTask.insert(taskData);
  }

});