"use client";

import React from 'react';
import Link from 'next/link';
import localFont from 'next/font/local';

const zenDots = localFont({
    src: '../../public/fonts/Zen_Dots/ZenDots-Regular.ttf',
    display: 'swap',
});

const SmartLandButton = () => {
    return (
        <div className="fixed bottom-6 left-6 z-[9999]">
            <Link
                href="/smart-land-services"
                className="flex items-center gap-2.5 bg-[#111] rounded-full pl-2.5 pr-4 py-2.5 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 outline-none group"
                aria-label="Open Smart Land Services"
            >
                <div className="w-[42px] h-[42px] bg-[#1a1a1a] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform gap-[3px]">
                    <span className={`${zenDots.className} text-white text-[10px] leading-none`} style={{ letterSpacing: '-0.02em' }}>
                        aj
                    </span>
                    <span style={{ height: '4px', width: '4px', backgroundColor: '#79A88B', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }} />
                </div>
                <span className="text-[#79A88B] text-[13px] font-medium tracking-wide whitespace-nowrap">
                    Smart Land Services
                </span>
            </Link>
        </div>
    );
};

export default SmartLandButton;