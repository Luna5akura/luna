// src/pages/Warp.tsx
import React from 'react';

const Warp: React.FC = () => {
  return (
    <div>
      <div className="mx-auto w-1/2 mt-10 p-6 bg-sky-100 rounded-lg shadow">
        <a
          href="https://www.cameudis.com/"
          className="text-3xl font-bold mb-4 text-sky-900"
        >Cameudis</a>
        {/*<p className="text-sky-900 leading-7">*/}
        {/*  Love is murderous utopia.*/}
        {/*</p>*/}
      </div>
      <div className="mx-auto w-1/2 mt-10 p-6 bg-sky-100 rounded-lg shadow">
        <div className="flex items-center">
          <div className="w-16 h-16 mr-6 rounded-full overflow-hidden">
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
            className="text-3xl font-bold mb-0.5 text-sky-900"
          >
            IceLava Top
          </a>
        </div>
        <p className="mt-4 mx-1 text-sky-900 leading-7">
          No Code No Life
        </p>
      </div>
    </div>
  );
};

export default Warp;
