<?php

require('functions.php');

if(isset($_GET['tbl'])) {
    $tbl = trim($_GET['tbl']);
    $result = getAll($pdo, $tbl);
}

echo json_encode($result);