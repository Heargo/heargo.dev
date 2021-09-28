function nav_toggle() {
	icon = document.getElementById("hamMenu");
	icon.classList.toggle("active");
	menu = document.getElementById("menu")
	content=document.getElementById("mainContainer");
	if(menu.className.includes("active")){
		menu.classList.add("out");
		menu.classList.remove("in");
		setTimeout(function(){
		menu.classList.toggle("active");
		document.body.classList.toggle("noscroll");
		}, 400);
	}else{
		menu.classList.add("in");
		menu.classList.remove("out");
		menu.classList.toggle("active");
		setTimeout(function(){
		document.body.classList.toggle("noscroll");
		}, 400);
	}
}

function closeNav(){
	icon = document.getElementById("hamMenu");
	menu = document.getElementById("menu")
	content=document.getElementById("mainContainer");
	if(menu.className.includes("active")){
		menu.classList.add("out");
		menu.classList.remove("in");
		icon.classList.remove("active");
		setTimeout(function(){
		menu.classList.toggle("active");
		document.body.classList.remove("noscroll");
		}, 400);
	}	
}