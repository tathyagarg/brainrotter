
// Event Listener for the button
document.getElementById('transformButton').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;
  const outputDiv = document.getElementById('output');

  if (!inputText) {
    outputDiv.textContent = "Please enter some text!";
    return;
  }

  // Transform the text into "brainrot"
  const brainrottedText = brainrot(inputText);
  outputDiv.textContent = brainrottedText;
});

// Function to "brainrot" the text
function brainrot(text) {
  // Replace parts of the text creatively for "brainrot" effect
  return text
    .toLowerCase()
    .replace(/what/gi, 'what the sigma')
    .replace(/talking/gi, 'yapping')
    .replace(/talk/gi, 'yap')
    .replace(/are you/gi, 'is you')
    .replace(/your/gi, 'your gyatt\'s')
    .replace(/you\'re/gi, 'you is')
    .replace(/ you /gi, ' your gyatt ')
    .replace(/cool/gi, 'skibidi')
    .replace(/bad/gi, 'L moment')
    .replace(/really/gi, 'af')
    .replace(/vibe/gi, 'aura')
    .replace(/energy/gi, 'aura')
    .replace(/real/gi, 'based')
    .replace(/normal/gi, 'basic')
    .replace(/confident/gi, 'giving bde')
    .replace(/bro/gi, 'blud')
    .replace(/girl/gi, 'bop')
    .replace(/lying/gi, 'capping')
    .replace(/lie/gi, 'cap')
    .replace(/good/gi, 'cooking')
    .replace(/fashionable/gi, 'drippy')
    .replace(/awesome/gi, 'fire')
    .replace(/impressive/gi, 'fire')
    .replace(/going to/gi, 'finna')
    .replace(/praising/gi, 'glazing')
    .replace(/weirdo/gi, 'gooner')
    .replace(/weird/gi, 'giving gooner')
    .replace(/best/gi, 'goated')
    .replace(/kid/gi, 'jit')
    .replace(/boy/gi, 'jit')
    .replace(/child/gi, 'jit')
    .replace(/bitch/gi, 'karen')
    .replace(/ugly/gi, 'uglymaxxing')
    .replace(/a hoe/gi, 'fatherlessmaxxing')
    .replace(/a whore/gi, 'fatherlessmaxxing')
    .replace(/hot/gi, 'mogging')
    .replace(/odd/gi, 'only in ohio')
    .replace(/enemy/gi, 'opp')
    .replace(/bestie/gi, 'girlie')
    .replace(/baby/gi, 'pookie')
    .replace(/predator/gi, 'drake')
    .replace(/pedo/gi, 'drake')
    .replace(/pedophile/gi, 'drake')
    .replace(/pdf file/gi, 'drake')
    .replace(/beautiful/gi, 'slayy')
    .replace(/ l /gi, 'skill issue')
    .replace(/kill/gi, 'unalive')
    .replace(/off/gi, 'unalive')
    .replace(/i\'m/gi, 'my gyatt is')
    .replace(/ i /gi, 'my gyatt')
    .replace(/cute/gi, 'rizzy')
      + " (uwu fr fr) (6'2 btw)"
}
