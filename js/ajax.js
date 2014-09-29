var xhrs = [];			// Array of requests

//	GET method request
//		get - string with get parameters
//		func - function which will be called when request gets response with responseXML as first parameter and param (see below)
//		param - this parameter will be stored and used as second parameter of func when called
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
			//console.log(this.responseXML.querySelector("debug").innerHTML);
			xhrs.splice(this.i,1);
		}
	}
	xhrs[i].open("GET", "php/ajax.php?"+get,true);
	xhrs[i].send();
}

//	POST and GET method request
//		get - string with get parameters
//		post - string with post parameters
//		func - function which will be called when request gets response with responseXML as first parameter and param (see below)
//		param - this parameter will be stored and used as second parameter of func when called
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
			//console.log(this.responseXML.querySelector("debug").innerHTML);
			xhrs.splice(this.i,1);
		}
	}
	xhrs[i].open("POST", "php/ajax.php?"+get,true);
	xhrs[i].setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhrs[i].send(post);
}

function getContent(file){
	if(window.XMLHttpRequest){
		request=new XMLHttpRequest();
	}else{
		request=new ActiveXObject("Microsoft.XMLHTTP");
	}
    request.open("GET", file, false);
    request.send();
    return request.responseText;
}