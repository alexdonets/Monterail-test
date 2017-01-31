var myApp = angular.module("myApp", []);

myApp.controller('AppController', ['$scope', function(){
  $scope.profile = [
    {id: 1, name: "Andrew", memberFor: "7 months", lastSeen: "today", activityLevel: 2, peers: 7, discussions: 21, findings: 17, questions: 12},
    {id: 2, name: "Paul", memberFor: "3 months", lastSeen: "3 days ago", activityLevel: 2, peers: 3, discussions: 13, findings: 20, questions: 1},
    {id: 3, name: "Michelle", memberFor: "12 months", lastSeen: "yesterday", activityLevel: 3, peers: 12, discussions: 11, findings: 14, questions: 14},
    {id: 4, name: "Robert", memberFor: "5 months", lastSeen: "2 weeks ago", activityLevel: 1, peers: 4, discussions: 9, findings: 11, questions: 6}
  ];

  $scope.question = [
    {id: 1, author: 2, title: "Will insulin make my patient gain weight?", related: 2, peers: 7, conversations: 4, rating: 16},
    {id: 2, author: 2, title: "Vegan diet in diabetes treatment?", related: 1, peers: 4, conversations: 3, rating: 10},
    {id: 3, author: 3, title: "Vegan diet to stop diabetes progress", related: 2, peers: 3, conversations: 2, rating: 8},
    {id: 4, author: 1, title: "Questioning the idea of Good Carbs, Bad Carbs", related: 2, peers: 5, conversations: 5, rating: 11}
  ];

  $scope.question = "Lorem ipsum dolor sit amet, duo an dicant facilis, per elitr mollis ad. Sumo contentiones ius id, doming quaeque vel ut. Solet gloriatur consetetur nam eu, an per aperiam lobortis theophrastus, cu per mucius volumus. Sea an facilisi delicatissimi, omnis inani consectetuer cum cu. Ius ferri copiosae ne, case efficiendi nam at. Mea at iuvaret constituto. \n\nUt vis mazim utinam dissentiunt, et his novum everti, in sit dico natum. Nam semper maiestatis id, ne eum nisl mnesarchum. An iudico splendide quo. Sed sanctus epicuri patrioque in.";


  $scope.comments = [
    {id: 1, author: 3, timeCreated: "yesterday", questionParent: 1, rating: 10, commentParent: 0},
    {id: 2, author: 4, timeCreated: "2 days ago", questionParent: 1, rating: 6, commentParent: 0},
    {id: 3, author: 4, timeCreated: "yesterday", questionParent: 2, rating: 8, commentParent: 0},
    {id: 4, author: 2, timeCreated: "yesterday", questionParent: 2, rating: -4, commentParent: 0},
    {id: 5, author: 2, timeCreated: "5 days ago", questionParent: 3, rating: 1, commentParent: 0},
    {id: 6, author: 1, timeCreated: "3 days ago", questionParent: 3, rating: -7, commentParent: 0},
    {id: 7, author: 1, timeCreated: "today", questionParent: 3, rating: 3, commentParent: 6},
    {id: 8, author: 1, timeCreated: "today", questionParent: 4, rating: 5, commentParent: 0}
  ];

  $scope.comment = "Elit rebum melius id mei. Usu legendos tincidunt in, sea dictas reformidans eu. Duis libris doctus in ius. Appareat salutatus molestiae an has, errem docendi cu mea, facilisi persecuti cum ex.";

  
}]);
