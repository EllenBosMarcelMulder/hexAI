function T(f) {
  return f.split('').reverse().join('') + "_T";
}
function R(f) {
  return f.toUpperCase() + "_R";
}
function S(f) {
  return f.replace(/ /g, '_') + "_S";
}
