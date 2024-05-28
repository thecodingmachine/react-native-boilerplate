import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

function Gutters() {
  const [gutters, setGutters] = useState('10, 20');
  const [values, setValues] = useState([10, 20]);

  const onBlur = () => {
    const arr = gutters.split(',');
    const valuesToNumbers = arr.map((item) => {
      if (!Number.isNaN(parseInt(item, 10))) {
        return parseInt(item, 10);
      }
      return null;
    }).filter((item) => item !== null);
    setValues(valuesToNumbers);
    setGutters(valuesToNumbers.join(', '));
  };

  return (
    <div className="dark:bg-gray-900 bg-gray-100 pt-3 px-3 rounded-lg">
      <CodeBlock title="/src/theme/theme.config.ts" metastring="ts">
        {'export const config = { \n  //... \n  gutters: ['}
        <input
          type="text"
          className="w-fit"
          value={gutters}
          onChange={(e) => setGutters(e.target.value)}
          onBlur={onBlur}
        />
        {'], \n  //... \n}'}
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
                values.map((value) => (
                  <>
                    <tr>
                      <td>{`gap_${value}`}</td>
                      <td><code>{`{ gap: ${value} }`}</code></td>
                    </tr>
                    <tr>
                      <td>{`margin_${value}`}</td>
                      <td><code>{`{ margin: ${value} }`}</code></td>
                    </tr>
                    <tr>
                      <td>{`marginBottom_${value}`}</td>
                      <td><code>{`{ marginBottom: ${value} }`}</code></td>
                    </tr>
                    <tr>
                      <td>{`marginTop_${value}`}</td>
                      <td><code>{`{ marginTop: ${value} }`}</code></td>
                    </tr>
                    <tr>
                      <td>{`marginRight_${value}`}</td>
                      <td><code>{`{ marginRight: ${value} }`}</code></td>
                    </tr>
                    <tr>
                      <td>{`marginLeft_${value}`}</td>
                      <td><code>{`{ marginLeft: ${value} }`}</code></td>
                    </tr>
                    <tr>
                      <td>{`marginVertical_${value}`}</td>
                      <td><code>{`{ marginVertical: ${value} }`}</code></td>
                    </tr>
                    <tr>
                      <td>{`marginHorizontal_${value}`}</td>
                      <td><code>{`{ marginHorizontal: ${value} }`}</code></td>
                    </tr>
                    <tr>
                      <td>{`padding_${value}`}</td>
                      <td><code>{`{ padding: ${value} }`}</code></td>
                    </tr>
                    <tr>
                      <td>{`paddingBottom_${value}`}</td>
                      <td><code>{`{ paddingBottom: ${value} }`}</code></td>
                    </tr>
                    <tr>
                      <td>{`paddingTop_${value}`}</td>
                      <td><code>{`{ paddingTop: ${value} }`}</code></td>
                    </tr>
                    <tr>
                      <td>{`paddingRight_${value}`}</td>
                      <td><code>{`{ paddingRight: ${value} }`}</code></td>
                    </tr>
                    <tr>
                      <td>{`paddingLeft_${value}`}</td>
                      <td><code>{`{ paddingLeft: ${value} }`}</code></td>
                    </tr>
                    <tr>
                      <td>{`paddingVertical_${value}`}</td>
                      <td><code>{`{ paddingVertical: ${value} }`}</code></td>
                    </tr>
                    <tr>
                      <td>{`paddingHorizontal_${value}`}</td>
                      <td><code>{`{ paddingHorizontal: ${value} }`}</code></td>
                    </tr>
                  </>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Gutters;
