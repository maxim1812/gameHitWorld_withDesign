
let holstImg = new Image();
holstImg.src = ("Images/gameFon.jpg");

// глобальный объект для рисования
let holst;

(function () {	
	// привязываем холст к canvas
	holst = document.getElementById('canvas').getContext('2d');
	
	// очистка всего холста
	holst.clearAll = function() {
		holst.clearRect(0,0,600,600);
		holst.fillStyle = '#000080';
		holst.fillRect(0, 0, 600, 600);
		holst.drawImage(holstImg,0,0,600,600);
	}
	
	holst.clearAll();
	
})();