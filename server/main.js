import { Mongo } from 'meteor/mongo';

import { Meteor } from 'meteor/meteor';

export const Comments = new Mongo.Collection('commentsdb');

Meteor.startup(() => {
  // code to run on server at startup
});




Router.route('/',function(){

this.render('main');
});
