identityMatrix = $M([
  [1,0,0,0],
  [0,1,0,0],
  [0,0,1,0],
  [0,0,0,1]
]);

scaleMatrix = $M([
  [s,0,0,0],
  [0,s,0,0],
  [0,0,s,0],
  [0,0,0,1]
]);

rotationXMatrix = $M([
  [1,0,0,0],
  [0,Math.cos(a), Math.sin(-a), 0],
  [0,Math.sin(a), Math.cos( a), 0],
  [0,0,0,1]
]);

rotationYMatrix = $M([
  [Math.cos( b), 0, Math.sin(b),0],
  [0,1,0,0],
  [Math.sin(-b), 0, Math.cos(b), 0],
  [0,0,0,1]
]);

rotationZMatrix = $M([
  [Math.cos(-c), Math.sin( c), 0, 0],
  [Math.sin(-c), Math.cos(-c), 0, 0],
  [0,0,1,0],
  [0,0,0,1]
]);

translationMatrix = $M([
  [1,0,0,0],
  [0,1,0,0],
  [0,0,1,0],
  [tx,ty,tz,1]
]);
