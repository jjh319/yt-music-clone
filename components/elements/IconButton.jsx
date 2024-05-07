import React from 'react';

const IconButton = ({ icon, onClickIcon = () => {} }) => {
    return (
        <div
            onClick={onClickIcon}
            className="cursor-pointer flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full"
        >
            {icon}
            {/* <RxHamburgerMenu size={24} /> */}
        </div>
    );
};

export default IconButton;
