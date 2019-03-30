function validatePIN (pin) {
 if(pin.length === 4 || pin.length===6) {
    if( pin.match(/^[0-9]+$/))  {
      return true;
    }return false;
  }else 
      return false;
      
}
