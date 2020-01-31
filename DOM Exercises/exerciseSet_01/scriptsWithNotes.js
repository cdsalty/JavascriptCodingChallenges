//  PART 1: USING ONLY JAVASCRIPT

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text with a yellow background.
*/

// select the paragraph tag
const paragraph = document.querySelector('p');
// get the words inside the paragraph and then create a list of them as an array.
// console.log(paragraph.innerText);
const answer = paragraph.innerText
  .split(' ') // array of words from the paragraph
  // go through list, each word that is > 8 letters, style with the background yellow otherwise, leave as is.
  // .map((word) => (word.length > 8 ? console.log(word) : word));
  .map((word) =>
    word.length > 8 ? `<span style = "background-color:yellow">${word}</span>` : word
  )
  // take the results and return(join) back a paragraph with highlighted text for words greater than 8 characters
  .join(' ');
console.log(answer);

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://espn.com/)
*/
// Creating a button to call on the solution
// document.getElementById('btn').addEventListener('click', myFunction); // will not work if called here
solutionTwoExercise = () => {
  // first, create the anchor element needed
  const link = document.createElement('a');
  // attach a href with a link assigned
  link.href = 'https://www.christophersoltis.net';
  // define the context to display/render
  link.innerText = 'Christopher Soltis';
  // where do you want to place this link?? After the paragraph...
  document.body.appendChild(link);
};

document.getElementById('btn').addEventListener('click', solutionTwoExercise);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line (in the paragraph text.)
  A sentence can be assumed to be a string of text terminated with a period (.)
    - need the inner text, not the paragraph itself. but call innerHTML and then use p tags
  */
// console.log(paragraph.innerHTML.split('.'));  // array of 50
paragraph.innerHTML = paragraph.innerHTML.split('.').join('</p><p>') + '</p>';

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph TAG and display the count AFTER the HEADING.
  You can assume that all words are separated by one singular whitespace.
  - Regex would provide a more accurate representation...
*/

const wordCount = paragraph.innerText.split(' ').length; // gives us the count
// console.log(wordCount);
// create a new div
const wordCountElement = document.createElement('div');
// take the new div, add text within it.
wordCountElement.innerText = `There are ${wordCount} words.`;
// add/append the element to the document AFTER the heading
// insertBefore takes the element to append and where to append too..(after the HEADING, before the paragraph)
document.body.insertBefore(wordCountElement, paragraph); // display wordCountElement before the paragraph

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
// using document.selectorAll returns a node list vs an array. Must convert to an array by using "Array.from()"
// Thinking::... Loop through all the paragraphs and then call on find and replace??
// get all paragraphs using document.querySelectorAll
// forEach paragraph, replace the question mark
// ** REPLACE WILL STOP automatically after it finds it's first match.
Array.from(document.querySelectorAll('p')).forEach((p) => {
  // this will only remove one...
  // p.innerHTML = p.innerHTML.replace('?', '🤔');
  // since replace only finds the first instance and stops, I used REGEX to find ALL question marks
  p.innerHTML = p.innerHTML.replace('/?/g', '🤔').replace('/!/g', '😲');
});
