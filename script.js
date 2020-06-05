var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\uD83D\uDDD1");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    console.log(ev.target.tagName);
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement(e) {
  e.preventDefault();
  var li = document.createElement("li");
  var inputValue = document.getElementById("new-todo").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  var span = document.createElement("span");
  var txt = document.createTextNode("\uD83D\uDDD1");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  if (inputValue === "") {
    alert("Please Add A Task!");
  } else {
    document.getElementById("todo-list").appendChild(li);
  }

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  document.getElementById("new-todo").value = "";
}
