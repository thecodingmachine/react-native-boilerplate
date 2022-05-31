import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useColorMode } from '@docusaurus/theme-common';
import Circles from '@site/src/components/circles';

export default function Quickstart() {
  const { colorMode } = useColorMode();
  return (
    <section className="relative flex justify-end bg-red-400 mb-0 pb-10 sm:-mb-[170px] sm:-mb-[100px] lg:-mb-[270px]">
      <div className="absolute bottom-0 sm:top-1/2 right-0">
        <Circles color="red" animate="animate-circle-delay-1" />
      </div>

      <div className="relative sm:absolute sm:left-16 sm:-top-5 w-full sm:w-[60%] p-5 sm:p-2">

        <h2 className="font-bold text-3xl font-black text-white w-full mb-5 sm:mb-10">
          Quickstart -
          <span className="w-full sm:w-auto text-sm font-normal text-red-800 ml-3"> Open your terminal and run the following </span>
        </h2>

        <code className="flex items-center border-0 min-h-[65px] w-[110%] p-2 bg-neutral-100 dark:bg-neutral-900 rounded-md">
          <span className="text-black dark:text-white">
            <span className="text-red-400 mr-2">npx</span>
            <span className="text-blue-400 mr-2">react-native init</span>
            MyApp
            <span className="text-neutral-500 ml-2">
              --template @thecodingmachine/react-native-boilerplate
            </span>
          </span>
        </code>
        <div>
          <button
            type="button"
            className="
        transition-all
        ease-in mt-5 hover:bg-green-700 hover:text-white hover:text text-md text-white font-bold py-3 px-4 rounded bg-green-500 shadow-lg shadow-green-500/50"
            onClick={() => { navigator.clipboard.writeText('npx react-native init MyApp --template @thecodingmachine/react-native-boilerplate'); }}
          >
            Copy and test it
            <span className="ml-3">🧪</span>
          </button>
        </div>
      </div>

      {colorMode === 'dark'
        ? (
          <img
            className="pointer-events-none hidden sm:block w-full md:w-[80%] lg:w-2/3 mr-0 translate-x-[32%] md:translate-x-[20%] lg:translate-x-[15%] -translate-y-1/3 md:-translate-y-1/3 lg:-translate-y-1/2"
            src="./img/phone-dark.png"
            alt="phone"
          />
        )
        : (
          <img
            className="pointer-events-none hidden sm:block w-full md:w-[80%] lg:w-2/3 mr-0 translate-x-[32%] md:translate-x-[20%] lg:translate-x-[15%] -translate-y-1/3 md:-translate-y-1/3 lg:-translate-y-1/2"
            src="./img/phone.png"
            alt="phone"
          />
        )}
    </section>
  );
}
