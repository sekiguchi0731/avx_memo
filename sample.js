// ここらへんのグローバル変数が参照されない
var q_1 = document.getElementById("q1");
var q_2 = document.getElementById("q2");
var q_3 = document.getElementById("q3");
var q_4 = document.getElementById("q4");
var q_5 = document.getElementById("q5");
var q_6 = document.getElementById("q6");
var q_7 = document.getElementById("q7");
var q_8 = document.getElementById("q8");
var a_1 = document.getElementById("a1");
var a_2 = document.getElementById("a2");
var a_3 = document.getElementById("a3");
var a_4 = document.getElementById("a4");
var a_5 = document.getElementById("a5");
var a_6 = document.getElementById("a6");
var a_7 = document.getElementById("a7");
var a_8 = document.getElementById("a8");
var counter = 0;


function ansa(){
    var ans_a = document.getElementById("form_a");
    //値渡し
    //var qbtn2 = document.getElementById("move2").style.visibility;
    //参照渡し
    var soshin1 = document.getElementById("btn_a");
    var qbtn2 = document.getElementById("move2");
    var popup = document.getElementById("ppup-wrap");
    var popup_t = document.getElementById("ppup");
    var popup_t2 = document.getElementById("ppup2");
    var a_1 = document.getElementById("a1");

    //console.log();
    if(ans_a.value == "1"){
        //document.getElementById("move2").style.visibility = "visible";
        qbtn2.style.visibility = "visible";
        ans_a.disabled = true;
        soshin1.disabled = true;
        popup.style.display = "block";
        popup_t.style.display = "block";
        popup_t2.style.display = "none";
        a_1.style.display = "block";
        counter++;
    }else{
        popup.style.display = "block";
        popup_t2.style.display = "block";
    }
}

function displayq1(){
    var q_1 = document.getElementById("q1");
    var q_2 = document.getElementById("q2");
    var q_3 = document.getElementById("q3");
    var q_4 = document.getElementById("q4");
    var q_5 = document.getElementById("q5");
    var q_6 = document.getElementById("q6");
    var q_7 = document.getElementById("q7");
    var q_8 = document.getElementById("q8");
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");
    var a_6 = document.getElementById("a6");
    var a_7 = document.getElementById("a7");
    var a_8 = document.getElementById("a8");

    if(q_1.style.display != "block"){
        q_1.style.display = "block";
    }
    if(a_1.style.display != "block" && counter >= 1){
        a_1.style.display = "block";
    }
    if(q_2.style.display != "none"){
        q_2.style.display = "none";
    }
    if(a_2.style.display != "none"){
        a_2.style.display = "none";
    }
    if(q_3.style.display != "none"){
        q_3.style.display = "none";
    }
    if(a_3.style.display != "none"){
        a_3.style.display = "none";
    }
    if(q_4.style.display != "none"){
        q_4.style.display = "none";
    }
    if(a_4.style.display != "none"){
        a_4.style.display = "none";
    }
    if(q_5.style.display != "none"){
        q_5.style.display = "none";
    }
    if(a_5.style.display != "none"){
        a_5.style.display = "none";
    }
    if(q_6.style.display != "none"){
        q_6.style.display = "none";
    }
    if(a_6.style.display != "none"){
        a_6.style.display = "none";
    }
    if(q_7.style.display != "none"){
        q_7.style.display = "none";
    }
    if(a_7.style.display != "none"){
        a_7.style.display = "none";
    }
    if(q_8.style.display != "none"){
        q_8.style.display = "none";
    }
    if(a_8.style.display != "none"){
        a_8.style.display = "none";
    }
}

function ansb(){
    var ans_b = document.getElementById("form_b");
    var soshin2 = document.getElementById("btn_b");
    var qbtn3 = document.getElementById("move3");
    var popup = document.getElementById("ppup-wrap");
    var popup_t = document.getElementById("ppup");
    var popup_t2 = document.getElementById("ppup2");
    var a_2 = document.getElementById("a2");

    if(ans_b.value == "2"){
        qbtn3.style.visibility = "visible";
        ans_b.disabled = true;
        soshin2.disabled = true;
        popup.style.display = "block";
        popup_t.style.display = "block";
        popup_t2.style.display = "none";
        a_2.style.display = "block";
        counter++;
    }else{
        popup.style.display = "block";
        popup_t2.style.display = "block";
    }
}

function displayq2(){
    var q_1 = document.getElementById("q1");
    var q_2 = document.getElementById("q2");
    var q_3 = document.getElementById("q3");
    var q_4 = document.getElementById("q4");
    var q_5 = document.getElementById("q5");
    var q_6 = document.getElementById("q6");
    var q_7 = document.getElementById("q7");
    var q_8 = document.getElementById("q8");
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");
    var a_6 = document.getElementById("a6");
    var a_7 = document.getElementById("a7");
    var a_8 = document.getElementById("a8");
    if(q_1.style.display != "none"){
        q_1.style.display = "none";
    }
    if(a_1.style.display != "none"){
        a_1.style.display = "none";
    }
    if(q_2.style.display != "block"){
        q_2.style.display = "block";
    }
    if(a_2.style.display != "block" && counter >= 2){
        a_2.style.display = "block";
    }
    if(q_3.style.display != "none"){
        q_3.style.display = "none";
    }
    if(a_3.style.display != "none"){
        a_3.style.display = "none";
    }
    if(q_4.style.display != "none"){
        q_4.style.display = "none";
    }
    if(q_5.style.display != "none"){
        q_5.style.display = "none";
    }
    if(q_6.style.display != "none"){
        q_6.style.display = "none";
    }
    if(q_7.style.display != "none"){
        q_7.style.display = "none";
    }
    if(q_8.style.display != "none"){
        q_8.style.display = "none";
    }
    if(a_4.style.display != "none"){
        a_4.style.display = "none";
    }
    if(a_5.style.display != "none"){
        a_5.style.display = "none";
    }
    if(a_6.style.display != "none"){
        a_6.style.display = "none";
    }
    if(a_7.style.display != "none"){
        a_7.style.display = "none";
    }
    if(a_8.style.display != "none"){
        a_8.style.display = "none";
    }
}
function ansc(){
    var ans_c = document.getElementById("form_c");
    var soshin3 = document.getElementById("btn_c");
    var qbtn4 = document.getElementById("move4");
    var popup = document.getElementById("ppup-wrap");
    var popup_t = document.getElementById("ppup");
    var popup_t2 = document.getElementById("ppup2");
    var a_3 = document.getElementById("a3");

    if(ans_c.value == "3"){
        qbtn4.style.visibility = "visible";
        ans_c.disabled = true;
        soshin3.disabled = true;
        popup.style.display = "block";
        popup_t.style.display = "block";
        popup_t2.style.display = "none";
        a_3.style.display = "block";
        counter++;
    }else{
        popup.style.display = "block";
        popup_t2.style.display = "block";
    }
}

function displayq3(){
    var q_1 = document.getElementById("q1");
    var q_2 = document.getElementById("q2");
    var q_3 = document.getElementById("q3");
    var q_4 = document.getElementById("q4");
    var q_5 = document.getElementById("q5");
    var q_6 = document.getElementById("q6");
    var q_7 = document.getElementById("q7");
    var q_8 = document.getElementById("q8");
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");
    var a_6 = document.getElementById("a6");
    var a_7 = document.getElementById("a7");
    var a_8 = document.getElementById("a8");
    if(q_1.style.display != "none"){
        q_1.style.display = "none";
    }
    if(q_2.style.display != "none"){
        q_2.style.display = "none";
    }
    if(q_3.style.display != "block"){
        q_3.style.display = "block";
    }
    if(q_4.style.display != "none"){
        q_4.style.display = "none";
    }
    if(q_5.style.display != "none"){
        q_5.style.display = "none";
    }
    if(q_6.style.display != "none"){
        q_6.style.display = "none";
    }
    if(q_7.style.display != "none"){
        q_7.style.display = "none";
    }
    if(q_8.style.display != "none"){
        q_8.style.display = "none";
    }
    if(a_1.style.display != "none"){
        a_1.style.display = "none";
    }
    if(a_2.style.display != "none"){
        a_2.style.display = "none";
    }
    if(a_3.style.display != "block" && counter >= 3){
        a_3.style.display = "block";
    }
    if(a_4.style.display != "none"){
        a_4.style.display = "none";
    }
    if(a_5.style.display != "none"){
        a_5.style.display = "none";
    }
    if(a_6.style.display != "none"){
        a_6.style.display = "none";
    }
    if(a_7.style.display != "none"){
        a_7.style.display = "none";
    }
    if(a_8.style.display != "none"){
        a_8.style.display = "none";
    }
}
function ansd(){
    var ans_d = document.getElementById("form_d");
    var soshin4 = document.getElementById("btn_d");
    var qbtn5 = document.getElementById("move5");
    var popup = document.getElementById("ppup-wrap");
    var popup_t = document.getElementById("ppup");
    var popup_t2 = document.getElementById("ppup2");
    var a_4 = document.getElementById("a4");

    if(ans_d.value == "4"){
        qbtn5.style.visibility = "visible";
        ans_d.disabled = true;
        soshin4.disabled = true;
        popup.style.display = "block";
        popup_t.style.display = "block";
        popup_t2.style.display = "none";
        a_4.style.display = "block";
        counter++;
    }else{
        popup.style.display = "block";
        popup_t2.style.display = "block";
    }
}

function displayq4(){
    var q_1 = document.getElementById("q1");
    var q_2 = document.getElementById("q2");
    var q_3 = document.getElementById("q3");
    var q_4 = document.getElementById("q4");
    var q_5 = document.getElementById("q5");
    var q_6 = document.getElementById("q6");
    var q_7 = document.getElementById("q7");
    var q_8 = document.getElementById("q8");
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");
    var a_6 = document.getElementById("a6");
    var a_7 = document.getElementById("a7");
    var a_8 = document.getElementById("a8");

    if(q_1.style.display != "none"){
        q_1.style.display = "none";
    }
    if(q_2.style.display != "none"){
        q_2.style.display = "none";
    }
    if(q_3.style.display != "none"){
        q_3.style.display = "none";
    }
    if(q_4.style.display != "block"){
        q_4.style.display = "block";
    }
    if(q_5.style.display != "none"){
        q_5.style.display = "none";
    }
    if(q_6.style.display != "none"){
        q_6.style.display = "none";
    }
    if(q_7.style.display != "none"){
        q_7.style.display = "none";
    }
    if(q_8.style.display != "none"){
        q_8.style.display = "none";
    }
    if(a_1.style.display != "none"){
        a_1.style.display = "none";
    }
    if(a_2.style.display != "none"){
        a_2.style.display = "none";
    }
    if(a_3.style.display != "none"){
        a_3.style.display = "none";
    }
    if(a_4.style.display != "block" && counter >= 4){
        a_4.style.display = "block";
    }
    if(a_5.style.display != "none"){
        a_5.style.display = "none";
    }
    if(a_6.style.display != "none"){
        a_6.style.display = "none";
    }
    if(a_7.style.display != "none"){
        a_7.style.display = "none";
    }
    if(a_8.style.display != "none"){
        a_8.style.display = "none";
    }
}
function anse(){
    var ans_e = document.getElementById("form_e");
    var soshin5 = document.getElementById("btn_e");
    var qbtn6 = document.getElementById("move6");
    var popup = document.getElementById("ppup-wrap");
    var popup_t = document.getElementById("ppup");
    var popup_t2 = document.getElementById("ppup2");
    var a_5 = document.getElementById("a5");

    if(ans_e.value == "5"){
        qbtn6.style.visibility = "visible";
        ans_e.disabled = true;
        soshin5.disabled = true;
        popup.style.display = "block";
        popup_t.style.display = "block";
        popup_t2.style.display = "none";
        a_5.style.display = "block";
        counter++;
    }else{
        popup.style.display = "block";
        popup_t2.style.display = "block";
    }
}

function displayq5(){
    var q_1 = document.getElementById("q1");
    var q_2 = document.getElementById("q2");
    var q_3 = document.getElementById("q3");
    var q_4 = document.getElementById("q4");
    var q_5 = document.getElementById("q5");
    var q_6 = document.getElementById("q6");
    var q_7 = document.getElementById("q7");
    var q_8 = document.getElementById("q8");
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");
    var a_6 = document.getElementById("a6");
    var a_7 = document.getElementById("a7");
    var a_8 = document.getElementById("a8");
    if(q_1.style.display != "none"){
        q_1.style.display = "none";
    }
    if(q_2.style.display != "none"){
        q_2.style.display = "none";
    }
    if(q_3.style.display != "none"){
        q_3.style.display = "none";
    }
    if(q_4.style.display != "none"){
        q_4.style.display = "none";
    }
    if(q_5.style.display != "block"){
        q_5.style.display = "block";
    }
    if(q_6.style.display != "none"){
        q_6.style.display = "none";
    }
    if(q_7.style.display != "none"){
        q_7.style.display = "none";
    }
    if(q_8.style.display != "none"){
        q_8.style.display = "none";
    }
    if(a_1.style.display != "none"){
        a_1.style.display = "none";
    }
    if(a_2.style.display != "none"){
        a_2.style.display = "none";
    }
    if(a_3.style.display != "none"){
        a_3.style.display = "none";
    }
    if(a_4.style.display != "none"){
        a_4.style.display = "none";
    }
    if(a_5.style.display != "block" && counter >= 5){
        a_5.style.display = "block";
    }
    if(a_6.style.display != "none"){
        a_6.style.display = "none";
    }
    if(a_7.style.display != "none"){
        a_7.style.display = "none";
    }
    if(a_8.style.display != "none"){
        a_8.style.display = "none";
    }
}
function ansf(){
    var ans_f = document.getElementById("form_f");
    var soshin6 = document.getElementById("btn_f");
    var qbtn7 = document.getElementById("move7");
    var popup = document.getElementById("ppup-wrap");
    var popup_t = document.getElementById("ppup");
    var popup_t2 = document.getElementById("ppup2");
    var a_6 = document.getElementById("a6");

    if(ans_f.value == "6"){
        qbtn7.style.visibility = "visible";
        ans_f.disabled = true;
        soshin6.disabled = true;
        popup.style.display = "block";
        popup_t.style.display = "block";
        popup_t2.style.display = "none";
        a_6.style.display = "block";
        counter++;
    }else{
        popup.style.display = "block";
        popup_t2.style.display = "block";
    }
}

function displayq6(){
    var q_1 = document.getElementById("q1");
    var q_2 = document.getElementById("q2");
    var q_3 = document.getElementById("q3");
    var q_4 = document.getElementById("q4");
    var q_5 = document.getElementById("q5");
    var q_6 = document.getElementById("q6");
    var q_7 = document.getElementById("q7");
    var q_8 = document.getElementById("q8");
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");
    var a_6 = document.getElementById("a6");
    var a_7 = document.getElementById("a7");
    var a_8 = document.getElementById("a8");
    if(q_1.style.display != "none"){
        q_1.style.display = "none";
    }
    if(q_2.style.display != "none"){
        q_2.style.display = "none";
    }
    if(q_3.style.display != "none"){
        q_3.style.display = "none";
    }
    if(q_4.style.display != "none"){
        q_4.style.display = "none";
    }
    if(q_5.style.display != "none"){
        q_5.style.display = "none";
    }
    if(q_6.style.display != "block"){
        q_6.style.display = "block";
    }
    if(q_7.style.display != "none"){
        q_7.style.display = "none";
    }
    if(q_8.style.display != "none"){
        q_8.style.display = "none";
    }
    if(a_1.style.display != "none"){
        a_1.style.display = "none";
    }
    if(a_2.style.display != "none"){
        a_2.style.display = "none";
    }
    if(a_3.style.display != "none"){
        a_3.style.display = "none";
    }
    if(a_4.style.display != "none"){
        a_4.style.display = "none";
    }
    if(a_5.style.display != "none"){
        a_5.style.display = "none";
    }
    if(a_6.style.display != "block" && counter >= 6){
        a_6.style.display = "block";
    }
    if(a_7.style.display != "none"){
        a_7.style.display = "none";
    }
    if(a_8.style.display != "none"){
        a_8.style.display = "none";
    }
}
function ansg(){
    var ans_g = document.getElementById("form_g");
    var soshin7 = document.getElementById("btn_g");
    var qbtn8 = document.getElementById("move8");
    var popup = document.getElementById("ppup-wrap");
    var popup_t = document.getElementById("ppup");
    var popup_t2 = document.getElementById("ppup2");
    var a_7 = document.getElementById("a7");

    if(ans_g.value == "7"){
        qbtn8.style.visibility = "visible";
        ans_g.disabled = true;
        soshin7.disabled = true;
        popup.style.display = "block";
        popup_t.style.display = "block";
        popup_t2.style.display = "none";
        a_7.style.display = "block";
        counter++;
    }else{
        popup.style.display = "block";
        popup_t2.style.display = "block";
    }
}

function displayq7(){
    var q_1 = document.getElementById("q1");
    var q_2 = document.getElementById("q2");
    var q_3 = document.getElementById("q3");
    var q_4 = document.getElementById("q4");
    var q_5 = document.getElementById("q5");
    var q_6 = document.getElementById("q6");
    var q_7 = document.getElementById("q7");
    var q_8 = document.getElementById("q8");
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");
    var a_6 = document.getElementById("a6");
    var a_7 = document.getElementById("a7");
    var a_8 = document.getElementById("a8");
    if(q_1.style.display != "none"){
        q_1.style.display = "none";
    }
    if(q_2.style.display != "none"){
        q_2.style.display = "none";
    }
    if(q_3.style.display != "none"){
        q_3.style.display = "none";
    }
    if(q_4.style.display != "none"){
        q_4.style.display = "none";
    }
    if(q_5.style.display != "none"){
        q_5.style.display = "none";
    }
    if(q_6.style.display != "none"){
        q_6.style.display = "none";
    }
    if(q_7.style.display != "block"){
        q_7.style.display = "block";
    }
    if(q_8.style.display != "none"){
        q_8.style.display = "none";
    }
    if(a_1.style.display != "none"){
        a_1.style.display = "none";
    }
    if(a_2.style.display != "none"){
        a_2.style.display = "none";
    }
    if(a_3.style.display != "none"){
        a_3.style.display = "none";
    }
    if(a_4.style.display != "none"){
        a_4.style.display = "none";
    }
    if(a_5.style.display != "none"){
        a_5.style.display = "none";
    }
    if(a_6.style.display != "none"){
        a_6.style.display = "none";
    }
    if(a_7.style.display != "block" && counter >= 7){
        a_7.style.display = "block";
    }
    if(a_8.style.display != "none"){
        a_8.style.display = "none";
    }
}
function ansh(){
    var ans_h = document.getElementById("form_h");
    var soshin8 = document.getElementById("btn_h");
    // var qbtn6 = document.getElementById("move6");
    var popup = document.getElementById("ppup-wrap");
    var popup_t = document.getElementById("ppup");
    var popup_t2 = document.getElementById("ppup2");
    var a_8 = document.getElementById("a8");

    if(ans_h.value == "8"){
        // qbtn6.style.visibility = "visible";
        ans_h.disabled = true;
        soshin8.disabled = true;
        popup.style.display = "block";
        popup_t.style.display = "block";
        popup_t2.style.display = "none";
        a_8.style.display = "block";
        counter++;
    }else{
        popup.style.display = "block";
        popup_t2.style.display = "block";
    }
}

function displayq8(){
    var q_1 = document.getElementById("q1");
    var q_2 = document.getElementById("q2");
    var q_3 = document.getElementById("q3");
    var q_4 = document.getElementById("q4");
    var q_5 = document.getElementById("q5");
    var q_6 = document.getElementById("q6");
    var q_7 = document.getElementById("q7");
    var q_8 = document.getElementById("q8");
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");
    var a_6 = document.getElementById("a6");
    var a_7 = document.getElementById("a7");
    var a_8 = document.getElementById("a8");
    if(q_1.style.display != "none"){
        q_1.style.display = "none";
    }
    if(q_2.style.display != "none"){
        q_2.style.display = "none";
    }
    if(q_3.style.display != "none"){
        q_3.style.display = "none";
    }
    if(q_4.style.display != "none"){
        q_4.style.display = "none";
    }
    if(q_5.style.display != "none"){
        q_5.style.display = "none";
    }
    if(q_6.style.display != "none"){
        q_6.style.display = "none";
    }
    if(q_7.style.display != "none"){
        q_7.style.display = "none";
    }
    if(q_8.style.display != "block"){
        q_8.style.display = "block";
    }
    if(a_1.style.display != "none"){
        a_1.style.display = "none";
    }
    if(a_2.style.display != "none"){
        a_2.style.display = "none";
    }
    if(a_3.style.display != "none"){
        a_3.style.display = "none";
    }
    if(a_4.style.display != "none"){
        a_4.style.display = "none";
    }
    if(a_5.style.display != "none"){
        a_5.style.display = "none";
    }
    if(a_6.style.display != "none"){
        a_6.style.display = "none";
    }
    if(a_7.style.display != "none"){
        a_7.style.display = "none";
    }
    if(a_8.style.display != "block" && counter >= 8){
        a_8.style.display = "block";
    }
}

function popupclose(){
    var pp = document.getElementById("ppup-wrap");

    pp.style.display = "none";
}