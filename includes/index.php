<?php

require('functions.php');

if(isset($_GET['tbl'])) {
    $tbl = trim($_GET['tbl']);
    $result = getAll($pdo, $tbl);
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

echo json_encode($result);