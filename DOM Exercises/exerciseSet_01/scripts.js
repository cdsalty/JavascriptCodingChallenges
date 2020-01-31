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
const wordCount = paragraph.innerText.split(' ').length;
const wordCountElement = document.createElement('div');
wordCountElement.innerText = `There are ${wordCount} words.`;
document.body.insertBefore(wordCountElement, paragraph); // display wordCountElement before the paragraph

/*
Exercise 05
-----------
Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
** REPLACE WILL STOP automatically after it finds it's first match.
*/

Array.from(document.querySelectorAll('p')).forEach((p) => {
  p.innerHTML = p.innerHTML.replace('/\?/g', '🤔').replace('/\!/g', '😲');
  // prettier removes the regex /\ so temp disabled
});
