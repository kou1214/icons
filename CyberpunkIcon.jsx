import React from 'react';

const CyberpunkIcon = () => {
  return (
    <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 背景の四角とノイズ・グリッチエフェクト */}
      <rect x="0" y="0" width="256" height="256" rx="30" fill="#1A1A1A" />
      <path d="M0 30C0 13.4315 13.4315 0 30 0H226C242.569 0 256 13.4315 256 30V226C256 242.569 242.569 256 226 256H30C13.4315 256 0 242.569 0 226V30Z" fill="url(#noise)" />
      <defs>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" in2="BackgroundImage" mode="multiply" />
        </filter>
        <filter id="glitchFilter">
          <feOffset in="SourceGraphic" dx="2" dy="0" result="off1" />
          <feOffset in="SourceGraphic" dx="-2" dy="0" result="off2" />
          <feColorMatrix in="off1" type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="redComp" />
          <feColorMatrix in="off2" type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0" result="greenComp" />
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" result="blueComp" />
          <feBlend in="redComp" in2="greenComp" mode="screen" result="rbBlend" />
          <feBlend in="rbBlend" in2="blueComp" mode="screen" />
        </filter>
        <pattern id="noise" patternUnits="userSpaceOnUse" width="100%" height="100%">
          <rect width="100%" height="100%" fill="#1A1A1A"/>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.1"/>
          <rect width="100%" height="100%" filter="url(#glitchFilter)" opacity="0.05"/>
        </pattern>
      </defs>

      {/* 外側のネオン風のひし形 */}
      <path d="M128 40L216 128L128 216L40 128L128 40Z" stroke="#FFD700" strokeWidth="6" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.8;0.7" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M128 50L206 128L128 206L50 128L128 50Z" stroke="#00BFFF" strokeWidth="4" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.9;0.8" dur="2.5s" repeatCount="indefinite" />
      </path>

      {/* ARSの文字 */}
      <text x="128" y="145" textAnchor="middle" fontSize="90" fontWeight="bold" fill="none" stroke="#00FFFF" strokeWidth="4">
        <tspan>ARS</tspan>
        {/* ネオングロウエフェクト */}
        <filter id="neonGlow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
      </text>

      {/* FOR TEAMの文字 */}
      <text x="128" y="185" textAnchor="middle" fontSize="30" fill="#FFFFFF" opacity="0.9" letterSpacing="2">
        <tspan>FOR TEAM</tspan>
        <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" />
      </text>
    </svg>
  );
};

export default CyberpunkIcon;
