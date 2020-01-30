//  PART 1: USING ONLY JAVASCRIPT

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text with a yellow background.
*/

const paragraph = document.querySelector('p');

const highlightedText = paragraph.innerText
  .split(' ')
  .map((word) =>
    word.length > 8 ? `<span style = "background-color:yellow">${word}</span>` : word
  )
  .join(' ');

// console.log(highlightedText);

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.(https://www.anyLink.com/)
*/
solutionTwoExercise = () => {
  const link = document.createElement('a');
  link.href = 'https://www.christophersoltis.net';
  link.innerText = 'Christopher Soltis';
  document.body.appendChild(link);
};
document.getElementById('btn').addEventListener('click', solutionTwoExercise);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line (in the paragraph text.)
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
