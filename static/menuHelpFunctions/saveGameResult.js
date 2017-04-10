function saveResult(n) {
	let s1 = storageObject.getLog();
	let s2 = storageObject.getPas();
	
	let r = new XMLHttpRequest();
		
	r.open("POST",url + "scr3.php?login=" + s1 + "&password=" + s2 + "&n=" + n);
	r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
	r.send(null);
	r.onreadystatechange = function() {
		if(r.readyState === 4 && r.status === 200) {
			let answer = r.responseText + "";
				
			if(answer === "OK") {
				console.log("__________________");
				console.log('Result was SAVED');
				console.log("__________________");
			}
		}
	}
}