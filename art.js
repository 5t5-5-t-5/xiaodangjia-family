/* 数学大作战 · 角色画像（全部自己画的简笔 Q 版，不用任何官方图片） */
(function(){
const K="#2B2B3A";               /* 描边 */
const S=`stroke="${K}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;
const S2=`stroke="${K}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"`;
const svg=(vb,inner)=>`<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`;

/* ---------- 兵器 ---------- */
const sword=(x,y,a)=>`<g transform="translate(${x} ${y}) rotate(${a})"><path d="M-4 -4 L-4 -58 L0 -66 L4 -58 L4 -4Z" fill="#E3EAF3" ${S2}/><rect x="-13" y="-6" width="26" height="7" rx="3" fill="#E7B53C" ${S2}/><rect x="-3.5" y="1" width="7" height="17" rx="3" fill="#8A5A33" ${S2}/></g>`;
const pole=(x,y1,y2,c="#8A5A33")=>`<rect x="${x-3.5}" y="${y1}" width="7" height="${y2-y1}" rx="3" fill="${c}" ${S2}/>`;
const tassel=(x,y)=>`<path d="M${x-7} ${y} Q${x} ${y+16} ${x+7} ${y} Z" fill="#E23B3B" ${S2}/>`;
const spear=(x)=>pole(x,18,148)+tassel(x,30)+`<path d="M${x} 0 L${x+7} 20 L${x-7} 20Z" fill="#E3EAF3" ${S2}/>`;
const snake=(x)=>pole(x,22,148,"#5A3A22")+tassel(x,34)+`<path d="M${x} 0 Q${x+9} 6 ${x+2} 11 Q${x-7} 16 ${x+3} 24 L${x-4} 24 Q${x-12} 15 ${x-3} 10 Q${x+4} 6 ${x} 0Z" fill="#E3EAF3" ${S2}/>`;
const guandao=(x)=>pole(x,30,148,"#2E8B57")+`<path d="M${x-2} 34 L${x-2} 2 Q${x+26} 4 ${x+24} 30 Q${x+12} 40 ${x-2} 34Z" fill="#E3EAF3" ${S2}/><path d="M${x+4} 12 q6 4 12 2 m-14 8 q8 4 14 1" stroke="#2E8B57" stroke-width="3" fill="none"/>`;
const halberd=(x)=>pole(x,20,148,"#7A2D2D")+`<path d="M${x} 0 L${x+6} 18 L${x-6} 18Z" fill="#E3EAF3" ${S2}/><path d="M${x+3} 22 Q${x+22} 14 ${x+20} 34 Q${x+12} 26 ${x+3} 32Z M${x-3} 22 Q${x-22} 14 ${x-20} 34 Q${x-12} 26 ${x-3} 32Z" fill="#E3EAF3" ${S2}/>`;

/* ---------- Q 版人物 ---------- */
function person(o){
  const skin=o.skin||"#FFD9B8",face=o.face||skin;
  const eyes=o.eyes==="round"
    ?`<circle cx="47" cy="60" r="7.5" fill="#fff" ${S2}/><circle cx="73" cy="60" r="7.5" fill="#fff" ${S2}/><circle cx="48" cy="61" r="3.6" fill="${K}"/><circle cx="72" cy="61" r="3.6" fill="${K}"/>`
    :o.eyes==="slit"
    ?`<path d="M40 61 Q47 57 54 60" stroke="${K}" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M66 60 Q73 57 80 61" stroke="${K}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`
    :`<ellipse cx="48" cy="61" rx="4.2" ry="5.4" fill="${K}"/><ellipse cx="72" cy="61" rx="4.2" ry="5.4" fill="${K}"/><circle cx="49.5" cy="59" r="1.6" fill="#fff"/><circle cx="73.5" cy="59" r="1.6" fill="#fff"/>`;
  const brow=o.brow==="angry"
    ?`<path d="M38 48 L55 53 M82 48 L65 53" stroke="${K}" stroke-width="4.5" stroke-linecap="round"/>`
    :o.brow==="thick"
    ?`<path d="M38 50 Q46 45 55 50 M65 50 Q74 45 82 50" stroke="${K}" stroke-width="5" fill="none" stroke-linecap="round"/>`
    :`<path d="M41 50 Q47 47 53 50 M67 50 Q73 47 79 50" stroke="${K}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  const mouth=o.mouth==="shout"?`<path d="M52 74 Q60 84 68 74Z" fill="#B3262E" ${S2}/>`
    :o.mouth==="flat"?`<path d="M53 76 L67 76" stroke="${K}" stroke-width="3" stroke-linecap="round"/>`
    :`<path d="M53 74 Q60 80 67 74" stroke="${K}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  return svg("0 0 120 150",`
    ${o.back||""}
    <ellipse cx="29" cy="114" rx="9" ry="17" fill="${o.sleeve||o.robe}" ${S}/>
    <ellipse cx="91" cy="114" rx="9" ry="17" fill="${o.sleeve||o.robe}" ${S}/>
    <path d="M32 147 Q30 98 60 93 Q90 98 88 147 Z" fill="${o.robe}" ${S}/>
    ${o.chest||`<path d="M60 94 L50 118 M60 94 L70 118" stroke="${o.trim}" stroke-width="6" stroke-linecap="round"/>`}
    ${o.belt?`<rect x="35" y="122" width="50" height="9" rx="4" fill="${o.belt}" ${S2}/>`:""}
    <circle cx="28" cy="131" r="7" fill="${skin}" ${S2}/><circle cx="92" cy="131" r="7" fill="${skin}" ${S2}/>
    ${o.ears||""}
    <circle cx="60" cy="58" r="31" fill="${face}" ${S}/>
    ${o.hair||""}
    <circle cx="41" cy="71" r="5" fill="#FF8C8C" opacity=".45"/><circle cx="79" cy="71" r="5" fill="#FF8C8C" opacity=".45"/>
    ${brow}${eyes}${mouth}
    ${o.beard||""}
    ${o.front||""}`);
}
const capHair=c=>`<path d="M29 56 Q29 25 60 25 Q91 25 91 56 Q82 40 60 40 Q38 40 29 56Z" fill="${c}" ${S}/>`;

const A={};
A.liubei=()=>person({robe:"#F2C443",trim:"#C8342B",belt:"#C8342B",
  back:sword(18,128,-28)+sword(102,128,28),
  ears:`<circle cx="28" cy="62" r="10" fill="#FFD9B8" ${S}/><circle cx="92" cy="62" r="10" fill="#FFD9B8" ${S}/>`,
  hair:capHair("#2B2B3A")+`<rect x="47" y="8" width="26" height="20" rx="4" fill="#2B2B3A" ${S2}/><rect x="37" y="15" width="46" height="6" rx="3" fill="#E7B53C" ${S2}/>`,
  beard:`<path d="M50 80 Q60 84 70 80 L60 96Z" fill="#2B2B3A"/><path d="M46 73 Q53 70 58 74 M62 74 Q67 70 74 73" stroke="${K}" stroke-width="3" fill="none" stroke-linecap="round"/>`});
A.guanyu=()=>person({robe:"#2E9E5B",trim:"#F2C443",belt:"#F2C443",face:"#D9473B",eyes:"slit",brow:"thick",mouth:"flat",
  hair:capHair("#2E8B57")+`<path d="M46 26 Q60 8 74 26" fill="#2E8B57" ${S}/><circle cx="60" cy="20" r="5" fill="#F2C443" ${S2}/>`,
  beard:`<path d="M40 72 Q42 92 52 118 L60 132 L68 118 Q78 92 80 72 Q70 84 60 84 Q50 84 40 72Z" fill="#1F1F2A" ${S2}/>`,
  front:guandao(104)});
A.zhangfei=()=>person({robe:"#3B3F52",trim:"#9AA3B8",belt:"#C8342B",skin:"#E3B48C",eyes:"round",brow:"angry",mouth:"shout",
  chest:`<path d="M44 104 h32 v20 h-32z" fill="#8F98AE" ${S2}/><path d="M44 111 h32 M44 118 h32" stroke="${K}" stroke-width="2"/>`,
  hair:capHair("#1F1F2A")+`<circle cx="60" cy="24" r="9" fill="#1F1F2A" ${S2}/><rect x="30" y="38" width="60" height="7" rx="3" fill="#C8342B" ${S2}/>`,
  beard:`<path d="M30 62 L26 74 L34 76 L30 88 L40 86 L40 98 L50 92 L54 104 L60 94 L66 104 L70 92 L80 98 L80 86 L90 88 L86 76 L94 74 L90 62 Q86 82 60 84 Q34 82 30 62Z" fill="#1F1F2A" ${S2}/>`,
  front:snake(104)});
A.zhaoyun=()=>person({robe:"#F3F5FA",trim:"#3B82F6",belt:"#3B82F6",
  chest:`<path d="M44 102 Q60 96 76 102 L74 124 Q60 128 46 124Z" fill="#DDE3EE" ${S2}/>`,
  hair:`<path d="M27 58 Q27 22 60 22 Q93 22 93 58 Q86 42 60 40 Q34 42 27 58Z" fill="#C9D2E0" ${S}/><path d="M60 22 Q64 2 82 6 Q70 10 66 22Z" fill="#E23B3B" ${S2}/>`,
  front:spear(104)});
A.lvbu=()=>person({robe:"#B8322F",trim:"#F2C443",belt:"#F2C443",brow:"angry",
  chest:`<path d="M44 102 Q60 96 76 102 L74 124 Q60 128 46 124Z" fill="#E7B53C" ${S2}/>`,
  hair:capHair("#2B2B3A")+`<path d="M52 26 Q30 -6 8 6" stroke="#C8342B" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M68 26 Q90 -6 112 6" stroke="#C8342B" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M38 8 l4 4 M24 4 l3 5 M82 8 l-4 4 M96 4 l-3 5" stroke="#F2C443" stroke-width="3"/><path d="M40 30 L48 16 L60 26 L72 16 L80 30Z" fill="#E7B53C" ${S2}/>`,
  front:halberd(104)});
/* 古代小兵：c 是队伍颜色 */
A.bing=(c="#3B82F6")=>person({robe:c,trim:"#F2C443",belt:"#8A5A33",
  hair:`<path d="M27 58 Q27 20 60 20 Q93 20 93 58 L86 56 Q84 36 60 36 Q36 36 34 56Z" fill="#8F98AE" ${S}/><rect x="25" y="52" width="70" height="8" rx="4" fill="#8F98AE" ${S2}/><path d="M60 20 L60 8" stroke="${K}" stroke-width="3"/>${tassel(60,6)}`,
  front:spear(104)});
A.jiefangjun=()=>person({robe:"#5E8A3E",trim:"#C8342B",belt:"#8A5A33",
  chest:`<path d="M48 98 L56 104 L52 108Z M72 98 L64 104 L68 108Z" fill="#C8342B" ${S2}/><circle cx="60" cy="112" r="2.5" fill="#E7B53C"/><circle cx="60" cy="124" r="2.5" fill="#E7B53C"/>`,
  hair:`<path d="M26 54 Q26 22 60 20 Q94 22 94 54Z" fill="#5E8A3E" ${S}/><path d="M24 54 Q60 62 96 54 L98 60 Q60 68 22 60Z" fill="#4A6E30" ${S2}/><path d="M60 30 l3 7 7 0 -5.5 4.5 2 7 -6.5 -4 -6.5 4 2 -7 -5.5 -4.5 7 0z" fill="#E23B3B" stroke="#E7B53C" stroke-width="1.2"/>`,
  front:`<g transform="translate(96 118) rotate(-12)"><rect x="-12" y="-10" width="26" height="18" rx="2" fill="#FFF8E6" ${S2}/><path d="M-12 -10 L1 1 L14 -10" fill="none" ${S2}/><circle cx="1" cy="1" r="3" fill="#E23B3B"/></g>`});
A.ribenbing=()=>person({robe:"#B9A46C",trim:"#8A7A4A",belt:"#6B4A2A",brow:"angry",mouth:"flat",
  hair:`<path d="M26 54 Q26 22 60 20 Q94 22 94 54Z" fill="#B9A46C" ${S}/><path d="M24 54 Q60 60 96 54 L96 60 Q60 66 24 60Z" fill="#8A7A4A" ${S2}/><path d="M60 30 l3 7 7 0 -5.5 4.5 2 7 -6.5 -4 -6.5 4 2 -7 -5.5 -4.5 7 0z" fill="#E7B53C"/><path d="M28 58 L26 84 L36 84 L36 62Z M92 58 L94 84 L84 84 L84 62Z" fill="#E9E1C8" ${S2}/>`,
  front:pole(104,40,148,"#7A5230")+`<path d="M104 4 L108 40 L100 40Z" fill="#E3EAF3" ${S2}/>`});
/* 悟空（super=true 变成金发） */
A.wukong=(sup)=>{const h=sup?"#FFD23F":"#1F1F2A";
  return person({robe:"#F28C28",trim:"#2B4DB3",belt:"#2B4DB3",sleeve:"#F28C28",brow:sup?"angry":"",mouth:sup?"shout":"",
    chest:`<path d="M48 96 L60 112 L72 96" fill="#2B4DB3" ${S2}/><circle cx="74" cy="112" r="7" fill="#fff" ${S2}/><text x="74" y="116" font-size="9" text-anchor="middle" font-weight="900" fill="${K}">悟</text>`,
    back:sup?`<ellipse cx="60" cy="80" rx="58" ry="72" fill="#FFE66D" opacity=".55"/>`:"",
    hair:`<path d="M28 58 L14 40 L32 40 L22 18 L42 28 L44 4 L58 24 L68 2 L74 24 L92 10 L88 32 L108 30 L92 50 L92 58 Q84 38 60 36 Q36 38 28 58Z" fill="${h}" ${S}/>`})};
A.beijita=()=>person({robe:"#2B4DB3",trim:"#2B4DB3",brow:"angry",mouth:"flat",
  chest:`<path d="M40 98 Q60 92 80 98 L78 126 Q60 130 42 126Z" fill="#F4F5F8" ${S2}/><path d="M30 100 Q34 92 44 96 L42 108Z M90 100 Q86 92 76 96 L78 108Z" fill="#F2D06B" ${S2}/>`,
  hair:`<path d="M30 56 L28 30 L36 34 L34 8 L46 22 L52 -2 L60 18 L68 -2 L74 22 L86 8 L84 34 L92 30 L90 56 Q82 40 60 46 Q38 40 30 56Z" fill="#1F1F2A" ${S}/>`});

/* ---------- 汽车人 ---------- */
function robot(o){return svg("0 0 120 150",`
  <rect x="38" y="118" width="18" height="30" rx="4" fill="${o.leg}" ${S}/><rect x="64" y="118" width="18" height="30" rx="4" fill="${o.leg}" ${S}/>
  <rect x="14" y="78" width="16" height="44" rx="6" fill="${o.arm}" ${S}/><rect x="90" y="78" width="16" height="44" rx="6" fill="${o.arm}" ${S}/>
  <rect x="12" y="116" width="20" height="14" rx="5" fill="#9AA3B8" ${S2}/><rect x="88" y="116" width="20" height="14" rx="5" fill="#9AA3B8" ${S2}/>
  <path d="M28 74 L92 74 L86 122 L34 122Z" fill="${o.body}" ${S}/>
  ${o.chest}
  <rect x="38" y="16" width="44" height="52" rx="10" fill="${o.head}" ${S}/>
  ${o.headx||""}
  <rect x="44" y="34" width="32" height="14" rx="5" fill="#1C2440" ${S2}/>
  <rect x="47" y="38" width="10" height="6" rx="3" fill="#7FE3FF"/><rect x="63" y="38" width="10" height="6" rx="3" fill="#7FE3FF"/>
  ${o.mouth}`)}
A.qingtianzhu=()=>robot({leg:"#2B5FD9",arm:"#D93A3A",body:"#D93A3A",head:"#2B5FD9",
  chest:`<rect x="34" y="80" width="23" height="18" rx="3" fill="#9FE0FF" ${S2}/><rect x="63" y="80" width="23" height="18" rx="3" fill="#9FE0FF" ${S2}/><rect x="44" y="102" width="32" height="16" rx="3" fill="#C9D2E0" ${S2}/><path d="M50 104 v12 M56 104 v12 M62 104 v12 M68 104 v12" stroke="${K}" stroke-width="2"/>`,
  headx:`<rect x="30" y="20" width="9" height="26" rx="3" fill="#2B5FD9" ${S2}/><rect x="81" y="20" width="9" height="26" rx="3" fill="#2B5FD9" ${S2}/><rect x="56" y="8" width="8" height="14" rx="3" fill="#2B5FD9" ${S2}/>`,
  mouth:`<rect x="46" y="52" width="28" height="12" rx="3" fill="#C9D2E0" ${S2}/><path d="M53 54 v8 M60 54 v8 M67 54 v8" stroke="${K}" stroke-width="1.6"/>`});
A.dahuangfeng=()=>robot({leg:"#2B2B3A",arm:"#FFC93C",body:"#FFC93C",head:"#FFC93C",
  chest:`<rect x="38" y="80" width="44" height="16" rx="3" fill="#9FE0FF" ${S2}/><path d="M34 104 h52 M36 112 h48" stroke="${K}" stroke-width="5"/>`,
  headx:`<path d="M42 18 L34 2 L48 14Z M78 18 L86 2 L72 14Z" fill="#2B2B3A" ${S2}/><path d="M38 26 h44" stroke="${K}" stroke-width="5"/>`,
  mouth:`<path d="M50 56 h20 v8 h-20z" fill="#2B2B3A"/>`});

/* ---------- 恐龙 ---------- */
A.bawanglong=()=>svg("0 0 150 130",`
  <path d="M60 78 Q20 74 4 96 Q30 92 56 98Z" fill="#4FA34F" ${S}/>
  <rect x="58" y="96" width="16" height="30" rx="6" fill="#438C43" ${S}/><rect x="80" y="96" width="16" height="30" rx="6" fill="#438C43" ${S}/>
  <ellipse cx="78" cy="82" rx="30" ry="26" fill="#5CB85C" ${S}/>
  <path d="M86 72 q10 6 6 14" stroke="#438C43" stroke-width="6" fill="none" stroke-linecap="round"/>
  <path d="M84 60 Q86 24 116 22 Q146 22 146 44 L146 58 Q120 60 112 62 L110 72 Q96 76 84 70Z" fill="#5CB85C" ${S}/>
  <path d="M112 62 L146 58 L144 68 Q124 74 110 72Z" fill="#438C43" ${S}/>
  <path d="M118 60 l3 5 3 -5 3 5 3 -5 3 5 3 -5 3 4" fill="none" stroke="#fff" stroke-width="2.6"/>
  <circle cx="122" cy="36" r="6" fill="#fff" ${S2}/><circle cx="123" cy="37" r="3" fill="${K}"/>
  <path d="M112 26 L130 30" stroke="${K}" stroke-width="4" stroke-linecap="round"/>
  <path d="M62 62 l6 -6 l4 8 l6 -8 l4 8 l6 -8" fill="none" stroke="#438C43" stroke-width="4" stroke-linejoin="round"/>`);
A.sanjiaolong=()=>svg("0 0 150 130",`
  <path d="M40 80 Q10 80 2 96 Q24 94 42 96Z" fill="#E98A2E" ${S}/>
  <rect x="44" y="96" width="16" height="28" rx="6" fill="#D47722" ${S}/><rect x="76" y="96" width="16" height="28" rx="6" fill="#D47722" ${S}/>
  <ellipse cx="70" cy="80" rx="36" ry="26" fill="#F28C28" ${S}/>
  <path d="M96 40 Q130 30 132 70 Q120 86 98 82Z" fill="#F7B267" ${S}/>
  <circle cx="104" cy="50" r="3" fill="#E98A2E"/><circle cx="116" cy="44" r="3" fill="#E98A2E"/><circle cx="124" cy="58" r="3" fill="#E98A2E"/>
  <path d="M96 62 Q120 56 140 72 Q140 92 120 94 Q102 92 96 80Z" fill="#F28C28" ${S}/>
  <path d="M138 74 L150 66 L140 82Z" fill="#FFF3D6" ${S2}/><path d="M112 58 L118 34 L122 58Z M124 58 L134 38 L132 62Z" fill="#FFF3D6" ${S2}/>
  <circle cx="116" cy="70" r="4.5" fill="#fff" ${S2}/><circle cx="117" cy="71" r="2.2" fill="${K}"/>`);

/* ---------- 海洋生物 ---------- */
A.mxj=()=>svg("0 0 170 100",`
  <path d="M150 52 L168 34 L164 52 L168 70Z" fill="#4E5F84" ${S}/>
  <path d="M10 30 Q10 14 30 14 L96 14 Q140 20 154 52 Q140 82 96 84 L40 84 Q14 84 10 64Z" fill="#5B6C8F" ${S}/>
  <path d="M14 64 Q40 66 70 62 L70 72 Q40 78 16 74Z" fill="#E9EEF7" ${S2}/>
  <path d="M30 26 q10 -4 18 0 M30 36 q10 -4 18 0 M86 28 q6 4 0 10" stroke="#46557A" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="64" cy="50" r="4" fill="${K}"/><path d="M80 66 Q92 76 104 70" fill="#4E5F84" ${S2}/>
  <path d="M26 12 Q22 0 14 2 M26 12 Q28 0 36 0" stroke="#9FD8FF" stroke-width="4" fill="none" stroke-linecap="round"/>`);
A.wuzei=()=>svg("0 0 120 150",`
  ${[20,34,48,62,76,90].map((x,i)=>`<path d="M${x+6} 78 Q${x-8+i*3} 110 ${x+4} 128 Q${x+14} 142 ${x+2} 148" stroke="#C9413D" stroke-width="8" fill="none" stroke-linecap="round"/>`).join("")}
  <path d="M60 2 Q96 30 92 66 Q88 84 60 86 Q32 84 28 66 Q24 30 60 2Z" fill="#E05A55" ${S}/>
  <path d="M60 2 L44 22 L60 16 L76 22Z" fill="#C9413D" ${S2}/>
  <circle cx="48" cy="62" r="11" fill="#fff" ${S2}/><circle cx="72" cy="62" r="11" fill="#fff" ${S2}/>
  <circle cx="49" cy="64" r="6" fill="${K}"/><circle cx="71" cy="64" r="6" fill="${K}"/><circle cx="51" cy="61" r="2" fill="#fff"/><circle cx="73" cy="61" r="2" fill="#fff"/>
  <circle cx="44" cy="40" r="3" fill="#F28A86"/><circle cx="74" cy="36" r="4" fill="#F28A86"/><circle cx="60" cy="48" r="2.5" fill="#F28A86"/>`);
A.shayu=()=>svg("0 0 170 100",`
  <path d="M138 50 L168 22 L160 50 L168 80Z" fill="#7C8CA3" ${S}/>
  <path d="M70 20 L84 0 L96 24Z" fill="#7C8CA3" ${S}/>
  <path d="M6 54 Q30 18 90 20 Q130 24 146 50 Q130 80 90 80 Q30 82 6 54Z" fill="#8A9AB2" ${S}/>
  <path d="M10 58 Q40 80 92 78 Q128 76 142 56 Q120 70 90 70 Q40 72 10 58Z" fill="#F4F6FA" ${S2}/>
  <path d="M14 60 Q30 72 48 66" fill="#fff" ${S2}/><path d="M18 62 l4 6 4 -5 4 6 4 -5 4 6 4 -5" fill="none" stroke="${K}" stroke-width="1.6"/>
  <circle cx="36" cy="44" r="4.5" fill="${K}"/><path d="M60 42 v12 M66 42 v12 M72 42 v12" stroke="#6B7A90" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M80 70 L96 90 L100 72Z" fill="#7C8CA3" ${S2}/>`);
A.haitun=()=>svg("0 0 170 100",`
  <path d="M140 46 L166 30 L160 50 L166 70Z" fill="#4FA3D9" ${S}/><path d="M74 24 L92 6 L94 28Z" fill="#4FA3D9" ${S}/>
  <path d="M4 56 Q8 46 22 46 Q50 22 100 26 Q140 32 148 50 Q134 74 90 76 Q40 76 22 62 Q8 64 4 56Z" fill="#5CB6EA" ${S}/>
  <path d="M24 60 Q60 76 120 66 Q90 72 60 68 Q36 66 24 60Z" fill="#E6F5FF" ${S2}/><circle cx="38" cy="46" r="4" fill="${K}"/><path d="M8 56 Q14 60 22 58" stroke="${K}" stroke-width="2.5" fill="none"/>`);

/* ---------- 道具 ---------- */
A.rock=()=>svg("0 0 200 150",`<path d="M10 140 Q2 92 34 70 Q44 26 92 24 Q140 18 162 56 Q196 74 192 140Z" fill="#A6A09A" ${S}/><path d="M50 72 Q70 60 88 66 M120 50 Q140 52 150 66 M40 110 Q60 104 76 112" stroke="#8E8780" stroke-width="5" fill="none" stroke-linecap="round"/>`);
A.tent=(open)=>svg("0 0 200 170",`<path d="M100 8 L100 26" stroke="${K}" stroke-width="4"/><path d="M100 8 L128 16 L100 24Z" fill="#E23B3B" ${S2}/>
  <path d="M100 26 L192 160 L8 160Z" fill="#E9A54A" ${S}/><path d="M100 26 L150 160 M100 26 L50 160" stroke="#C9822C" stroke-width="4"/>
  ${open?`<path d="M100 60 L132 160 L68 160Z" fill="#5A3A22" ${S2}/>`:`<path d="M100 40 L100 160" stroke="${K}" stroke-width="3"/>`}`);
A.flag=(c)=>svg("0 0 60 90",`<rect x="6" y="4" width="6" height="84" rx="3" fill="#8A5A33" ${S2}/><path d="M12 8 Q34 2 56 10 L56 40 Q34 32 12 38Z" fill="${c}" ${S2}/>`);
A.letter=()=>svg("0 0 120 90",`<rect x="6" y="10" width="108" height="72" rx="8" fill="#FFF8E6" ${S}/><path d="M6 14 L60 52 L114 14" fill="none" ${S}/><circle cx="60" cy="52" r="10" fill="#E23B3B" ${S2}/><path d="M60 44 l2.2 5 5.4 0 -4.4 3.3 1.7 5.2 -4.9 -3.1 -4.9 3.1 1.7 -5.2 -4.4 -3.3 5.4 0z" fill="#FFD23F"/>`);

window.ART=A;
})();
