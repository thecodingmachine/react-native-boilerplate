import CodeBlock from '@theme/CodeBlock';
import { useState } from 'react';

function Backgrounds() {
  const [primaryColorName, setPrimaryColorName] = useState('primary');
  const [primaryColor, setPrimaryColor] = useState('#ff0000');

  const [secondaryColorName, setSecondaryColorName] = useState('secondary');
  const [secondaryColor, setSecondaryColor] = useState('#00ff00');

  return (
    <div className="dark:bg-gray-900 bg-gray-100 pt-3 px-3 rounded-lg">
      <CodeBlock metastring="ts" title="/src/theme/theme.config.ts">
        {'export const config = { \n  //... \n  backgrounds: {\n    '}
        <input
          className="w-[90px]"
          onChange={(event) => {
            setPrimaryColorName(event.target.value);
          }}
          type="text"
          value={primaryColorName}
        />
        {': '}
        <input
          className="w-[70px]"
          onChange={(event) => {
            setPrimaryColor(event.target.value);
          }}
          type="text"
          value={primaryColor}
        />
        {',\n    '}
        <input
          className="w-[90px]"
          onChange={(event) => {
            setSecondaryColorName(event.target.value);
          }}
          type="text"
          value={secondaryColorName}
        />
        {': '}
        <input
          className="w-[70px]"
          onChange={(event) => {
            setSecondaryColor(event.target.value);
          }}
          type="text"
          value={secondaryColor}
        />
        {',\n    // you can add more key/value here\n  },\n  //...\n}'}
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
            <tr>
              <td>{`backgrounds.${primaryColorName}`}</td>
              <td>
                <code>{`{ backgroundColor: ${primaryColor} }`}</code>
              </td>
            </tr>
            <tr>
              <td>{`backgrounds.${secondaryColorName}`}</td>
              <td>
                <code>{`{ backgroundColor: ${secondaryColor} }`}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Backgrounds;
