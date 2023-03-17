import * as React from 'react';
import packageJson from '../../../template/package.json';

type Props = {
    name: string
    dev: boolean
};

function VersionReader({ name, dev }: Props) {
  return (
    <span>
      {packageJson[dev ? 'devDependencies' : 'dependencies'][name]}
    </span>
  );
}

export default VersionReader;
