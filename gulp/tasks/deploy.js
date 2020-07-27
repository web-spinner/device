const projectDir = require('../../_config').base.project_dir;
const options    = require('../options');
const ghpages    = require('gh-pages');

const deploy = (done) => {
  ghpages.publish(projectDir, options.ghpages, function(err) {});
  done();
}

module.exports = deploy;
