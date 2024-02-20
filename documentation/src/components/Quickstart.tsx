import React from 'react';
import Circles from '@site/src/components/circles';
import CodeBlock from '@theme/CodeBlock';

export default function Quickstart() {
  return (
    <section className="relative flex justify-end bg-red-400 mb-0 pb-10 sm:-mb-[100px] lg:-mb-[270px] lg:pb-[100px]">
      <div className="relative max-w-7xl m-auto">
        <div className="relative flex justify-end">

          <div className="absolute bottom-0 sm:top-1/2 right-0">
            <Circles color="red" animate="animate-circle-delay-1" />
          </div>

          <div className="relative w-[320px] sm:absolute sm:left-16 sm:-top-5 sm:w-[62%] p-5 sm:p-2">

            <h2 className="text-3xl font-black text-white w-full mb-5 sm:mb-10">
              Quickstart -
              <span className="hidden sm:block w-full sm:w-auto text-sm font-normal text-red-800 ml-3"> Open your terminal and run the following </span>
            </h2>

            <CodeBlock
              title=">_ terminal"
              metastring="bash"
            >
              npx react-native@latest init MyApp --template
              @thecodingmachine/react-native-boilerplate
            </CodeBlock>

            <div>
              <button
                type="button"
                className="transition-all ease-in mt-5 hover:bg-green-700 hover:text-white hover:text text-md text-white
                font-bold py-3 px-4 rounded bg-green-500 shadow-lg shadow-green-500/50"
                onClick={() => { navigator.clipboard.writeText('npx react-native@latest init MyApp --template @thecodingmachine/react-native-boilerplate'); }}
              >
                Copy and test it
                <span className="ml-3">🧪</span>
              </button>
            </div>
          </div>

          <img
            className="pointer-events-none hidden dark:block object-contain absolute -top-6 w-[400px] sm:relative dark:sm:block sm:w-3/4 sm:left-3 md:w-[70%] 2xl:w-[85%] lg:w-2/3 mr-0 translate-x-[27%] md:translate-x-[20%] lg:translate-x-[15%] 2xl:translate-x-[28%] -translate-y-[43%]"
            src="./img/phone_dark.webp"
            alt="phone"
          />

          <img
            className="dark:hidden pointer-events-none object-contain absolute -top-6 w-[400px] sm:relative sm:block sm:w-3/4 md:w-[70%] 2xl:w-[85%] lg:w-2/3 mr-0 translate-x-[27%] md:translate-x-[20%] lg:translate-x-[15%] 2xl:translate-x-[28%] -translate-y-[43%]"
            src="./img/phone_light.webp"
            alt="phone"
          />
        </div>
      </div>
    </section>
  );
}
