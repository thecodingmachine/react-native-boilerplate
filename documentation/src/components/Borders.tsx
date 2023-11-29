import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

function Borders() {
  const [sizes, setSizes] = useState('1, 2');
  const [sizeValues, setSizeValues] = useState([1, 2]);
  const [radius, setRadius] = useState('5, 10');
  const [radiusValues, setRadiusValues] = useState([5, 10]);
  const [colorName, setColorName] = useState('red');
  const [color, setColor] = useState('#ff0000');

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

  const onRadiusBlur = () => {
    const arr = radius.split(',');
    const valuesToNumbers = arr.map((item) => {
      if (!Number.isNaN(parseInt(item, 10))) {
        return parseInt(item, 10);
      }
      return null;
    }).filter((item) => item !== null);
    setRadiusValues(valuesToNumbers);
    setRadius(valuesToNumbers.join(', '));
  };

  return (
    <div className="dark:bg-gray-900 bg-gray-100 pt-3 px-3 rounded-lg">
      <CodeBlock title="/src/theme/theme.config.ts" metastring="ts">
        {'export const config = { \n  //... \n  border: {\n    widths: ['}
        <input
          type="text"
          className="w-fit"
          value={sizes}
          onChange={(e) => setSizes(e.target.value)}
          onBlur={onSizesBlur}
        />
        {']\n    radius: ['}
        <input
          type="text"
          className="w-fit"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          onBlur={onRadiusBlur}
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
                    <td>{`borders.w_${value}`}</td>
                    <td><code>{`{ borderWidth: ${value} }`}</code></td>
                  </tr>
                ))
            }
            {
                radiusValues.map((value) => (
                  <tr>
                    <td>{`borders.rounded_${value}`}</td>
                    <td><code>{`{ borderRadius: ${value} }`}</code></td>
                  </tr>
                ))
            }
            <tr>
              <td>{`borders.${colorName}`}</td>
              <td><code>{`{ borderColor: ${color} }`}</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Borders;
