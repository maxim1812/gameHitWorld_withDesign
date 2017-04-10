// глобальный объект фабрика
// возвращает экземпляры врагов и экземпляр главного героя
let personFactory;

(function () {
	
	// создание объекта
	personFactory = {};
	
	// метод: вернуть экземпляр героя
	personFactory.getHero = function(x,y,size) {
		let hero = {};
		hero.x = x;
		hero.y = y;
		hero.size = size;
		return hero;
	}
	
	// метод: вернуть экземпляр врага
	personFactory.getEnemy = function(x,y,speedX,speedY,size) {
		let enemy ={};
		enemy.x = x;
		enemy.y = y;
		enemy.speedX = speedX;
		enemy.speedY = speedY;
		enemy.size = size;
		return enemy;
	}
	
})();