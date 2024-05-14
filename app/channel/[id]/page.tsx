import React from 'react';

interface channelPageProps {
   params: {
      id: string;
   };
}

const page = (props: channelPageProps) => {
   console.log(props);
   return <div>channel/[{props.params.id}]</div>;
};

export default page;
