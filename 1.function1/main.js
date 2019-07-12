function reverseString(message){
  // wirte your code here
var i;
var str1 = ""
    for (i=message.length - 1;i>=0;i--)
                {
                    str1+=message.charAt(i)
                }
                document.write(str1)
            }
reverseString('hello'); // should return 'olleh'
