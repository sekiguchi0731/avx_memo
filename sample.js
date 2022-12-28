// グローバル変数が参照されない
var counter = 0;

window.onload = function(){
    displayq0();
}

function ansa() {
    var ans_a = document.getElementById("form_a");
    //値渡し
    //var qbtn2 = document.getElementById("move2").style.visibility;
    //参照渡し
    var soshin1 = document.getElementById("btn_a");
    var a_1 = document.getElementById("a1");

    if (ans_a.value == "10") {
        ans_a.disabled = true;
        soshin1.disabled = true;  
        alertmaker("正解！" + "<br>" + "条件が提示されました！");
        a_1.style.display = "block";
        counter++;
    } else {
        alertmaker("不正解..." + "<br>" + "もう一度考えてみよう。")
    }
}

function displayq0() {
    var q_0 = document.getElementById("q0");
    var q_1 = document.getElementById("q1");
    var q_2 = document.getElementById("q2");
    var q_3 = document.getElementById("q3");
    var q_4 = document.getElementById("q4");
    var q_5 = document.getElementById("q5");

    var a_0 = document.getElementById("a0");
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");

    if (q_0.style.display != "block") {
        q_0.style.display = "block";
    }
    if (a_0.style.display != "block") {
        a_0.style.display = "block";
    }
    if (q_1.style.display != "none") {
        q_1.style.display = "none";
    }
    if (a_1.style.display != "none") {
        a_1.style.display = "none";
    }
    if (q_2.style.display != "none") {
        q_2.style.display = "none";
    }
    if (a_2.style.display != "none") {
        a_2.style.display = "none";
    }
    if (q_3.style.display != "none") {
        q_3.style.display = "none";
    }
    if (a_3.style.display != "none") {
        a_3.style.display = "none";
    }
    if (q_4.style.display != "none") {
        q_4.style.display = "none";
    }
    if (a_4.style.display != "none") {
        a_4.style.display = "none";
    }
    if (q_5.style.display != "none") {
        q_5.style.display = "none";
    }
    if (a_5.style.display != "none") {
        a_5.style.display = "none";
    }
}

function displayq1() {
    var q_0 = document.getElementById("q0");
    var q_1 = document.getElementById("q1");
    var q_2 = document.getElementById("q2");
    var q_3 = document.getElementById("q3");
    var q_4 = document.getElementById("q4");
    var q_5 = document.getElementById("q5");

    var a_0 = document.getElementById("a0");
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");

    if (q_0.style.display != "none") {
        q_0.style.display = "none";
    }
    if (a_0.style.display != "none") {
        a_0.style.display = "none";
    }
    if (q_1.style.display != "block") {
        q_1.style.display = "block";
    }
    if (a_1.style.display != "block" && counter >= 1) {
        a_1.style.display = "block";
    }
    if (q_2.style.display != "none") {
        q_2.style.display = "none";
    }
    if (a_2.style.display != "none") {
        a_2.style.display = "none";
    }
    if (q_3.style.display != "none") {
        q_3.style.display = "none";
    }
    if (a_3.style.display != "none") {
        a_3.style.display = "none";
    }
    if (q_4.style.display != "none") {
        q_4.style.display = "none";
    }
    if (a_4.style.display != "none") {
        a_4.style.display = "none";
    }
    if (q_5.style.display != "none") {
        q_5.style.display = "none";
    }
    if (a_5.style.display != "none") {
        a_5.style.display = "none";
    }
}

function ansb() {
    var ans_b = document.getElementById("form_b");
    var soshin2 = document.getElementById("btn_b");
    var a_2 = document.getElementById("a2");

    if (ans_b.value == "座") {
        alertmaker("正解！" + "<br>" + "条件が提示されました！");
        ans_b.disabled = true;
        soshin2.disabled = true;
        a_2.style.display = "block";
        counter++;
    } else {
        alertmaker("不正解..." + "<br>" + "もう一度考えてみよう。")
    }
}

function displayq2() {
    var q_0 = document.getElementById("q0");
    var q_1 = document.getElementById("q1");
    var q_2 = document.getElementById("q2");
    var q_3 = document.getElementById("q3");
    var q_4 = document.getElementById("q4");
    var q_5 = document.getElementById("q5");

    var a_0 = document.getElementById("a0");
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");

    if (q_0.style.display != "none") {
        q_0.style.display = "none";
    }
    if (a_0.style.display != "none") {
        a_0.style.display = "none";
    }
    if (q_1.style.display != "none") {
        q_1.style.display = "none";
    }
    if (a_1.style.display != "none") {
        a_1.style.display = "none";
    }
    if (q_2.style.display != "block") {
        q_2.style.display = "block";
    }
    if (a_2.style.display != "block" && counter >= 2) {
        a_2.style.display = "block";
    }
    if (q_3.style.display != "none") {
        q_3.style.display = "none";
    }
    if (a_3.style.display != "none") {
        a_3.style.display = "none";
    }
    if (q_4.style.display != "none") {
        q_4.style.display = "none";
    }
    if (q_5.style.display != "none") {
        q_5.style.display = "none";
    }
    if (a_4.style.display != "none") {
        a_4.style.display = "none";
    }
    if (a_5.style.display != "none") {
        a_5.style.display = "none";
    }
}

function ansc() {
    var ans_c = document.getElementById("form_c");
    var soshin3 = document.getElementById("btn_c");
    var a_3 = document.getElementById("a3");

    if (ans_c.value == "針") {
        ans_c.disabled = true;
        soshin3.disabled = true;
        a_3.style.display = "block";
        counter++;
        alertmaker("正解！" + "<br>" + "条件が提示されました！");
    } else {
        alertmaker("不正解..." + "<br>" + "もう一度考えてみよう。")
    }
}

function displayq3() {
    var q_0 = document.getElementById("q0");
    var q_1 = document.getElementById("q1");
    var q_2 = document.getElementById("q2");
    var q_3 = document.getElementById("q3");
    var q_4 = document.getElementById("q4");
    var q_5 = document.getElementById("q5");

    var a_0 = document.getElementById("a0");
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");

    if (q_0.style.display != "none") {
        q_0.style.display = "none";
    }
    if (q_1.style.display != "none") {
        q_1.style.display = "none";
    }
    if (q_2.style.display != "none") {
        q_2.style.display = "none";
    }
    if (q_3.style.display != "block") {
        q_3.style.display = "block";
    }
    if (q_4.style.display != "none") {
        q_4.style.display = "none";
    }
    if (q_5.style.display != "none") {
        q_5.style.display = "none";
    }

    if (a_0.style.display != "none") {
        a_0.style.display = "none";
    }
    if (a_1.style.display != "none") {
        a_1.style.display = "none";
    }
    if (a_2.style.display != "none") {
        a_2.style.display = "none";
    }
    if (a_3.style.display != "block" && counter >= 3) {
        a_3.style.display = "block";
    }
    if (a_4.style.display != "none") {
        a_4.style.display = "none";
    }
    if (a_5.style.display != "none") {
        a_5.style.display = "none";
    }
}

function ansd() {
    var ans_d = document.getElementById("form_d");
    var soshin4 = document.getElementById("btn_d");
    var a_4 = document.getElementById("a4");

    if (ans_d.value == "ぼたん") {
        ans_d.disabled = true;
        soshin4.disabled = true;
        a_4.style.display = "block";
        counter++;
        alertmaker("正解！" + "<br>" + "条件が提示されました！");
    } else {
        alertmaker("不正解..." + "<br>" + "もう一度考えてみよう。")
    }
}

function displayq4() {
    var q_0 = document.getElementById("q0");
    var q_1 = document.getElementById("q1");
    var q_2 = document.getElementById("q2");
    var q_3 = document.getElementById("q3");
    var q_4 = document.getElementById("q4");
    var q_5 = document.getElementById("q5");

    var a_0 = document.getElementById("a0");
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");

    if (q_0.style.display != "none") {
        q_0.style.display = "none";
    }
    if (q_1.style.display != "none") {
        q_1.style.display = "none";
    }
    if (q_2.style.display != "none") {
        q_2.style.display = "none";
    }
    if (q_3.style.display != "none") {
        q_3.style.display = "none";
    }
    if (q_4.style.display != "block") {
        q_4.style.display = "block";
    }
    if (q_5.style.display != "none") {
        q_5.style.display = "none";
    }

    if (a_0.style.display != "none") {
        a_0.style.display = "none";
    }
    if (a_1.style.display != "none") {
        a_1.style.display = "none";
    }
    if (a_2.style.display != "none") {
        a_2.style.display = "none";
    }
    if (a_3.style.display != "none") {
        a_3.style.display = "none";
    }
    if (a_4.style.display != "block" && counter >= 4) {
        a_4.style.display = "block";
    }
    if (a_5.style.display != "none") {
        a_5.style.display = "none";
    }
}

function anse() {
    var ans_e = document.getElementById("form_e");
    var soshin5 = document.getElementById("btn_e");
    var a_5 = document.getElementById("a5");

    if (ans_e.value == "ten" || ans_e.value == "TEN" || ans_e.value == "Ten") {
        ans_e.disabled = true;
        soshin5.disabled = true;
        a_5.style.display = "block";
        counter++;
        alertmaker("正解！" + "<br>" + "条件が提示されました！");
    } else {
        alertmaker("不正解..." + "<br>" + "もう一度考えてみよう。")
    }
}

function displayq5() {
    var q_0 = document.getElementById("q0");
    var q_1 = document.getElementById("q1");
    var q_2 = document.getElementById("q2");
    var q_3 = document.getElementById("q3");
    var q_4 = document.getElementById("q4");
    var q_5 = document.getElementById("q5");

    var a_0 = document.getElementById("a0");
    var a_1 = document.getElementById("a1");
    var a_2 = document.getElementById("a2");
    var a_3 = document.getElementById("a3");
    var a_4 = document.getElementById("a4");
    var a_5 = document.getElementById("a5");

    if (q_0.style.display != "none") {
        q_0.style.display = "none";
    }
    if (q_1.style.display != "none") {
        q_1.style.display = "none";
    }
    if (q_2.style.display != "none") {
        q_2.style.display = "none";
    }
    if (q_3.style.display != "none") {
        q_3.style.display = "none";
    }
    if (q_4.style.display != "none") {
        q_4.style.display = "none";
    }
    if (q_5.style.display != "block") {
        q_5.style.display = "block";
    }

    if (a_0.style.display != "none") {
        a_0.style.display = "none";
    }
    if (a_1.style.display != "none") {
        a_1.style.display = "none";
    }
    if (a_2.style.display != "none") {
        a_2.style.display = "none";
    }
    if (a_3.style.display != "none") {
        a_3.style.display = "none";
    }
    if (a_4.style.display != "none") {
        a_4.style.display = "none";
    }
    if (a_5.style.display != "block" && counter >= 5) {
        a_5.style.display = "block";
    }
}

function popupclose2() {
    var qbtn1 = document.getElementById("move1");
    var qbtn2 = document.getElementById("move2");
    var qbtn3 = document.getElementById("move3");
    var qbtn4 = document.getElementById("move4");
    var qbtn5 = document.getElementById("move5");

    if (counter == 0) {
        qbtn1.style.visibility = "visible";
        displayq1();
    } else if (counter == 1) {
        qbtn2.style.visibility = "visible";
        displayq2();
    } else if (counter == 2) {
        qbtn3.style.visibility = "visible";
        displayq3();
    } else if (counter == 3) {
        qbtn4.style.visibility = "visible";
        displayq4();
    } else if (counter == 4) {
        qbtn5.style.visibility = "visible";
        displayq5();
    }
}

function next() {
    if (counter == 0) {
        $('#btn_jz').prop('disabled', true);
        alertmaker("謎が表示されました！", popupclose2())
    }
    if (counter == 1) {
        $('#btn_ja').prop('disabled', true);
    }
    if (counter == 2) {
        $('#btn_jb').prop('disabled', true);
    }
    if (counter == 3) {
        $('#btn_jc').prop('disabled', true);
    }
    if (counter == 4) {
        // alertmaker("次の謎が表示されました！", popupclose2())
        $('#btn_jd').prop('disabled', true);
        alertmaker("次の謎が表示されました！" + "<br>" + "これが最後の謎です")
    }
    if (counter == 5) {
        $('#btn_je').prop('disabled', true);
        alertmaker("必要なものを持って" + "<br>" + "ブースに向かいましょう！")
    } else {
        alertmaker("次の謎が表示されました！", popupclose2())
    }
}

function alertmaker(popup, callback) {
    $('#close, #layer, #closetitle').off(); //1回クリックイベントをリセット
    $(".popuptext").html(popup);
    $('#popup, #layer').css("display", "block");

    $('#close, #layer, #closetitle').click(function(e) {
        $('#popup, #layer').hide();
        if (callback) { //2変数目があれば実行する
            callback();
        }
    });
    // if (arguments.length == 2) {
    //     $("#close, #layer").one("click", callback); //one()は誤字じゃないです！
    // }
}