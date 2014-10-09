var hc = {
	element: null,
	init: function(){
		var element = document.createElement("SPAN");
		element.style.display = "none";
		element.style.position = "absolute";
		this.element = document.body.appendChild(element);
	},
	over: function(e){
		this.element.innerHTML = e.target.getAttribute("data-hc");
		this.element.style.display = "inline";
		this.element.style.left = (e.clientX+15)+"px";
		this.element.style.top = (e.clientY+15)+"px";
	},
	move: function(e){
		this.element.style.left = (e.clientX+15)+"px";
		this.element.style.top = (e.clientY+15)+"px";
	},
	out: function(e){
		this.element.style.display = "none";
	}
}