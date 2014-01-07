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
  var scope = this;
  scope.$$watchers.forEach(function(watcher) {
    watcher.watchFn(scope);
    watcher.listenerFn();
  });
};
