function Print() {
    var x = document.getElementById("mile3");
    
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
//     let url = document.URL;
// document.getElementById("demo1").innerHTML = url;
    
  }