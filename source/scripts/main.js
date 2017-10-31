/* Sticky and Resizing Nav Bar */
var timer = self.setInterval(updateNavBarStyle,10)
window.onscroll = function() {updatePosition()};
function updateNavBarStyle() {
	var changeRatio = 9;
	var classN = 'active'
	var element = document.getElementById("header-main");

	var height = document.body.clientHeight;
	var y = window.pageYOffset;
	if (height/y < changeRatio) {
		document.getElementById("header-main").className = classN;
	} else {
		element.className = '';
	}
}
function updatePosition() {
	var parts = new Array("part1", "part2", "part3", "part4")

	var fieldRatio = 9;
	var eduRatio = 4.2;
	var photoRatio = 2.4;
	var contactRatio = 1.4;

	var height = document.body.clientHeight;
	var y = window.pageYOffset;
	var currentRatio = height/y;
	console.log(currentRatio);

	if (currentRatio > fieldRatio) {
		// reset all background
		for (var i = parts.length - 1; i >= 0; i--) {
			console.log("parts[i]");
			document.getElementById(parts[i]).style.backgroundColor = null;
		}
	}
	else if (currentRatio > eduRatio){
		// reset all background
		for (var i = parts.length - 1; i >= 0; i--) {
			document.getElementById(parts[i]).style.backgroundColor = "#666";
		}
		document.getElementById(parts[0]).style.backgroundColor = "#333";
	}
	else if (currentRatio > photoRatio){
		// reset all background
		for (var i = parts.length - 1; i >= 0; i--) {
			document.getElementById(parts[i]).style.backgroundColor = "#666";
		}
		document.getElementById(parts[1]).style.backgroundColor = "#333";
	}
	else if (currentRatio > contactRatio){
		// reset all background
		for (var i = parts.length - 1; i >= 0; i--) {
			document.getElementById(parts[i]).style.backgroundColor = "#666";
		}
		document.getElementById(parts[2]).style.backgroundColor = "#333";
	}
	else{
		// reset all background
		for (var i = parts.length - 1; i >= 0; i--) {
			document.getElementById(parts[i]).style.backgroundColor = "#666";
		}
		document.getElementById(parts[3]).style.backgroundColor = "#333";
	}
}

/* smooth scroll */
document.getElementById("nav-to-field").addEventListener("click", toField);
document.getElementById("nav-to-edu").addEventListener("click", toEducation);
document.getElementById("nav-to-photo").addEventListener("click", toPhoto);
document.getElementById("nav-to-contact").addEventListener("click", toContact);
function toField() {
    var element = document.getElementById("field");
    element.scrollIntoView({ behavior: 'smooth' });
}
function toEducation() {
    var element = document.getElementById("education");
    element.scrollIntoView({ behavior: 'smooth' });
}
function toPhoto() {
    var element = document.getElementById("photo");
    element.scrollIntoView({ behavior: 'smooth' });
}
function toContact() {
    var element = document.getElementById("contact");
    element.scrollIntoView({ behavior: 'smooth' });
}

/* modal */
document.getElementById("ai-detail-btn").addEventListener("click", aiDetail);
document.getElementById("img-detail-btn").addEventListener("click", imgDetail);
document.getElementById("web-detail-btn").addEventListener("click", webDetail);
document.getElementById("ai-close-btn").addEventListener("click", aiClose);
document.getElementById("img-close-btn").addEventListener("click", imgClose);
document.getElementById("web-close-btn").addEventListener("click", webClose);

function aiDetail() {document.getElementById('ai-detail').style.display='block';}
function imgDetail() {document.getElementById('img-detail').style.display='block';}
function webDetail() {document.getElementById('web-detail').style.display='block';}
function aiClose() {document.getElementById('ai-detail').style.display='none'}
function imgClose() {document.getElementById('img-detail').style.display='none'}
function webClose() {document.getElementById('web-detail').style.display='none'}

/* photo */
var photoId = 0;
document.getElementById("leftBtn").addEventListener("click", lastPhoto);
document.getElementById("rightBtn").addEventListener("click", nextPhoto);

function nextPhoto(){
    photoId = (photoId + 1) % 7;
		console.log(photoId);
    document.getElementById("showImg").src = './assets/images/photo'+photoId+'.JPG';

}

function lastPhoto(){
		photoId -= 1;
		while (photoId < 0) {
			photoId+=7;
		}
		photoId %= 7;
		document.getElementById("showImg").src = './assets/images/photo'+photoId+'.JPG'
}
