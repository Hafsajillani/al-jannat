"use client";

import { useEffect, useState } from "react";
import { readPsd } from "ag-psd";

interface PsdImageProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function PsdImage({ src, alt = "", className = "", style }: PsdImageProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    // If it's not a PSD, we don't need to parse it
    if (!src.toLowerCase().endsWith(".psd")) {
      return;
    }

    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.arrayBuffer();
      })
      .then((buffer) => {
        if (!active) return;
        // Parse the PSD file
        const psd = readPsd(buffer);
        
        // Grab the composite canvas from the parsed PSD
        if (psd.canvas) {
          setDataUrl(psd.canvas.toDataURL());
        } else {
          throw new Error("No composite canvas found in PSD");
        }
      })
      .catch((err) => {
        console.error("Failed to parse PSD:", err);
        if (active) setError(true);
      });

    return () => {
      active = false;
    };
  }, [src]);

  // Fallback to natively supported image if it's not a PSD
  if (!src.toLowerCase().endsWith(".psd")) {
    return <img src={src} alt={alt} className={className} style={style} draggable={false} />;
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-red-50 text-red-500 text-xs p-4 ${className}`} style={style}>
        Failed to load PSD
      </div>
    );
  }

  if (!dataUrl) {
    return (
      <div className={`animate-pulse bg-gray-200 ${className}`} style={style} />
    );
  }

  return <img src={dataUrl} alt={alt} className={className} style={style} draggable={false} />;
}
