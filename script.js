const element = document.getElementsByClassName('a');
const element2 = document.getElementsByClassName('b');
const element3 = document.getElementsByClassName('c');
const element4 = document.getElementsByClassName('d');

element[0].addEventListener("click", function() {
    element[0].innerHTML = "wtf";
});
element2[0].addEventListener("click", function() {
    element2[0].innerHTML = "toothpaste";
});
element3[0].addEventListener("click", function() {
    element3[0].innerHTML = "brown";
});
element4[0].addEventListener("click", function() {
    element4[0].innerHTML = "idk what this color is";
});