(function(){
	function World(context) {
		this.sky = new Sky();
		this.road = new Road([0, 245]);
		this.car = new Car([75, 190]);

		this.context = context;
		this.skyX = 0;
		this.roadX = 0;
	}
	function Element(translate, scale, rotate){
		this.render = function(context){
			context.save();
			if (translate) {
				context.translate(translate[0], translate[1]);
			}
			if (scale) {
				context.scale(scale[0], scale[1]);
			}
			if (rotate) {
				context.rotate(rotate);
			}
			this.draw(context);
			context.restore();
		};
	}
	function Sky(){
		Element.apply(this, arguments);
		this.cloud1 = new Cloud([60, 30], [0.7, 0.7]);
		this.cloud2 = new Cloud([200, 50]);
		this.cloud3 = new Cloud([-240, 30], [0.7, 0.7]);
		this.cloud4 = new Cloud([-100, 50]);
	}
	function Cloud(){
		Element.apply(this, arguments);
	}
	function Road(){
		Element.apply(this, arguments);
		this.tree1 = new Tree([50, 5], [1, 1.5]);
		this.tree2 = new Tree([250, 5]);
		this.tree3 = new Tree([-250, 5], [1, 1.5]);
		this.tree4 = new Tree([-50, 5]);
	}
	function Tree(){
		Element.apply(this, arguments);
	}
	function Car() {
		Element.apply(this, arguments);
		this.frame = new CarFrame();
		this.frontWheel = new CarWheel([45, 65]);
		this.rearWheel = new CarWheel([110, 65]);
		this.frameX = 0;
		this.frameY = 1;
	}
	function CarFrame(){
		Element.apply(this, arguments);
	}
	function CarWheel(){
		Element.apply(this, arguments);
		this.tyre = new CarWheelTyre();
		this.spokes = new CarWheelSpokes();
		this.spokesRotate = 0;
	}
	function CarWheelTyre(){
		Element.apply(this, arguments);
	}
	function CarWheelSpokes(){
		Element.apply(this, arguments);
	}

	World.prototype.render = function(){
		var context = this.context;
		context.save();
		context.translate(this.skyX, 0);
		this.sky.render(context);
		context.restore();
		context.save();
		context.translate(this.roadX, 0);
		this.road.render(context);
		context.restore();
		this.car.render(context);
	};
	Sky.prototype.draw = function(context){
		context.fillStyle = "#90dfff";
		context.fillRect(-300, 0, 600, 300);
		this.cloud1.render(context);
		this.cloud2.render(context);
		this.cloud3.render(context);
		this.cloud4.render(context);
	};
	Cloud.prototype.draw = function(context){
		context.fillStyle = "#fff";
		context.beginPath();
		context.moveTo(5, 60);
		context.quadraticCurveTo(5, 45, 20, 40);
		context.arcTo(20, 20, 35, 30, 10);
		context.bezierCurveTo(40, 12, 60, 12, 70, 30);
		context.arcTo(100, 30, 100, 60, 30);
		context.closePath();
		context.fill();
	};
	Road.prototype.draw = function(context){
		context.fillStyle = "#64a0cf";
		context.fillRect(-300, 0, 600, 55);
		context.fillStyle = "#eee";
		context.fillRect(0, 26, 40, 3);
		context.fillRect(60, 26, 40, 3);
		context.fillRect(120, 26, 40, 3);
		context.fillRect(180, 26, 40, 3);
		context.fillRect(240, 26, 40, 3);
		context.fillRect(-60, 26, 40, 3);
		context.fillRect(-120, 26, 40, 3);
		context.fillRect(-180, 26, 40, 3);
		context.fillRect(-240, 26, 40, 3);
		context.fillRect(-300, 26, 40, 3);
		this.tree1.render(context);
		this.tree2.render(context);
		this.tree3.render(context);
		this.tree4.render(context);
	};
	Tree.prototype.draw = function(){
		context.fillStyle = "#64a0cf";
		context.beginPath();
		context.moveTo(-7, 0);
		context.lineTo(-7, -30);
		context.lineTo(-30, -30);
		context.lineTo(-10, -50);
		context.lineTo(-20, -50);
		context.lineTo(0, -70);
		context.lineTo(20, -50);
		context.lineTo(10, -50);
		context.lineTo(30, -30);
		context.lineTo(7, -30);
		context.lineTo(7, 0);
		context.closePath();
		context.fill();
	};
	Car.prototype.draw = function(context){
		context.save();
		context.translate(this.frameX, this.frameY);
		this.frame.render(context);
		context.restore();
		this.frontWheel.render(context);
		this.rearWheel.render(context);
	};
	CarFrame.prototype.draw = function(context){
		context.strokeStyle = "#396180";
		context.fillStyle = "#98c8e7";
		context.lineWidth = 2;
		context.beginPath();
		context.moveTo(15, 65);
		context.quadraticCurveTo(5, 40, 55, 35);
		context.quadraticCurveTo(60, 25, 60, 15);
		context.quadraticCurveTo(145, 5, 135, 65);
		context.closePath();
		context.fill();
		context.stroke();
	}
	CarWheel.prototype.draw = function(context){
		this.tyre.render(context);
		context.save();
		context.rotate(this.spokesRotate);
		this.spokes.render(context);
		context.restore();
	};
	CarWheelTyre.prototype.draw = function(context){
		context.strokeStyle = "#396180";
		context.fillStyle = "#98c8e7";
		context.lineWidth = 3;
		context.beginPath();
		context.arc(0, 0, 12, 0, 2 * Math.PI);
		context.closePath();
		context.fill();
		context.stroke();
	};
	CarWheelSpokes.prototype.draw = function(context){
		var temp = Math.sin(Math.PI / 4) * 12;
		var spokes = [
			[[-12, 0], [12, 0]],
			[[0, -12], [0, 12]],
			[[-temp, temp], [temp, -temp]],
			[[-temp, -temp], [temp, temp]]
		];
		context.strokeStyle = "#396180";
		context.lineWidth = 1;
		for (var i = 0; i < spokes.length; ++ i) {
			var spoke = spokes[i];
			context.beginPath();
			context.moveTo(spoke[0][0], spoke[0][1]);
			context.lineTo(spoke[1][0], spoke[1][1]);
			context.stroke();
		}
	};
	var canvas = document.getElementById("canvas-world");
	var context = canvas.getContext("2d");
	var world = new World(context);
	var startTime = Date.now();
	var ratio = 1;
	var speedOutput = document.querySelector("output[for=canvas-world-speed]");
	document.getElementById("canvas-world-speed").onchange = function(){
		var lastRatio = ratio;
		var speed = this.value;
		ratio = speed / 200;
		var now = Date.now();
		startTime = now - (now - startTime) % (5000 / lastRatio) / (5000 / lastRatio) * 5000 / ratio;
		if (speed == 1) {
			speed = 0;
		}
		speed = Math.round(speed) + "";
		speedOutput.value = "  ".substr(0, 3 - speed.length) + speed + " km/h";
	};
	function reRender(){
		var diffTime = Date.now() - startTime;
		world.skyX = diffTime % (5000 / ratio) / (5000 / ratio) * 300;
		world.roadX = diffTime % (1250 / ratio) / (1250 / ratio) * 300;
		world.car.frameX = Math.sin(diffTime / 200 * Math.PI) * ratio;
		world.car.frameY = Math.cos(diffTime / 200 * Math.PI) * ratio;
		world.car.frontWheel.spokesRotate = - diffTime % (1000 / ratio) / (1000 / ratio) * Math.PI * 2;
		world.car.rearWheel.spokesRotate = - diffTime % (1000 / ratio) / (1000 / ratio) * Math.PI * 2;
		world.render();
		requestAnimationFrame(reRender);
	}
	reRender();
})();