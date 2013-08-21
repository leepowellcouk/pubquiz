'use strict';

angular.module('quizApp')

  // Score Service
  // ---------------------------------------------------------
  .service('scoreService', function ($http, $q, uris) {
    var fetchPromise = null;

    this.fetch = function (refetch) {
      var deferred     = $q.defer();

      $http
        .get(uris.scores)
        .success(function (data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function (data, status, headers, config) {
          deferred.reject(status);
        });


      return deferred.promise;
    };

    this.save = function (score) {
      var deferred = $q.defer();

      $http
        .post(
            uris.scores,
            { score: Number(score) },
            { headers: {'Content-Type': 'application/json; charset=utf-8'} }
        )
        .success(function (data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function (data, status, headers, config) {
          deferred.reject(status);
        });

      return deferred.promise;
    };
  });
