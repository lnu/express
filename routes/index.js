
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Simple Index Page' });
};
exports.carousel = function(req, res){
  res.render('carousel', { title: 'Carousel test' });
};
exports.simpleform = function(req, res){
  res.render('simpleform', { title: 'SimpleForm test' });
};
  