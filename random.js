function randomPassword(){
  var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!%?*_+=';
  var pass = "";
  for(let i = 0; i <= 16; i++){
    pass += char.charAt(Math.floor(Math.random() * char.length));
  }
  console.log(pass);
}