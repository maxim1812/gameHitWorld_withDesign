// глобальный объект для проверки на столкновения
let positionHitClass;

(function () {
	
	// создаём объект
	positionHitClass = {};
	
	// проверка столкновения всех врагов с одной точкой героя
	positionHitClass.isArrayHitTocka = function(mass,xx,yy) {
		const n = mass.length;
		
		for(let i = 0; i < n; i++) {
			let x1 = mass[i].x;
			let y1 = mass[i].y;
			let s = mass[i].size;
			
			if(x1 < xx && xx < x1 + s) {
				if(y1 < yy && yy < y1 + s) {
					return true;
				}
			}
		}
		
		return false;
	}
	
	// проверка столкновения всех врагов с четырьмя опорными точками героя
	positionHitClass.isArrayHitHero = function(mass,hero) {
		const n = mass.length;
		const s = hero.size;
		
		for(let i = 0; i < n; i++) {
			if(positionHitClass.isArrayHitTocka(mass,hero.x,hero.y) === true) {
				return true;
			}
			
			if(positionHitClass.isArrayHitTocka(mass,hero.x + s,hero.y) === true) {
				return true;
			}
			
			if(positionHitClass.isArrayHitTocka(mass,hero.x + s,hero.y + s) === true) {
				return true;
			}
			
			if(positionHitClass.isArrayHitTocka(mass,hero.x,hero.y + s) === true) {
				return true;
			}
		}
		
		return false;
	}
	
})();