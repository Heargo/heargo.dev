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

menu = document.getElementById("menu")

window.addEventListener('scroll', function(e) {
	if(window.scrollY==0){
		menu.classList.add("transparent");
	}else{
		menu.classList.remove("transparent");
	}
  
});

function display_contact(){
	mail=["tu.","un","o.r","ey","@e","smb.","iv-","h","ug","fr"];
	mail_indice =[7, 8, 2, 3, 4, 0,1, 6, 5, 9];
	phone=[2, 0, 4, 1, 7, 5, 0, 2, 8, 0]
	phone_indice =[6, 4, 8, 0, 5, 3, 7, 9, 2, 6]
	mail_final=""
	phone_final=""
	for (var i = 0; i <mail.length; i++) {
		mail_final=mail_final+mail[mail_indice[i]]
	}
	for (var i = 0; i <phone.length; i++) {
		phone_final=phone_final+phone[phone_indice[i]]+(i%2!=0?".":"")
	}
	p = document.getElementById("phone");
	m = document.getElementById("mail");
	b = document.getElementById("revealButton");
	t= document.getElementById("titleContact");

	b.classList.add("hidden");

	p.classList.remove("hidden");
	p.innerHTML=phone_final
	p.classList.add("typing_phone");

	setTimeout(function(){
		p.classList.remove("typing_phone")

		m.classList.remove("hidden");
		m.innerHTML=mail_final
		m.href="mailto:"+mail_final;
		m.classList.add("typing_mail");
		setTimeout(function(){
			t.classList.remove("hidden");
		}, 2000);
	}, 1100);
	

	
}

document.onreadystatechange = () => {
	if (document.readyState === 'complete') {
		try{
			loader=document.getElementById("loader");
			loader.remove();
			console.log(loader.classList)
			document.body.classList.remove("noscroll");
		}catch{}
		
	}
};