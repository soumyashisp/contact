import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './board.html';




export default angular.module('board', [

  angularMeteor

]).component('board', {

    templateUrl: 'imports/components/board/board.html',

    controller: ['$scope',BoardCtrl]

  });
