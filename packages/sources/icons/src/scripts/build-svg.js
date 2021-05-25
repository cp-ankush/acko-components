const fs = require('fs');
const fse = require('fs-extra');

const ackoxSrcDir = `${__dirname}/../ackox`;
const ackoxDestDir = `${__dirname}/../../dist/ackox`;

fse.copy(ackoxSrcDir, `${ackoxDestDir}/svg`, { overwrite: true }, (err) => {
  if (err) {
    console.error(err);
  }
});
