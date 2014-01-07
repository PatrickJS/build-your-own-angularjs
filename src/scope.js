var noop = function() {};

function Scope() {
  // $$ are private and should not be called from app code
  this.$$watchers = [];
}

Scope.prototype.$watch = function(watchFn, listenerFn) {
  var watcher = {
    watchFn: watchFn,
    listenerFn: listenerFn ||  noop
  };
  this.$$watchers.push(watcher);
};

Scope.prototype.$digest = function() {
  var scope = this;
  scope.$$watchers.forEach(function(watcher) {
    var newValue = watcher.watchFn(scope);
    var oldValue = watcher.last;
    if (newValue !== oldValue) {
      watcher.listenerFn(newValue, oldValue, scope);
      watcher.last = newValue;
    }
  });
};
