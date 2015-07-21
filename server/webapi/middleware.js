//Call this middleware function to set no-cache headers
function MiddleWareNoCache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}


module.exports.MiddleWareNoCache = MiddleWareNoCache;
