import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

function Fonts() {
  const [sizes, setSizes] = useState('14, 16');
  const [colorName, setColorName] = useState('red');
  const [color, setColor] = useState('#ff0000');
  const [sizeValues, setSizeValues] = useState([10, 20]);

  const onSizesBlur = () => {
    const arr = sizes.split(',');
    const valuesToNumbers = arr.map((item) => {
      if (!Number.isNaN(parseInt(item, 10))) {
        return parseInt(item, 10);
      }
      return null;
    }).filter((item) => item !== null);
    setSizeValues(valuesToNumbers);
    setSizes(valuesToNumbers.join(', '));
  };

  return (
    <div className="dark:bg-gray-900 bg-gray-100 pt-3 px-3 rounded-lg">
      <CodeBlock title="/src/theme/theme.config.ts" metastring="ts">
        {'export const config = { \n  //... \n  fonts: {\n    sizes: ['}
        <input
          type="text"
          className="w-fit"
          value={sizes}
          onChange={(e) => setSizes(e.target.value)}
          onBlur={onSizesBlur}
        />
        {'], \n    colors: {\n      '}
        <input
          type="text"
          className="w-[50px]"
          value={colorName}
          onChange={(e) => setColorName(e.target.value)}
        />
        {': '}
        <input
          type="text"
          className="w-[70px]"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        {',\n      // you can add more key/value here\n    },\n  }\n  //...\n}'}
      </CodeBlock>
      <p className="
          dark:text-gray-300 text-gray-500
          font-bold text-2xl text-center mb-4 border
          dark:border-gray-700 border-gray-200 p-2
          "
      >
        Generated classes
      </p>
      <div className="max-h-[300px] overflow-auto">
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {
                sizeValues.map((value) => (
                  <tr>
                    <td>{`fonts.size_${value}`}</td>
                    <td><code>{`{ fontSize: ${value} }`}</code></td>
                  </tr>
                ))
            }
            <tr>
              <td>{`fonts.${colorName}`}</td>
              <td><code>{`{ color: ${color} }`}</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fonts;
