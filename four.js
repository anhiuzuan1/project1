var POPULAR=document.getElementsByClassName("POPULAR")[0];
var ARR=document.getElementsByClassName("ARR")[0];
var BESST=document.getElementsByClassName("BESST")[0];
var PICK=document.getElementsByClassName("PICK")[0];
document.getElementById("id001").style.display="flex";
POPULAR.onclick=function(event){
    event.preventDefault();
    document.getElementById("id001").style.display="flex";
    document.getElementById("id02").style.display="none";
    document.getElementById("id03").style.display="none";
    document.getElementById("id04").style.display="none";
}
ARR.onclick=function(event){
    event.preventDefault();
    document.getElementById("id001").style.display="none";
    document.getElementById("id02").style.display="flex";
    document.getElementById("id03").style.display="none";
    document.getElementById("id04").style.display="none";
}
BESST.onclick=function(event){
    event.preventDefault();
    document.getElementById("id001").style.display="none";
    document.getElementById("id02").style.display="none";
    document.getElementById("id03").style.display="flex";
    document.getElementById("id04").style.display="none";
}
PICK.onclick=function(event){
    event.preventDefault();
    document.getElementById("id001").style.display="none";
    document.getElementById("id02").style.display="none";
    document.getElementById("id03").style.display="none";
    document.getElementById("id04").style.display="flex";
}