let text = 'Hello World!'
for (let i = 0; i < text.length; i++){
  if (text[i] == 'o'){
    console.log(i+1)
  } 
  
}
text = text.replace(/l/gi,"");
console.log(text);
