

// https://codepen.io/alphardex/pen/Exxodoq

window.addEventListener("load", function(letters) {


	let glowInTexts = document.querySelectorAll(".glowIn");
	glowInTexts.forEach(glowInText => {
	  let letters = glowInText.textContent.split("");
	  glowInText.textContent = "";
	  letters.forEach((letter, i) => {
		let span = document.createElement("span");
		span.textContent = letter;
		span.style.animationDelay = `${i * 0.05}s`;
		glowInText.append(span);
	  });
	});
});



// start of video code



window.addEventListener("load", function() {

	const video = document.querySelector("video")
	video.autoplay = false;
	video.loop = true;
	video.load();
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	
	const video = document.querySelector("video")
	video.play();
	console.log("Play Video");
	video.volume = 1.0;
	console.log(video.volume * 100 + "%");
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
	
});


document.querySelector("#pause").addEventListener("click", function() {
	const video = document.querySelector("video")
	video.pause();
	console.log("Pause Video");
});


document.querySelector("#mute").addEventListener("click", function()

{
	const video = document.querySelector("video")
	video.muted = !video.muted;
	if (video.muted === true) {
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else document.querySelector("#mute").innerHTML = "Mute"

});

// end of video code

