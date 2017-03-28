var progress = document.querySelectorAll(".mbl-progress");

[].forEach.call(progress, function(el) {
	el.classList.add("start");
	setTimeout(function() { el.classList.remove("start"); el.classList.add("anim")  }, 10);
});
