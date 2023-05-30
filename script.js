document.getElementById('convert').onclick=tempconvert;
document.getElementById('clear').onclick=clearform;
function tempconvert(){
    var cel=document.getElementById("cel").value;
    var fah=document.getElementById("fah").value;
    if(fah!=''){
        cel=(parseFloat(fah)-32)/1.8;
    }else{
        fah=(parseFloat(cel)*1.8)+32;

    }

    document.getElementById('fah').value=parseFloat(fah).toFixed(1);
    document.getElementById('cel').value=parseFloat(cel).toFixed(1);
}
function clearform(){
    document.getElementById('fah').value='';
    document.getElementById('cel').value='';
}
