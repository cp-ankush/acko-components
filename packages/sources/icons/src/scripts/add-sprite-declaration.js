const fs = require('fs');

fs.writeFileSync(
  `${process.cwd()}/dist/ackox/sprite/ackox.svg.d.ts`,
  'export default SVGElement;',
);
