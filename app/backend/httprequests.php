<?php
require_once'db.php';
$data = new database();

switch ($_GET['action']) {

  case 'all':
  $query = "SELECT * FROM posts";
  $result = $data->getdata($query);
  break;

  case 'one':
  $id=$_GET['id'];
  $query = "SELECT * FROM posts WHERE id =".$id;
  $result = $data->getdata($query);
  break;

  case 'new':
  $rawdata = file_get_contents("php://input");
  $jsondata = json_decode($rawdata);
  $query = "INSERT INTO posts (title, content, keywords, tags) VALUES ('$jsondata->title', '$jsondata->content', '$jsondata->keywords' , '$jsondata->tags')";
  $result = $data->setdata($query);
  break;

  case 'del':
  $id = $_GET['id'];
  $query = "DELETE FROM posts WHERE id =".$id;
  $result = $data->setdata($query);
  break;

  case 'update':
  $id = $_GET['id'];
  $rawdata = file_get_contents("php://input");
  $jsondata = json_decode($rawdata);
  var_dump($jsondata->title);
  $query = " UPDATE posts SET title='$jsondata->title', content='$jsondata->content', keywords='$jsondata->keywords', tags='$jsondata->tags' WHERE id='$id'";
  $result = $data->setdata($query);
  break;

  case 'setcomment':
    $id = $_GET['id'];
    $rawdata = file_get_contents("php://input");
    $jsondata = json_decode($rawdata);
    $query = "INSERT INTO comments(content, commentBy, postId) VALUES('$jsondata->content', '$jsondata->author', $id)";
    $result = $data->setdata($query);
    break;
  case 'getcomment':
    $id = $_GET['id'];
    $query = "SELECT * FROM comments WHERE postId =".$id;
    $result = $data->getdata($query);
    break;

}
?>
