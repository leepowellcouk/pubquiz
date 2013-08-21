'use strict';

angular.module('quizApp')

  // Answers Factory
  // ---------------------------------------------------------
  .factory('answerFactory', function () {
    function Answer(questionId) {
      this.questionId = questionId;
      this.value = null;
    }

    Answer.prototype.set = function (val) {
      this.value = val;
    };

    Answer.prototype.get = function () {
      return this.value;
    };

    function create(questionId) {
      return new Answer(questionId);
    };

    return {
      create: create
    };
  })

  // Questions Factory
  // ---------------------------------------------------------
  .factory('questionFactory', function () {
    function Question(obj) {
      angular.extend(this, obj);
    }

    Question.prototype.isCorrect = function (answer) {
      return Number(this.answer) === answer;
    };

    function create(obj) {
      return new Question(obj);
    };

    return {
      create: create
    };
  })

  // Categories Factory
  // ---------------------------------------------------------
  .factory('categoryFactory', function () {
    function Category(obj, questions, answers) {
      angular.extend(this, obj);
      this.questions = questions;
      this.answers   = answers;
    }

    Category.prototype.isComplete = function () {
      var complete      = true;
      var answersLength = this.answers.length;
      var idx;

      while (answersLength) {
        idx = answersLength - 1;
        if (this.answers[idx].get() === null) {
          complete = false;
          break;
        }
        answersLength--;
      }

      return complete;
    };

    Category.prototype.getQuestions = function () {
      return this.questions;
    };

    Category.prototype.getQuestion = function (id) {
      var question = null;
      var questionsLength = this.questions.length;
      var idx;

      while (questionsLength) {
        idx = questionsLength - 1;
        if (this.questions[idx].id === id) {
          question = this.questions[idx];
          break;
        }
        questionsLength--;
      }

      return question;
    };

    Category.prototype.setAnswer = function (val, questionId) {
      var answer = this.getAnswer(questionId);
      answer.set(Number(val));
    };

    Category.prototype.getAnswer = function (questionId) {
      var answer = null;
      var answersLength = this.answers.length;
      var idx;

      while (answersLength) {
        idx = answersLength - 1;
        if (this.answers[idx].questionId === questionId) {
          answer = this.answers[idx];
          break;
        }
        answersLength--;
      }

      return answer;
    };

    Category.prototype.getScore = function () {
      var self = this;
      var total = 0;

      angular.forEach(this.answers, function (answer, key) {
        var question = self.getQuestion(answer.questionId);
        if (question.isCorrect(answer.get())) {
          total++;
        }
      });

      return total;
    };

    Category.prototype.getTotalQuestions = function () {
      return this.questions.length;
    };

    function create(obj, questions, answers) {
      return new Category(obj, questions, answers);
    };

    return {
      create: create
    };
  })

  // Quiz Service
  // ---------------------------------------------------------
  .service('quizService', function ($http, $q, uris, categoryFactory, questionFactory, answerFactory) {
    var self = this;

    // Flag to track if quiz has been started from the homepage
    // If user is coming into quiz from alternative uri we can
    // use to redirect them back to the start at runtime
    var fromStart  = false;
    var categories = [];
    var quizData;

    function buildQuiz(data) {
      categories = [];

      angular.forEach(data, function (val, key) {
        var questions = [];
        var answers   = [];

        angular.forEach(val.questions, function (val, key) {
          var question = questionFactory.create(val);
          var answer   = answerFactory.create(val.id);
          questions.push(question);
          answers.push(answer);
        });

        delete val.questions;

        var category = categoryFactory.create(val, questions, answers);

        categories.push(category);
      });
    }

    this.setFromStart = function () {
      fromStart = true;
    };

    this.isFromStart = function () {
      return fromStart;
    };

    this.fetch = function () {
      var deferred = $q.defer();

      $http
        .get(uris.categories)
        .success(function (data, status, headers, config) {
          quizData = data;
          self.reset();
          deferred.resolve();
        })
        .error(function (data, status, headers, config) {
          deferred.reject();
        });

      return deferred.promise;
    };

    this.reset = function () {
      buildQuiz(angular.copy(quizData));
    };

    this.getScore = function () {
      var score = 0;
      angular.forEach(categories, function (category, key) {
        score += category.getScore();
      });
      return score;
    };

    this.getTotalQuestions = function () {
      var total = 0;
      angular.forEach(categories, function (category, key) {
        total += category.getTotalQuestions();
      });
      return total;
    };

    this.isComplete = function () {
      var complete = true;
      angular.forEach(categories, function (category, key) {
        if (!category.isComplete()) {
          complete = false;
        }
      });
      return complete;
    };

    this.getCategories = function () {
      return categories;
    };

    this.getCategoryBySlug = function (slug) {
      var catsLength = categories.length;
      var category   = null;
      var idx;

      while (catsLength) {
        idx = catsLength - 1;
        if (categories[idx].slug === slug) {
          category = categories[idx];
          break;
        }
        catsLength--;
      }

      return category;
    };
  });
