var account = {
	logged: false,
	name: "",
	inventory: {
		items: [],
		getInventory: function(){
			get("f=getInventory", function(r){
				account.inventory.items = eval(r.querySelector("data").innerHTML);
				var slots = document.querySelectorAll(".slot");
				for(var i=0; i<account.inventory.items.length; i++){
					slots[i].innerHTML = "<img src='img/items/"+account.inventory.items[i].name.toLowerCase()+".png' draggable='true'>";
					slots[i].children[0].ondragstart = account.inventory.dragStart;
					slots[i].children[0].ondragend = account.inventory.dragEnd;
				}
			});
		},
		dragStart: function(e){
			e.dataTransfer.effectAllowed = 'move';
			e.dataTransfer.setData("text/plain", e.target.parentElement.id);
			setTimeout(function() { e.target.style.opacity = "0"; }, 0);
		},
		dragEnd: function(e){
			e.target.style.opacity = "1";
		},
		drop: function(e){
			e.preventDefault();
			var item = document.querySelector("#"+e.dataTransfer.getData("Text")).children[0];
			if(e.target.children.length == 0 && e.target.tagName.toLowerCase() != "img" && item.tagName.toLowerCase() == "img")
				e.target.appendChild(item);
		}
	},
	init: function(){
		get("f=logged", function(r){
			if(r.querySelector("logged").innerHTML == "true"){
				account.drawLoggedContent();
				account.name = r.querySelector("name").innerHTML;
				account.logged = true;
				account.inventory.getInventory();
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
				account.drawLoggedContent();
				account.inventory.getInventory();
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
	},
	drawLoggedContent: function(){
		document.querySelector("#login").innerHTML =  "You're logged in!<br><button onclick='account.logout()'>Logout</button>";
		document.querySelector("#main").innerHTML += getContent("html/inventory.html");
		for(var i=0; i<this.inventory.length; i++){
			document.querySelector("#inventory").innerHTML += "<div class='item' draggable='true'>"+this.inventory[i].name+"</div>";
		}
		var slots = document.querySelectorAll(".slot");
		for(var i=0; i<slots.length; i++){
			slots[i].ondragover = function(e){e.preventDefault();};
			slots[i].ondrop = account.inventory.drop;
		}
	}
}