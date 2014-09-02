var account = {
	logged: false,
	name: "",
	inventory: [],
	init: function(){
		get("f=logged", function(r){
			if(r.querySelector("logged").innerHTML == "true"){
				document.querySelector("#login").innerHTML = "You're logged in!<br><button onclick='account.logout()'>Logout</button>";
				account.name = r.querySelector("name").innerHTML;
				account.logged = true;
				get("f=getInventory", function(r){
					account.inventory = eval(r.querySelector("data").innerHTML);
				});
			} else {
				document.querySelector("#login").innerHTML = getContent("html/login.html");
			}
		});
	},
	login: function(form){
		post("f=login", "name="+form.user.value+"&pass="+form.pass.value, function(r){
			if(r.querySelector("data").innerHTML == "true"){
				account.logged = true;
				account.name = form.user.value;
				document.querySelector("#login").innerHTML = "You're logged in!<br><button onclick='logout()'>Logout</button>";
				get("f=getInventory", function(r){
					account.inventory = eval(r.querySelector("data").innerHTML);
				});
			}
			alert(r.querySelector("message").innerHTML);
		});
		return false;	// for onsubmit use case
	},	
	logout: function(){
		get("f=logout", function(r){
			alert(r.querySelector("message").innerHTML);
			document.querySelector("#login").innerHTML = getContent("html/login.html");
		});
	}
}