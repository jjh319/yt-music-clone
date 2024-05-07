'use client';
import React from 'react';
import { BarLoader } from 'react-spinners';
import LoadingBar from '@/components/LoadingBar';

const loading = () => {
    return (
        <div className="w-full">
            <LoadingBar />
        </div>
    );
};

export default loading;
