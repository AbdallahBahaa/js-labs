function capitalize(capword){
    return capword.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
}

function longest(name){
    var words=name.split(' ');
    var maxLen="";
    for(i=0;i<words.length;i++){
        if(words[i].length>maxLen.length){
            maxLen=words[i];
        }
    }
    return maxLen;
}

function litterorder(word){
    return word.split('').sort().join('');
}

function common(arr1 ,arr2){
    return arr1.filter(elem => arr2.includes(elem));
}

function remove(arr) {
    var unique = [];
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
        unique.push(arr[i]);
    }
}
    return unique;
}
