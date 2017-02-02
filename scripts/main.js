var myApp = angular.module("myApp", []);

myApp.controller('AppController', ['$scope', function($scope){
  $scope.profile = [
    {id: 0, name: "Andrew", memberFor: "7 months", lastSeen: "today", activityLevel: 2, peers: 7, discussions: 21, findings: 17, questions: 12},
    {id: 1, name: "Paul", memberFor: "3 months", lastSeen: "3 days ago", activityLevel: 2, peers: 3, discussions: 13, findings: 20, questions: 1},
    {id: 2, name: "Michelle", memberFor: "12 months", lastSeen: "yesterday", activityLevel: 3, peers: 12, discussions: 11, findings: 14, questions: 14},
    {id: 3, name: "Robert", memberFor: "5 months", lastSeen: "2 weeks ago", activityLevel: 1, peers: 4, discussions: 9, findings: 11, questions: 6}
  ];

  $scope.questions = [
    {id: 0, author: 2, title: "Will insulin make my patient gain weight?", related: 2, peers: 7, conversations: 4, rating: 16},
    {id: 1, author: 1, title: "Vegan diet in diabetes treatment?", related: 1, peers: 4, conversations: 3, rating: 10},
    {id: 2, author: 3, title: "Vegan diet to stop diabetes progress", related: 2, peers: 3, conversations: 2, rating: 8},
    {id: 3, author: 2, title: "Questioning the idea of Good Carbs, Bad Carbs", related: 2, peers: 5, conversations: 5, rating: 11}
  ];

  $scope.question = "Lorem ipsum dolor sit amet, duo an dicant facilis, per elitr mollis ad. Sumo contentiones ius id, doming quaeque vel ut. Solet gloriatur consetetur nam eu, an per aperiam lobortis theophrastus, cu per mucius volumus. Sea an facilisi delicatissimi, omnis inani consectetuer cum cu. Ius ferri copiosae ne, case efficiendi nam at. Mea at iuvaret constituto. \n\nUt vis mazim utinam dissentiunt, et his novum everti, in sit dico natum. Nam semper maiestatis id, ne eum nisl mnesarchum. An iudico splendide quo. Sed sanctus epicuri patrioque in.";


  $scope.comments = [
    {id: 0, author: 2, timeCreated: "yesterday", questionParent: 0, rating: 10, commentParent: -1, answered: false},
    {id: 1, author: 3, timeCreated: "2 days ago", questionParent: 0, rating: 6, commentParent: -1, answered: false},
    {id: 2, author: 3, timeCreated: "yesterday", questionParent: 1, rating: 8, commentParent: -1, answered: false},
    {id: 3, author: 1, timeCreated: "yesterday", questionParent: 1, rating: -4, commentParent: -1, answered: true},
    {id: 4, author: 1, timeCreated: "5 days ago", questionParent: 2, rating: 1, commentParent: -1, answered: false},
    {id: 5, author: 0, timeCreated: "3 days ago", questionParent: 2, rating: -7, commentParent: -1, answered: false},
    {id: 6, author: 0, timeCreated: "today", questionParent: 2, rating: 3, commentParent: 5, answered: true},
    {id: 7, author: 0, timeCreated: "today", questionParent: 3, rating: 5, commentParent: -1, answered: true},
    {id: 8, author: 0, timeCreated: "today", questionParent: 0, rating: 7, commentParent: -1, answered: false},
    {id: 9, author: 0, timeCreated: "today", questionParent: 0, rating: 8, commentParent: -1, answered: true},
    {id: 10, author: 0, timeCreated: "today", questionParent: 0, rating: 1, commentParent: -1, answered: false}
  ];

  $scope.comment = "Elit rebum melius id mei. Usu legendos tincidunt in, sea dictas reformidans eu. Duis libris doctus in ius. Appareat salutatus molestiae an has, errem docendi cu mea, facilisi persecuti cum ex.";

  $scope.quantity = 3;

  $scope.showMore = function(){
    $scope.quantity += 2;
  }

  $scope.qstnComments = new Array();

  $scope.getComments = function(questionId) {

    $scope.qstnComments = new Array();
    var i;
    for(i = 0; i < $scope.comments.length; i++) {
      if (questionId === $scope.comments[i].questionParent) {
        $scope.qstnComments.push($scope.comments[i]);
      }
    }
  }


}]);
