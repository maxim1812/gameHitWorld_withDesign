let storageObject;

(function () {	

	storageObject = {};

	storageObject.deleteData = function() {
		localStorage.clear();
		window.location = "/";
	}

	storageObject.saveData = function(log,pas) {
		localStorage.setItem("log",log);
		localStorage.setItem("pas",pas);
	}
	
	storageObject.getLog = function() {
		const ans = localStorage.getItem("log");
		return ans;
	}
	
	storageObject.getPas = function() {
		const ans = localStorage.getItem("pas");
		return ans;
	}

})();

function deleteMyStorage(){
    storageObject.deleteData();
}