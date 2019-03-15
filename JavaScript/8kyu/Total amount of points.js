function points(games) {
let c=0;
  for(let i=0;i<10;i++){
    if(parseInt(games[i][0])>parseInt(games[i][2]))c+=3;
    if(parseInt(games[i][0])<parseInt(games[i][2]))continue;
    if(parseInt(games[i][0])==parseInt(games[i][2]))c++;
  }
  return c;
}
