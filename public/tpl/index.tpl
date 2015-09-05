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
    <link rel="stylesheet" href="public/todomvc-common/base.css">
    <link rel="stylesheet" href="public/todomvc-app-css/index.css">
	<title>TodoMVC</title>
</head>
<body>
	<section id="p-index">
        <section id="todoapp">
            <header id="header">
                <h1>todos</h1>
                <input id="new-todo" placeholder="What needs to be done?" autofocus>
            </header>
            <section id="main" class="hide">
            </section>
            <footer id="footer" class="hide"></footer>
        </section>
        <footer id="info">
            <p>Double-click to edit a todo</p>
            <p>Created by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
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