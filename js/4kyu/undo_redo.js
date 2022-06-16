/*
The purpose of this kata is to implement the undoRedo function.

This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

set(key, value) Assigns the value to the key. If the key does not exist, creates it.

get(key) Returns the value associated to the key.

del(key) removes the key from the object.

undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

After set() or del() are called, there is nothing to redo.

All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

Any set/del after an undo should disallow new undos.


*/
function undoRedo(object) {
  // state array: delete action flag, key, new value, old value
  let state = []
  let idx = 0
  return {
    set: function (key, value) {
      state.push([false, key, object[key], value])
      idx++
      object[key] = value
    },
    get: function (key) {
      return object[key]
    },
    del: function (key) {
      state.push([true, key, object[key], null])
      idx++
      delete object[key]
    },
    undo: function () {
      if (!idx) throw Error('No operation to undo')
      idx--
      if (state[idx][2] === undefined) delete object[state[idx][1]]
      else object[state[idx][1]] = state[idx][2]
    },
    redo: function () {
      if (idx === state.length) throw Error('No operation to redo')
      if (state[idx][0]) delete object[state[idx][1]]
      else object[state[idx][1]] = state[idx][3]
      idx++
    },
  }
}
