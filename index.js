var index1=0;
var myindex1=0;
var x=document.getElementsByClassName("mySlides");
function carousel1(){
   
    for(var i=0;i<x.length;i++)
    {
        x[i].style.display="none";
    }
    index1++;
    if(index1>x.length)
    {
        index1=1;
    }
    x[index1-1].style.display="block";
    setTimeout(carousel1, 4000);
}
function hienthivitrik(k){
    for(var i=0;i<x.length;i++)
    {
        x[i].style.display="none";
    }
    x[k].style.display="block";
}
function hienthitruocdo(){
    myindex1++;
    if(myindex1>x.length)
    {
        myindex1=0;
    }
    hienthivitrik(myindex1);
}
function hienthisaudo(){
    myindex1--;
    if(myindex1<0)
    {
        myindex1=x.length-1;
    }
    hienthivitrik(myindex1);
}

carousel1();
//an di the sing up
function cancelModal() {
    document.getElementById("id01").style.display = "none";
}
cancelModal();
//----------------------------------------------------------------------------
var index2=0;
var y=document.getElementsByClassName("mySlides2");
function carousel2(){
   
    for(var i=0;i<y.length;i++)
    {
        y[i].style.display="none";
    }
    index2++;
    if(index2>y.length)
    {
        index2=1;
    }
    x[index2-1].style.display="block";
    setTimeout(carousel2, 4000);
}
function hienthivitrik(k){
    for(var i=0;i<y.length;i++)
    {
        y[i].style.display="none";
    }
    y[k].style.display="block";
}