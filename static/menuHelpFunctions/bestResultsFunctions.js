function showBestResults() {
    renderBoxes.showBestResults();

    let r = new XMLHttpRequest();

    r.open("POST",url + "scr5.php");
    r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
    r.send(null);

    r.onreadystatechange = function() {
        if(r.readyState === 4 && r.status === 200) {
            const allResults = r.responseText + "";

            let mass = new Array();
            mass = allResults.split("@@@");

            function getName(s) {
                let m = new Array();
                m = s.split("~~~");
                return m[0] + "";
            }

            function getResult(s) {
                let m = new Array();
                m = s.split("~~~");
                return parseInt(m[1]);
            }

            let objArr = new Array();

            const n = mass.length - 1;
            for(let i = 0; i < n; i++) {
                objArr[i] = {};
                objArr[i].name = getName(mass[i]);
                objArr[i].value = getResult(mass[i]);
            }

            for(let i = 0; i < n; i++) {
                for(let j = 0; j < n; j++) {
                    if(objArr[i].value > objArr[j].value) {
                        let buffer = {};

                        buffer.name = objArr[i].name;
                        buffer.value = objArr[i].value;

                        objArr[i].name = objArr[j].name;
                        objArr[i].value = objArr[j].value;

                        objArr[j].name = buffer.name;
                        objArr[j].value = buffer.value;
                    }
                }
            }

            let answer = "<table style = 'border-color: #FFFFFF; border-style: solid;' border = '1'>";
            answer += ("<tr><td>" + "<h3>Логин</h3>" + "</td><td>" + "<h3>Результат</h3>" + "</td></tr>");
            for(let i = 0; (i < n) && (i < 5); i++) {
                answer += ("<tr><td>" + objArr[i].name + "</td><td>" + objArr[i].value + "</td></tr>");
            }
            answer += "</table>";
            document.getElementById("bestResultsText").innerHTML = answer;
        }
    }
}

function getMyResults() {
    let s1 = storageObject.getLog();
    let s2 = storageObject.getPas();

    let r = new XMLHttpRequest();

    r.open("POST",url + "scr4.php?login=" + s1 + "&password=" + s2);
    r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
    r.send(null);
    r.onreadystatechange = function() {
        if(r.readyState === 4 && r.status === 200) {
            let answer = r.responseText + "";

            if(answer === "EMPTY") {
                answer = "Пусто";
                document.getElementById('allResBigStr').innerHTML = answer;
            }
            else {
                document.getElementById('allResBigStr').innerHTML = "";

                let mass = new Array();
                mass = answer.split('_');
                let n = mass.length;

                let bigS = "";

                for(let i = 0; i < n; i++) {
                    if(mass[i] + "" !== "") {
                        bigS += ("<li>" + mass[i] + "</li>");
                    }
                }

                document.getElementById('allResBigStr').innerHTML = bigS;
            }


            renderBoxes.showAllMyResults();
        }
    }
}
