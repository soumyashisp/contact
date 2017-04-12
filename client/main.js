
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import board from '../imports/components/board/board';

import '../imports/api/commentsdb.js';
import '../imports/startup/accounts-config.js';



Router.route('/', function () {
  //this.render(	);
});

//........................................ROUTES..................................








//...................................................................................
angular.module('simple-discuss', [

  angularMeteor,

 	board.name,
 	'accounts.ui'
]);




