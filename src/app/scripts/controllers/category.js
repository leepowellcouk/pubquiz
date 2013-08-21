'use strict';

angular.module('quizApp')
  .controller('CategoryCtrl', function ($scope, $location, category) {
    var questions = category.getQuestions();
    var current   = 0;

    function getAnswer() {
      return category.getAnswer(questions[current].id).get();
    }

    function getQuestionNo() {
      return current + 1;
    }

    $scope.category   = category;
    $scope.question   = questions[current];
    $scope.answer     = getAnswer();
    $scope.questionNo = getQuestionNo();

    $scope.setAnswer = function (val) {
      category.setAnswer(val, questions[current].id);
    };

    $scope.nextQuestion = function () {
      current++;
      if (questions[current] === undefined) {
        $location.path('/categories');
      }
      else {
        $scope.question = questions[current];
        $scope.answer   = getAnswer();
        $scope.questionNo = getQuestionNo();
      }
    };

    $scope.previousQuestion = function () {
      current--;
      $scope.question   = questions[current];
      $scope.answer     = getAnswer();
      $scope.questionNo = getQuestionNo();
    };

    $scope.hasPrevious = function () {
      return current > 0;
    };

    $scope.isAnswered = function () {
      return $scope.answer !== null;
    };
  });
