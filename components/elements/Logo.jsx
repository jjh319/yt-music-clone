'use client'; // onClick 이벤트 처리를 하기 위해서는 서버 컴포넌트가 아닌 클라이언트 컴포넌트가 돼야함.
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // appRouter를 쓰기때문에 이걸 써야됨
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import IconButton from './IconButton';

const Logo = () => {
    const { push } = useRouter();
    const onClickLogo = () => {
        // home 이동 하는 로직
        push('/');
    };

    const onClickMenu = () => {};

    return (
        <section className="flex flex-row items-center gap-3">
            <IconButton icon={<RxHamburgerMenu size={24} />} onClickIcon={onClickMenu} />

            <div className="cursor-pointer" onClick={onClickLogo}>
                <Image alt="logo" width={100} height={30} src={'/main-logo.svg'} />
            </div>
        </section>
    );
};

export default Logo;
