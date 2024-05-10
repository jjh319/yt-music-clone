import React from 'react';
import { Playlist } from '@/types';

interface PlayListCarouselProps {
   title: string;
   subTitle?: string;
   Thumnail?: React.ReactNode; // React 컴포넌트 자체를 넘길 수 있게
   playlistArray?: Playlist[];
}

const PlayListCarousel: React.FC<PlayListCarouselProps> = ({ title, subTitle, Thumnail, playlistArray }) => {
   return (
      <div>
         {/* {Thumnail}
         {title} - {subTitle}
         {JSON.stringify(playlistArray)} */}
      </div>
   );
};

export default PlayListCarousel;
