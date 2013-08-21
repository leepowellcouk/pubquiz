<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>PubQuiz</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <!-- build:css({.tmp,app}) styles/main.css -->
    <link rel="stylesheet" href="/app/styles/bootstrap.css">
    <link rel="stylesheet" href="/app/styles/main.css">
    <!-- endbuild -->
  </head>
  <body ng-app="quizApp">
    <!--[if lt IE 7]>
      <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
    <![endif]-->

    <!--[if lt IE 9]>
      <script src="/app/bower_components/es5-shim/es5-shim.js"></script>
      <script src="/app/bower_components/json3/lib/json3.min.js"></script>
    <![endif]-->

    <header role="banner" class="banner">
      <h1 class="container"><a href="#/">Pub Quiz</a></h1>
    </header>

    <!-- Add your site or application content here -->
    <div class="content">
      <div class="container" role="main" ng-view=""></div>
    </div>

    <footer role="complementary" class="footer">
      <div class="container">
        &copy; Pub Quiz 2013
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam mattis placerat justo.</p>
      </div>
    </footer>

    <script src="/app/bower_components/angular/angular.js"></script>
    <script src="/app/bower_components/angular-bootstrap/ui-bootstrap.js"></script>
    <script src="/app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>

    <!-- build:js({.tmp,app}) scripts/scripts.js -->
    <script src="/app/scripts/app.js"></script>
    <script src="/app/scripts/controllers/main.js"></script>
    <script src="/app/scripts/controllers/score.js"></script>
    <script src="/app/scripts/controllers/categories.js"></script>
    <script src="/app/scripts/controllers/category.js"></script>
    <script src="/app/scripts/services/quiz.js"></script>
    <script src="/app/scripts/services/score.js"></script>
    <!-- endbuild -->
  </body>
</html>
