import { getPlaylistById } from '@/lib/dummyData';
import { getRandomElementFromArray } from '@/lib/utils';
import { permanentRedirect } from 'next/navigation';
import React from 'react';
import HeaderBgChanger from '@/components/HeaderBgChanger';
import PagePadding from '@/components/PagePadding';
import PlayListHead from '@/components/PlayListHead';

interface PlaylistPageProps {
   searchParams: {
      list: string;
   };
}

const page = async (props: PlaylistPageProps) => {
   const playList = await getPlaylistById(Number(props.searchParams.list));

   if (!playList) {
      permanentRedirect('/');
   }

   const imageSrc = getRandomElementFromArray(playList.songList)?.imageSrc;

   return (
      <PagePadding>
         <HeaderBgChanger imageSrc={imageSrc} />
         <div className="mt-12"></div>
         <PlayListHead playList={playList} />
      </PagePadding>
   );
};

export default page;
