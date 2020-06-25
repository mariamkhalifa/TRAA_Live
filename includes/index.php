<?php

require('functions.php');

if(isset($_GET['tbl'])) {
    $tbl = trim($_GET['tbl']);
    $result = getAll($pdo, $tbl);
}

if(isset($_GET['projects'])) {
    $tbl = 'tbl_projects';
    $result = getProjects($pdo, $tbl);
}

if(isset($_GET['blog'])) {
    $args = array(
        'tbl1' => 'tbl_blog',
        'tbl2' => 'tbl_categories',
        'tbl3' => 'tbl_blog_categories',
        'col1' => 'blog_id',
        'col2' => 'categ_id',
    );
    $result = getBlog($pdo, $args);
}

if(isset($_GET['newsletter'])) {
    $email = trim($_POST['email']);
    $result = subscribe($pdo, $email);
}

if(isset($_GET['membership'])) {
    $args = array(
        'name' => trim($_POST['name']),
        'email' => trim($_POST['email']),
        'dob' => trim($_POST['dob']),
        'phone' => trim($_POST['phone'])
    );
    $result = addMember($pdo, $args);
}

echo json_encode($result);