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
