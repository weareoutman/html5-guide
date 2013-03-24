<?php
// 允许 CORS 的源列表
$allowed = array('http://weihub.local', 'http://192.168.50.115');

// CORS 请求, 会带有 Origin 头部
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

$MimeTypes = array(
	'image/gif'  => '.gif',
	'image/jpeg' => '.jpg', 'image/pjpeg' => '.jpg',
	'image/png'  => '.png', 'image/x-png' => '.png'
);

$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
	if ($origin && in_array($origin, $allowed)) {
		header('Access-Control-Allow-Origin: ' . $origin);
		header('Access-Control-Allow-Methods: GET, POST');
		header('Access-Control-Allow-Headers: origin, content-type');
		header('Access-Control-Allow-Credentials: true');
		header('Access-Control-Max-Age: 86400');
	} else {
		exit;
	}
} else if ($method == "POST") {
	if ($origin) {
		if (in_array($origin, $allowed)) {
			header('Access-Control-Allow-Origin: ' . $origin);
			header('Access-Control-Allow-Credentials: true');
		} else {
			exit;
		}
	}
	if (isset($_FILES['img'])) {
		$file = $_FILES['img'];
		if (is_uploaded_file($file['tmp_name'])
				&& $file['error'] == UPLOAD_ERR_OK
				&& isset($MimeTypes[$file['type']])) {
			// 执行 移轴摄影 滤镜
			$content = filter_tilt_shift($file['tmp_name']);
			header('Content-Type: image/png');
			// 发送 Content-Length 响应头，以便追踪下载进度
			header('Content-Length: ' . strlen($content));
			echo $content;
		}
	}
}

function filter_tilt_shift($filename) {
	return @file_get_contents('./tilt-shift-after.png');
}