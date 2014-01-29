<?php
if(!empty($_GET['url'])){
    $url=$_GET['url'];
    if (preg_match('/^http[s]{0,1}:\/\//', $url) > 0) {
        echo file_get_contents($url);
    }
}?>
