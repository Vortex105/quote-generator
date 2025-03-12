import { UNSPLASH_ACCESS_KEY } from './config.js';

const myQuotes = [
	{
		quote: 'Sometimes, the best dishes come from the most unlikely ingredients',
		bgImage: 'img/food.jpg',
	},
	{
		quote: "Those who don't know pain can never understand true peace",
		bgImage: 'img/itachi.jpg',
	},
	{
		quote: 'Wake up to reality',
		bgImage: 'img/leaves.jpg',
	},
	{
		quote: 'The hardest choices require the strongest wills',
		bgImage: 'img/skeleton.jpg',
	},
	{
		quote:
			'As long as there is a concept of victors, the vanquished will also exist',
		bgImage: 'img/spidey.jpg',
	},
	{
		quote: 'Our deepest fear is not that we are inadquate',
		bgImage: 'img/space.jpg',
	},
	{
		quote: 'Repitition is the mother of learning',
		bgImage: 'img/flower.jpg',
	},
	{
		quote: 'The strong survive, The weak Perish',
		bgImage: 'img/Weak.jpg',
	},
	{
		quote: 'The true measure of a warrior is not his strength but his heart',
		bgImage: 'img/warrior.jpg',
	},
];

const container = document.getElementById('container');
const genBtn = document.getElementById('genQuote');
const quote = document.getElementById('firstQuote');
const loaderOverlay = document.getElementById('loader-overlay');
const darkModeToggle = document.getElementById('dark-mode');

darkModeToggle.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
});

let maxNum = 0;
let quoteCount = 0; // Track how many quotes have been fetched

async function changeQuote() {
	try {
		// Get quotes from API
		const response = await fetch('https://qapi.vercel.app/api/quotes');
		const data = await response.json();
		const newQuotes = data.map((quotePack) => quotePack.quote); // Extracts quotes into an array

		// Only fetch a new image every 5 quotes to avoid API abuse
		if (quoteCount % 5 === 0) {
			console.log('Fetching new Unsplash image...');
			const unsplashResponse = await fetch(
				`https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
			);
			const unsplashData = await unsplashResponse.json();
			const newBgImage = unsplashData.urls.regular;

			// Save to local storage to avoid unnecessary API calls
			localStorage.setItem('lastBgImage', newBgImage);
		}

		// Retrieve the last saved image from storage
		const savedBgImage = localStorage.getItem('lastBgImage');

		// Change background image (from cache or API)
		if (savedBgImage) {
			container.style.backgroundImage = `linear-gradient(#110e0eb8, #9c8484bd), url(${savedBgImage})`;
		}
		const newQuote = newQuotes[Math.floor(Math.random() * newQuotes.length)];
		setTimeout(() => {
			// Clear text for typing effect
			quote.textContent = '';

			// Typing effect
			let i = 0;
			function typeLetter() {
				if (i < newQuote.length) {
					quote.textContent += newQuote.charAt(i);
					genBtn.disabled = true;
					i++;
					setTimeout(typeLetter, 50); // Adjust speed here (lower = faster)
				} else {
					genBtn.disabled = false;
					//Remove loader
					loaderOverlay.style.display = 'none';
				}
			}

			typeLetter();
		}, 300); // Delay before typing starts

		quoteCount++; // Increment quote counter
	} catch (error) {
		console.error('Error fetching data:', error);
		loaderOverlay.style.display = 'none';
		quote.textContent = '⚠️ Failed to load new quote. Please try again.';
	}
}

changeQuote();

genBtn.addEventListener('click', () => {
	maxNum++;
	changeQuote();
});
