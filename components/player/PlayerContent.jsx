'use client';
import React from 'react';
import { Slider as PlayerSlider } from '../ui/playerSlider';
import { useAudio } from 'react-use';
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from 'react-icons/io5';
import { AiOutlinePause } from 'react-icons/ai';
import usePlayerState from '@/hooks/usePlayerState';
import { ClipLoader } from 'react-spinners';
import { RiPlayFill } from 'react-icons/ri';

const PlayerContent = () => {
   const { activeSong } = usePlayerState();
   const [audio, state, controls, ref] = useAudio({
      src: activeSong.src,
      autoPlay: true,
   });

   const isLoading = activeSong?.src && state.buffered?.length === 0;

   const onClickPreBtn = () => {};
   const onClickStartBtn = () => {
      controls.play();
   };
   const onClickPauseBtn = () => {
      controls.pause();
   };
   const onClickNextBtn = () => {};

   return (
      <div className="h-full w-full relative">
         <div className="absolute top-[-16px] w-full">
            <PlayerSlider
               className="w-full"
               defaultValue={[0]}
               value={[state.time]}
               onValueChange={value => {
                  controls.seek(value);
               }}
            />
         </div>
         {audio}
         <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
            <div className="flex flex-row h-full items-center gap-1 lg:gap-8">
               <IoPlaySkipBackSharp size={24} className="cursor-pointer" onClick={onClickPreBtn} />
               {isLoading ? (
                  <ClipLoader color="#FFF" />
               ) : state.playing ? (
                  <AiOutlinePause size={40} className="cursor-pointer" onClick={onClickPauseBtn} />
               ) : (
                  <RiPlayFill size={40} className="cursor-pointer" onClick={onClickStartBtn} />
               )}

               <IoPlaySkipForwardSharp size={24} className="cursor-pointer" onClick={onClickNextBtn} />
            </div>
            <article></article>
            <div></div>
         </section>
      </div>
   );
};

export default PlayerContent;
