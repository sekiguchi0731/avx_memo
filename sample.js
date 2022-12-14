// ここらへんのグローバル変数が参照されない
var q_1 = document.getElementById("q1");
var q_2 = document.getElementById("q2");
var q_3 = document.getElementById("q3");
var q_4 = document.getElementById("q4");
var q_5 = document.getElementById("q5");
var a_1 = document.getElementById("a1");
var a_2 = document.getElementById("a2");
var a_3 = document.getElementById("a3");
var a_4 = document.getElementById("a4");
var a_5 = document.getElementById("a5");
var counter = 0;


function ansa(){
    var ans_a = document.getElementById("form_a");
    //値渡し
    //var qbtn2 = document.getElementById("move2").style.visibility;
    //参照渡し
    var soshin1 = document.getElementById("btn_a");
    //var qbtn2 = document.getElementById("move2");
    var popup = document.getElementById("ppup-wrap");
    var popup_t = document.getElementById("ppup");
    var popup_t2 = document.getElementById("ppup2");
    var a_1 = document.getElementById("a1");

    //console.log();
    if(ans_a.value == "十"){
        //document.getElementById("move2").style.visibility = "visible";
        //qbtn2.style.visibility = "visible";
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
 
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");

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
}

function ansb(){
    var ans_b = document.getElementById("form_b");
    var soshin2 = document.getElementById("btn_b");
    //var qbtn3 = document.getElementById("move3");
    var popup = document.getElementById("ppup-wrap");
    var popup_t = document.getElementById("ppup");
    var popup_t2 = document.getElementById("ppup2");
    var a_2 = document.getElementById("a2");

    if(ans_b.value == "針"){
        //qbtn3.style.visibility = "visible";
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
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");

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
    if(a_4.style.display != "none"){
        a_4.style.display = "none";
    }
    if(a_5.style.display != "none"){
        a_5.style.display = "none";
    }
}
function ansc(){
    var ans_c = document.getElementById("form_c");
    var soshin3 = document.getElementById("btn_c");
    //var qbtn4 = document.getElementById("move4");
    var popup = document.getElementById("ppup-wrap");
    var popup_t = document.getElementById("ppup");
    var popup_t2 = document.getElementById("ppup2");
    var a_3 = document.getElementById("a3");

    if(ans_c.value == "座"){
        //qbtn4.style.visibility = "visible";
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

    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");
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

    if(a_1.style.display != "none"){
        a_1.style.display = "none";
    }
    if(a_2.style.display != "none"){
        //document.write("で"); ←表示される
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
}
function ansd(){
    var ans_d = document.getElementById("form_d");
    var soshin4 = document.getElementById("btn_d");
    //var qbtn5 = document.getElementById("move5");
    var popup = document.getElementById("ppup-wrap");
    var popup_t = document.getElementById("ppup");
    var popup_t2 = document.getElementById("ppup2");
    var a_4 = document.getElementById("a4");

    if(ans_d.value == "ぼたん"){
        //qbtn5.style.visibility = "visible";
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
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");

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
}
function anse(){
    var ans_e = document.getElementById("form_e");
    var soshin5 = document.getElementById("btn_e");
    // var qbtn6 = document.getElementById("move6");
    var popup = document.getElementById("ppup-wrap");
    var popup_t = document.getElementById("ppup");
    var popup_t2 = document.getElementById("ppup2");
    var popup_last = document.getElementById("ppup3");
    var a_5 = document.getElementById("a5");

    if(ans_e.value == "ten" || ans_e.value == "TEN" || ans_e.value == "Ten"){
        // qbtn6.style.visibility = "visible";
        ans_e.disabled = true;
        soshin5.disabled = true;
        popup.style.display = "block";
        popup_last.style.display = "none";
        popup_t.style.display = "block";
        popup_t2.style.display = "none";
        a_5.style.display = "block";
        counter++;
    }else{
        popup_last.style.display = "none";
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
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");
    var popup = document.getElementById("ppup-wrap");
    var popup_last = document.getElementById("ppup3");

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

    popup.style.display = "block";
    popup_last.style.display = "block";
}

function popupclose(){
    var pp = document.getElementById("ppup-wrap");
    var p1 = document.getElementById("ppup1");
    var p2 = document.getElementById("ppup2");
    var p3 = document.getElementById("ppup3");
    var p4 = document.getElementById("ppup4");
    var p5 = document.getElementById("ppup5");

    pp.style.display = "none";
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
}

function popupclose2(){
    var pp = document.getElementById("ppup-wrap");
    var p1 = document.getElementById("ppup4");
    var qbtn2 = document.getElementById("move2");
    var qbtn3 = document.getElementById("move3");
    var qbtn4 = document.getElementById("move4");
    var qbtn5 = document.getElementById("move5");

    p1.style.display = "none";
    pp.style.display = "none";
    if(counter == 1){
        qbtn2.style.visibility = "visible";
        displayq2();
    }else if(counter == 2){
        qbtn3.style.visibility = "visible";
        displayq3();
    }else if(counter == 3){
        qbtn4.style.visibility = "visible";
        displayq4();
    }else if(counter == 4){
        qbtn5.style.visibility = "visible";
        displayq5();
    }
}

function next(){
    var pp = document.getElementById("ppup-wrap");
    var p1 = document.getElementById("ppup4");
    var p2 = document.getElementById("ppup5");

    pp.style.display = "block";
    p1.style.display = "block";
    if(counter == 5){
        p2.style.display = "block";
    }
}