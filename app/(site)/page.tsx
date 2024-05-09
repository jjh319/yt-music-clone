import { sleep } from '@/lib/utils';
import { error } from 'console';
import React from 'react';

const page = async () => {
   return (
      <div className="min-h-[600px]">
         {' '}
         homepage
         <div className="h-[500px] bg-neutral-700">HomePage</div>
         <div className="h-[500px] bg-neutral-700">HomePage</div>
         <div className="h-[500px] bg-neutral-700">HomePage</div>
         <div className="h-[500px] bg-neutral-700">HomePage</div>
         <div className="h-[500px] bg-neutral-700">HomePage</div>
      </div>
   );
};

export default page;
