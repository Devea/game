//2133x1419

var game = {
	init: function(){
		window.onresize = this.resize;
	},
	resize: function (){
		var l = document.querySelector(".main");
		if( (l.offsetWidth/l.offsetHeight) > (2133/1419) ){
			l.querySelector("img").style.width = "auto";
			l.querySelector("img").style.height = "100%";
		} else {
			l.querySelector("img").style.width = "100%";
			l.querySelector("img").style.height = "auto";
		}
	}
}