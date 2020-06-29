function light(sw) {
var pic;
if (sw == 0) {
pic = "giphy1.gif"
} else {
pic = "tenor1.gif"
}
document.getElementById('myImage').src = pic;
}