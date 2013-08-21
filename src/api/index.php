<?php
require '../config.php';
require './lib/Slim/Slim.php';
require './lib/NotORM.php';

Slim\Slim::registerAutoloader();

$app = new Slim\Slim();
$pdo = new PDO('mysql:host='.MYSQL_HOST.';dbname='.MYSQL_NAME, MYSQL_USER, MYSQL_PASS);
$db  = new NotORM($pdo);

// Router
// ---------------------------------------------------------
$app->get('/questions/',     'getQuestions');
$app->get('/questions/:id',  'getQuestion');
$app->get('/categories/',    'getCategories');
$app->get('/categories/:id', 'getCategory');
$app->get('/scores/',        'getScores');
$app->post('/scores/',       'addScore');
$app->delete('/scores/:id/', 'deleteScore');

// Run
// ---------------------------------------------------------
$app->run();

// Get Scores
// ---------------------------------------------------------
function getScores() {
  global $db;

  $data = array();

  foreach ($db->scores() as $score) {
    $data[] = $score;
  };

  echo json_encode($data, JSON_NUMERIC_CHECK);
}

// Get Questions
// ---------------------------------------------------------
function getQuestions() {
  global $db;

  $data = array();

  foreach($db->questions() as $question) {
    $tmp = rowToArray($question);

    foreach ($question->categories_questions() as $categories_questions) {
      $tmp['category'] = $categories_questions->categories;
    }

    $data[] = $tmp;
  }

  echo json_encode($data, JSON_NUMERIC_CHECK);
}

// Get Question
// ---------------------------------------------------------
function getQuestion($id) {
  global $db;

  if ($id && is_numeric($id)) {
    $row = $db->questions()->where('id', $id)->fetch();

    if ($row) {
      $tmp = rowToArray($row);

      foreach ($row->categories_questions() as $categories_questions) {
        $tmp['category'] = $categories_questions->categories;
      }

      $data = $tmp;
    }
    else {
      $data = array('message', 'Question not found.');
    }
  }
  else {
    $data = array('message' => 'Question id invalid.');
  }

  echo json_encode($data, JSON_NUMERIC_CHECK);
}

// Get Categories
// ---------------------------------------------------------
function getCategories() {
  global $db;

  $data = array();

  foreach ($db->categories() as $category) {
    $tmp = rowToArray($category);
    $tmp['questions'] = array();

    foreach ($category->categories_questions() as $categories_questions) {
      $tmp['questions'][] = $categories_questions->questions;
    }

    $data[] = $tmp;
  }

  echo json_encode($data, JSON_NUMERIC_CHECK);
}

// Get Category
// ---------------------------------------------------------
function getCategory($id) {
  global $db;

  if ($id && is_numeric($id)) {
    $row = $db->categories()->where('id', $id)->fetch();

    if ($row) {
      $tmp = rowToArray($row);
      $tmp['questions'] = array();

      foreach ($row->categories_questions() as $categories_questions) {
        $tmp['questions'][] = $categories_questions->questions;
      }

      $data = $tmp;
    }
    else {
      $data = array('message', 'Category not found.');
    }
  }
  else {
    $data = array('message' => 'Category id invalid.');
  }

  echo json_encode($data, JSON_NUMERIC_CHECK);
}

// Add Score
// ---------------------------------------------------------
function addScore() {
  global $app, $db;

  $body = json_decode($app->request->getBody());
  $score = (int) $body->score;

  if (isset($score)) {
    $id = $db->scores()->insert(createScore($score));
    $data = $db->scores()->where('id', $id)->fetch();
  }
  else {
    $data = array('message' => 'Score invalid format or not set.');
  }

  echo json_encode($data, JSON_NUMERIC_CHECK);
}

// Delete Score
// ---------------------------------------------------------
function deleteScore($id) {
  global $db;

  if ($id && is_numeric($id)) {
    $affected = $db->scores()->where('id', $id)->delete();
    $data = array('affected' => $affected);
  }
  else {
    $data = array('message' => 'Score id invalid.');
  }

  echo json_encode($data, JSON_NUMERIC_CHECK);
}

// Helpers
// ---------------------------------------------------------

/*
 * Iterates over a NotORM row and returns it as an array
 */
function rowToArray($data) {
  $arr = array();
  foreach ($data as $key => $val) {
    $arr[$key] = $val;
  }
  return $arr;
}

/*
 * Creates a score array
 */
function createScore($score) {
  return array(
    'score'        => $score,
    'date_created' => date('Y-m-d H:i:s')
  );
}