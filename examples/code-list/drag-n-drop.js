(function(){
	var box = document.getElementById("drop-box");
	box.ondragover = function(e){
		e.preventDefault();
		box.className = "dropping";
	};
	box.ondragleave = function(e){
		box.className = "";
	};
	box.ondrop = function(e){
		e.preventDefault();
		box.className = "";
		var transfer = e.dataTransfer,
			files = transfer.files;
		if (files.length > 0) {
			for (var i = 0; i < files.length; ++ i) {
				var file = files[i];
				somethingDropped("file", file);
			}
		} else {
			var text = transfer.getData("Text");
			if (text) {
				try {
					var uri = transfer.getData("text/uri-list");
					if (uri) {
						var html = transfer.getData("text/html");
						var div = document.createElement("div");
						div.innerHTML = html;
						var elem = div.firstChild;
						if (elem.tagName == "IMG") {
							somethingDropped("image", elem);
						} else {
							somethingDropped("link", uri);
						}
					} else {
						somethingDropped("text", text);
					}
				// IE 10 only support "Text" and "URL"
				} catch(ex) {
					var url = transfer.getData("URL");
					if (url) {
						somethingDropped("link", url);
					} else {
						somethingDropped("text", text);
					}
				}
				
			} else {
				somethingDropped("unknown", "");
			}
		}
		// debugger;
	};

	function dragstart(e) {
		e.dataTransfer.setData('Text', '元素#' + this.id);
	}
	function drop(e){
		console.log("drop");
		e.preventDefault();
		this.className = "";
		var text = e.dataTransfer.getData("Text");
		if (text && /^元素#.+/.test(text)) {
			var selector = text.replace(/^元素/, "");
			var elem = document.querySelector(selector);
			if (elem) {
				if (elem == this) {
					return;
				} else {
					var temp = elem.style.left;
					elem.style.left = this.style.left;
					this.style.left = temp;
				}
			}
		}
	}

	var elemA = document.querySelector("#drag-elem-a");
	var elemB = document.querySelector("#drag-elem-b");
	elemA.ondragstart = elemB.ondragstart = dragstart;
	elemA.ondragover = elemB.ondragover = function(e){
		e.preventDefault();
		this.className = "dropping";
	};
	elemA.ondragleave = elemB.ondragleave = function(e){
		this.className = "";
	};
	elemA.ondrop = elemB.ondrop = drop;

	var config = {
		file: {
			name: "文件",
			color: "#008000"
		},
		text: {
			name: "文本",
			color: "#444444"
		},
		image: {
			name: "图片",
			color: "#dd1144"
		},
		link: {
			name: "链接",
			color: "#004b8a"
		},
		element: {
			name: "元素",
			color: "#008000"
		},
		unknown: {
			name: "未知",
			color: "#008000"
		}
	};

	function byteSize(size) {
		var KB = 1024,
			MB = KB * KB,
			n;
		if (size >= MB) {
			n = size / MB;
			if (n >= 10) {
				return Math.round(n) + "MB";
			} else {
				return n.toFixed(1) + "MB";
			}
		} else {
			n = size / KB;
			if (n >= 10) {
				return Math.round(n) + "KB";
			} else if (n >= 1) {
				return n.toFixed(1) + "KB";
			} else {
				return n.toFixed(2) + "KB";
			}
		}
	}

	function somethingDropped(type, data) {
		if (type == "text" && /^元素.+/.test(data)) {
			type = "element";
			data = data.replace(/^元素/, "");
		}
		var category = document.createElement("span");
		var content = category.cloneNode();
		switch (type) {
			case "file":
				var span = document.createElement("span");
				span.textContent = data.name;
				span.title = data.type + ", " + byteSize(data.size);
				content.appendChild(span);
				// content.textContent = [data.type, data.name, data.size].join(", ");
				break;
			case "text":
				content.textContent = '"' + data + '"';
				break;
			case "image":
				var a = document.createElement("a");
				a.textContent = data.src;
				a.href = data.src;
				a.title = data.width + " * " + data.height;
				a.setAttribute("target", "_blank");
				a.style.color = config[type].color;
				content.appendChild(a);
				break;
			case "link":
				var a = document.createElement("a");
				a.textContent = data;
				a.href = data;
				a.title = data;
				a.setAttribute("target", "_blank");
				a.style.color = config[type].color;
				content.appendChild(a);
				break;
			case "element":
				content.textContent = data;
				break;
			case "unknown":
				content.textContent = "";
				break;
		}

		category.textContent = "[" + config[type].name + "] ";
		category.style.color = config[type].color;
		content.style.color = config[type].color;

		var p = document.createElement("p");
		p.appendChild(category);
		p.appendChild(content);
		box.appendChild(p);
	}
	function colorText(text, color) {
		var span = document.createElement("span");
		span.style.color = color;
		span.textContent = text;
		return span;
	}
})();