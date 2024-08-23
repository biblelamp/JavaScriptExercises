<?
// Ёкспорт последних тем из форума biblelamp.ru

$month = array('€нвар€', 'феврал€', 'марта', 'апрел€', 'ма€', 'июн€', 'июл€', 'августа', 'сент€бр€', 'окт€бр€', 'но€бр€', 'декабр€');
$base_url = 'http://biblelamp.ru/forum/';
$order_by = 't.last_post';
$forum_sql = '';

// загружаем config.php
define('PUN_ROOT', '/home/u53132/biblelamp.ru/www/forum/');
@include PUN_ROOT.'config.php';

// загружаем DB abstraction layer и пробуем коннект
require PUN_ROOT.'include/dblayer/common_db.php';

$result = $db->query('SELECT t.id, t.subject, t.last_post FROM '.$db->prefix.'topics AS t INNER JOIN '.$db->prefix.'forums AS f ON f.id=t.forum_id LEFT JOIN '.$db->prefix.'forum_perms AS fp ON (fp.forum_id=f.id AND fp.group_id=3) WHERE (fp.read_forum IS NULL OR fp.read_forum=1) AND t.moved_to IS NULL'.$forum_sql.' ORDER BY '.$order_by.' DESC LIMIT '.$show) or error('Unable to fetch topic list', __FILE__, __LINE__, $db->error());

$dt = '';

while ($cur_topic = $db->fetch_assoc($result)) {

	if (strlen($cur_topic['subject']) > $max_subject_length)
		$subject_truncated = trim(substr($cur_topic['subject'], 0, ($max_subject_length-5))).' &hellip;';
	else
		$subject_truncated = $cur_topic['subject'];

	$date_post = date("d.m", $cur_topic['last_post']);
	if ($dt != $date_post) echo '<p class="date">'.substr($date_post, 0, 2).' '.$month[substr($date_post, 3, 2)-1].'<p>';
	$dt = $date_post;

	echo '<p><a href="'.$base_url.'viewtopic.php?id='.$cur_topic['id'].'&amp;action=new" title="'.$cur_topic['subject'].'" target="_blank">'.$subject_truncated.'</a></p>';

}

?>