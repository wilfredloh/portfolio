const DEFAULT_TITLES = [
	"Web Developer",
	"Front End Ninja",
	"Full Stack Developer",
	"Software Engineer",
	"Back End Wizard",
	"User-Centric Designer",
	"Hacker",
	"Marketer",
	"Gamer"
	// "Web Developer"
]

window.onload = () => {
	console.log('running')

	setTimeout(() => {
		$(".loader-wrapper").fadeOut("slow");
		loadMainPage();
	}, 2000)

	const loadMainPage = () => {
		// Configuration of Typed.js fields
		const TEXT_SLIDER_OPTIONS = {
			strings: DEFAULT_TITLES,
			typeSpeed: 100,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		};

		new Typed('.text-slider', TEXT_SLIDER_OPTIONS);

		let title = document.querySelector('.title');

		// Set a timeout to show "Learn More" after 2 seconds
		setTimeout(() => {
			title.classList.remove("hide");
			title.classList.add('show');
		}, 2000)

		// Configuration of fade animation
		$(function () {
			let count = 0;

			let set = setInterval(function () {
				if (count === DEFAULT_TITLES.length - 1) {
					count = 0;
				}

				$("#title").fadeOut(400, function () {
					$(this).text(DEFAULT_TITLES[count]).fadeIn(400);
				});
				count++;
			}, 2500);

			if (window.location.href.includes('edit')) {
				clearInterval(set);
			}
		});

		// Modal JQuery
		$('#myModal').on('shown.bs.modal', function () {
			$('#myInput').trigger('focus')
		})
	};
}





