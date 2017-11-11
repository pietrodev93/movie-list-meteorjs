import { Template } from 'meteor/templating';
import { Movies } from '../lib/collenctions.js';
import './main.html';



Template.body.helpers({
  
movies(){
    return Movies.find({});
  }


});



Template.add.events({
  'submit .add-form': function(){
      event.preventDefault();

      // Get input value
      const target = event.target;
      const text = target.text.value;
      const cat = target.cat.value;
      const price = target.price.value;
      const year = target.year.value;
      

      // insert note into Collection
      Movies.insert({
        text,
        cat,
        price,
        year,
        createAt: new Date(),  
      });

      // Clear form
      target.text.value = '';

      // Close modal

      $('#addModal').modal('close');

      return false;
  }
  
});

Template.movie.events({
  'click .delete-note':function(){
    Movies.remove(this._id);
    return false;
  }
});
