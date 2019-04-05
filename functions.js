var englishWords = ['one', 'two', 'three', 'four', 'five', 'six'];
var vietnameseWords = ['mot', 'hai', 'ba', 'bon', 'nam', 'sau'];
var searchedWord ;
var result;

function searchIt() {
    searchedWord = document.getElementById("submit").value;
    console.log(searchedWord);

    for (i = 0; i < englishWords.length; i++){
        console.log(englishWords[i]);
        if (searchedWord == englishWords[i]) {
            result = ("<br/>The meaning of " + searchedWord + " is: " + vietnameseWords[i] + "<br/>");
            document.getElementById("result").innerHTML = result;
            break;
        } else {
            document.getElementById("result").innerHTML = ("Not found");
        }

    }
}


