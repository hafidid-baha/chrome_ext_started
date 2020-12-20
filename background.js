chrome.runtime.onInstalled.addListener(function () {
	// save the color whene the extension is first created
	chrome.storage.sync.set({ color: "#3aa757" }, function () {
		console.log("The color is green.");
	});
	// after the extension is intalled we are
	// ready to open new window tab pointing to our website
	// window.open("https://www.google.com", "_blank");
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: { hostEquals: "developer.chrome.com" },
					}),
				],
				actions: [new chrome.declarativeContent.ShowPageAction()],
			},
		]);
	});
});
