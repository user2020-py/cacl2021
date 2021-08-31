var theme = 1;
function setClassname(){
  if (theme === 1){
    theme = 2
  } else if (theme === 2){
    theme = 3
  } else if (theme === 3){
    theme = 1
  } 
  document.getElementById("theme-btn").className = `theme${theme}`;
}
function setTheme(theme) {
  var container = document.getElementById("body");
  var body = document.getElementById("container");
  var head = document.getElementById("head");
  var wn = document.getElementById("wn");
  var nums = document.getElementById("keys");
  var theme_btn = document.getElementById("theme-btn");
  var key1 = document.getElementById("key1");
  var key2 = document.getElementById("key2");
  var key3 = document.getElementById("key3");
  var key4 = document.getElementById("key4");
  var key5 = document.getElementById("key5");
  var key6 = document.getElementById("key6");
  var key7 = document.getElementById("key7");
  var key8 = document.getElementById("key8");
  var key9 = document.getElementById("key9");
  var key10 = document.getElementById("key10");
  var key11 = document.getElementById("key11");
  var key12 = document.getElementById("key12");
  var key13 = document.getElementById("key13");
  var key14 = document.getElementById("key14");
  var key15 = document.getElementById("key15");
  var key16 = document.getElementById("del");
  var key17 = document.getElementById("reset");
  var key18 = document.getElementById("calculate");
  if (theme === 1) {
    container.style.background = "hsl(222, 26%, 31%)";
    body.style.background = "hsl(222, 26%, 31%)";
    wn.style.color = "#fff";
    nums.style.color = "rgb(68, 70, 85)";
    head.style.color = "#fff";
    wn.style.background = "hsl(224, 36%, 15%)";
    nums.style.background = "hsl(223, 31%, 20%)";
    theme_btn.style.background = "hsl(223, 31%, 20%)";
    // ===================
    key1.style.background = "hsl(30, 25%, 89%)";
    key2.style.background = "hsl(30, 25%, 89%)";
    key3.style.background = "hsl(30, 25%, 89%)";
    key4.style.background = "hsl(30, 25%, 89%)";
    key5.style.background = "hsl(30, 25%, 89%)";
    key6.style.background = "hsl(30, 25%, 89%)";
    key7.style.background = "hsl(30, 25%, 89%)";
    key8.style.background = "hsl(30, 25%, 89%)";
    key9.style.background = "hsl(30, 25%, 89%)";
    key10.style.background = "hsl(30, 25%, 89%)";
    key11.style.background = "hsl(30, 25%, 89%)";
    key12.style.background = "hsl(30, 25%, 89%)";
    key13.style.background = "hsl(30, 25%, 89%)";
    key14.style.background = "hsl(30, 25%, 89%)";
    key15.style.background = "hsl(30, 25%, 89%)";
    key16.style.background = "hsl(225, 21%, 49%)";
    key17.style.background = "hsl(225, 21%, 49%)";
    key18.style.background = "hsl(6, 63%, 50%)";
    // ===================
    key1.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key2.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key3.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key4.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key5.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key6.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key7.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key8.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key9.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key10.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key11.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key12.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key13.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key14.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key15.style.boxShadow = "0 3px hsl(28, 16%, 65%)";
    key16.style.boxShadow = "0 3px hsl(224, 28%, 35%)";
    key17.style.boxShadow = "0 3px hsl(224, 28%, 35%)";
    key18.style.boxShadow = "0 3px hsl(6, 70%, 34%)";
    key18.style.color = "#fff";
    theme_btn.className+=" btn1";
  } else if (theme === 2) {
    wn.style.color = "hsl(60, 10%, 19%)";
    nums.style.color = "hsl(60, 10%, 19%)";
    container.style.background = "hsl(0, 0%, 90%)";
    body.style.background = "hsl(0, 0%, 90%)";
    head.style.color = "hsl(60, 10%, 19%)";
    wn.style.background = "hsl(0, 0%, 93%)";
    nums.style.background = "hsl(0, 5%, 81%)";
    theme_btn.style.background = "hsl(0, 5%, 81%)";
    // ===================
    key1.style.background = "hsl(45, 7%, 89%)";
    key2.style.background = "hsl(45, 7%, 89%)";
    key3.style.background = "hsl(45, 7%, 89%)";
    key4.style.background = "hsl(45, 7%, 89%)";
    key5.style.background = "hsl(45, 7%, 89%)";
    key6.style.background = "hsl(45, 7%, 89%)";
    key7.style.background = "hsl(45, 7%, 89%)";
    key8.style.background = "hsl(45, 7%, 89%)";
    key9.style.background = "hsl(45, 7%, 89%)";
    key10.style.background = "hsl(45, 7%, 89%)";
    key11.style.background = "hsl(45, 7%, 89%)";
    key12.style.background = "hsl(45, 7%, 89%)";
    key13.style.background = "hsl(45, 7%, 89%)";
    key14.style.background = "hsl(45, 7%, 89%)";
    key15.style.background = "hsl(45, 7%, 89%)";
    key16.style.background = "hsl(185, 42%, 37%)";
    key17.style.background = "hsl(185, 42%, 37%)";
    key18.style.background = "hsl(25, 98%, 40%)";
    // ===================
    key1.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key2.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key3.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key4.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key5.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key6.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key7.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key8.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key9.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key10.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key11.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key12.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key13.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key14.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key15.style.boxShadow = "0 3px hsl(35, 11%, 61%)";
    key16.style.boxShadow = "0 3px hsl(185, 58%, 25%)";
    key17.style.boxShadow = "0 3px hsl(185, 58%, 25%)";
    key18.style.boxShadow = "0 3px hsl(25, 99%, 27%)";
    key18.style.color = "#fff";
    theme_btn.className+=" btn2";
  } else if (theme === 3) {
    container.style.background = "hsl(268, 75%, 9%)";
    body.style.background = "hsl(268, 75%, 9%)";
    head.style.color = "hsl(52, 100%, 62%)";
    wn.style.color = "hsl(52, 100%, 62%)";
    wn.style.background = "hsl(268, 71%, 12%)";
    nums.style.background = "hsl(268, 71%, 12%)";
    nums.style.color = "hsl(52, 100%, 62%)";
    theme_btn.style.background = "hsl(268, 71%, 12%)";
    // ===================
    key1.style.background = "hsl(268, 47%, 21%)";
    key2.style.background = "hsl(268, 47%, 21%)";
    key3.style.background = "hsl(268, 47%, 21%)";
    key4.style.background = "hsl(268, 47%, 21%)";
    key5.style.background = "hsl(268, 47%, 21%)";
    key6.style.background = "hsl(268, 47%, 21%)";
    key7.style.background = "hsl(268, 47%, 21%)";
    key8.style.background = "hsl(268, 47%, 21%)";
    key9.style.background = "hsl(268, 47%, 21%)";
    key10.style.background = "hsl(268, 47%, 21%)";
    key11.style.background = "hsl(268, 47%, 21%)";
    key12.style.background = "hsl(268, 47%, 21%)";
    key13.style.background = "hsl(268, 47%, 21%)";
    key14.style.background = "hsl(268, 47%, 21%)";
    key15.style.background = "hsl(268, 47%, 21%)";
    key16.style.background = "hsl(281, 89%, 26%)";
    key17.style.background = "hsl(281, 89%, 26%)";
    key18.style.background = "hsl(176, 100%, 44%)";
    // ===================
    key1.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key2.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key3.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key4.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key5.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key6.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key7.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key8.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key9.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key10.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key11.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key12.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key13.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key14.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key15.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    key16.style.boxShadow = "0 3px hsl(285, 91%, 52%)";
    key17.style.boxShadow = "0 3px hsl(285, 91%, 52%)";
    key18.style.boxShadow = "0 3px hsl(177, 92%, 70%)";
    key18.style.color = "hsl(198, 20%, 13%)";
    theme_btn.className+=" btn3";
  }
}
