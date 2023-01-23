var valueReg = "";
var valueParco = "";
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
document.getElementById("ok_p").addEventListener("click",function(){ SelectSpecies()});
document.getElementById("ok_sp").addEventListener("click",function(){ Interrogate()});

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

function valueSel()
{
    var e = document.getElementById(id_sel).value;
    valueParco = e;
}

function SelectSpecies()
{
    valueSel();
    const speciesRequest = new XMLHttpRequest();
    speciesRequest.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200) {
            let res = this.responseText;
            alert(res);
            if (!res.length == 0)
            {
                Species = JSON.parse(res);
                for (let index = 0; index < Species.length; index++) {
                    const sel = document.createElement("option");
                    sel.setAttribute("value",Species[index].Name);
                    sel.innerHTML = Species[index].Name;
                    document.getElementById("sp").appendChild(sel);
                    SpeciesOptions[index] = sel;
                }
            }
            
        }
    }
    speciesRequest.open("GET",'specie.php?parco=' + valueParco);
    speciesRequest.send();
}

function specieSel()
{
    var e = document.getElementById(id_specie).value;
    valueSpecie = e;
}

function Interrogate()
{
    specieSel();
    const interrogation = new XMLHttpRequest();
    interrogation.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200) {
            let res = this.responseText;
            alert(res);
            
        }
    }
    interrogation.open("GET",'interrog.php?specie=' + valueSpecie);
    interrogation.send();
}
