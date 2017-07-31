var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');

AppDispatcher.register(function (action) {
    switch(action.actionType) {
        case 'ADD_NEW_ITEM':
            ListStore.addNewItemHandler(action.text);
            ListStore.emitChange();
            break;
        default:
    }
})

var ListStore = assign({}, EventEmitter.prototype, {
  items: [],

  getAll: function () {
    return this.items;
  },

  addNewItemHandler: function (text) {
    this.items.push(text);
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

module.exports = ListStore;
