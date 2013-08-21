'use strict';

angular.module('quizApp')
  .controller('ScoreCtrl', function ($scope, $location, quizService, scoreService) {
    var score = quizService.getScore();
    var totalQuestions = quizService.getTotalQuestions();
    var alert = { message: null, type: null, hide: true };

    $scope.score          = score;
    $scope.totalQuestions = totalQuestions;
    $scope.alert          = alert;
    $scope.submitted      = false;

    $scope.saveScore = function () {
      scoreService
        .save(score)
        .then(
          function () {
            $scope.submitted = true;

            alert.message = 'Score successfully saved.';
            alert.type    = 'success';
            alert.hide    = false;
          },
          function () {
            alert.message = 'Score could not be saved.';
            alert.type    = 'error';
            alert.hide    = false;
          });
    }

    $scope.tryAgain = function () {
      quizService.reset();
      $location.path('/categories');
    }

    $scope.closeAlert = function () {
      alert.message = null;
      alert.type    = null;
      alert.hide    = true;
    }

    $scope.$watch('alert', function (val) {
      $scope.alert = val;
    }, true);
  });