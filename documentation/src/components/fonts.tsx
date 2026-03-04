import CodeBlock from '@theme/CodeBlock';
import { useState } from 'react';

function Fonts() {
  const [sizes, setSizes] = useState('14, 16');
  const [colorName, setColorName] = useState('red');
  const [color, setColor] = useState('#ff0000');
  const [sizeValues, setSizeValues] = useState([10, 20]);

  const onSizesBlur = () => {
    const array = sizes.split(',');
    const valuesToNumbers = array
      .map((item) => {
        if (!Number.isNaN(Number.parseInt(item, 10))) {
          return Number.parseInt(item, 10);
        }
        return undefined;
      })
      .filter((item) => item !== undefined);
    setSizeValues(valuesToNumbers);
    setSizes(valuesToNumbers.join(', '));
  };

  return (
    <div className="dark:bg-gray-900 bg-gray-100 pt-3 px-3 rounded-lg">
      <CodeBlock metastring="ts" title="/src/theme/theme.config.ts">
        {'export const config = { \n  //... \n  fonts: {\n    sizes: ['}
        <input
          className="w-fit"
          onBlur={onSizesBlur}
          onChange={(event) => {
            setSizes(event.target.value);
          }}
          type="text"
          value={sizes}
        />
        {'], \n    colors: {\n      '}
        <input
          className="w-[50px]"
          onChange={(event) => {
            setColorName(event.target.value);
          }}
          type="text"
          value={colorName}
        />
        {': '}
        <input
          className="w-[70px]"
          onChange={(event) => {
            setColor(event.target.value);
          }}
          type="text"
          value={color}
        />
        {',\n      // you can add more key/value here\n    },\n  }\n  //...\n}'}
      </CodeBlock>
      <p
        className="
          dark:text-gray-300 text-gray-500
          font-bold text-2xl text-center mb-4 border
          dark:border-gray-700 border-gray-200 p-2
          "
      >
        {'Generated classes'}
      </p>
      <div className="max-h-[300px] overflow-auto">
        <table className="table-fixed">
          <thead>
            <tr>
              <th>{'Property'}</th>
              <th>{'Value'}</th>
            </tr>
          </thead>
          <tbody>
            {sizeValues.map((value) => (
              <tr>
                <td>{`fonts.size_${value}`}</td>
                <td>
                  <code>{`{ fontSize: ${value} }`}</code>
                </td>
              </tr>
            ))}
            <tr>
              <td>{`fonts.${colorName}`}</td>
              <td>
                <code>{`{ color: ${color} }`}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fonts;
