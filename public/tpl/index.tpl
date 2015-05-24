<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta charset="utf-8" />
	<meta name="description" content="Mastimaza">
	<meta name="HandheldFriendly" content="true" />
	<meta content="telephone=no" name="format-detection">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0" />
	<link rel="stylesheet" type="text/css" href="public/css/base.css" />
	<title>example</title>
</head>
<body>
	<section id="p-index">
		<div>Index Page</div>
		<a href="#!/detail">btn1</a>
	</section>
	<section id="p-detail" class="hide">
		<div>Detial Page</div>
		<a id="#!/index">btn2</a>
	</section>
</body>
<script src="public/js/seajs/sea.js"></script>
<script type="text/javascript">
	seajs.use('app', function (app) {
		app.init();
	});
</script>
</html>