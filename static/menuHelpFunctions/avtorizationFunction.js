const url = "http://prokm.ru/ZZZ/"; // адрес сервера

function avtFunc() {
	let obj = document.getElementById('ansReq');
	obj.innerHTML = "";

	let s1 = document.getElementById('t1').value + "";
	let s2 = document.getElementById('t2').value + "";
	
	let p1 = controlString.isGoodString(s1);

	if(p1 === "EMPTY") {
		obj.innerHTML += "Поле ввода логина пусто.<br>";
	}

	if(p1 === "NO_CORR") {
		obj.innerHTML += "В поле ввода логина были введены запретные символы.<br>";
    }
	
	let p2 = controlString.isGoodString(s2);

	if(p2 === "EMPTY") {
		obj.innerHTML += "Поле ввода пароля пусто.<br>";
    }
	if(p2 === "NO_CORR") {
		obj.innerHTML += "В поле ввода пароля были введены запретные символы.<br>";
    }
	
	if(p1 === "OK" && p2 === "OK") {
		let r = new XMLHttpRequest();
		r.withCredentials = true;
		
		r.open("POST",url + "scr2.php?login=" + s1 + "&password=" + s2);
		r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
		r.send(null);
		r.onreadystatechange = function() {
			if(r.readyState === 4 && r.status === 200) {
				let answer = r.responseText + "";
				
				if(answer === "NO") {
					obj.innerHTML = "Ошибка. Неверный логин или пароль."
				}
				
				if(answer === "YES") {
					document.getElementById('topBox').hidden = false;
					renderBoxes.showDescription();
					
					// save to localStorage
					storageObject.saveData(s1,s2);
				}			
			}
		}
	}
}

function avtFuncForStorage(L,P) {
	let obj = document.getElementById('ansReq');
	obj.innerHTML = "";

	let s1 = L;
	let s2 = P;
	
	let p1 = controlString.isGoodString(s1);
	let p2 = controlString.isGoodString(s2);
	
	if(p1 === "OK" && p2 === "OK") {
		let r = new XMLHttpRequest();
		r.withCredentials = true;
		
		r.open("POST",url + "scr2.php?login=" + s1 + "&password=" + s2);
		r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
		r.send(null);
		r.onreadystatechange = function() {
			if(r.readyState === 4 && r.status === 200) {
				let answer = r.responseText + "";
				
				if(answer === "NO") {
					// not correct login or password
				}
				
				if(answer === "YES") {
					document.getElementById('topBox').hidden = false;
					renderBoxes.showDescription();
					
					// save to localStorage
					storageObject.saveData(s1,s2);
				}			
			}
		}
	}
}
