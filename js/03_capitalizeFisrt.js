function capitalizeFirstLetterOfEachWord(sentence) {
    return sentence.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Example usage:
let sentence = "hello world from chatGPT";
let capitalizedSentence = capitalizeFirstLetterOfEachWord(sentence);
console.log(capitalizedSentence); // Output will be "Hello World From ChatGPT"
