<?php

  $files = array();
  $path = 'i/l/';

  if ( $dir = opendir( $path ) ) {
    while ( false !== ( $file = readdir( $dir ) ) ){
      switch( mime_content_type( $path.$file ) ) {
        case 'image/jpeg':
        case 'image/jpg':
        case 'image/png':
        case 'image/gif':
          $files[] = $path . $file;
          break;
      }
    }
  }

  $key = ( array_rand( $files ) );

//  header('Content-Description: File Transfer');
  header('Content-Type: ' . mime_content_type($files[$key]));
//  header('Content-Length: ' . filesize($files[$key]));
  ob_clean();
  flush();
  readfile($files[$key]);

?>