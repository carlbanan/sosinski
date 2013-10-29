
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '' });
};

exports.about = function(req, res){
  res.render('about', { title: '' });
};