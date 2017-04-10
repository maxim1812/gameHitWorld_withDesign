// показать на холсте всех врагов
function renderEnemies() {
	holst.clearAll();
	const enemyArrayLenFixed = enemyArray.length;
	
	for(let i = 0; i < enemyArrayLenFixed; i++) {
		enemyArray[i].render(holst);
	}

    if(timeAfterStart <= 30) {
        holst.fillStyle = '#FFFFFF';
        holst.font = "50px Arial";
        holst.fillText("" + (3 - parseInt(timeAfterStart / 10)),50,100);
    }
}

// показать на холсте главного героя
function renderHero() {
	hero.render(holst);
}