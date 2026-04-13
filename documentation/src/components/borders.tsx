import CodeBlock from '@theme/CodeBlock';
import { useState } from 'react';

function Borders() {
  const [sizes, setSizes] = useState('1, 2');
  const [sizeValues, setSizeValues] = useState([1, 2]);
  const [radius, setRadius] = useState('5, 10');
  const [radiusValues, setRadiusValues] = useState([5, 10]);
  const [colorName, setColorName] = useState('red');
  const [color, setColor] = useState('#ff0000');

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

  const onRadiusBlur = () => {
    const array = radius.split(',');
    const valuesToNumbers = array
      .map((item) => {
        if (!Number.isNaN(Number.parseInt(item, 10))) {
          return Number.parseInt(item, 10);
        }
        return undefined;
      })
      .filter((item) => item !== undefined);
    setRadiusValues(valuesToNumbers);
    setRadius(valuesToNumbers.join(', '));
  };

  return (
    <div className="dark:bg-gray-900 bg-gray-100 pt-3 px-3 rounded-lg">
      <CodeBlock metastring="ts" title="/src/theme/theme.config.ts">
        {'export const config = { \n  //... \n  border: {\n    widths: ['}
        <input
          className="w-fit"
          onBlur={onSizesBlur}
          onChange={(event) => {
            setSizes(event.target.value);
          }}
          type="text"
          value={sizes}
        />
        {']\n    radius: ['}
        <input
          className="w-fit"
          onBlur={onRadiusBlur}
          onChange={(event) => {
            setRadius(event.target.value);
          }}
          type="text"
          value={radius}
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
              <>
                <tr>
                  <td>{`borders.w_${value}`}</td>
                  <td>
                    <code>{`{ borderWidth: ${value} }`}</code>
                  </td>
                </tr>
                <tr>
                  <td>{`borders.wTop_${value}`}</td>
                  <td>
                    <code>{`{ borderTopWidth: ${value} }`}</code>
                  </td>
                </tr>
                <tr>
                  <td>{`borders.wRight_${value}`}</td>
                  <td>
                    <code>{`{ borderRightWidth: ${value} }`}</code>
                  </td>
                </tr>
                <tr>
                  <td>{`borders.wBottom_${value}`}</td>
                  <td>
                    <code>{`{ borderBottomWidth: ${value} }`}</code>
                  </td>
                </tr>
                <tr>
                  <td>{`borders.wLeft_${value}`}</td>
                  <td>
                    <code>{`{ borderLeftWidth: ${value} }`}</code>
                  </td>
                </tr>
              </>
            ))}
            {radiusValues.map((value) => (
              <>
                <tr>
                  <td>{`borders.rounded_${value}`}</td>
                  <td>
                    <code>{`{ borderRadius: ${value} }`}</code>
                  </td>
                </tr>
                <tr>
                  <td>{`borders.roundedTop_${value}`}</td>
                  <td>
                    <code>{`{ borderRadius: ${value} }`}</code>
                  </td>
                </tr>
                <tr>
                  <td>{`borders.roundedBottom_${value}`}</td>
                  <td>
                    <code>{`{ borderRadius: ${value} }`}</code>
                  </td>
                </tr>
              </>
            ))}
            <tr>
              <td>{`borders.${colorName}`}</td>
              <td>
                <code>{`{ borderColor: ${color} }`}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Borders;
