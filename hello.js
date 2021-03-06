let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", function (data) {
	changeColor.style.backgroundColor = data.color;
	changeColor.setAttribute("value", data.color);
});

changeColor.onclick = function (element) {
	let color = element.target.value;

	chrome.tabs.query({ active: true, currentWindow: true }, function (t) {
		chrome.tabs.executeScript(
			null,
			{
				code: "document.body.style.backgroundColor = '" + color + "';",
			},
			function (code) {}
		);
	});
};

function setTheColor() {
	document.body.style.backgroundColor = "' + color + '";
}
