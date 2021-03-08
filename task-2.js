function checkPropByName (str, obj) {

    for (const [key, value] of Object.entries(obj)) {
        return str === String(key)
      }
}

console.log(checkPropByName('myrop', {'myProp': 1})); 