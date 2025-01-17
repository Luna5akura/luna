// src/pages/Warp.tsx
import React from 'react';

const Warp: React.FC = () => {
  return (
    <div>
      <div className="mx-auto w-1/2 mt-10 p-6 bg-sky-100 rounded-lg shadow">
        <a
          href="https://www.cameudis.com/"
          className="font-bold mb-0.5 text-sky-900
            text-xl
            sm:text-xl
            lg:text-3xl
            "
        >Cameudis</a>
        {/*<p className="text-sky-900 leading-7">*/}
        {/*  Love is murderous utopia.*/}
        {/*</p>*/}
      </div>
      <div className="mx-auto w-1/2 mt-10 p-6 bg-sky-100 rounded-lg shadow">
        <div className="flex items-center">
          <div className=" rounded-full overflow-hidden
          w-8 h-8 mr-3
          sm:w-8 sm:h-8 sm:mr-3
          lg:w-16 lg:h-16 lg:mr-6
          ">
            <a href="https://icelava.top">
              <img
                src="https://icelava.top/FkLog/@icon/icelava.jpg"
                alt="Circular Image"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
          <a
            href="https://icelava.top"
            className="font-bold mb-0.5 text-sky-900
            text-xl
            sm:text-xl
            lg:text-3xl
            "
          >
            IceLava Top
          </a>
        </div>
        <p className="mt-4 mx-1 text-sky-900 leading-7
        text-sm
        sm:text-sm
        lg:text-base
        ">
          No Code No Life
        </p>
      </div>
      <div className="mx-auto w-1/2 mt-10 p-6 bg-sky-100 rounded-lg shadow">
        <a
          href="https://blog.iin0.cn/"
          className="font-bold mb-0.5 text-sky-900
            text-xl
            sm:text-xl
            lg:text-3xl
            "
        >暮色音铃</a>
        {/*<p className="text-sky-900 leading-7">*/}
        {/*  Love is murderous utopia.*/}
        {/*</p>*/}
      </div>
      <div className="mx-auto w-1/2 mt-10 p-6 bg-sky-100 rounded-lg shadow">
        <a
          href="https://www.sapium.site/wordpress/"
          className="font-bold mb-0.5 text-sky-900
            text-xl
            sm:text-xl
            lg:text-3xl
            "
        >乌桕Sapium</a>
        {/*<p className="text-sky-900 leading-7">*/}
        {/*  Love is murderous utopia.*/}
        {/*</p>*/}
      </div>
    </div>
  );
};

export default Warp;
