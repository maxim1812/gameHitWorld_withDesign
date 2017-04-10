let astImg = new Image();
astImg.src = ("Images/meteor.png");

let heroImg = new Image();
heroImg.src = ("Images/hero.png");

// глобальный объект декоратор
// добавляет методы к объектам типа герой и враг
let personDecorator;

(function () {
	
	// создание объекта
	personDecorator = {};
	
	// метод: добавить методы к врагу
	personDecorator.addEnemyMethods = function(enemy) {
		// изменение положения
		enemy.moveXY = function() {
			enemy.x += enemy.speedX;
			enemy.y += enemy.speedY;
		}
		
		// вывод на холст
		enemy.render = function(holst) {
			// holst.lineWidth = 3;
			// holst.strokeStyle = '#FFFFFF';
			// holst.strokeRect(enemy.x,enemy.y,enemy.size,enemy.size);
			holst.drawImage(astImg,enemy.x,enemy.y,enemy.size,enemy.size);
		}
		
		// проверка на вылет за запретные границы
		enemy.isDead = function() {			
			if(enemy.x < -300 || enemy.x > 900) {
				return true;
			}
			
			if(enemy.y < -300 || enemy.y > 900) {
				return true;
			}
			
			return false;
		}
	}
	
	// метод: добавить методы к герою
	personDecorator.addHeroMethods = function(hero) {
		// задать текущее положение
		hero.setXY = function(x,y) {
			hero.x = x;
			hero.y = y;
		}
		
		// вывод на холст
		hero.render = function(holst) {
			//holst.lineWidth = 5;
			//holst.strokeStyle = '#00FF00';
			//holst.strokeRect(hero.x,hero.y,hero.size,hero.size);
			holst.drawImage(heroImg,hero.x,hero.y,hero.size,hero.size);
		}
	}	
	
})();