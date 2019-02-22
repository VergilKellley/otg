

		/******************************COMBINE COUNT DOWN************************/
				function countDown() {
					var today = new Date();
					var eventDate = new Date("FEBRUARY 26, 2019 00:00");

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
