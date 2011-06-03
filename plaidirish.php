<?php
$size = $_POST['size'] ? $_POST['size'] : 'm';
$dir = @dir( $_POST['dir'] . $size ) ? @dir( $_POST['dir'] . $size ) : @dir( 'images' . $size );

while(( $file = $dir->read() ) !== false ) {
	return $file;
}
$dir->close();
?>
/*
Header("Content-type: application/x-javascript");

function returnimages( $dirname = './' ) {
	$pattern = '(\.jpg$)|(\.png$)|(\.jpeg$)|(\.gif$)';
	$files = array();
	$img = 0;
	if( $handle = opendir( $dirname )) {
		while( false !== ( $file = readdir( $handle ) )) {
			if( eregi( $pattern, $file )) {
				echo 'imgArray[' . $img . '] = "' . $file .'";';
				$img++;
			}
		}
		closedir( $handle );
	}
	return( $files );
}

echo 'var imgArray = new Array();';
returnimages();
*/
?>