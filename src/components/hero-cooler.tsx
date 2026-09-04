export function HeroCooler() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px]">
      <div className="glow-orb -left-10 top-10 h-40 w-40 bg-mint/50" />
      <div className="glow-orb delay right-0 bottom-16 h-32 w-32 bg-blue/40" />

      <div className="float-slow relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#11161d] p-4 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]">
        <div className="relative overflow-hidden rounded-[1.4rem] bg-black">
          <svg viewBox="0 0 280 520" className="block h-auto w-full" aria-hidden="true">
            <defs>
              <linearGradient id="scan" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4d73d6" stopOpacity="0" />
                <stop offset="50%" stopColor="#95e3b6" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#4d73d6" stopOpacity="0" />
              </linearGradient>
            </defs>

            <rect width="280" height="520" rx="22" fill="#0b0e12" />
            <rect x="18" y="22" width="244" height="56" rx="10" fill="#1a2230" />
            <text
              x="140"
              y="48"
              textAnchor="middle"
              fill="#95e3b6"
              fontSize="11"
              fontFamily="sans-serif"
              letterSpacing="2"
            >
              SMART COOLER
            </text>
            <text
              x="140"
              y="64"
              textAnchor="middle"
              fill="#9aa3b2"
              fontSize="8"
              fontFamily="sans-serif"
            >
              grab · close · go
            </text>

            <rect x="22" y="92" width="236" height="390" rx="14" fill="#101820" />
            <rect x="34" y="104" width="212" height="366" rx="10" fill="#d7f6e6" />

            {[0, 1, 2, 3, 4].map((row) => (
              <g key={row} transform={`translate(0 ${row * 68})`}>
                <rect
                  x="46"
                  y="122"
                  width="48"
                  height="42"
                  rx="6"
                  fill={row % 2 ? "#4d73d6" : "#2f7a56"}
                  opacity="0.85"
                />
                <rect x="102" y="122" width="48" height="42" rx="6" fill="#f6f7f2" />
                <rect
                  x="158"
                  y="122"
                  width="48"
                  height="42"
                  rx="6"
                  fill={row % 2 ? "#ef7a63" : "#4d73d6"}
                  opacity="0.9"
                />
                <rect x="46" y="168" width="160" height="4" rx="2" fill="#0e1218" opacity="0.12" />
              </g>
            ))}

            <rect x="34" y="104" width="212" height="28" className="scan-line origin-top" fill="url(#scan)" />
          </svg>

          <div className="absolute right-3 top-[46%] flex items-center">
            <span className="pulse-ring absolute right-0 h-10 w-10 rounded-full bg-mint/50" />
            <span className="relative flex h-9 w-7 items-center justify-center rounded-md bg-ink text-[8px] font-semibold text-mint">
              TAP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
