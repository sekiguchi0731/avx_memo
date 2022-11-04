
function ansa(){
    var ans_a = document.getElementById("form_a");
    //値渡し
    //var qbtn2 = document.getElementById("move2").style.visibility;
    //参照渡し
    var qbtn2 = document.getElementById("move2");
    
    console.log();
    if(ans_a.value == "1"){
        //document.getElementById("move2").style.visibility = "visible";
        qbtn2.style.visibility = "visible";
        ans_a.disabled = true;
    }

}