<?
// Сайт Простая Церковь simplechurch.ru © 2011, версия 1.02 от 17 Марта

$left_col = ''; // текст для левой колонки
$records = file('index.idx');
$counter = 0;
$section = 0;
while ($counter<count($records)) {
	$str = trim($records[$counter]);
	if (empty($str)) { // закрываем секцию
		$section = 0;
	} else {
		switch ($section) {
			case 0:
				$img = $str;
				break;
			case 1:
				$left_col .= "\n\t\t\t<p>&nbsp;<br>&nbsp;</p>\n\t\t\t<img src='images/".$img.".jpg' title='".$str.".'><strong>".$str."</strong>";
				break;
			case 2:
				$title = $str;
				break;
			case 3:
				$url = $str;
				$left_col .= ", блог <a href='http://".$url."' target='_blank'>".$title."</a>\n\t\t\t<hr>\n\t\t\t";
				break;
			default:
				$pos = strpos($str, "/");
				$name = substr($str, 0, $pos - 1);
				$url_add = substr($str, $pos);
				$pos = strpos($name, " ", 4);
				if ($pos == false) $pos = strlen($name);
				if (strpos($name, ",")) $pos = strpos($name, ",");
				$left_col .= "<a href='http://".$url.$url_add."' target='_blank'>".substr($name, 0, $pos)."</a>".substr($name, $pos);
				if ($counter == count($records)-1) $str = ''; else $str = trim($records[$counter+1]);
				if (strpos(" …!?", substr($left_col, strlen($left_col)-1))) {
					$str = '';
					$left_col .= " ";
				}
				if (!empty($str)) $left_col .= ", ";
		}
		$section++;
	}
	$counter++;
}

?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
<meta name="Description" content="Простая церковь. Ссылки на блоги и форумы христиан, практикующих простую церковь в России." />
<meta name="Keywords" content="простая, органическая, церковь, христианство, Христос, Бог" />
<meta name='yandex-verification' content='4b45007c14e30353' />
<meta name="google-site-verification" content="13jdKBa3FNJByXDCp7EXxKsg4X6WJBBRQ5LcRgbTS4Y" />
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<title>Простая церковь</title>
<style type="text/css"><!--
	body {
		margin: 0 auto;
		padding: 0;
		border: 0;				/* This removes the border around the viewport in old versions of IE */
		font-family: Verdana,sans-serif;
		font-size: 12px;
		/* background-image: url(/images/bg.gif); */
		/* background-repeat: repeat-x; */
	}
	.page {
		width: 610px;
		margin: 0 auto;
	}
	#container {
		position: relative;
		margin: 0 auto;
		clear: both;
		overflow: hidden;
		width: 620px;
		/* border-bottom: #aaa 1px solid; */
		/* border-left: #aaa 1px solid; */
		/* border-right: #aaa 1px solid; */
	}
	#container .col1 {
		float: left;
		background: #fff;
		width: 410px;
		/* border-right: #aaa 1px solid; */
	}
	#container .col2 {
		position: absolute;
		left: 430px;
		width: 190px;
		float: right;
	}
	p {
		text-align: right;
		margin: 0px 0px;
	}
	.date {
		font-weight: bold;
		color: grey;
	}
	img {
		margin-right: 10px;
		float: left;
		border: 0;
	}
	.img_proto {
		float: none;
		margin: 7px 0px 0px 5px;
		border: 0;
	}
	.img_icon {
		float: none;
		margin: 0px 0px 3px 5px;
		vertical-align: middle;
		border: 0;
	}
	.img_title {
		margin-top: 20px;
		margin-right: 15px;
		height: 110px;
		float: left;
		border: 0;
	}
	.title_text {
		position: relative;
		top: 5px;
		font-size: 45px;
		color: #009900;
		letter-spacing: 1.5px;
	}
	.hr_title {
		height: 2px;
		background: #009900;
		border: 0;
	}
	hr {
		height: 1px;
		background: #aaa;
		border: 0;
	}
	a {
		text-decoration: none;
		color: #009900;
	}
	a:hover {
		text-decoration: underline;
		color: red;
	}
//-->
</style>
</head>
<body>
<div class="page">
	<a href="/"><img src="images/title.jpg" class="img_title" title="Простая церковь."></a><span class="title_text">простая церковь</span>
	<hr class="hr_title">
	...вот, Я посылаю вас, как овец среди волков: итак будьте мудры, как змии, и <span style="color:red">просты</span>, как голуби (Иисус Христос, Новый Завет, Евангелие от Матфея, 10:16)
	<!--...боюсь, чтобы, как змий хитростью своею прельстил Еву, так и ваши умы не повредились, уклонившись от <span style="color:red">простоты во Христе</span> (апостол Павел, Новый Завет, 2е письмо Коринфской церкви, 11:3)-->
	<div id="container">
		<div class="col1"><? echo $left_col; ?>
		</div>
		<div class="col2">
			<p>&nbsp;<br>&nbsp;</p>
			<p><strong>Контакты</strong></p>
			<hr>
			<p>+7 918 557 2926<img src="images/phone.png" class="img_icon" valign="bottom">
			<p><a href="http://www.icq.com/495169" target="_blank"><img src="images/icq_protocol.png" class="img_proto"></a><a href="http://twitter.com/biblelamp/" target="_blank"><img src="images/twitter.png" class="img_proto"></a><a href="http://www.facebook.com/groups/commonchurch/" target="_blank"><img src="images/facebook.png" class="img_proto"></a>
			<p>&nbsp;<br>&nbsp;</p>
			<p><strong>Книги</strong></p>
			<hr>
			<p>Джон Элдридж<br>
			<a href="http://flibusta.net/b/223779" target="_blank">«Хождение с Богом»</a><img src="images/fb2.png" class="img_icon">
			<a href="http://flibusta.net/b/171336" target="_blank">«Священный роман»</a><img src="images/fb2.png" class="img_icon">
			<a href="http://flibusta.net/b/171337" target="_blank">«Путь желания»</a><img src="images/fb2.png" class="img_icon">
			<a href="http://flibusta.net/b/171338" target="_blank">«Необузданное сердце»</a><img src="images/fb2.png" class="img_icon">
			<a href="http://flibusta.net/b/323147" target="_blank">«Пленительная красота»</a><img src="images/fb2.png" class="img_icon"></p>
			&nbsp;
			<p>Уильям Пол Янг<br>
			<a href="http://flibusta.net/b/216241" target="_blank">«Хижина»</a><img src="images/fb2.png" class="img_icon"></p>
			&nbsp;
			<p>Уэйн Джейкобсен,<br>Дэйв Колеман<br>
			<a href="http://flibusta.net/b/170703" target="_blank">Что, не хочешь больше ходить в церковь?</a><img src="images/fb2.png" class="img_icon"></p>
			&nbsp;
			<p>Френк Виола<br>
			<a href="http://flibusta.net/b/229819" target="_blank">Переосмысление Церкви</a><img src="images/fb2.png" class="img_icon"></p>
			<p>&nbsp;<br>&nbsp;</p>
			<p><strong>Живой форум</strong></p>
			<hr>
			<?
					$show = 22;
					$max_subject_length = 25;
					include 'expforum.php';
			?>
			<p>&nbsp;<br>&nbsp;</p>
			<p><strong>Наши друзья</strong></p>
			<hr>
			<p><a href="http://simplechurch.com.ua/" target="_blank">Простая церковь</a> в Украине</p>
			<p><a href="http://g12life.org/" target="_blank">Центр трансформации</a></p>
		</div>
	</div>
	<hr>
	<p style="float: right; margin: 0px 0px 10px 0px"><span id="openstat2166576"></span><script type="text/javascript">
var openstat = { counter: 2166576, image: 48, next: openstat, track_links: "ext" }; (function(d, t, p) {
var j = d.createElement(t); j.async = true; j.type = "text/javascript";
j.src = ("https:" == p ? "https:" : "http:") + "//openstat.net/cnt.js";
var s = d.getElementsByTagName(t)[0]; s.parentNode.insertBefore(j, s);
})(document, "script", document.location.protocol);
</script><a href="http://top.mail.ru/jump?from=2012065" target="_blank"><img src="http://d3.cb.be.a1.top.mail.ru/counter?id=2012065;t=52" 
style="border:0;" height="31" width="88" alt="Рейтинг@Mail.ru"></a></p>
</div>
</body>
</html>