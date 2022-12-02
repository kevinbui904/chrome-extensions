/**
 * content.js
 * script to estimate reading times for
 * chrome extension articles
 */

const article = document.getElementById("bodyContent");

//querySelector("article");

//article could be null of querySelector doesn't find the specified element

if (article) {
	const text = article.textContent;

	console.log("look here", text);
	//this reges means "scan for white spaces"
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#writing_a_regular_expression_pattern
	const wordMatchRegExp = /[^\s]+/g;
	const words = text.matchAll(wordMatchRegExp);

	//matchAll returns iterator, convert to array to get word count
	const wordCount = [...words].length;
	const readingTime = Math.round(wordCount / 200);

	const badge = document.createElement("h2");
	//use the same styling as publish info in article's header

	badge.classList.add("color-secondary-text", "type--caption");

	badge.textContent = `⏱️ ${readingTime} min read`;

	// Support for API reference docs
	const heading = document.getElementById("firstHeading");

	heading.insertAdjacentElement("afterend", badge);
}
