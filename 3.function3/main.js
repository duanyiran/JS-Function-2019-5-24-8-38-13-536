    
function alphabetSort(message){
  // wirte your code here
  var messageArray = message.split('');
  function sortChar(a, b){
	  return a.charCodeAt(0) - b.charCodeAt(0);
  }
  var messageArraySort = messageArray.sort(sortChar);
  return messageArraySort.join('');
}
alphabetSort('hello'); // should return 'ehllo'
