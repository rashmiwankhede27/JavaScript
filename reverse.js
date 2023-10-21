function reverse(sentence) {
    const words = sentence.split(' ');


    const reversedWords = words.map(word => {

        const lastChar = word[word.length - 1];
        const hasPunctuation = /[.,;!?]/.test(lastChar);
        let reversedWord = word.slice(0, hasPunctuation ? -1 : undefined).split('').reverse().join('');


        if (hasPunctuation) {
            reversedWord += lastChar;
        }

        return reversedWord;
    });


    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const inputSentence = "Sunday";
const reversedSentence = reverse(inputSentence);
console.log(reversedSentence); 
