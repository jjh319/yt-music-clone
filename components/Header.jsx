import React from 'react';
import Image from 'next/image';
import UserIcon from '@/components/UserIcon';
import PagePadding from './PagePadding';
import { FaChromecast } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

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
         <section className="sticky">
            <PagePadding>
               <div className="h-[64px] flex flex-row justify-between items-center">
                  <article className="flex flex-row items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px]">
                     <div>
                        <FiSearch size={24} />
                     </div>
                     <input
                        type="text"
                        className="w-full h-full bg-transparent"
                        placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
                     />
                  </article>
                  <article className="flex flex-row gap-6 items-center">
                     <FaChromecast size={26} />
                     <UserIcon />
                  </article>
               </div>
            </PagePadding>
         </section>
         <section className="absolute">{children}</section>
      </header>
   );
};

export default Header;
