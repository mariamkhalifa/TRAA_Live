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

function getBlog($conn, $args) {
    $query = 'SELECT * FROM ' .$args['tbl1']. ' AS t1, ' .$args['tbl2']. ' AS t2, ' .$args['tbl3']. ' AS t3';
    $query .= ' WHERE t1.' .$args['col1']. ' = t3.' .$args['col1']. ' AND t2.' .$args['col2']. ' = t3.' .$args['col2'];
    $query .= ' ORDER BY t3.' .$args['col1']. ' DESC LIMIT 5'; 
    $run_query = $conn->query($query);
    //echo $query;
    $result = array();

    while($row = $run_query->fetch(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    }

    return $result;
}