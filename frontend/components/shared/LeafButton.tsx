"use client";

import React from 'react';
import { Leaf } from 'lucide-react';

const LeafButton = () => {
    return (
        <div className="fixed bottom-6 left-6 z-[9999]">
            <a
                href="/smart-land-services.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[60px] h-[60px] bg-[#111] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 outline-none"
                aria-label="View Smart Land Services Document"
            >
                <Leaf size={30} className="text-[#79A88B] fill-[#79A88B]/20" />
            </a>
        </div>
    );
};

export default LeafButton;
