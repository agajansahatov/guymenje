// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
// 	item.addEventListener("click", function () {
// 		this.classList.toggle("collapsible--expanded");
// 	})
// );

// const collapsibles = document.querySelectorAll(".collapsible__toggler");
// collapsibles.forEach((item) =>
// 	item.addEventListener("click", function () {
// 		this.parentNode.classList.toggle("collapsible--expanded");
// 	})
// );

const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) => {
	const toggler = item.querySelector(".collapsible__toggler");
	if (toggler !== null) {
		toggler.addEventListener("click", function () {
			item.classList.toggle("collapsible--expanded");
		});
	}
});
