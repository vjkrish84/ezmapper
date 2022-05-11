module.exports = function mapezc(mapObj, data) {
var parentObject = {};
   var fullObject = {};
  for (let mapKey in mapObj) {
    getValue(data, mapKey, function (val) {
      if (val) {
        formobject(mapObj[mapKey], parentObject, val, function (fullObject) {
          parentObject = fullObject;
        });
      }
    });
  }
    return parentObject;
};

function getValue(input, inputvalue, callback) {
  let incomingin = input;
  var splitobj = inputvalue.split(".");
  for (var i = 0; i < splitobj.length; i++) {
    if (splitobj[i]) {
      incomingin = incomingin[splitobj[i]];
      if (Array.isArray(incomingin)) {
        let j = i;
        j = j + 1;
        checkArray(incomingin, splitobj[j], function (valarr) {
          if (valarr) {
            return callback(valarr);
          }
        });
      }
    }
  }
  return callback(incomingin);
}

function checkArray(incoming, filtervalue, callback) {
  let arrayobject = incoming;
  let valuearr = [];
  for (let k = 0; k < arrayobject.length; k++) {
    if (arrayobject[k][filtervalue]) {
      valuearr.push(arrayobject[k][filtervalue]);
    }
  }
  return callback(valuearr);
}

function formobject(inputkey, parentObject, inputValue, callback) {
  var keyval = inputkey.split("|");
  for (var n = 0; n < keyval.length; n++) {
    let actkey = keyval[n];
    var splitobj = actkey.split(".");
    let childObj = parentObject;
    for (var i = 0; i < splitobj.length; i++) {
      if (i === splitobj.length - 1) {
        if (Array.isArray(inputValue)) {
          for (var m = 0; m < inputValue.length; m++) {
            let arraychild = childObj[splitobj[i - 1]];
            if (!arraychild[m]) arraychild[m] = {};
            arraychild[m][splitobj[i]] = {};
            arraychild[m][splitobj[i]] = inputValue[m];
          }
        } else {
          childObj[splitobj[i]] = inputValue;
        }
      } else if (i === splitobj.length - 2) {
        if (Array.isArray(inputValue)) {
          if (!childObj[splitobj[i]]) {
            childObj[splitobj[i]] = Array(inputValue.length);
          } else {
            console.log(
              "this attribute exists so skipping for array ==>",
              splitobj[i]
            );
          }
        }
      } else {
        if (!childObj[splitobj[i]]) {
          childObj[splitobj[i]] = {};
        } else {
          console.log("this attribute exists so skipping ==>", splitobj[i]);
        }
        childObj = childObj[splitobj[i]];
      }
    }
  }
  return callback(parentObject);
}
