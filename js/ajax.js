var xhrs = [];

function get(get ,func, param){
	var i = xhrs.length;
	if(window.XMLHttpRequest){
		xhrs[i]=new XMLHttpRequest();
	}else{
		xhrs[i]=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhrs[i].i = i;
	xhrs[i].funcParam = param;
	xhrs[i].onreadystatechange=function(){
		if (this.readyState==4 && this.status==200){
			func(this.responseXML,this.funcParam);
			xhrs.splice(this.i,1);
		}
	}
	xhrs[i].open("GET","php/ajax.php?",true);
	xhrs[i].send();
}

function post(get, post, func, param){
	var i = xhrs.length;
	if(window.XMLHttpRequest){
		xhrs[i]=new XMLHttpRequest();
	}else{
		xhrs[i]=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhrs[i].i = i;
	xhrs[i].funcParam = param;
	xhrs[i].onreadystatechange=function(){
		if (this.readyState==4 && this.status==200){
			func(this.responseXML,this.funcParam);
			xhrs.splice(this.i,1);
		}
	}
	xhrs[i].open("POST","php/ajax.php"+get,true);
	xhrs[i].setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhrs[i].send(post);
}