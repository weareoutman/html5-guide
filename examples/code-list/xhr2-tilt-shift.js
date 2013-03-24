(function(){
	function g(a) {
		return document.getElementById(a);
	}

	var file = g("xhr-file"),
		btn = g("xhr-btn"),
		box = g("xhr-drop-box"),
		barBox = g("xhr-bar-box"),
		upProgress = g("xhr-up-bar"),
		downProgress = g("xhr-down-bar"),
		upImg = g("xhr-up-img"),
		downImg = g("xhr-down-img"),
		upTip = g("xhr-up-tip"),
		downTip = g("xhr-down-tip"),
		upSpeed = g("xhr-up-speed"),
		downSpeed = g("xhr-down-speed"),
		currentFile;

	file.onchange = function(){
		gotImageFiles(file.files);
	};

	box.ondragover = function(e){
		e.preventDefault();
		box.className = "dropping";
	};
	box.ondragleave = function(){
		box.className = "";
	};
	box.ondrop = function(e){
		e.preventDefault();
		box.className = "";
		gotImageFiles(e.dataTransfer.files);
	};

	btn.onclick = function(){
		if (currentFile) {
			btn.disabled = true;
			barBox.style.visibility = "visible";
			tiltShift(currentFile, function(url){
				upImg.style.display = "none";
				downImg.style.display = "";
				downImg.src = url;
				btn.disabled = false;
			});
		}
	};

	function gotImageFiles(files) {
		if (files.length > 0) {
			var img = files.item(0);
			if (/^image\/.*/.test(img.type)) {
				currentFile = img;
				upImg.src = (window.URL || window.webkitURL).createObjectURL(img);
				box.style.display = "none";
				upImg.style.display = "";
			}
		}
	}

	// 模拟移轴摄影
	function tiltShift(file, callback) {
		// 新建 Ajax 请求
		var xhr = new XMLHttpRequest();
		var url = "http://42.120.0.160/open/tilt-shift.php";
		// var url = "http://weihub.local/html5-guide/open/tilt-shift.php";
		xhr.open("POST", url);

		// 设置响应类型为 "blob" 二进制大对象
		// "", "arraybuffer", "blob", "document", "text"
		xhr.responseType = "blob";

		// 是否在请求中携带证书 (通常指cookie)
		// xhr.withCredentials = true;

		var upTimePoint, upLoadPoint;
		var firstUpTimePoint, upTotal;
		xhr.upload.onloadstart = function(e){
			console.log("upload start");
			upTimePoint = Date.now();
			upLoadPoint = 0;
			firstUpTimePoint = upTimePoint;
		};

		// 上传进度
		xhr.upload.onprogress = function(e){
			if (e.lengthComputable) {
				upProgress.max = e.total;
				upProgress.value = e.loaded;
				var timePoint = Date.now();
				var speed = (e.loaded - upLoadPoint) / (timePoint - upTimePoint);
				console.log("t " + (Date.now() - upTimePoint));
				console.log("l " + e.loaded);
				upSpeed.textContent = formatSpeed(speed);
				upTimePoint = timePoint;
				upLoadPoint = e.loaded;
				if (!upTotal) {
					upTotal = e.total;
				}
			}
		};
		xhr.upload.onloadend = function(e){
			console.log("upload end");
			upProgress.value = upProgress.max;
			upTip.innerHTML = "上传完成";
			var speed = upTotal / (Date.now() - firstUpTimePoint);
			upSpeed.textContent = formatSpeed(speed);
		};

		// 监听 load 事件
		xhr.onload = function(){
			console.log("download end");
			downProgress.value = downProgress.max;
			downTip.innerHTML = "下载完成";
			var speed = downTotal / (Date.now() - firstDownTimePoint);
			downSpeed.textContent = formatSpeed(speed);
			// 将返回的图片文件转为一个 Object URL
			// blob:http%3A//www.a.com/901da0f3-c50e-4b41-8492-94189706db42
			var url = (window.URL || window.webkitURL).createObjectURL(xhr.response);
			// 回调
			callback(url);
		};

		var downTimePoint, downLoadPoint;
		var firstDownTimePoint, downTotal;
		xhr.onreadystatechange = function(){
			// 已收到响应头
			if (xhr.readyState == xhr.HEADERS_RECEIVED) {
				console.log("download start");
				downTip.style.visibility = "visible";
				downProgress.style.visibility = "visible";
				downTimePoint = Date.now();
				downLoadPoint = 0;
				firstDownTimePoint = downTimePoint;
			}
		};

		// 下载进度
		xhr.onprogress = function(e){
			if (e.lengthComputable) {
				downProgress.max = e.total;
				downProgress.value = e.loaded;
				var timePoint = Date.now();
				var speed = (e.loaded - downLoadPoint) / (timePoint - downTimePoint);
				downSpeed.textContent = formatSpeed(speed);
				downTimePoint = timePoint;
				downLoadPoint = e.loaded;
				if (!downTotal) {
					downTotal = e.total;
				}
			}
		};

		// 处理错误
		xhr.onerror = function(e){
			console.log(e);
		};

		// 组建需要发送的表单数据
		var data = new FormData();
		// 增加一个key为 "img" 的图片文件
		data.append("img", file);

		// 发送
		xhr.send(data);
	};

	function formatSpeed(speed) {
		speed = speed  * 1000 / 1024;
		if (speed >= 10) {
			speed = Math.round(speed).toString(10);
		} else if (speed >= 1) {
			speed = speed.toFixed(1);
		} else {
			speed = speed.toFixed(2);
		}
		return "    ".substr(0, 4 - speed.length) + speed + " KB/s";
	}
})();