//2133x1419

var game = {
	init: function(){
		window.onresize = this.resize;
		this.resize();
	},
	resize: function (){
		var l = document.querySelector(".main");
		var img = l.querySelector("img");
		var map = l.querySelector("map");
		var w = 2133;
		var h = 1419;
		if( (l.offsetWidth/l.offsetHeight) > (w/h) ){
			img.style.width = "auto";
			var margin = (l.offsetHeight/h)*500;
			img.style.height = (l.offsetHeight+margin)+"px";
			img.style.left = (l.offsetWidth/2-img.offsetWidth/2)+"px";
			img.style.top = (margin/-2)+"px";
		} else {
			var margin = (l.offsetWidth/w)*500;
			img.style.width = (l.offsetWidth+margin)+"px";
			img.style.height = "auto";
			img.style.left = (margin/-2)+"px";
			img.style.top = (l.offsetHeight/2-img.offsetHeight/2)+"px";
		}
		
		for(var i=0; i<map.areas.length; i++){
			var c = map.areas[i].getAttribute("data-coords").split(",");
			/*if(map.areas[i].shape = "rect"){
				var str = c[0]*img.offsetWidth + ",";
				str += c[1]*img.offsetHeight + ",";
				str += c[2]*img.offsetWidth + ",";
				str += c[3]*img.offsetHeight;
				map.areas[i].coords = str;
			} else if(map.areas[i].shape = "rect"){*/
				var str = new String();
				for(var j=0; j<c.length; j++){
					if(j%2==0)
						str += c[j]*img.offsetWidth;
					else
						str += c[j]*img.offsetHeight;
					if(j<c.length-1)
						str += ",";
				}
				map.areas[i].coords = str;
				console.log(map.areas[i].coords);
			//}
		}
	}
}