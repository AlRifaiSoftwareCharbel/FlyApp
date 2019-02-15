(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/MasterDryRoastedPin.jpeg", id:"MasterDryRoastedPin"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.MasterDryRoastedPin = function() {
	this.initialize(img.MasterDryRoastedPin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,480);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MasterDryRoastedPin();
	this.instance.setTransform(-240,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-240,480,480);


(lib.dercopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("REPLAY", "bold 55px 'Montserrat'", "#257727");
	this.text.textAlign = "center";
	this.text.lineHeight = 78;
	this.text.setTransform(86.4,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#257727").s().p("A0rI5IAAxyMApXAAAIAARyg");
	this.shape.setTransform(90.7,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#257727"}}]}).to({state:[{t:this.text,p:{color:"#FF0000"}}]},1).to({state:[{t:this.shape},{t:this.text,p:{color:"#257727"}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,0,234.3,79.9);


(lib.der = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("CLICK", "bold 55px 'Montserrat'", "#257727");
	this.text.textAlign = "center";
	this.text.lineHeight = 78;
	this.text.setTransform(86.4,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AtyGPIAAsdIblAAIAAMdg");
	this.shape.setTransform(88.4,39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#257727"}}]}).to({state:[{t:this.text,p:{color:"#FF0000"}}]},1).to({state:[{t:this.shape},{t:this.text,p:{color:"#257727"}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.7,79.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		var that=this;
		
		function fl_ClickToGoToWebPage() {	
			that.play();
		}
	}
	this.frame_35 = function() {
		this.stop();
		
		this.button_2.addEventListener("click", fl_ClickToGoToWebPage2);
		
		var that1=this;
		
		function fl_ClickToGoToWebPage2() {	
			that1.gotoAndPlay(4);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(1));

	// Layer 3
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(0,-9,0.054,0.054,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({scaleX:1.11,scaleY:1.11,skewY:0},5).to({scaleX:0.69,scaleY:0.69},2).to({_off:true},23).wait(3));

	// Layer 2
	this.button_1 = new lib.der();
	this.button_1.setTransform(14.2,-15.1,1,1,0,0,0,88.4,39.9);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.der(), 3);

	this.button_2 = new lib.dercopy();
	this.button_2.setTransform(14.2,-15.1,1,1,0,0,0,88.4,39.9);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.dercopy(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_1}]}).to({state:[]},3).to({state:[{t:this.button_2}]},29).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.2,-55,176.7,79.9);


// stage content:



(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.mv = new lib.Symbol1();
	this.mv.setTransform(550.5,398.5,1,1,0,0,0,274.5,200.5);

	this.timeline.addTween(cjs.Tween.get(this.mv).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(476.7,343,176.7,79.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;