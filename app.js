// write code here
function containsSensitiveWords(sentence) {
    const sensitive = sentence.toLowerCase();
    return sensitive.includes("xxx") || sensitive.includes("sex") ||
    sensitive.includes("porn");
}

let text1 = "This is a sample text containing the word XXX.";
console.log(containsSensitiveWords(text1)); //true

let text2 = "This is a sample text without any sensitive words.";
console.log(containsSensitiveWords(text2)); //false