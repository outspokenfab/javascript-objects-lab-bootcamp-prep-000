var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  var newObj = Object.assign({}, obj);
  newObj[key] = value;
  return newObj;
}