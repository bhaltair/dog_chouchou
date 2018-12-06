var ghpages = require('gh-pages');
 
ghpages.publish('dist', function(err) {
  repo: 'git@git.dev.tencent.com:bhaltair/chouchou.git'
});