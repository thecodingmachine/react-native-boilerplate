import React from 'react';
import Circles from '@site/src/components/circles';

export default function Quickstart() {
  return (
    <section className="relative flex justify-end bg-red-400 mb-0 pb-10 sm:-mb-[170px] sm:-mb-[100px] lg:-mb-[270px]">
      <div className="relative max-w-7xl m-auto">
        <div className="relative flex justify-end">

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
                <span className="text-red-400">npx </span>
                <span className="text-blue-400">react-native@latest init </span>
                MyApp
                <span className="text-neutral-500 text-sm"> --template @thecodingmachine/react-native-boilerplate</span>
              </span>
            </code>
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
            className="pointer-events-none hidden dark:sm:block w-3/4 md:w-[70%] 2xl:w-[85%] lg:w-2/3 mr-0 translate-x-[27%] md:translate-x-[20%] lg:translate-x-[15%] 2xl:translate-x-[28%] -translate-y-[43%]"
            src="./img/phone_dark.png"
            alt="phone"
          />

          <img
            className="dark:hidden pointer-events-none hidden sm:block w-3/4 md:w-[70%] 2xl:w-[85%] lg:w-2/3 mr-0 translate-x-[27%] md:translate-x-[20%] lg:translate-x-[15%] 2xl:translate-x-[28%] -translate-y-[43%]"
            src="./img/phone_light.png"
            alt="phone"
          />
        </div>
      </div>
    </section>
  );
}
