let renderBoxes;

(function () {	

	renderBoxes = {};
	
	renderBoxes.hideAll = function() {
		document.getElementById('canvasBox').hidden = true;
		document.getElementById('descriptionGameBox').hidden = true;
		document.getElementById('gameResultBox').hidden = true;		
		document.getElementById('avtorizOrRegistBox').hidden = true;
		document.getElementById('gameMyAll').hidden = true;
        document.getElementById('bestResultsBox').hidden = true;
	}

	renderBoxes.showBestResults = function() {
        this.hideAll();
        document.getElementById('bestResultsBox').hidden = false;
	}
	
	renderBoxes.showGame = function() {
		this.hideAll();
		document.getElementById('canvasBox').hidden = false;
	}
	
	renderBoxes.showAllMyResults = function() {
		this.hideAll();
		document.getElementById('gameMyAll').hidden = false;	
	}
	
	renderBoxes.showDescription = function() {
		this.hideAll();
		document.getElementById('descriptionGameBox').hidden = false;	
	}
	
	renderBoxes.showGameResult = function() {
		this.hideAll();
		document.getElementById('gameResultBox').hidden = false;	
		document.getElementById('gameResultStr').innerHTML = "Score: " + score;
	}
	
	renderBoxes.showAvtReg = function() {
		this.hideAll();
		document.getElementById('avtorizOrRegistBox').hidden = false;
	}
	
	renderBoxes.showAvtReg();

})();

function showTheDescription() {
    renderBoxes.showDescription();
}
