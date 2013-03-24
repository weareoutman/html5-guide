// 请求动画帧
(function(w){
	w.requestAnimationFrame = w.requestAnimationFrame
		|| w.webkitRequestAnimationFrame
		|| w.msRequestAnimationFrame
		|| w.mozRequestAnimationFrame
		|| w.oRequestAnimationFrame
		|| function(a) {
			return setTimeout(a, 16);
		};
	w.cancelAnimationFrame = w.cancelAnimationFrame
		|| w.webkitCancelAnimationFrame
		|| w.msCancelAnimationFrame
		|| w.mozCancelAnimationFrame
		|| w.oCancelAnimationFrame
		|| w.cancelRequestRequestAnimationFrame
		|| w.webkitCancelRequestAnimationFrame
		|| w.msCancelRequestAnimationFrame
		|| w.mozCancelRequestAnimationFrame
		|| w.oCancelRequestAnimationFrame
		|| function(a) {
			return clearTimeout(a);
		};
})(window);

(function(){
	function g(a) {
		return document.getElementById(a);
	}
	function q(selector, target, all) {
		target = target || document;
		return all ? target.querySelectorAll(selector) : target.querySelector(selector);
	}
	function css(element, name, value) {
		if (name == "transition" || name == "transform" || name == "transform-origin") {
			css(element, "-webkit-" + name, value.replace("transform", "-webkit-transform"));
			css(element, "-moz-" + name, value.replace("transform", "-moz-transform"));
			css(element, "-ms-" + name, value.replace("transform", "-ms-transform"));
			css(element, "-o-" + name, value.replace("transform", "-o-transform"));
		}
		element.style[name] = value;
	}

	var Step = function(page){
		this.page = page;
		this.animationQueue = [];
		this.delayQueue = [];
		// this.completeQueue = [];
		this.running = false;
	};
	Step.prototype.pushAnimation = function(animation, delay, complete){
		this.animationQueue.push(animation);
		this.delayQueue.push(delay || 0);
		// this.completeQueue.push(complete);
	};
	Step.prototype.rollback = function(immediately){
		if (this.running) {
			console.log("! trying to rollback steps while already running");
			return;
		}
		this.running = true;
		this.index = this.animationQueue.length - 1;
		this.play(true, immediately);
	};
	Step.prototype.play = function(isRollback, immediately){
		var index = this.index,
			animation = this.animationQueue[index],
			totalDelay = this.delayQueue[index]/*,
			complete = this.completeQueue[index];*/
		if (!animation) {
			this.running = false;
			return;
		}
		var styles = [];
		for (var selector in animation) {
			var elements = q(selector, document, true),
				actions = animation[selector],
				transition = [],
				needTransition = false;
			for (var name in actions) {
				var dst = actions[name],
					duration = dst.duration || 0,
					timing = dst.timing || "linear",
					delay = dst.delay || 0,
					value = dst[isRollback ? "from" : "to"];
				if (isRollback) {
					delay = totalDelay - delay - duration;
					if (delay < 0) {
						delay = 0;
					}
				}
				if (name == "className") {
					for (var i = 0; i < elements.length; ++ i) {
						elements[i].className = value;
					}
					continue;
				}
				needTransition = true;
				if (duration || delay) {
					transition.push([name,
							duration + "ms",
							timing,
							delay + "ms"].join(" "));
				}
				for (var i = 0; i < elements.length; ++ i) {
					styles.push([elements[i], name, value]);
				}
			}
			if (needTransition) {
				for (var i = 0; i < elements.length; ++ i) {
					css(elements[i], "transition", !immediately && transition.length ? transition.join(",") : "all 0 ease 0");
				}
			}
		}
		window.requestAnimationFrame(function(){
			for (var i = 0; i < styles.length; ++ i) {
				css(styles[i][0], styles[i][1], styles[i][2]);
			}
		});
		var self = this;
		function next() {
			self.index += isRollback ? -1 : 1;
			self.play(isRollback, immediately);
		}
		if (immediately) {
			next();
		} else {
			setTimeout(next, totalDelay);
		}
	};
	Step.prototype.start = function(){
		if (this.running) {
			return;
		}
		this.running = true;
		this.index = 0;
		this.play();
	};

	var container = document.getElementById("container"),
		stage = document.getElementById("stage"),
		ratio = 1, scale = 1;
	function slideshow(source) {
		var x = - (source.getAttribute("data-x") || 0),
			y = - (source.getAttribute("data-y") || 0),
			z = - (source.getAttribute("data-z") || 0),
			rX = - (source.getAttribute("data-rotate-x") || 0),
			rY = - (source.getAttribute("data-rotate-y") || 0),
			rZ = - (source.getAttribute("data-rotate-z") || 0);
		scale = 1 / (+ (source.getAttribute("data-scale") || 1));
		css(container, "transform", [
			"rotateZ(" + rZ + "deg)",
			"rotateY(" + rY + "deg)",
			"rotateX(" + rX + "deg)",
			"translate3d(" + x + "px," + y + "px," + z + "px)",
		].join(" "));
		adjust();
	}

	function adjust() {
		css(stage, "transform",
				"perspective(" + (1000 / scale / ratio) + "px) scale(" + (scale * ratio) + ")");
	}

	(function(){
		var de = document.documentElement;
		function resize(){
			var h = de.clientHeight,
				w = de.clientWidth,
				H = 768, W = 1024;
			if (h / w <= H / W) {
				ratio = h / H;
			} else {
				ratio = w / W;
			}
			adjust();
		}
		// resize();
		// window.onresize = resize;
	})();

	var Page = function(ppt, elem){
		this.ppt = ppt;
		this.elem = elem;
		this.name = elem.getAttribute("data-name");
		this.stepQueue = [];
		this.stepIndex = 0;
		this.init();
	};
	Page.prototype.init = function(){
		var elem = this.elem,
			x = + (elem.getAttribute("data-x") || 0),
			y = + (elem.getAttribute("data-y") || 0),
			z = + (elem.getAttribute("data-z") || 0),
			rX = + (elem.getAttribute("data-rotate-x") || 0),
			rY = + (elem.getAttribute("data-rotate-y") || 0),
			rZ = + (elem.getAttribute("data-rotate-z") || 0),
			s = + (elem.getAttribute("data-scale") || 1);
		css(elem, "transform", [
			"translate(-50%,-50%)",
			"translate3d(" + x + "px," + y + "px," + z + "px)",
			"rotateX(" + rX + "deg)",
			"rotateY(" + rY + "deg)",
			"rotateZ(" + rZ + "deg)",
			"scale(" + s + ")"
		].join(" "));
	};
	Page.prototype.pushStep = function(step){
		this.stepQueue.push(step);
	};
	Page.prototype.prevStep = function(){
		this.currentStep.rollback();
		if (this.stepIndex > 0) {
			this.currentStep = this.stepQueue[-- this.stepIndex];
		} else {
			this.ppt.prevPage();
		}
	};
	Page.prototype.nextStep = function(){
		if (this.stepIndex < this.stepQueue.length - 1) {
			this.currentStep = this.stepQueue[++ this.stepIndex];
			this.currentStep.start();
		} else {
			this.ppt.nextPage();
		}
	};
	Page.prototype.start = function(){
		this.currentStep = this.stepQueue[this.stepIndex = 0];
		this.currentStep.start();
	};
	Page.prototype.resume = function(){
		var step = this.currentStep,
			index = this.stepIndex;
		do {
			step.rollback(true);
			step = this.stepQueue[-- index];
		} while (step)
		this.currentStep = this.stepQueue[this.stepIndex = 0];
	};

	var PPT = function(){
		this.pageQueue = [];
		this.pageIndex = 0;
		this.pageNameMap = {};
	};
	PPT.prototype.pushPage = function(page){
		this.pageNameMap[page.name] = this.pageQueue.length;
		this.pageQueue.push(page);
	};
	PPT.prototype.switchToPage = function(index, initial){
		var thenPage = this.currentPage,
			goingPage = this.pageQueue[index];
		if (goingPage) {
			thenPage.elem.className = "page";
			goingPage.elem.className = "page active";

			slideshow(goingPage.elem);

			if (initial) {
				requestAnimationFrame(function(){
					css(stage, "transition", "all 500ms ease-in-out 0ms");
					css(container, "transition", "all 500ms ease-in-out 0ms");
				});
			} else {
				setTimeout(function(){
					thenPage.resume();
				}, 500);
			}

			this.currentPage = goingPage;
			this.pageIndex = index;

			// window.history.pushState(null, null, "#!" + (this.currentPage.name || "page-" + (this.pageIndex + 1)));
			location.replace("#!" + (this.currentPage.name || "page-" + (this.pageIndex + 1)));
			this.currentPage.start();
		} else {
			// TODO: it was the first or last page
		}
	};
	PPT.prototype.prevPage = function(){
		this.switchToPage(this.pageIndex - 1);
	};
	PPT.prototype.nextPage = function(){
		this.switchToPage(this.pageIndex + 1);
	};
	PPT.prototype.prevStep = function(){
		this.currentPage.prevStep();
	};
	PPT.prototype.nextStep = function(){
		this.currentPage.nextStep();
	};
	PPT.prototype.start = function(){
		var self = this;
		document.addEventListener("keydown", function(e){
			if (e.ctrlKey || (e.shiftKey && e.keyCode != 32) || e.altKey || e.metaKey) {
				return;
			}
			switch (e.keyCode) {
				case 33: // page up
				case 34: // page down
				case 37: // left
				case 38: // up
				case 32: // space
				case 39: // right
				case 40: // down
					e.preventDefault();
					break;
			}
		}, false);
		document.addEventListener("keyup", function(e){
			if (e.ctrlKey || (e.shiftKey && e.keyCode != 32) || e.altKey || e.metaKey) {
				return;
			}
			var code = e.keyCode;
			if (e.shiftKey) {
				code = 37;
			}
			switch (code) {
				case 33: // page up
					self.prevPage();
					break;
				case 34: // page down
					self.nextPage();
					break;
				case 37: // left
				case 38: // up
					self.prevStep();
					break;
				case 32: // space
				case 39: // right
				case 40: // down
					self.nextStep();
					break;
				default:
					return;
			}
			e.preventDefault();
		}, false);
		this.currentPage = this.pageQueue[this.pageIndex = 0];
		this.currentPage.start();
	};

	var ppt = new PPT(),
		pageElems = q("#container > div.page[data-x]", document, true);
	for (var i = 0; i < pageElems.length; ++ i) {
		var page = new Page(ppt, pageElems[i]),
			// name = pageElems[i].getAttribute("page-name"),
			data = stepDatas[page.name];
		ppt.pushPage(page);
		if (data) {
			for (var j = 0; j < data.length; ++ j) {
				var step = new Step(page);
				page.pushStep(step);
				for (var k = 0; k < data[j].length; ++ k) {
					step.pushAnimation(data[j][k][0], data[j][k][1]);
				}
			}
		} else {
			page.pushStep(new Step(page));
		}
	}
	ppt.start();
	var pageIndex;
	if (/#!(.+)$/.test(location.hash)) {
		var pageName = location.hash.match(/#!(.+)$/)[1];
		pageIndex = location.hash.match(/#!page-(\d+)$/);
		if (pageIndex) {
			pageIndex = pageIndex[1] - 1;
		} else {
			pageIndex = ppt.pageNameMap[pageName];
		}
	} else {
		pageIndex = 0;
	}
	ppt.switchToPage(pageIndex, true);
})();
