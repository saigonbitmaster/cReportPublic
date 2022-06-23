module.exports = function(AppUser) {
AppUser.beforeRemote('confirm', function( ctx, modelInstance, next) {
  next();
});

}
