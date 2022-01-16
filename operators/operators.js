// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function isHit(){
  return Math.random()>0.5;
}

function shipCanFire(){
  if (shipAmmo>0 && shipHealth>0)
    return true;
  return false;
}

function reloadShip(){
  if (shipHealth>=2){
    shipAmmo = shipAmmo + 3;
    shipHealth--;
    return true;
  }
  return false;
}

function fireShip() {
  if (shipCanFire(shipHealth, shipAmmo)) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}
function isDestroyed(health){
  return health <= 0;
}
function encounter() {
  shipHealth=3;
  targetHealth=3;
  shipAmmo=3;
  console.log("You see a target");
  while (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}