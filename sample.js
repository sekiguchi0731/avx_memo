var q_1 = document.getElementById("q1");
var q_2 = document.getElementById("q2");
var q_3 = document.getElementById("q3");
var q_4 = document.getElementById("q4");


function ansa(){
    var ans_a = document.getElementById("form_a");
    //値渡し
    //var qbtn2 = document.getElementById("move2").style.visibility;
    //参照渡し
    var soshin1 = document.getElementById("btn_a");
    var qbtn2 = document.getElementById("move2");
    
    //console.log();
    if(ans_a.value == "1"){
        //document.getElementById("move2").style.visibility = "visible";
        qbtn2.style.visibility = "visible";
        ans_a.disabled = true;
        soshin1.disabled = true;
        displayq2();
    }
}

function displayq1(){
    q_1 = document.getElementById("q1");
    q_2 = document.getElementById("q2");
    if(q_1.style.display != "block"){
        q_1.style.display = "block";
    }
    if(q_2.style.display == "block"){
        q_2.style.display = "none";
    }
}

function ansb(){
    var ans_b = document.getElementById("form_b");
    var soshin2 = document.getElementById("btn_b");
    var qbtn3 = document.getElementById("move3");

    if(ans_b.value == "2"){
        qbtn3.style.visibility = "visible";
        ans_b.disabled = true;
        soshin2.disabled = true;
    }
}

function displayq2(){
    q_1 = document.getElementById("q1");
    q_2 = document.getElementById("q2");
    if(q_1.style.display != "none"){
        q_1.style.display = "none";
    }
    if(q_2.style.display != "block"){
        q_2.style.display = "block";
    }
}