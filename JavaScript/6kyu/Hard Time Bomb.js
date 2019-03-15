for(let el in global) {
    if((el.toString()).match(/boom\d/)) {
      Bomb.CutTheWire(this[el]);
    }
  }
  console.log(global);
