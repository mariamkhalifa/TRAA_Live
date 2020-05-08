<?php

require('connect.php');

function getAll($conn, $tbl) {
    
    $query = 'SELECT * FROM ' .$tbl;
    $run_query = $conn->query($query);

    $result = array();

    while($row = $run_query->fetch(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    }

    return $result;
}