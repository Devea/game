//2133x1419

var game = {
	width: 0,
	height: 0,
	margin: 0,
	img: null,
	map: null,
	main: null,
	init: function(){
		window.onresize = this.resize;
		this.main = document.querySelector(".main");
		this.img = document.querySelector(".main").querySelector("img");
		this.map = document.querySelector(".main").querySelector("map");
		this.loadLocation("city");
		this.resize();
	},
	loadLocation: function(loc){
		var location = eval(getContent("js/locations/"+loc+".js"));
		this.width = location.img.width;
		this.height = location.img.height;
		this.margin = location.img.margin;
		this.img.src = "img/"+location.img.src;
		for(var i=0; i<location.map.length; i++){
			var area = document.createElement("AREA");
			area.shape = location.map[i].shape;
			area.coords = "0,0,0,0";
			area.setAttribute("data-coords",location.map[i].coords);
			area.href = "javascript:"+location.map[i].onclick;
			if(location.map[i].hovercontext){
				area.setAttribute("data-hc",location.map[i].hovercontext);
				area.onmouseover = function(e){hc.over(e)};
				area.onmousemove = function(e){hc.move(e)};
				area.onmouseout = function(e){hc.out(e)};
			}
			this.map.appendChild(area);
		}
		this.resize();
	},
	resize: function (){
		//var l = document.querySelector(".main");
		//var img = l.querySelector("img");
		//var map = l.querySelector("map");
		//var w = 2133;
		//var h = 1419;
		if( (game.main.offsetWidth/game.main.offsetHeight) > (game.width/game.height) ){
			game.img.style.width = "auto";
			var m = (game.main.offsetHeight/game.height)*game.margin;
			game.img.style.height = (game.main.offsetHeight+m)+"px";
			game.img.style.left = (game.main.offsetWidth/2-game.img.offsetWidth/2)+"px";
			game.img.style.top = (m/-2)+"px";
		} else {
			var m = (game.main.offsetWidth/game.width)*game.margin;
			game.img.style.width = (game.main.offsetWidth+m)+"px";
			game.img.style.height = "auto";
			game.img.style.left = (m/-2)+"px";
			game.img.style.top = (game.main.offsetHeight/2-game.img.offsetHeight/2)+"px";
		}
		
		for(var i=0; i<game.map.areas.length; i++){
			var c = game.map.areas[i].getAttribute("data-coords").split(",");
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
						str += c[j]*game.img.offsetWidth;
					else
						str += c[j]*game.img.offsetHeight;
					if(j<c.length-1)
						str += ",";
				}
				game.map.areas[i].coords = str;
			//}
		}
	}
}