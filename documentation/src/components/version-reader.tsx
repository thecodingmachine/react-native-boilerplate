import packageJson from '../../../template/package.json';

type Props = {
  dev: boolean;
  name: string;
};

function VersionReader({ dev, name }: Props) {
  return (
    <span>{packageJson[dev ? 'devDependencies' : 'dependencies'][name]}</span>
  );
}

export default VersionReader;
