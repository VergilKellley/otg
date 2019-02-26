

		/******************************COMBINE COUNT DOWN************************/
				function countDown() {
					var today = new Date();
					var eventDate = new Date("FEBRUARY 26, 2020 00:00");

					var currentTime = today.getTime();
					var eventTime = eventDate.getTime();

					var remTime = eventTime - currentTime;

					var sec = Math.floor(remTime/1000);
					var min = Math.floor(sec/60);
					var hrs = Math.floor(min/60);
					var days = Math.floor(hrs/24);

					hrs = hrs % 24;
					min%=60;
					sec%=60;

					hrs = (hrs<10) ? "0" + hrs : hrs;
					min = (min<10) ? "0" + min : min;
					sec = (sec<10) ? "0" + sec : sec;

				

					document.getElementById('days').innerHTML = days;
					document.getElementById('hrs').innerHTML = hrs;
					document.getElementById('min').innerHTML = min;
					document.getElementById('sec').innerHTML = sec;

					setTimeout(countDown, 1000);
				}

				countDown();



			/***********************Draft Day Countdown***********************/
				function countDowndd() {
					var today = new Date();
					var eventDate = new Date("April 25, 2019 00:00");

					var currentTime = today.getTime();
					var eventTime = eventDate.getTime();

					var remTime = eventTime - currentTime;

					var sec = Math.floor(remTime/1000);
					var min = Math.floor(sec/60);
					var hrs = Math.floor(min/60);
					var days = Math.floor(hrs/24);

					hrs = hrs % 24;
					min%=60;
					sec%=60;

					hrs = (hrs<10) ? "0" + hrs : hrs;
					min = (min<10) ? "0" + min : min;
					sec = (sec<10) ? "0" + sec : sec;

				

					document.getElementById('dddays').innerHTML = days;
					document.getElementById('ddhrs').innerHTML = hrs;
					document.getElementById('ddmin').innerHTML = min;
					document.getElementById('ddsec').innerHTML = sec;

					setTimeout(countDowndd, 1000);
				}

				countDowndd();

/**********************IMAGE SLIDER ON CLIENTS PAGE************************/

// clients image slider
$(document).ready(function(){
	var imageName = ["img/clients1.png", "img/clients2.png", "img/clients3.png", "img/clients4.png", "img/clients5.png"];
	//var imageName2 = ["img/img11.jpg", "img/img12.jpg", "img/img13.jpg"]
	var imageTitle = [];
	var counter = 0;

	var clickaway =
	function go(){
		$("#picture").fadeOut(300, function(){
			$("#picture").attr("src", imageName[counter]);
			$("#imageCaption").text(imageTitle[counter]);
			counter++;
			if (counter > 4) {counter = 0;}
			$("#picture").fadeIn(500).delay(3000);
			go();// comment this line out to turn into click image slider
		});
	}
	clickaway();
	//uncomment below to turn into click image slider
	//$("#picture").click(clickaway);
});



// client workout slider
$(document).ready(function(){
	var imageName = ["img/workout1.jpg", "img/workout2.jpg", "img/workout3.jpg", "img/workout4.jpg", "img/workout5.jpg"];
	//var imageName2 = ["img/img11.jpg", "img/img12.jpg", "img/img13.jpg"]
	var imageTitle = [];
	var counter = 0;

	var clickaway =
	function go(){
		$("#client-workout").fadeOut(300, function(){
			$("#client-workout").attr("src", imageName[counter]);
			$("#imageCaption").text(imageTitle[counter]);
			counter++;
			if (counter > 4) {counter = 0;}
			$("#client-workout").fadeIn(500).delay(3000);
			go();// comment this line out to turn into click image slider
		});
	}
	clickaway();
	//uncomment below to turn into click image slider
	//$("#picture").click(clickaway);
});

