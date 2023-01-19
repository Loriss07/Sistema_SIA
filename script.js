var valueReg = "";
var valueSpecie = "";
var id_reg = "nomeReg";
var id_specie = "sp";
var id_sel = "pSl";
var Park;
var Species;
var ParkOptions = Array();
var SpeciesOptions = Array();

document.getElementById("ok").addEventListener("click", function(){ submit(id_reg,id_sel) });
document.getElementById("del").addEventListener("click", function(){ clear() });
document.getElementById("ok_p").addEventListener("click",function(){ SelectSpecies()})

function test() { alert("SIA"); }

function saveValue(id) {
    valueReg = document.getElementById(id).value;
}
function clear() {
    valueReg = "";
    document.getElementById(id_reg).value = "";
    
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            DeleteOptions(ParkOptions,ParkOptions.length,id_sel);
    }
    httpRequest.open("GET",'parchi.php?regione=reset',true);
    httpRequest.send();
}
function invokeParks(id_selection) {

    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let res = this.responseText;
            alert(res);
            if (!res.length == 0)
            {
                Park = JSON.parse(res);
                
                AddOptions(Park,Park.length,id_selection,ParkOptions);
                //Park = "";
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

function AddOptions(array,numElements,id,collector) {
    
    for (let index = 0; index < numElements; index++) {
        const sel = document.createElement("option");
        sel.setAttribute("value",array[index].ID);
        sel.innerHTML = array[index].Name;
        document.getElementById(id).appendChild(sel);
        collector[index] = sel;
    }
}

function DeleteOptions(options,numElements,idParent)
{
    for (let index = 0; index < numElements; index++) {
        document.getElementById(idParent).removeChild(options[index]);
    }
    options.length = 0;
}

function SelectSpecies()
{
    var e = document.getElementById(id_specie);
    var text = e.options[e.selectedIndex].text;
    valueParco = text;
    const speciesRequest = new XMLHttpRequest();
    speciesRequest.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200) {
            let res = this.responseText;
            alert(res);
            if (!res.length == 0)
            {
                Species = JSON.parse(res);
                AddOptions(Species,Species.length,id_specie,Species);
            }
            
        }
        
    }
    speciesRequest.open("GET",'specie.php?parco=' + valueSpecie);
    speciesRequest.send();
}
