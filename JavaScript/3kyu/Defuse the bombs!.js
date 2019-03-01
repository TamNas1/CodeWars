// This one took me some time with some researches on google.

// Defuse all of the Bombs!

//return('expected');
Bomb.diffuse(42);
Bomb.diffuse(42);
Bomb.diffuse(42);
Bomb.diffuse(42);
Bomb.diffuse(42);
Bomb.diffuse(42);
Bomb.diffuse(global.BombKey);
function diffuseTheBomb(){
return true;
}
Bomb.diffuse();
Bomb.diffuse(3.14159);
Bomb.diffuse(new Date().setFullYear(new Date().getFullYear()-4))
class thekey {
  get key() {
    return 43;
  }
  set key(k) {
  }
}
Bomb.diffuse(new thekey());
class ob {
  constructor () {
    this.num = 50;
  }
  valueOf () {
    this.num = -this.num;
    return this.num;
  }
}
Bomb.diffuse(new ob());
Math.random = () => {
  if(!this.count) {
    this.count = 0;
  }
  this.count++;

  if(this.count == 3) {
    return 0.5;
  }
  return 1;
}

  Bomb.diffuse(42);
  Array.prototype.valueOf = function () {
    return this.reduce((pre, next) => pre+next)
  }
  Bomb.diffuse('eWVz')
  console.log(Bomb);
