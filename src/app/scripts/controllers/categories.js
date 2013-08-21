'use strict';

angular.module('quizApp')
  .controller('CategoriesCtrl', function ($scope, quizService, categories) {
    $scope.categories = categories;

    $scope.quizComplete = function () {
      return quizService.isComplete();
    }
  });
