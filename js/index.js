// COLLAPSIBLES
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
	const toggler = item.querySelector(".collapsible__toggler");
	if (toggler !== null) {
		toggler.addEventListener("click", function () {
			item.classList.toggle("collapsible--expanded");
		});
	}
});

// AUTO COPY
function showContactInfo(label, strCopy) {
	let status = "";
	if (ClipboardJS.isSupported()) {
		ClipboardJS.copy(strCopy);
		status = "Already copied to the clipboard!";
	}

	window.alert(`${label}: ${strCopy}.\n${status}`);
}

//SCROLL TO TOP BUTTON
let calcScrollValue = () => {
	let scrollProgress = document.getElementById("scroll-progress");
	let pos = document.documentElement.scrollTop;
	let height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;

	let scrollValue = Math.round((pos * 100) / height);

	if (pos > 100) scrollProgress.style.display = "grid";
	else scrollProgress.style.display = "none";

	scrollProgress.addEventListener("click", () => {
		document.documentElement.scrollTop = 0;
	});

	scrollProgress.style.background = `conic-gradient(#21f405 ${scrollValue+1}%, #fff ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;