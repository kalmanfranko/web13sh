function szamol(ar){
    let megtett_km=document.getElementById('km').value*1;
    let liter=document.getElementById('liter').value*1;
    document.getElementById('koltseg').innerHTML=ar*liter;
    document.getElementById('fogyasztas').innerHTML=liter/megtett_km*100;
    }