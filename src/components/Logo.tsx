export function Logo() {
  return (
    <svg viewBox="0 0 800 200" className="w-full max-w-[400px] h-auto mx-auto">
      {/* Background rectangle */}
      <rect width="800" height="200" fill="#E8E6E3" />
      
      {/* Main Logo Text */}
      <g>
        {/* B */}
        <path d="M100 50 H150 L200 100 L150 150 H100 V50" fill="#7A735B"/>
        {/* A */}
        <path d="M220 150 L270 50 L320 150 H220" fill="#7A735B"/>
        {/* T */}
        <path d="M340 50 H440 V80 H410 V150 H370 V80 H340 V50" fill="#7A735B"/>
        {/* T */}
        <path d="M460 50 H560 V80 H530 V150 H490 V80 H460 V50" fill="#7A735B"/>
        {/* L */}
        <path d="M580 50 H620 V150 H700 V120 H620 V50" fill="#7A735B"/>
        {/* E */}
        <path d="M720 50 H820 V80 H760 V85 H800 V115 H760 V120 H820 V150 H720 V50" fill="#7A735B"/>
      </g>
      
      {/* P */}
      <path d="M100 50 H150 L200 75 L150 100 H100 V50" fill="#7A735B"/>
      {/* A */}
      <path d="M220 100 L245 50 L270 100 H220" fill="#7A735B"/>
      {/* D */}
      <path d="M290 50 H340 L390 75 L340 100 H290 V50" fill="#7A735B"/>
      {/* E */}
      <path d="M410 50 H460 V65 H430 V70 H450 V85 H430 V90 H460 V100 H410 V50" fill="#7A735B"/>
      {/* L */}
      <path d="M480 50 H500 V100 H540 V85 H500 V50" fill="#7A735B"/>

      {/* Subtitle */}
      <text 
        x="400" 
        y="170" 
        fontFamily="serif" 
        fontSize="24" 
        fontStyle="italic"
        fill="#9A9283" 
        textAnchor="middle"
      >
        Create League with your friends
      </text>
    </svg>
  );
}