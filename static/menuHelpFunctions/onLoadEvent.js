window.onload = function() {
	let L = storageObject.getLog();
	let P = storageObject.getPas();
	
	if(L === null || P === null) {
		// login or password are null
		console.log("Login and password are NULL");
		console.log("___________________________");
	}
	else {
		console.log("Login and password EXISTS ok");
		console.log("___________________________");
		avtFuncForStorage(L,P);
	}

    document.getElementById("startGameBtn").addEventListener('click', startGame, false);
    document.getElementById("showTheDescriptionBtn").addEventListener('click', showTheDescription, false);
    document.getElementById("getMyResultsBtn").addEventListener('click', getMyResults, false);
    document.getElementById("showBestResultsBtn").addEventListener('click', showBestResults, false);
    document.getElementById("deleteMyStorageBtn").addEventListener('click', deleteMyStorage, false);

    document.getElementById("avtBtn").addEventListener('click', avtFunc, false);
    document.getElementById("regBtn").addEventListener('click', regFunc, false);
};
