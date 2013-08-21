'use strict';

angular.module('quizApp', ['ui.bootstrap'])

  // Constants
  // ---------------------------------------------------------
  .constant('uris', {
    scores:     '/api/scores',
    categories: '/api/categories'
  })

  // Router
  // ---------------------------------------------------------
  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: '/app/views/main.html',
        controller: 'MainCtrl',
        resolve: {
          scores: function (scoreService) {
            return scoreService.fetch();
          },
          quiz: function (quizService) {
            return quizService.fetch();
          }
        }
      })

      .when('/categories', {
        templateUrl: '/app/views/categories.html',
        controller: 'CategoriesCtrl',
        resolve: {
          categories: function (quizService) {
            return quizService.getCategories();
          }
        }
      })

      .when('/category/:id', {
        templateUrl: '/app/views/category.html',
        controller: 'CategoryCtrl',
        resolve: {
          category: function ($route, quizService) {
            return quizService.getCategoryBySlug($route.current.params.id);
          }
        }
      })

      .when('/score', {
        templateUrl: '/app/views/score.html',
        controller: 'ScoreCtrl'
      })

      .when('/error', {
        templateUrl: '/app/views/error.html'
      })

      .otherwise({
        redirectTo: '/'
      });
  })

  // Runtime
  // ---------------------------------------------------------
  .run(function ($location, quizService) {
    // if (!quizService.isFromStart()) {
    //   $location.path('/');
    // }
  })
