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

function getProjects($conn, $tbl) {
    $query = 'SELECT * FROM ' .$tbl. ' WHERE project_archive = 0';
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

function subscribe($conn, $email) {
    $check_exist_query = 'SELECT COUNT(*) FROM `tbl_subscription` WHERE subsc_email =:email';
    $subsc_email = $conn->prepare($check_exist_query);
    $result = $subsc_email->execute(
        array(
            ':email'=>$email
        )
    );

    if($subsc_email->fetchColumn()>0){
        return $msg = 'This email has already signed up.';
    }else{
        $insert_subsc_query = 'INSERT INTO `tbl_subscription` (subsc_email) VALUES (:email)';
        $subsc_add = $conn->prepare($insert_subsc_query);
        $result = $subsc_add->execute(
            array(
                ':email'=>$email
            )
        );

        if($result){
            $recipient = $email;
            $subject = "TRAA Newsletter Subscription";
            $message = '<html><body>';
            $message .= '<h2>Welcome!</h2>';
            $message .= '<p>We are happy to have you.</p>';
            $message .= '<p>Your have signed up for the TRAA newsletter.</p>';
            $message .= '<p>Have a wonderful day!</p>';
            $message .= '<h5>Sincerely,</h5>';
            $message .= '<h5>TRAA</h5>';
            $message .= '</body></html>';
            $from = "noreply@anglers.org";
            $headers  = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-type: text/html'. "\r\n";
            $headers .= 'From: '.$from."\r\n";
            $headers .= 'Reply-To: <'.$email.'>' . "\r\n";
            $headers .= 'X-Mailer: PHP/' . phpversion();
            
            mail($recipient, $subject, $message, $headers);
            
            return $msg = 'Thank you for subscribing!';
        } else {
            return $msg = 'Something went wrong with the subscription!';
        }

    }
}

function AddMember($conn, $args) {
    
}