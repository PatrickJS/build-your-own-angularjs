function Scope() {
  // $$ are private and should not be called from app code
  this.$$watchers = [];
}

Scope.prototype.$watch = function(watchFn, listenerFn) {
  var watcher = {
    watchFn: watchFn,
    listenerFn: listenerFn
  };
  this.$$watchers.push(watcher);
};

Scope.prototype.$digest = function() {
  this.$$watchers.forEach(function(watcher) {
    watcher.listenerFn();
  });
};
