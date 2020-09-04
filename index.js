const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const arr = collection instanceof Array ?
      collection.slice() : Object.values(collection);

      for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      const arr = collection instanceof Array ?
      collection.slice() : Object.values(collection);

      const newArr = []

      for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
      }
      return newArr;
    },

    reduce: function(collection, callback, acc) {
      let arr = collection.slice()
      if (!acc) {
        acc = arr[0];
        arr = arr.slice(1)
      };
      for (let i = 0; i < arr.length; i++) {
        acc = callback(acc, arr[i], arr);
      }
      return acc;
    },

    find: function(collection, callback) {
      let arr = collection.slice();
      let value;
      for (let i = 0; i < arr.length; i++) {
        if (!!callback(arr[i])) {
          return value = arr[i];
        }
      }
      return value;
    },

    filter: function(collection, callback) {
      let arr = collection.slice();
      let filteredArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (!!callback(arr[i])) {
          filteredArr.push(arr[i])
        }
      }
      return filteredArr;
    },

    size: function(collection) {
      return Object.values(collection).length
    },

    first: function(array, n) {
      return !n? 
      array[0] : array.splice(0, n)
    },

    last: function(array, n) {
      return !n ?
      array[array.length - 1]
      : array.splice(array.length - n, array.length)
    },

    compact: function(array) {
      let newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    },

    sortBy: function(array, callback) {
      let newArray = array.slice();
      return newArray.sort(function(a,b) {
        return callback(a) - callback(b);
      });
    },

    unload: function(newArr, arr) {
      for (let val of arr) newArr.push(val);
    },

    flatten: function(collection, shallow, newArr = []) {
      if(!Array.isArray(collection)) return newArr.push(collection);
      if (shallow) {
        for (let val of collection)
        Array.isArray(val) ? this.unload(newArr, val) : newArr.push(val);
      }
      else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr;
    },

    uniqSorted: function(array, callback) {
      let newArr = [array[0]]
      for (let i = 0; i < array.length; i++) {
        if (newArr[i-1] !== array[i])
          newArr.push(array[i])
      }
      return newArr;
    },

    uniq: function(array, isSorted, callback) {
      if (isSorted) {
        return fi.uniqSorted(array, callback);
      } else if (!callback) {
        return Array.from(new Set(array))
      } else {
        let callbackVals = new Set();
        let uniqVals = new Set();
        for (let val of array) {
          let callbackVal = callback(val)
          if (!callbackVals.has(callbackVal)) {
            callbackVals.add(callbackVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      let arr = [];
      for (let key in obj) {
        arr.push(key)
      }
      return arr;
    },

    values: function(obj) {
      let arr = [];
      for (let key in obj) {
        arr.push(obj[key])
      }
      return arr;
    },

    functions: function(obj) {
      let arr = [];
      for (let key in obj) {
        if (typeof obj[key] === 'function') {
        arr.push(key)
        }
      }
      return arr.sort();
    },


  }
})()

fi.libraryMethod()
