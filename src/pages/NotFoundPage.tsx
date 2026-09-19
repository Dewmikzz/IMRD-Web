import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-off-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-[20vw] md:text-[15rem] leading-none font-display font-bold text-black tracking-tighter">
        404
      </h1>
      <p className="text-xl md:text-2xl font-medium mt-4 mb-8">
        PAGE NOT FOUND
      </p>
      <Link 
        to="/" 
        className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-black/80 transition-colors"
      >
        RETURN HOME
      </Link>
    </div>
  );
};

export default NotFoundPage;
