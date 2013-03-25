(function(){
	function q(selector, target, all) {
		target = target || document;
		return all ? target.querySelectorAll(selector) : target.querySelector(selector);
	}
	function css(element, name, value) {
		if (name == "transition" || name == "transform") {
			css(element, "-webkit-" + name, value.replace("transform", "-webkit-transform"));
			css(element, "-moz-" + name, value.replace("transform", "-moz-transform"));
			css(element, "-ms-" + name, value.replace("transform", "-ms-transform"));
			css(element, "-o-" + name, value.replace("transform", "-o-transform"));
		}
		element.style[name] = value;
	}
	function packetHover(elem) {
		var handle;
		elem.onmouseover = function(){
			clearTimeout(handle);
			this.style.zIndex = 20;
			var img = q("img", this);
			var pre = q("pre", this);
			pre.style.visibility = "visible";
			pre.style.opacity = 1;
			/*css(img, "transition", "transform 100ms linear");
			window.requestAnimationFrame(function(){
				css(img, "transform", "scale(1.2,1.2)");
			});*/
		};
		elem.onmouseout = function(){
			handle = setTimeout(function(){
				elem.style.zIndex = "auto";
				var img = q("img", elem);
				var pre = q("pre", elem);
				pre.style.opacity = 0;
				setTimeout(function(){
					pre.style.visibility = "hidden";
				}, 200);
				/*css(img, "transition", "transform 100ms linear");
				window.requestAnimationFrame(function(){
					css(img, "transform", "scale(1,1)");
				});*/
			}, 200);
		};
	}
	// packetHover(q("#pkt-request"));
	// packetHover(q("#pkt-response"));
	// packetHover(q("#pkt-frame"));
})();