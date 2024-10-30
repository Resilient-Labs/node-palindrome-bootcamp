function parlinWord(str){
    str = str.replace(/ /g, '').toLowerCase()
    //str turns into an array then reverse the array then join it back together as a string
    let verseStr = str.split('').reverse().join('')
   return verseStr === str
}

//make this function a module for node
module.exports = parlinWord

