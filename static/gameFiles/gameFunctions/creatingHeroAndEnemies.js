// создание экземпляра врага
function createEnemy() {
    timeAfterStart += 3;
    console.log("Time after start: " + timeAfterStart);

    if(timeAfterStart >= 30) {
        let x = 620;
        let randForX = parseInt(Math.random() * 2);
        if (randForX === 0) {
            x = -140;
        }

        let y = parseInt(Math.random() * 1200) - 300;
        let size = parseInt(Math.random() * 100) + 20;
        let speedX = parseInt(Math.random() * 10) + 2;
        let speedY = parseInt(Math.random() * 10) + 2;

        if (x > 300) {
            speedX *= (-1);
        }

        if (y > 300) {
            speedY *= (-1);
        }

        const number = enemyArray.length;
        enemyArray[number] = personFactory.getEnemy(x, y, speedX, speedY, size);
        personDecorator.addEnemyMethods(enemyArray[number]);
    }
}

// создание экземпляра главного героя
function createNewHero() {
	let hero = personFactory.getHero(280,280,40);
	personDecorator.addHeroMethods(hero);
	return hero;
}