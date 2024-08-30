<?php
/*
CMSimple version 2.9 - May 21. 2007
Small - simple - smart
© 1999-2007 Peter Andreas Harteg - peter@harteg.dk

This file is part of CMSimple.
For licence see notice in /cmsimple/cms.php and http://www.cmsimple.dk/?Licence
*/

if (eregi('search.php', sv('PHP_SELF')))die('Access Denied');

$title = $tx['title']['search'];
$ta = array();
if ($search != '')for($i = 0; $i < $cl; $i++) {
	if (@preg_match('/'.preg_quote($search, '/').'/i', html_entity_decode($c[$i])))$ta[] = $i;
}
$o .= '<h1>'.$tx['search']['result'].'</h1><p>"'.htmlspecialchars(stripslashes($search)).'" ';
if (count($ta) == 0)$o .= $tx['search']['notfound'].'.</p>';
else
	{
	$o .= $tx['search']['foundin'].' '.count($ta). ' ';
	if (count($ta) > 1)$o .= $tx['search']['pgplural'];
	else $o .= $tx['search']['pgsingular'];
	$o .= ':</p>'.li($ta, 'search');
}

?>