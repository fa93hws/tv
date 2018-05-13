
export default {
  isOutside (insideArea, clickTarget) {
    // insideArea => Array
    // clickTarget => el.target
    // return boolean
    insideArea = insideArea.filter( e => typeof e != 'undefined');
    let outside = true;
    insideArea.forEach( e => {
      if (e.contains(clickTarget)){
        outside = false;
        return;
      }
    })
    return outside;
  }
}