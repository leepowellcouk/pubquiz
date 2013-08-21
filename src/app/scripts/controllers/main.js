'use strict';

angular.module('quizApp')
  .controller('MainCtrl', function ($scope, $location, scores, quizService) {
    var search = $location.search();

    $scope.scores     = scores;
    $scope.predicate  = 'score';
    $scope.reverse    = true;
    $scope.modal      = search.scoreboard !== undefined;
    $scope.modalOpts  = {
      dialogClass: 'modal scoreboard'
    }


    $scope.hasScores = function () {
      return $scope.scores.length > 0;
    }

    $scope.startQuiz = function () {
      quizService.setFromStart();
    }

    $scope.viewScoreboard = function (event) {
      $scope.modal = true;
      event.preventDefault();
    }
  });
