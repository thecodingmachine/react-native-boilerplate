import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

function Backgrounds() {
  const [primaryColorName, setPrimaryColorName] = useState('primary');
  const [primaryColor, setPrimaryColor] = useState('#ff0000');

  const [secondaryColorName, setSecondaryColorName] = useState('secondary');
  const [secondaryColor, setSecondaryColor] = useState('#00ff00');

  return (
    <div className="dark:bg-gray-900 bg-gray-100 pt-3 px-3 rounded-lg">
      <CodeBlock title="/src/theme/theme.config.ts" metastring="ts">
        {'export const config = { \n  //... \n  backgrounds: {\n    '}
        <input
          type="text"
          className="w-[90px]"
          value={primaryColorName}
          onChange={(e) => setPrimaryColorName(e.target.value)}
        />
        {': '}
        <input
          type="text"
          className="w-[70px]"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        />
        {',\n    '}
        <input
          type="text"
          className="w-[90px]"
          value={secondaryColorName}
          onChange={(e) => setSecondaryColorName(e.target.value)}
        />
        {': '}
        <input
          type="text"
          className="w-[70px]"
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
        />
        {',\n    // you can add more key/value here\n  },\n  //...\n}'}
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
            <tr>
              <td>{`backgrounds.${primaryColorName}`}</td>
              <td><code>{`{ backgroundColor: ${primaryColor} }`}</code></td>
            </tr>
            <tr>
              <td>{`backgrounds.${secondaryColorName}`}</td>
              <td><code>{`{ backgroundColor: ${secondaryColor} }`}</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Backgrounds;
