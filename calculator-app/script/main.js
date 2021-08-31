document.getElementById("wn").innerHTML = "0";
const key1 = document.querySelector("#key1");
key1.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "7";
});

const key2 = document.querySelector("#key2");
key2.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "8";
});

const key3 = document.querySelector("#key3");
key3.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "9";
});

const key4 = document.querySelector("#del");
key4.addEventListener("click", function f() {
    w = document.getElementById("wn");
    w.innerHTML = String(w.innerHTML).slice(0, -1);
});

const key5 = document.querySelector("#key4");
key5.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "4";
});

const key6 = document.querySelector("#key5");
key6.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "5";
});

const key7 = document.querySelector("#key6");
key7.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "6";
});

const key8 = document.querySelector("#key7");
key8.addEventListener("click", function f() {
    var w = String(document.getElementById("wn").innerHTML);
    if (w[w.length-1] != "+" && w[w.length-1] != "-" && w[w.length-1] != "*" && w[w.length-1] != "/" && w[w.length-1] != ".") {
        document.getElementById("wn").innerHTML += "+";
    }
});

const key9 = document.querySelector("#key8");
key9.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "1";
});

const key10 = document.querySelector("#key9");
key10.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "2";
});

const key11 = document.querySelector("#key10");
key11.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "3";
});

const key12 = document.querySelector("#key11");
key12.addEventListener("click", function f() {
    var w = String(document.getElementById("wn").innerHTML);
    if (w[w.length-1] != "+" && w[w.length-1] != "-" && w[w.length-1] != "*" && w[w.length-1] != "/" && w[w.length-1] != ".") {
        document.getElementById("wn").innerHTML += "-";
    }
});

const key13 = document.querySelector("#key12");
key13.addEventListener("click", function f() {
    var w = String(document.getElementById("wn").innerHTML);
    if (w[w.length-1] != "+" && w[w.length-1] != "-" && w[w.length-1] != "*" && w[w.length-1] != "/" && w[w.length-1] != ".") {
        document.getElementById("wn").innerHTML += ".";
    }
});

const key14 = document.querySelector("#key13");
key14.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "0";
});

const key15 = document.querySelector("#key14");
key15.addEventListener("click", function f() {
    var w = String(document.getElementById("wn").innerHTML);
    if (w[w.length-1] != "+" && w[w.length-1] != "-" && w[w.length-1] != "*" && w[w.length-1] != "/" && w[w.length-1] != ".") {
        document.getElementById("wn").innerHTML += "/";
    }
});

const key16 = document.querySelector("#key15");
key16.addEventListener("click", function f() {
    var w = String(document.getElementById("wn").innerHTML);
    if (w[w.length-1] != "+" && w[w.length-1] != "-" && w[w.length-1] != "*" && w[w.length-1] != "/" && w[w.length-1] != ".") {
        document.getElementById("wn").innerHTML += "*";
    }
});

const key17 = document.querySelector("#reset");
key17.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML = "";
});

const key18 = document.querySelector("#calculate");
key18.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML = eval(String(document.getElementById("wn").innerHTML));
});