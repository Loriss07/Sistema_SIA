var valueReg = "";
var id_reg = "nomeReg";
var id_sel = "pSl";

document.getElementById("reg").addEventListener("submit", function(){ submit(id_reg,id_sel) });
function test()
{
    alert("SIA");
}
function saveValue(id) {
    valueReg = document.getElementById(id).value;
}

function invokeParks(id_selection) {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let res = this.responseText;
            alert(res);
            let Park = JSON.parse(res);
            for (let index = 0; index < Park.length; index++) {
                const element = Park[index];
                const sel = document.createElement("option");
                sel.setAttribute("value",Park[index].ID);
                sel.innerHTML = Park[index].Name;
                document.getElementById(id_selection).appendChild(sel);
            }
        }

        
    }
    httpRequest.open("GET",'parchi.php?regione=' + valueReg, true);
    httpRequest.send();
}

function submit(id_reg,id_sel) {
    saveValue(id_reg);
    invokeParks(id_sel);
}

