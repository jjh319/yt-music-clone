import React from 'react';
import Image from 'next/image';

const Header = ({ children }) => {
   return (
      <header className="relative overflow-y-auto w-full h-full">
         <section className="absolute top-0 w-full">
            <div className="relative h-[480px] w-full">
               <Image
                  alt="mediaItem"
                  className="object-cover"
                  fill
                  src="https://images.unsplash.com/photo-1476673160081-cf065607f449?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               />
               <div className="absolute h-[500px] top-0 bg-black opacity-40 w-full "></div>
               <div className="absolute h-[500px] top-0 bg-gradient-to-t from-black  w-full "></div>
            </div>
         </section>
         <section className="absolute">{children}</section>
      </header>
   );
};

export default Header;
