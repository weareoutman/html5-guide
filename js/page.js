
(function(list){
	// 加载分页里的代码，并语法高亮
	var loadCodeInPage = (function(){
		var tab = "  ";
		function load(code) {
			var name = code.getAttribute("data-name");
			if (!name) {
				hljs.highlightBlock(code, tab);
				return;
			}
			var xhr = new XMLHttpRequest();
			xhr.open("GET", "./examples/code-list/" + name + ".txt");
			xhr.onload = function(){
				code.textContent = xhr.responseText.replace(/\r\n/g, "\n");
				setTimeout(function(){
					hljs.highlightBlock(code, tab);
				}, 1);
			};
			xhr.onerror = function(e){
				console.log("Ajax Error [for code: " + name + "]");
				console.dir(e);
			};
			xhr.send(null);
		}
		return function(page){
			var codes = page.querySelectorAll("code");
			for (var i = 0; i < codes.length; ++ i) {
				load(codes[i]);
			}
		};
	})();

	// 加载分页所需的js脚本
	var loadJsForPage = (function(){
		function load(js) {
			var url = js;
			if (!/^js\//.test(url)) {
				url = "examples/code-list/" + url;
			}
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.charset = "utf-8";
			script.src = url;
			var firstScript = document.querySelector("script");
			firstScript.parentNode.insertBefore(script, firstScript);
		}
		return function(page){
			var js = page.getAttribute("data-js");
			if (js) {
				js = js.split(",");
				for (var i = 0; i < js.length; ++ i) {
					load(js[i]);
				}
			}
		};
	})();

	// 加载分页html内容
	function load(page) {
		var name = page.getAttribute("data-name");
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "./examples/page-list/" + name + ".html");
		xhr.onload = function(){
			page.innerHTML = xhr.responseText;
			setTimeout(function(){
				loadCodeInPage(page);
				loadJsForPage(page);
			}, 1);
		};
		xhr.onerror = function(e){
			console.log("Ajax Error [for page: " + name + "]");
			console.dir(e);
		};
		xhr.send(null);
	}

	var pages = document.querySelectorAll("div.page");
	for (var i = 0; i < pages.length; ++ i) {
		load(pages[i]);
	}
})();