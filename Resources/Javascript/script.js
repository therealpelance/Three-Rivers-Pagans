function mobileNav() {
		let nav1 = document.getElementById("nav1");
		if (nav1.className === "nav-item") {
			nav1.className += " responsive";
		} else {
			nav1.className = "nav-item";
		};
		
		let nav2 = document.getElementById("nav2");
		if (nav2.className === "nav-item") {
			nav2.className += " responsive";
		} else {
			nav2.className = "nav-item";
		};
		
		let nav3 = document.getElementById("nav3");
		if (nav3.className === "nav-item") {
			nav3.className += " responsive";
		} else {
			nav3.className = "nav-item";
		};
		
		let nav4 = document.getElementById("nav4");
		if (nav4.className === "nav-item") {
			nav4.className += " responsive";
		} else {
			nav4.className = "nav-item";
		};
	}