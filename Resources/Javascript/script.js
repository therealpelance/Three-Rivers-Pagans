function mobileNav() {
	const elements = ['nav1', 'nav2', 'nav3', 'nav4', 'nav5', 'nav6'];
	
	elements.forEach(id => {
	  const nav = document.getElementById(id);
	  nav.classList.toggle('responsive');
	});
}