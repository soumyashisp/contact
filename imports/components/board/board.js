import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './board.html';
import { Comments } from '../../api/commentsdb.js';

class BoardCtrl   
{       
  constructor($scope) 
  {
        $scope.viewModel(this);
        this.helpers(
        {
            commentsdb() {
            return Comments.find({},{sort:{createdAt:-1}});
          }
        })
  }

  addComment(newComment) 
  {     if(newComment!="")
        Comments.insert({text: newComment,createdAt: new Date,
      owner: Meteor.userId(),
      emailid: Meteor.user().emails[0].address});
      this.newComment = '';
  }

  setChecked(comment) 
  {
        Comments.update(comment._id, { $set: {checked: !comment.checked }});
  }

  removeComment(comment) 
  {
        Comments.remove(comment._id);
  }
  nowUser() {
        return Meteor.user();
      }
  
}
 

export default angular.module('board', [

  angularMeteor

]).component('board', {

    templateUrl: 'imports/components/board/board.html',

    controller: ['$scope',BoardCtrl]

  });

