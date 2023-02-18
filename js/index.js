const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
	const toggler = item.querySelector(".collapsible__toggler");
	if (toggler !== null) {
		toggler.addEventListener("click", function () {
			item.classList.toggle("collapsible--expanded");
		});
	}
});

function showContactInfo(label, strCopy) {
	let status = "";
	if (ClipboardJS.isSupported()) {
		ClipboardJS.copy(strCopy);
		status = "Already copied to the clipboard!";
	}

	window.alert(`${label}: ${strCopy}.\n${status}`);
}
