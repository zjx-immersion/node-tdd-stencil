"use strick";


function sort(wordSummary) {
    wordSummary.sort((pre, next) => (pre.count < next.count ))
}
function mapToWordObject(wordList) {
    let wordsFormat = wordList.map(word => ({word, count: 1}))
    return wordsFormat;
}


function main(wordStr) {

    if (wordStr == "") return "";
    let wordArray = wordStr.split(" ");


    // function getWordsFormatOld(wordArray) {
    //     return wordArray.reduce((prev, item) => {
    //         let isExist;
    //
    //         // prev.map(entry => {
    //         //     if (entry.word === item) {
    //         //         entry.count++;
    //         //         isExist = true;
    //         //     }
    //         // })
    //         //
    //
    //         for (let entry of prev) {
    //             if (entry.word === item) {
    //                 entry.count++;
    //                 isExist = true;
    //             }
    //         }
    //         if (!isExist) {
    //             prev.push({word: item, count: 1})
    //             // return {word: item, count: 1};
    //         }
    //         return prev;
    //     }, []);
    // }

    // function getWordsFormat(wordStr) {
    //     return wordStr.map(item => {
    //         console.log(item)
    //         return {word: item, count: 1}
    //     })
    // }
    let wordList = mapToWordObject(wordArray);
    var orderWordList = group(wordList);
    sort(orderWordList);
    let printStr = format(orderWordList);
    return printStr;
}


function group(wordsFormat) {
    var wordSummary = wordsFormat.reduce((prev, item) => {
        // let isExist
        // prev.map(entry => {
        //     if (entry.word === item.word) {
        //         entry.count++;
        //         isExist = true;
        //     }
        // })
        let result = prev.find(entry => (entry.word === item.word))
        !result && prev.push(item)
        result && result.count++
        return prev;
    }, [])
    return wordSummary;
}

function format(wordSummary) {
    let printStr = wordSummary.map(word => (word.word + " " + word.count)).join(" \r\n ")
    return printStr;
}
module.exports = main;
