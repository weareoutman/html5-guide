var stepDatas = (function(){
var stepDatas = [];

stepDatas["history"] = [
	[],
	[
		[{
			"#html5-logo": {
				className: {
					from: "",
					to: "step-2"
				}
			},
			"#historylog": {
				className: {
					from: "",
					to: "step-2"
				}
			},
			"#author": {
				opacity: {
					from: 1,
					to: 0.3,
					duration: 300
				}
			}
		}, 300]
	]
];

var apiCode = {
	transform: {
		from: "scale(0,0)",
		to: "scale(1,1)",
		duration: 300
	},
	opacity: {
		from: 0,
		to: 1,
		duration: 300
	}
};
var apiCodeBack = {
	transform: {
		from: "scale(1,1)",
		to: "scale(0,0)",
		duration: 300
	},
	opacity: {
		from: 1,
		to: 0,
		duration: 300
	}
};
var apiLi = {
	className: {
		from: "",
		to: "focus"
	}
};
var apiLiBack = {
	className: {
		from: "focus",
		to: ""
	}
};

stepDatas["canvas"] = [
	[],
	[
		[{
			"#canvas-api-code pre:nth-of-type(1)": apiCode,
			"#canvas-api-list li:nth-of-type(1)": apiLi
		}, 300]
	]
];

for (var i = 1; i < 6; ++ i) {
	var j = i + 1;
	var a = {};
	a["#canvas-api-code pre:nth-of-type("+i+")"] = apiCodeBack;
	a["#canvas-api-list li:nth-of-type("+i+")"] = apiLiBack;
	var b = {};
	b["#canvas-api-code pre:nth-of-type("+j+")"] = apiCode;
	b["#canvas-api-list li:nth-of-type("+j+")"] = apiLi;
	stepDatas["canvas"].push([
		[a, 300],
		[b, 300]
	]);
}

stepDatas["svg-2"] = [
	[],
	[
		[{
			"#svg-api-code pre": apiCode
		}]
	],
	[
		[{
			"#svg-api-list li:nth-of-type(1)": apiLi,
			"#svg-api-code span:nth-of-type(1)": apiLi
		}, 300]
	]
];

for (var i = 1; i < 7; ++ i) {
	var j = i + 1;
	var a = {};
	a["#svg-api-list li:nth-of-type("+i+")"] = apiLiBack;
	a["#svg-api-code span:nth-of-type("+i+")"] = apiLiBack;
	var b = {};
	b["#svg-api-list li:nth-of-type("+j+")"] = apiLi;
	b["#svg-api-code span:nth-of-type("+j+")"] = apiLi;
	stepDatas["svg-2"].push([
		[a, 300],
		[b, 300]
	]);
}

var catalogP = {
	transform: {
		from: "translateX(400px) translateY(10px) translateZ(-100px) rotateX(-30deg) rotateZ(10deg)",
		to: "translate(0,0)",
		duration: 300
	},
	opacity: {
		from: 0,
		to: 1,
		duration: 300
	}
};
stepDatas["catalog"] = [
	[],
	[
		[{
			"#catalog": {
				transform: {
					from: "translate(200px,0)",
					to: "translate(0,0)",
					duration: 300
				}
			}
		}, 300],
		[{
			"#catalog li:nth-of-type(1) p:nth-of-type(1)": catalogP
		}, 300]
	],
	[
		[{
			"#catalog li:nth-of-type(1) p:nth-of-type(2)": catalogP
		}, 300]
	]
];

for (var i = 2; i < 10; ++ i) {
	var a = {};
	a["#catalog li:nth-of-type("+i+") p"] = catalogP;
	stepDatas["catalog"].push([
		[a, 300]
	]);
}
stepDatas["catalog"].push([
	[{
		"#catalog b": {
			className: {
				from: "",
				to: "focus"
			}
		}
	}, 1]
]);

stepDatas["svg"] = [
	[],
	[
		[{
			"#svg-logo,#svg-intro": {
				className: {
					from: "",
					to: "step-2"
				}
			}
		}, 300]
	],
	[
		[{
			"#svg-intro,#svg-logo-code": {
				className: {
					from: "step-2",
					to: "step-3"
				}
			}
		}, 300]
	]
];

stepDatas["canvas-or-svg"] = [
	[],
	[
		[{
			"#c-v-s-table,#c-v-s-diagram": {
				className: {
					from: "",
					to: "step-2"
				}
			}
		}, 300]
	]
];

stepDatas["canvas-or-svg-2"] = [
	[],
	[
		[{
			"#c-v-s-2-table,#c-v-s-2-diagram": {
				className: {
					from: "",
					to: "step-2"
				}
			}
		}, 300]
	]
];

stepDatas["xhr2-3"] = [
	[],
	[
		[{
			"#xhr-catalog li:nth-of-type(1) p:nth-of-type(1)": catalogP
		}, 300]
	],
	[
		[{
			"#xhr-catalog li:nth-of-type(1) p:nth-of-type(2)": catalogP
		}, 300]
	],
	[
		[{
			"#xhr-catalog li:nth-of-type(1) p:nth-of-type(3)": catalogP
		}, 300]
	],
	[
		[{
			"#xhr-catalog li:nth-of-type(2) p": catalogP
		}, 300]
	],
	[
		[{
			"#xhr-catalog li:nth-of-type(3) p": catalogP
		}, 300]
	],
	[
		[{
			"#xhr-catalog li:nth-of-type(4) p:nth-of-type(1)": catalogP
		}, 300]
	],
	[
		[{
			"#xhr-catalog li:nth-of-type(4) p:nth-of-type(2)": catalogP
		}, 300]
	]
];

stepDatas["xhr2-4"] = [
	[],
	[
		[{
			"#xhr2-catalog li:nth-of-type(1) p": catalogP
		}, 300]
	],
	[
		[{
			"#cors-options-req,#cors-options-res": {
				visibility: {
					from: "hidden",
					to: "visible"
				},
				transform: {
					from: "scale(0,0)",
					to: "scale(1,1)",
					duration: 300
				}
			}
		}, 300]
	],
	[
		[{
			"#cors-options-req,#cors-options-res": {
				visibility: {
					from: "visible",
					to: "hidden",
					delay: 300
				},
				transform: {
					from: "scale(1,1)",
					to: "scale(0,0)",
					duration: 300
				}
			}
		}, 300],
		[{
			"#cors-post-req,#cors-post-res": {
				visibility: {
					from: "hidden",
					to: "visible"
				},
				transform: {
					from: "scale(0,0)",
					to: "scale(1,1)",
					duration: 300
				}
			}
		}, 300]
	],
	[
		[{
			"#cors-post-req,#cors-post-res": {
				visibility: {
					from: "visible",
					to: "hidden",
					delay: 300
				},
				transform: {
					from: "scale(1,1)",
					to: "scale(0,0)",
					duration: 300
				}
			}
		}, 300]
	],
	[
		[{
			"#xhr2-catalog li:nth-of-type(2) p": catalogP
		}, 300]
	],
	[
		[{
			"#xhr2-upload-file": {
				visibility: {
					from: "hidden",
					to: "visible"
				},
				transform: {
					from: "scale(0,0)",
					to: "scale(1,1)",
					duration: 300
				}
			}
		}, 300]
	],
	[
		[{
			"#xhr2-upload-file": {
				visibility: {
					from: "visible",
					to: "hidden",
					delay: 300
				},
				transform: {
					from: "scale(1,1)",
					to: "scale(0,0)",
					duration: 300
				}
			}
		}, 300]
	],
	[
		[{
			"#xhr2-catalog li:nth-of-type(3) p": catalogP
		}, 300]
	],
	[
		[{
			"#xhr2-binary": {
				visibility: {
					from: "hidden",
					to: "visible"
				},
				transform: {
					from: "scale(0,0)",
					to: "scale(1,1)",
					duration: 300
				}
			}
		}, 300]
	],
	[
		[{
			"#xhr2-binary": {
				visibility: {
					from: "visible",
					to: "hidden",
					delay: 300
				},
				transform: {
					from: "scale(1,1)",
					to: "scale(0,0)",
					duration: 300
				}
			}
		}, 300]
	],
	[
		[{
			"#xhr2-catalog li:nth-of-type(4) p:nth-of-type(1)": catalogP
		}, 300]
	],
	[
		[{
			"#xhr2-catalog li:nth-of-type(4) p:nth-of-type(2)": catalogP
		}, 300]
	],
	[
		[{
			"#xhr2-progress": {
				visibility: {
					from: "hidden",
					to: "visible"
				},
				transform: {
					from: "scale(0,0)",
					to: "scale(1,1)",
					duration: 300
				}
			}
		}, 300]
	],
	[
		[{
			"#xhr2-progress": {
				visibility: {
					from: "visible",
					to: "hidden",
					delay: 300
				},
				transform: {
					from: "scale(1,1)",
					to: "scale(0,0)",
					duration: 300
				}
			}
		}, 300]
	]
];

stepDatas["drag-n-drop"] = [
	[],
	[
		[{
			"#drag-elem,#drop-box": {
				transform: {
					from: "translate(0,0)",
					to: "translate(-200px,0)",
					duration: 300
				},
				opacity: {
					from: 1,
					to: 0.5,
					duration: 300
				}
			},
			"#drag-code": {
				transform: {
					from: "scale(0,0)",
					to: "scale(1,1)",
					duration: 300,
					delay: 150
				},
				opacity: {
					from: 0,
					to: 1,
					duration: 300,
					delay: 150
				}
			}
		}, 450]
	]
];

stepDatas["ws-intro"] = [
	[],
	[
		[{
			"#ws-intro-1,#ws-intro-2": {
				className: {
					from: "",
					to: "step-2"
				}
			}
		}, 1],
	],
	[
		[{
			"#ws-intro-1,#ws-intro-2,#ws-intro-img": {
				className: {
					from: "step-2",
					to: "step-3"
				}
			}
		}, 1]
	],
	[
		[{
			"#ws-intro-2,#ws-intro-img": {
				className: {
					from: "step-3",
					to: "step-4"
				}
			}
		}, 1]
	],
	[
		[{
			"#ws-intro-2,#ws-intro-img": {
				className: {
					from: "step-4",
					to: "step-5"
				}
			}
		}, 1]
	],
	[
		[{
			"#ws-intro-2,#ws-intro-img": {
				className: {
					from: "step-5",
					to: "step-6"
				}
			}
		}, 1]
	]
];

stepDatas["websocket"] = [
	[],
	[
		[{
			"#ws-code": {
				width: {
					from: "800px",
					to: "320px",
					duration: 300
				}
			}
		}, 300],
		[{
			"#figure-websocket": {
				visibility: {
					from: "hidden",
					to: "visible"
				}
			},
			"#ent-browser": {
				left: {
					from: "600px",
					to: "400px",
					duration: 300
				}
			},
			"#ent-server": {
				left: {
					from: "600px",
					to: "800px",
					duration: 300
				}
			},
			"#arr-browser": {
				left: {
					from: "640px",
					to: "440px",
					duration: 300
				}
			},
			"#arr-server": {
				left: {
					from: "640px",
					to: "840px",
					duration: 300
				}
			},
			"#arr-browser .arrow-body": {
				height: {
					from: "0",
					to: "450px",
					duration: 300,
					delay: 300
				}
			},
			"#arr-server .arrow-body": {
				height: {
					from: "0",
					to: "450px",
					duration: 300,
					delay: 300
				}
			}
		}, 600],
		[{
			"#txt-open-handshake": {
				visibility: {
					from: "hidden",
					to: "visible"
				},
				opacity: {
					from: 0,
					to: 1,
					duration: 300
				}
			},
			"#open-handshake-req": {
				visibility: {
					from: "hidden",
					to: "visible"
				},
				width: {
					from: "0",
					to: "378px",
					duration: 300
				}
			}
		}, 300],
		[{
			"#pkt-request": {
				visibility: {
					from: "hidden",
					to: "visible"
				}
			},
			"#pkt-request img": {
				transform: {
					from: "rotateX(90deg)",
					to: "rotateX(0)",
					duration: 300
				}
			}
		}, 300],
	],
	[
		[{
			"#pkt-request": {
				left: {
					from: "60px",
					to: "390px",
					duration: 300
				},
				top: {
					from: "40px",
					to: "110px",
					duration: 300
				}
			},
			"#pkt-handshake": {
				visibility: {
					from: "hidden",
					to: "visible",
					delay: 300
				}
			},
			"#pkt-handshake img": {
				transform: {
					from: "rotateX(90deg)",
					to: "rotateX(0)",
					duration: 300,
					delay: 300
				}
			}
		}, 600]
	],
	[
		[{
			"#pkt-request": {
				visibility: {
					from: "visible",
					to: "hidden",
					delay: 300
				}
			},
			"#pkt-request img": {
				transform: {
					from: "rotateY(0)",
					to: "rotateY(90deg)",
					duration: 300
				}
			},
			"#pkt-response": {
				visibility: {
					from: "hidden",
					to: "visible",
					delay: 300
				}
			},
			"#pkt-response img": {
				transform: {
					from: "rotateY(-90deg)",
					to: "rotateY(0)",
					duration: 300,
					delay: 300
				}
			},
			"#open-handshake-res": {
				visibility: {
					from: "hidden",
					to: "visible",
					delay: 300
				},
				width: {
					from: "0",
					to: "378px",
					duration: 300,
					delay: 300
				}
			}
		}, 600]
	],
	[
		[{
			"#pkt-response": {
				left: {
					from: "390px",
					to: "60px",
					duration: 300
				},
				top: {
					from: "110px",
					to: "160px",
					duration: 300
				}
			},
			"#pkt-handshake": {
				visibility: {
					from: "visible",
					to: "hidden",
					delay: 300
				}
			},
			"#pkt-handshake img": {
				transform: {
					from: "rotateX(0)",
					to: "rotateX(90deg)",
					duration: 300
				}
			}
		}, 300]
	],
	[
		[{
			"#pkt-response": {
				visibility: {
					from: "visible",
					to: "hidden",
					delay: 300
				},
				transform: {
					from: "rotateX(0)",
					to: "rotateX(90deg)",
					duration: 300
				}
			},
			"#txt-send-n-receive": {
				visibility: {
					from: "hidden",
					to: "visible",
					delay: 300
				},
				opacity: {
					from: 0,
					to: 1,
					duration: 300,
					delay: 300
				}
			},
			"#pkt-frame": {
				visibility: {
					from: "hidden",
					to: "visible",
					delay: 300
				}
			},
			"#pkt-frame img": {
				transform: {
					from: "rotateX(90deg)",
					to: "rotateX(0)",
					duration: 300,
					delay: 300
				}
			},
			"#client-send": {
				visibility: {
					from: "hidden",
					to: "visible",
					delay: 300
				},
				width: {
					from: "0",
					to: "378px",
					duration: 300,
					delay: 300
				}
			}
		}, 600]
	],
	[
		[{
			"#pkt-frame": {
				top: {
					from: "200px",
					to: "260px",
					duration: 300
				},
				left: {
					from: "-10px",
					to: "390px",
					duration: 300
				}
			},
			"#data-frame": {
				top: {
					from: "55px",
					to: "-120px",
					duration: 300
				},
				left: {
					from: "-238px",
					to: "-550px",
					duration: 300
				}
			},
			"#pkt-parse": {
				visibility: {
					from: "hidden",
					to: "visible",
					delay: 300
				}
			},
			"#pkt-parse img": {
				transform: {
					from: "rotateX(90deg)",
					to: "rotateX(0)",
					duration: 300,
					delay: 300
				}
			}
		}, 600]
	],
	[
		[{
			"#pkt-frame img": {
				transform: {
					from: "rotateY(0)",
					to: "rotateY(90deg)",
					duration: 300
				}
			},
			"#pkt-parse": {
				visibility: {
					from: "visible",
					to: "hidden",
					delay: 300
				}
			},
			"#pkt-parse img": {
				transform: {
					from: "rotateX(0)",
					to: "rotateX(90deg)",
					duration: 300
				}
			}
		}, 300],
		[{
			"#pkt-frame img": {
				transform: {
					from: "rotateY(90deg)",
					to: "rotateY(-90deg)"
				}
			}
		}, 17],
		[{
			"#pkt-frame img": {
				transform: {
					from: "rotateY(-90deg)",
					to: "rotateY(0)",
					duration: 300
				}
			},
			"#server-send": {
				visibility: {
					from: "hidden",
					to: "visible"
				},
				width: {
					from: "0",
					to: "378px",
					duration: 300
				}
			}
		}, 300]
	],
	[
		[{
			"#pkt-frame": {
				top: {
					from: "260px",
					to: "330px",
					duration: 300
				},
				left: {
					from: "390px",
					to: "60px",
					duration: 300
				}
			},
			"#data-frame": {
				top: {
					from: "-120px",
					to: "-280px",
					duration: 300
				},
				left: {
					from: "-550px",
					to: "-238px",
					duration: 300
				}
			}
		}, 300]
	],
	[]
];
return stepDatas;
})();