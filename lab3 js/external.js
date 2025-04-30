let myWindow = window.open("index2.html"
    , "_blank", "width=500,height=500");
myWindow.document.write("Abdallah Bahaa");

console.log(document.images);

let img = document.images 
console.log("abdallah",img);

let img2 = document.querySelectorAll("img")
console.log("abdallah",img2);


let city = document.getElementById("city");
for (let option of city.options) {
  console.log("Value: " + option.value );
}


let tables = document.getElementsByTagName("table");
let second_table = tables[1]; 
let tds = second_table.getElementsByTagName("td");
console.log(tds);

let element = document.querySelectorAll(".fontBlue.BGrey");
console.log(element);


function updateDateTime() {
  let now = new Date().toLocaleString();
  document.title = now;
  document.getElementById("datetime").innerText = now; 
}
setInterval(updateDateTime, 1000);

let str = location.search;
let search = str.substring(1);
let arr = search.split("&");
let obj = {};
arr.forEach((elem) => {
  let keyValue = elem.split("="); 
  obj[keyValue[0]] = keyValue[1];
});
console.log(obj);