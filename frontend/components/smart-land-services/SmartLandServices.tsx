"use client";
import React from "react";

const services = [
    {
        num: "01", eyebrow: "Land Records", model: "Computerised · Google Earth",
        title: "Shajra", em: "Maps", badge: "Akshar Shajraat",
        desc: "Our digitised shajra maps place every land parcel on Google Earth with pinpoint accuracy — khasra-wise, party-wise, registry-wise and qabza-wise records for Lahore, Sheikhupura, Kasur and surrounding districts.",
        specs: [
            { val: "3", valEm: "Districts", label: "Coverage area" },
            { val: "5", label: "Record types" },
            { val: "On", valEm: "Google Earth", label: "Platform" },
            { val: "1", valEm: "Click", label: "Delivery" },
        ],
        img: "/images/sm-1.png", flip: false,
    },
    {
        num: "02", eyebrow: "Mapping & GIS", model: "Land Mgmt · Geo Tagging · CAD",
        title: "Aks Shajrajaat", em: "Available", badge: "available",
        desc: "Geo-referenced property maps overlaid on satellite imagery — covering land management systems, Google Khasra plans, business management maps and geo-tagging for precise boundary identification and plot verification.",
        specs: [
            { val: "GIS", valEm: "Grade", label: "Accuracy" },
            { val: "4", label: "Map types" },
            { val: "CAD", valEm: "+ GIS", label: "Formats" },
            { val: "Live", label: "Satellite link" },
        ],
        img: "/images/sm-2.png", flip: true,
    },
    {
        num: "03", eyebrow: "Land Use Planning", model: "Infrastructure · Zoning · Housing",
        title: "Digitization of", em: "Khasra Plan", badge: "khasra plan",
        desc: "Full-spectrum land use planning from infrastructure and zoning to society layout, road network design and complete housing scheme documentation — submitted and approved across Punjab's planning authorities.",
        specs: [
            { val: "5", valEm: "Types", label: "Plan categories" },
            { val: "A0+", label: "Output format" },
            { val: "Zoning", label: "Compliance" },
            { val: "1", valEm: "Day", label: "Turnaround" },
        ],
        img: "/images/sm-3.png", flip: false,
    },
    {
        num: "04", eyebrow: "Google Earth Mapping", model: "Mutation · Fard · Drafting",
        title: "Google Earth", em: "Mapping", badge: "Google Earth Mapping",
        desc: "End-to-end property legal services including mutation processing, fard issuance, legal drafting and full compliance support — handled by experienced professionals across all Punjab tehsil and registry offices.",
        specs: [
            { val: "All", valEm: "Punjab", label: "Registry offices" },
            { val: "3", label: "Document types" },
            { val: "Legal", valEm: "Draft", label: "Certified output" },
            { val: "Fast", label: "Processing" },
        ],
        img: "/images/sm-4.png", flip: true,
    },
    {
        num: "05", eyebrow: "GIS & Technology", model: "Satellite · Geo Tag · Business GIS",
        title: "GIS", em: "Solutions", badge: "GIS & Technology",
        desc: "Satellite-linked geo-tagging and multi-layer GIS mapping for precise land intelligence — business management maps, ownership overlays and investment-grade spatial analysis for developers, investors and estate agents.",
        specs: [
            { val: "Satellite", valEm: "Link", label: "Data source" },
            { val: "Multi", valEm: "Layer", label: "GIS output" },
            { val: "Real", valEm: "Time", label: "Updates" },
            { val: "PDF", valEm: "+ KMZ", label: "Export formats" },
        ],
        img: "/images/sm-5.png", flip: false,
    },
];

const WA_NUMBER = "923214577000";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;
const PDF_LINK = "/smart-land-services.pdf";

function DownloadIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}

function WAIcon({ color = "currentColor", size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.126 1.532 5.866L.057 23.492a.5.5 0 0 0 .614.612l5.757-1.515A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.505-5.23-1.384l-.374-.217-3.884 1.021 1.001-3.768-.233-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
    );
}

export default function SmartLandEditorial() {
    return (
        <section className="bg-[#f4f1eb] overflow-hidden pb-0 mt-[-92px] pt-[92px]">

            {/* ── HEADER ── */}
            <div className="text-center px-6 py-[72px] border-b border-[rgba(74,124,89,0.14)]">
                <div className="flex items-center justify-center gap-4 font-['Syne'] font-bold text-[10px] tracking-[.28em] uppercase text-[#4a7c59] mb-5">
                    <span className="block w-10 h-px bg-[#4a7c59]" />
                    Smart Land Services
                    <span className="block w-10 h-px bg-[#4a7c59]" />
                </div>
                <h2 className="font-['Cormorant_Garamond'] text-[clamp(38px,5vw,60px)] font-light text-[#1a1a18] leading-[1.08] mb-3">
                    Scan &amp; Plan with <em className="italic text-[#4a7c59]">Precision</em>
                </h2>
                <p className="font-['Syne'] text-[14px] font-light text-[#6b6b62] leading-[1.75] max-w-[460px] mx-auto">
                    Five specialised services — each combining field expertise with modern mapping technology for landowners across Punjab.
                </p>
            </div>

            {/* ── SERVICE CARDS ── */}
            {services.map((s, idx) => (
                <React.Fragment key={s.num}>
                    <div className="mx-7 mt-4 mb-10 border border-[rgba(74,124,89,0.22)] rounded-[4px] overflow-hidden bg-white shadow-[0_2px_24px_rgba(26,26,24,0.06)]">
                        <div className={`flex ${s.flip ? "flex-row-reverse" : "flex-row"} max-md:flex-col`}>

                            {/* IMAGE PANEL */}
                            <div className="w-1/2 max-md:w-full bg-[#1a1a18] relative group overflow-hidden flex-shrink-0">
                                <div className="relative w-full aspect-[4/3] overflow-hidden">
                                    <img
                                        src={s.img}
                                        alt={`${s.title} ${s.em}`}
                                        className="w-full h-full object-contain filter saturate-[.85] brightness-[.92] transition-all duration-700 group-hover:scale-[1.035] group-hover:saturate-95 group-hover:brightness-[.88]"
                                    />
                                    {/* Badge */}
                                    <span className="absolute top-6 right-6 z-10"
                                        style={{
                                            fontSize: "0.58rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            color: "#fff",
                                            padding: "0.55rem 1.3rem",
                                            borderRadius: 5,
                                            backgroundColor: "#4a7c59"
                                        }}>
                                        {s.badge}
                                    </span>
                                    {/* Ghost number */}
                                    <span className={`absolute bottom-3.5 z-10 font-['Cormorant_Garamond'] text-[72px] max-md:text-[52px] font-bold italic text-[#CACACA] leading-none select-none pointer-events-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] max-md:bottom-6 ${s.flip ? "right-3.5" : "left-3.5"}`}>{s.num}</span>
                                </div>
                            </div>

                            {/* TEXT PANEL */}
                            <div className={`w-1/2 max-md:w-full flex flex-col justify-center px-12 py-11 max-md:px-6 max-md:py-8 ${s.flip ? "border-r border-[rgba(74,124,89,0.12)]" : "border-l border-[rgba(74,124,89,0.12)]"} max-md:border-none`}>

                                {/* Eyebrow */}
                                <p className="flex items-center gap-2 font-['Syne'] text-[9px] tracking-[.26em] uppercase font-bold text-[#4a7c59] mb-1.5">
                                    <span className="block w-[18px] h-px bg-[#4a7c59]" />{s.eyebrow}
                                </p>
                                {/* Model tag */}
                                <p className="font-['Syne'] text-[10px] tracking-[.14em] uppercase font-bold text-[#adadaa] mb-[18px]">{s.model}</p>

                                {/* Title */}
                                <h3 className="font-['Cormorant_Garamond'] text-[clamp(30px,3vw,46px)] font-light text-[#1a1a18] leading-[1.1] mb-3.5">
                                    {s.title}<em className="italic text-[#4a7c59] block">{s.em}</em>
                                </h3>

                                {/* Description */}
                                <p className="font-['Syne'] text-[13px] font-light text-[#5c5c57] leading-[1.82] mb-5 pb-[18px] border-b border-[rgba(74,124,89,0.1)]">
                                    {s.desc}
                                </p>

                                {/* Specs */}
                                <div className="grid grid-cols-2 mb-[22px]">
                                    {s.specs.map((sp, i) => (
                                        <div key={i} className={`py-3 border-b border-[rgba(74,124,89,0.1)] ${i % 2 === 0 ? "pr-4 border-r border-[rgba(74,124,89,0.1)]" : "pl-4"}`}>
                                            <div className="font-['Cormorant_Garamond'] text-[24px] text-[#1a1a18] leading-none mb-1">
                                                {sp.val}{sp.valEm && <em className="italic text-[#4a7c59] text-[18px] ml-1">{sp.valEm}</em>}
                                            </div>
                                            <div className="font-['Syne'] text-[9px] tracking-[.18em] uppercase text-[#adadaa]">{sp.label}</div>
                                        </div>
                                    ))}
                                </div>


                                {/* CTAs */}
                                <div className="grid grid-cols-2 gap-3">
                                    <a href={WA_LINK} target="_blank" rel="noreferrer"
                                        className="inline-flex items-center justify-center text-center font-['Syne'] text-[0.6rem] max-md:text-[0.55rem] tracking-[.1em] uppercase font-semibold bg-[#1a1a18] text-white no-underline transition-colors duration-300 hover:bg-[#4a7c59] px-3 py-4 rounded-[10px]">
                                        Book via WhatsApp
                                    </a>
                                    <button
                                        className="inline-flex items-center justify-center text-center font-['Syne'] text-[0.6rem] max-md:text-[0.55rem] tracking-[.1em] uppercase font-semibold bg-transparent text-[#4a7c59] transition-all duration-300 hover:bg-[#4a7c59] hover:text-white cursor-pointer px-3 py-4 rounded-[10px]"
                                        style={{ border: "1px solid rgba(74,124,89,0.35)" }}>
                                        Get a Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Numbered divider */}
                    {idx < services.length - 1 && (
                        <div className="flex items-center gap-4 mx-7 my-1">
                            <span className="flex-1 h-px bg-[rgba(74,124,89,0.12)]" />
                            <span className="font-['Syne'] text-[9px] tracking-[.22em] uppercase text-[#adadaa]">0{idx + 2}</span>
                            <span className="flex-1 h-px bg-[rgba(74,124,89,0.12)]" />
                        </div>
                    )}
                </React.Fragment>
            ))}

            {/* ── PDF DOWNLOAD STRIP (dark) ── */}
            <div className="mx-7 mt-12 mb-7 bg-[#1a1a18] rounded-[4px] flex flex-wrap items-center justify-between gap-6 px-10 py-7 max-md:px-6 max-md:flex-col max-md:items-start">
                <div>
                    <p className="font-['Syne'] text-[9px] tracking-[.26em] uppercase text-[rgba(255,255,255,0.4)] mb-1.5">
                        Free Download
                    </p>
                    <h3 className="font-['Cormorant_Garamond'] font-light italic text-[26px] text-white leading-[1.1] mb-1">
                        Smart Land Services — Full Brochure
                    </h3>
                    <p className="font-['Syne'] text-[12px] font-light text-[rgba(255,255,255,0.5)] leading-relaxed">
                        All five services, pricing tiers, sample maps &amp; legal document templates.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 items-center max-md:w-full max-md:flex-col">
                    <a href={PDF_LINK} download
                        className="flex items-center justify-center gap-2 font-['Syne'] text-[10px] tracking-[.18em] uppercase font-bold bg-[#4a7c59] text-white rounded-[6px] px-5 py-3 hover:bg-[#3a6347] transition-colors no-underline max-md:w-full max-md:py-4">
                        <DownloadIcon /> Download PDF
                    </a>
                    <a href={WA_LINK} target="_blank" rel="noreferrer"
                        className="flex items-center justify-center gap-2 font-['Syne'] text-[10px] tracking-[.18em] uppercase font-bold bg-transparent text-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.2)] rounded-[6px] px-5 py-3 hover:border-[#4a7c59] hover:text-[#4a7c59] transition-colors no-underline max-md:w-full max-md:py-4">
                        <WAIcon /> WhatsApp Query
                    </a>
                </div>
            </div>

        </section>
    );
}