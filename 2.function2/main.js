function palindrome(message){
  // wirte your code here
  var messageArray = message.split('');
  var arrayLengthTemp = messageArray.length%2 == 0 ? messageArray.length : (messageArray.length - 1);
  for(let i = 0; i < arrayLengthTemp; i++){
	  if(messageArray[i] != messageArray[messageArray.length - 1 - i]){
		  return false;
	  }
  }
  return true;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
