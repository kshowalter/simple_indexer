var indexWord = function indexWord(subIndex, subString, word){
  var letter = subString.slice(0,1);
  var remains = subString.slice(1);

  if( ! subIndex[letter] ){
    subIndex[letter] = {
      exact: new Set(),
      partial: new Set(),
      letters: {}
    };
  }


  if( remains ){
    indexWord(subIndex[letter].letters, remains, word);
    subIndex[letter].partial.add(word);
  } else {
    subIndex[letter].exact.add(word);
  }

};

var getIndex = function getIndex(subIndex, string){
  var letter = string.slice(0,1);
  var remains = string.slice(1);

  if( subIndex[letter] ){
    var x = getIndex(subIndex[letter].letters, remains);
    if(!x){
      return subIndex[letter];
    } else {
      return x;
    }
  } else {
    return false;
  }
};

/**
 * .
 * @exports
 */
module.exports = {
  indexWord: indexWord,
  getIndex: getIndex
};

//import {div, span, p, a, ul, li, br, h1, h2, h3, input} from 'specdom_helper';
