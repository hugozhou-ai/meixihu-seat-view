var tn=Object.defineProperty;var d=(t,e,o)=>()=>{if(o)throw o[0];try{return t&&(e=t(t=0)),e}catch(i){throw o=[i],i}};var Ut=(t,e)=>{for(var o in e)tn(t,o,{get:e[o],enumerable:!0})};function aa(){return en.replace(/\/$/,"")}function on(t){ii=t}function ra(){if(!ii){let t=document.querySelector("[data-fa-kit-code]");t&&on(t.getAttribute("data-fa-kit-code")||"")}return ii}var en,ii,ie=d(()=>{en="",ii=""});function an(t,e,o){let i="solid";return e==="chisel"&&(i="chisel-regular"),e==="etch"&&(i="etch-solid"),e==="graphite"&&(i="graphite-thin"),e==="jelly"&&(i="jelly-regular",o==="duo-regular"&&(i="jelly-duo-regular"),o==="fill-regular"&&(i="jelly-fill-regular")),e==="jelly-duo"&&(i="jelly-duo-regular"),e==="jelly-fill"&&(i="jelly-fill-regular"),e==="notdog"&&(o==="solid"&&(i="notdog-solid"),o==="duo-solid"&&(i="notdog-duo-solid")),e==="notdog-duo"&&(i="notdog-duo-solid"),e==="slab"&&((o==="solid"||o==="regular")&&(i="slab-regular"),o==="press-regular"&&(i="slab-press-regular")),e==="slab-press"&&(i="slab-press-regular"),e==="slab-duo"&&(i="slab-duo-regular"),e==="slab-press-duo"&&(i="slab-press-duo-regular"),e==="thumbprint"&&(i="thumbprint-light"),e==="utility"&&(i="utility-semibold"),e==="utility-duo"&&(i="utility-duo-semibold"),e==="utility-fill"&&(i="utility-fill-semibold"),e==="whiteboard"&&(i="whiteboard-semibold"),e==="mosaic"&&(i="mosaic-solid"),e==="pixel"&&(i="pixel-regular"),e==="vellum"&&(i="vellum-solid"),e==="classic"&&(o==="thin"&&(i="thin"),o==="light"&&(i="light"),o==="regular"&&(i="regular"),o==="solid"&&(i="solid")),e==="duotone"&&(o==="thin"&&(i="duotone-thin"),o==="light"&&(i="duotone-light"),o==="regular"&&(i="duotone-regular"),o==="solid"&&(i="duotone")),e==="sharp"&&(o==="thin"&&(i="sharp-thin"),o==="light"&&(i="sharp-light"),o==="regular"&&(i="sharp-regular"),o==="solid"&&(i="sharp-solid")),e==="sharp-duotone"&&(o==="thin"&&(i="sharp-duotone-thin"),o==="light"&&(i="sharp-duotone-light"),o==="regular"&&(i="sharp-duotone-regular"),o==="solid"&&(i="sharp-duotone-solid")),e==="brands"&&(i="brands"),i}function rn(t,e,o){let i=an(t,e,o),a=aa();if(a)return`${a}/${i}/${t}.svg`;let r=ra();return r.length>0?`https://ka-p.fontawesome.com/releases/v${sa}/svgs/${i}/${t}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${sa}/svgs/${i}/${t}.svg`}var sa,sn,na,ae=d(()=>{ie();sa="7.3.0";sn={name:"default",resolver:(t,e="classic",o="solid")=>rn(t,e,o),mutator:(t,e)=>{if(t.hasAttribute("fill")||t.setAttribute("fill","currentColor"),e?.family&&!t.hasAttribute("data-duotone-initialized")){let{family:o,variant:i}=e;if(o==="duotone"||o==="sharp-duotone"||o==="notdog-duo"||o==="notdog"&&i==="duo-solid"||o==="jelly-duo"||o==="jelly"&&i==="duo-regular"||o==="utility-duo"||o==="slab-duo"||o==="slab-press-duo"||o==="thumbprint"){let a=[...t.querySelectorAll("path")],r=a.find(l=>!l.hasAttribute("opacity")),s=a.find(l=>l.hasAttribute("opacity"));if(!r||!s)return;if(r.setAttribute("data-duotone-primary",""),s.setAttribute("data-duotone-secondary",""),e.swapOpacity&&r&&s){let l=s.getAttribute("opacity")||"0.4";r.style.setProperty("--path-opacity",l),s.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},na=sn});function nn(t){return`data:image/svg+xml,${encodeURIComponent(t)}`}var ai,ln,la,re=d(()=>{ai={solid:{"arrow-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>',"arrow-up":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>',backward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>',"backward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>',bars:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>',"angles-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>',"angles-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',"closed-captioning":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>',"closed-captioning-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>',compress:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',ellipsis:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>',"ellipsis-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>',expand:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',filter:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>',forward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"forward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>',gauge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',"magnifying-glass":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',"picture-in-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',"play-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',"table-columns":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>',thumbtack:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>',"up-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',volume:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>',"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},ln={name:"system",resolver:(t,e="classic",o="solid")=>{let a=ai[o][t]??ai.regular[t]??ai.regular["circle-question"];return a?nn(a):""},mutator:t=>{t.hasAttribute("fill")||t.setAttribute("fill","currentColor")}},la=ln});function si(t){ri.add(t)}function ni(t){ri.delete(t)}function He(t){return yo.find(e=>e.name===t)}function Co(t,e){ca(t),yo.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),ri.forEach(o=>{o.library===t&&o.setIcon()})}function ca(t){yo=yo.filter(e=>e.name!==t)}function li(){return cn}var cn,yo,ri,se=d(()=>{ae();re();cn="classic",yo=[na,la],ri=new Set});var un,hn,ua,n,ha,da,pa,ma,T=d(()=>{un=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,ua=t=>{throw TypeError(t)},n=(t,e,o,i)=>{for(var a=i>1?void 0:i?hn(e,o):e,r=t.length-1,s;r>=0;r--)(s=t[r])&&(a=(i?s(e,o,a):s(a))||a);return i&&a&&un(e,o,a),a},ha=(t,e,o)=>e.has(t)||ua("Cannot "+o),da=(t,e,o)=>(ha(t,e,"read from private field"),o?o.call(t):e.get(t)),pa=(t,e,o)=>e.has(t)?ua("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),ma=(t,e,o,i)=>(ha(t,e,"write to private field"),i?i.call(t,o):e.set(t,o),o)});var xo,ne=d(()=>{xo=()=>({checkValidity(t){let e=t.input,o={message:"",isValid:!0,invalidKeys:[]};if(!e)return o;let i=!0;if("checkValidity"in e&&(i=e.checkValidity()),i)return o;if(o.isValid=!1,"validationMessage"in e&&(o.message=e.validationMessage),!("validity"in e))return o.invalidKeys.push("customError"),o;for(let a in e.validity){if(a==="valid")continue;let r=a;e.validity[r]&&o.invalidKeys.push(r)}return o}})});var Eo,Rt=d(()=>{Eo=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}}});var Lo,Ao,ci,ga,We,va,L,ba,ui,hi=d(()=>{Lo=globalThis,Ao=Lo.ShadowRoot&&(Lo.ShadyCSS===void 0||Lo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ci=Symbol(),ga=new WeakMap,We=class{constructor(e,o,i){if(this._$cssResult$=!0,i!==ci)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o,o=this.t;if(Ao&&e===void 0){let i=o!==void 0&&o.length===1;i&&(e=ga.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ga.set(o,e))}return e}toString(){return this.cssText}},va=t=>new We(typeof t=="string"?t:t+"",void 0,ci),L=(t,...e)=>{let o=t.length===1?t[0]:e.reduce((i,a,r)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+t[r+1],t[0]);return new We(o,t,ci)},ba=(t,e)=>{if(Ao)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(let o of e){let i=document.createElement("style"),a=Lo.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=o.cssText,t.appendChild(i)}},ui=Ao?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(let i of e.cssRules)o+=i.cssText;return va(o)})(t):t});var dn,pn,mn,fn,gn,vn,ko,wa,bn,wn,je,Xe,So,ya,Tt,Ye=d(()=>{hi();hi();({is:dn,defineProperty:pn,getOwnPropertyDescriptor:mn,getOwnPropertyNames:fn,getOwnPropertySymbols:gn,getPrototypeOf:vn}=Object),ko=globalThis,wa=ko.trustedTypes,bn=wa?wa.emptyScript:"",wn=ko.reactiveElementPolyfillSupport,je=(t,e)=>t,Xe={toAttribute(t,e){switch(e){case Boolean:t=t?bn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},So=(t,e)=>!dn(t,e),ya={attribute:!0,type:String,converter:Xe,reflect:!1,useDefault:!1,hasChanged:So};Symbol.metadata??=Symbol("metadata"),ko.litPropertyMetadata??=new WeakMap;Tt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=ya){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(e,o),!o.noAccessor){let i=Symbol(),a=this.getPropertyDescriptor(e,i,o);a!==void 0&&pn(this.prototype,e,a)}}static getPropertyDescriptor(e,o,i){let{get:a,set:r}=mn(this.prototype,e)??{get(){return this[o]},set(s){this[o]=s}};return{get:a,set(s){let l=a?.call(this);r?.call(this,s),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ya}static _$Ei(){if(this.hasOwnProperty(je("elementProperties")))return;let e=vn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(je("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(je("properties"))){let o=this.properties,i=[...fn(o),...gn(o)];for(let a of i)this.createProperty(a,o[a])}let e=this[Symbol.metadata];if(e!==null){let o=litPropertyMetadata.get(e);if(o!==void 0)for(let[i,a]of o)this.elementProperties.set(i,a)}this._$Eh=new Map;for(let[o,i]of this.elementProperties){let a=this._$Eu(o,i);a!==void 0&&this._$Eh.set(a,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let o=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let a of i)o.unshift(ui(a))}else e!==void 0&&o.push(ui(e));return o}static _$Eu(e,o){let i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,o=this.constructor.elementProperties;for(let i of o.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ba(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,o,i){this._$AK(e,i)}_$ET(e,o){let i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(a!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:Xe).toAttribute(o,i.type);this._$Em=e,r==null?this.removeAttribute(a):this.setAttribute(a,r),this._$Em=null}}_$AK(e,o){let i=this.constructor,a=i._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let r=i.getPropertyOptions(a),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Xe;this._$Em=a;let l=s.fromAttribute(o,r.type);this[a]=l??this._$Ej?.get(a)??l,this._$Em=null}}requestUpdate(e,o,i,a=!1,r){if(e!==void 0){let s=this.constructor;if(a===!1&&(r=this[e]),i??=s.getPropertyOptions(e),!((i.hasChanged??So)(r,o)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,o,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,o,{useDefault:i,reflect:a,wrapped:r},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??o??this[e]),r!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(o=void 0),this._$AL.set(e,o)),a===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,r]of this._$Ep)this[a]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[a,r]of i){let{wrapped:s}=r,l=this[a];s!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,r,l)}}let e=!1,o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(o)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(o)}willUpdate(e){}_$AE(e){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(o=>this._$ET(o,this[o])),this._$EM()}updated(e){}firstUpdated(e){}};Tt.elementStyles=[],Tt.shadowRootOptions={mode:"open"},Tt[je("elementProperties")]=new Map,Tt[je("finalized")]=new Map,wn?.({ReactiveElement:Tt}),(ko.reactiveElementVersions??=[]).push("2.1.2")});function Da(t,e){if(!gi(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return xa!==void 0?xa.createHTML(e):e}function he(t,e,o=t,i){if(e===W)return e;let a=i!==void 0?o._$Co?.[i]:o._$Cl,r=Ze(e)?void 0:e._$litDirective$;return a?.constructor!==r&&(a?._$AO?.(!1),r===void 0?a=void 0:(a=new r(t),a._$AT(t,o,i)),i!==void 0?(o._$Co??=[])[i]=a:o._$Cl=a),a!==void 0&&(e=he(t,a._$AS(t,e.values),a,i)),e}var pi,Ca,$o,xa,mi,Ot,fi,yn,ue,Ge,Ze,gi,$a,di,Ke,Ea,La,le,Aa,ka,za,vi,w,Fa,_a,W,_,Sa,ce,Ra,Je,zo,Ae,de,Fo,_o,Do,Ro,Ta,Cn,Oa,gt=d(()=>{pi=globalThis,Ca=t=>t,$o=pi.trustedTypes,xa=$o?$o.createPolicy("lit-html",{createHTML:t=>t}):void 0,mi="$lit$",Ot=`lit$${Math.random().toFixed(9).slice(2)}$`,fi="?"+Ot,yn=`<${fi}>`,ue=document,Ge=()=>ue.createComment(""),Ze=t=>t===null||typeof t!="object"&&typeof t!="function",gi=Array.isArray,$a=t=>gi(t)||typeof t?.[Symbol.iterator]=="function",di=`[ 	
\f\r]`,Ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ea=/-->/g,La=/>/g,le=RegExp(`>|${di}(?:([^\\s"'>=/]+)(${di}*=${di}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Aa=/'/g,ka=/"/g,za=/^(?:script|style|textarea|title)$/i,vi=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),w=vi(1),Fa=vi(2),_a=vi(3),W=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Sa=new WeakMap,ce=ue.createTreeWalker(ue,129);Ra=(t,e)=>{let o=t.length-1,i=[],a,r=e===2?"<svg>":e===3?"<math>":"",s=Ke;for(let l=0;l<o;l++){let u=t[l],h,p,m=-1,g=0;for(;g<u.length&&(s.lastIndex=g,p=s.exec(u),p!==null);)g=s.lastIndex,s===Ke?p[1]==="!--"?s=Ea:p[1]!==void 0?s=La:p[2]!==void 0?(za.test(p[2])&&(a=RegExp("</"+p[2],"g")),s=le):p[3]!==void 0&&(s=le):s===le?p[0]===">"?(s=a??Ke,m=-1):p[1]===void 0?m=-2:(m=s.lastIndex-p[2].length,h=p[1],s=p[3]===void 0?le:p[3]==='"'?ka:Aa):s===ka||s===Aa?s=le:s===Ea||s===La?s=Ke:(s=le,a=void 0);let f=s===le&&t[l+1].startsWith("/>")?" ":"";r+=s===Ke?u+yn:m>=0?(i.push(h),u.slice(0,m)+mi+u.slice(m)+Ot+f):u+Ot+(m===-2?l:f)}return[Da(t,r+(t[o]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Je=class t{constructor({strings:e,_$litType$:o},i){let a;this.parts=[];let r=0,s=0,l=e.length-1,u=this.parts,[h,p]=Ra(e,o);if(this.el=t.createElement(h,i),ce.currentNode=this.el.content,o===2||o===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(a=ce.nextNode())!==null&&u.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(let m of a.getAttributeNames())if(m.endsWith(mi)){let g=p[s++],f=a.getAttribute(m).split(Ot),v=/([.?@])?(.*)/.exec(g);u.push({type:1,index:r,name:v[2],strings:f,ctor:v[1]==="."?Fo:v[1]==="?"?_o:v[1]==="@"?Do:de}),a.removeAttribute(m)}else m.startsWith(Ot)&&(u.push({type:6,index:r}),a.removeAttribute(m));if(za.test(a.tagName)){let m=a.textContent.split(Ot),g=m.length-1;if(g>0){a.textContent=$o?$o.emptyScript:"";for(let f=0;f<g;f++)a.append(m[f],Ge()),ce.nextNode(),u.push({type:2,index:++r});a.append(m[g],Ge())}}}else if(a.nodeType===8)if(a.data===fi)u.push({type:2,index:r});else{let m=-1;for(;(m=a.data.indexOf(Ot,m+1))!==-1;)u.push({type:7,index:r}),m+=Ot.length-1}r++}}static createElement(e,o){let i=ue.createElement("template");return i.innerHTML=e,i}};zo=class{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:o},parts:i}=this._$AD,a=(e?.creationScope??ue).importNode(o,!0);ce.currentNode=a;let r=ce.nextNode(),s=0,l=0,u=i[0];for(;u!==void 0;){if(s===u.index){let h;u.type===2?h=new Ae(r,r.nextSibling,this,e):u.type===1?h=new u.ctor(r,u.name,u.strings,this,e):u.type===6&&(h=new Ro(r,this,e)),this._$AV.push(h),u=i[++l]}s!==u?.index&&(r=ce.nextNode(),s++)}return ce.currentNode=ue,a}p(e){let o=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,o),o+=i.strings.length-2):i._$AI(e[o])),o++}},Ae=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,o,i,a){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,o=this._$AM;return o!==void 0&&e?.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=he(this,e,o),Ze(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==W&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$a(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&Ze(this._$AH)?this._$AA.nextSibling.data=e:this.T(ue.createTextNode(e)),this._$AH=e}$(e){let{values:o,_$litType$:i}=e,a=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Je.createElement(Da(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(o);else{let r=new zo(a,this),s=r.u(this.options);r.p(o),this.T(s),this._$AH=r}}_$AC(e){let o=Sa.get(e.strings);return o===void 0&&Sa.set(e.strings,o=new Je(e)),o}k(e){gi(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,i,a=0;for(let r of e)a===o.length?o.push(i=new t(this.O(Ge()),this.O(Ge()),this,this.options)):i=o[a],i._$AI(r),a++;a<o.length&&(this._$AR(i&&i._$AB.nextSibling,a),o.length=a)}_$AR(e=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);e!==this._$AB;){let i=Ca(e).nextSibling;Ca(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},de=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,i,a,r){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=o,this._$AM=a,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(e,o=this,i,a){let r=this.strings,s=!1;if(r===void 0)e=he(this,e,o,0),s=!Ze(e)||e!==this._$AH&&e!==W,s&&(this._$AH=e);else{let l=e,u,h;for(e=r[0],u=0;u<r.length-1;u++)h=he(this,l[i+u],o,u),h===W&&(h=this._$AH[u]),s||=!Ze(h)||h!==this._$AH[u],h===_?e=_:e!==_&&(e+=(h??"")+r[u+1]),this._$AH[u]=h}s&&!a&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Fo=class extends de{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},_o=class extends de{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},Do=class extends de{constructor(e,o,i,a,r){super(e,o,i,a,r),this.type=5}_$AI(e,o=this){if((e=he(this,e,o,0)??_)===W)return;let i=this._$AH,a=e===_&&i!==_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==_&&(i===_||a);a&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ro=class{constructor(e,o,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){he(this,e)}},Ta={M:mi,P:Ot,A:fi,C:1,L:Ra,R:zo,D:$a,V:he,I:Ae,H:de,N:_o,U:Do,B:Fo,F:Ro},Cn=pi.litHtmlPolyfillSupport;Cn?.(Je,Ae),(pi.litHtmlVersions??=[]).push("3.3.3");Oa=(t,e,o)=>{let i=o?.renderBefore??e,a=i._$litPart$;if(a===void 0){let r=o?.renderBefore??null;i._$litPart$=a=new Ae(e.insertBefore(Ge(),r),r,void 0,o??{})}return a._$AI(t),a}});var bi,Ht,xn,Ma=d(()=>{Ye();Ye();gt();gt();bi=globalThis,Ht=class extends Tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oa(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};Ht._$litElement$=!0,Ht.finalized=!0,bi.litElementHydrateSupport?.({LitElement:Ht});xn=bi.litElementPolyfillSupport;xn?.({LitElement:Ht});(bi.litElementVersions??=[]).push("4.2.2")});var Ba=d(()=>{});var k=d(()=>{Ye();gt();Ma();Ba()});var R,Pa=d(()=>{R=t=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)}});function c(t){return(e,o)=>typeof o=="object"?Ln(t,e,o):((i,a,r)=>{let s=a.hasOwnProperty(r);return a.constructor.createProperty(r,i),s?Object.getOwnPropertyDescriptor(a,r):void 0})(t,e,o)}var En,Ln,wi=d(()=>{Ye();En={attribute:!0,type:String,converter:Xe,reflect:!1,hasChanged:So},Ln=(t=En,e,o)=>{let{kind:i,metadata:a}=o,r=globalThis.litPropertyMetadata.get(a);if(r===void 0&&globalThis.litPropertyMetadata.set(a,r=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(o.name,t),i==="accessor"){let{name:s}=o;return{set(l){let u=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,u,t,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,t,l),l}}}if(i==="setter"){let{name:s}=o;return function(l){let u=this[s];e.call(this,l),this.requestUpdate(s,u,t,!0,l)}}throw Error("Unsupported decorator location: "+i)}});function N(t){return c({...t,state:!0,attribute:!1})}var Va=d(()=>{wi();});var Ia=d(()=>{});var pe,ke=d(()=>{pe=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o)});function $(t,e){return(o,i,a)=>{let r=s=>s.renderRoot?.querySelector(t)??null;if(e){let{get:s,set:l}=typeof i=="object"?o:a??(()=>{let u=Symbol();return{get(){return this[u]},set(h){this[u]=h}}})();return pe(o,i,{get(){let u=s.call(this);return u===void 0&&(u=r(this),(u!==null||this.hasUpdated)&&l.call(this,u)),u}})}return pe(o,i,{get(){return r(this)}})}}var qa=d(()=>{ke();});var Na=d(()=>{ke();});var Ua=d(()=>{ke();});var Ha=d(()=>{ke();});var Wa=d(()=>{ke();});var J=d(()=>{Pa();wi();Va();Ia();qa();Na();Ua();Ha();Wa()});function Sn(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ja(t){let{property:e,value:o,element:i}=t;if(o){let a=i.getAttribute("style")||"";a&&(a.match(kn)||(a+=";"),a+=" ");let r=`${e}: ${o}`;return a.includes(r)?void 0:`${a}${r};`}return null}var An,kn,To,H,Q=d(()=>{T();k();k();J();An=L`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden],
  :host([hidden]) {
    display: none !important;
  }
`,kn=/;\s+$/;H=class extends Ht{constructor(){super(),pa(this,To,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,o)=>{if(this.internals?.states)try{o?this.internals.states.add(e):this.internals.states.delete(e)}catch(i){if(String(i).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw i}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,o]of t.elementProperties)o.default==="inherit"&&o.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${o.initial}`,!0)}static get styles(){let t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[An,...t]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))})}attributeChangedCallback(t,e,o){da(this,To)||(this.constructor.elementProperties.forEach((i,a)=>{i.reflect&&this[a]!=null&&this.initialReflectedProperties.set(a,this[a])}),ma(this,To,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(e){if(this.didSSR&&!this.hasUpdated){let o=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});o.error=e,this.dispatchEvent(o)}throw e}}setStyle(t,e){if(!this.style){let o=ja({property:Sn(t),value:e,element:this});o&&this.setAttribute("style",o);return}this.style[t]=e}setStyleProperty(t,e){if(!this.style){let o=ja({property:t,value:e,element:this});o&&this.setAttribute("style",o);return}this.style.setProperty(t,e)}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};To=new WeakMap;n([c()],H.prototype,"dir",2);n([c()],H.prototype,"lang",2);n([c({type:Boolean,reflect:!0,attribute:"did-ssr"})],H.prototype,"didSSR",2)});var $n,V,nt=d(()=>{Rt();Q();T();k();J();$n=()=>({observedAttributes:["custom-error"],checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}),V=class extends H{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Eo))},this.handleInteraction=t=>{let e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},"addEventListener"in this&&this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[$n()]}static get observedAttributes(){let t=new Set(super.observedAttributes||[]);for(let e of this.validators)if(e.observedAttributes)for(let o of e.observedAttributes)t.add(o);return[...t]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener?.(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(!!1&&t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")||t.has("defaultValue")){let e=this.value;this.updateFormValue(e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!!1&&!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),super.willUpdate(t),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(t){if(Array.isArray(t)){if(this.name){let e=new FormData;for(let o of t)e.append(this.name,o);this.setValue(e,e)}}else this.setValue(t,t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(t){t?this.setAttribute("form",t):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){let e=t[0],o=t[1],i=t[2];i||(i=this.validationTarget),this.internals.setValidity(e,o,i||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let t=!!this.required,e=this.internals.validity.valid,o=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&o),this.customStates.set("user-valid",e&&o)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}):(this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity())}setValue(...t){let[e,o]=t;this.internals.setFormValue(e,o)}get allValidators(){let t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let t=this.allValidators;if(!t?.length)return;let e={customError:!!this.customError},o=this.validationTarget||this.input||void 0,i="";for(let a of t){let{isValid:r,message:s,invalidKeys:l}=a.checkValidity(this);r||(i||(i=s),l?.length>=0&&l.forEach(u=>e[u]=!0))}i||(i=this.validationMessage),this.setValidity(e,i,o)}};V.formAssociated=!0;n([c({reflect:!0})],V.prototype,"name",2);n([c({type:Boolean})],V.prototype,"disabled",2);n([c({state:!0,attribute:!1})],V.prototype,"valueHasChanged",2);n([c({state:!0,attribute:!1})],V.prototype,"hasInteracted",2);n([c({attribute:"custom-error",reflect:!0})],V.prototype,"customError",2);n([c({attribute:!1,state:!0,type:Object})],V.prototype,"validity",1)});function it(t,e){e in Xa&&!Ya.has(`${t}:${e}`)&&(Ya.add(`${t}:${e}`),console.warn(`[${t}] size="${e}" is deprecated. Use size="${Xa[e]}" instead. The long-form value will be removed in the next major version.`))}var Xa,Ya,at=d(()=>{Xa={small:"s",medium:"m",large:"l"},Ya=new Set});var dt,lt=d(()=>{dt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{let i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1}):!1}hasNamedSlot(t){return this.host.querySelector?.(`:scope > [slot="${t}"]`)!==null}test(t,e){return e&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[e]:t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){let t=this.host.shadowRoot;t&&"addEventListener"in t&&t.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){let t=this.host.shadowRoot;t&&"removeEventListener"in t&&t.removeEventListener("slotchange",this.handleSlotChange)}}});var rt,st=d(()=>{k();rt=L`
  :host([size='xs']) {
    font-size: var(--wa-font-size-xs);
  }

  :host([size='s']),
  :host([size='small']) {
    font-size: var(--wa-font-size-s);
  }

  :host([size='m']),
  :host([size='medium']) {
    font-size: var(--wa-font-size-m);
  }

  :host([size='l']),
  :host([size='large']) {
    font-size: var(--wa-font-size-l);
  }

  :host([size='xl']) {
    font-size: var(--wa-font-size-xl);
  }
`});var Ka,Qe=d(()=>{k();Ka=L`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity, transform;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    transform-origin: center;
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));

    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-form-control-border-radius));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-form-control-border-radius));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-form-control-border-radius));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-form-control-border-radius));
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
  }

  /* Hover and active transforms */
  .button:not(.disabled):not(.loading) {
    @media (hover: hover) {
      &:hover {
        transform: var(--wa-button-transform-hover);
      }
    }
    &:active {
      transform: var(--wa-button-transform-active);
    }

    @media (prefers-reduced-motion: reduce) {
      &:hover,
      &:active {
        transform: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  /* Icon buttons with a caret need to grow to fit both the icon and the caret */
  .button.is-icon-button.caret {
    width: auto;
    aspect-ratio: auto;
    min-width: var(--wa-form-control-height);
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-border-radius-pill));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-border-radius-pill));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-border-radius-pill));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-border-radius-pill));
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
    justify-content: center;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      /* Hidden with opacity, not visibility, so the label stays in the accessibility tree */
      opacity: 0;

      /* Unlike visibility: hidden, opacity leaves the content clickable */
      pointer-events: none;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }
`});var Oo,Se=d(()=>{k();Oo=L`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`});function S(t,e){let o={waitUntilFirstUpdate:!1,...e};return(i,a)=>{let{update:r}=i,s=Array.isArray(t)?t:[t];i.update=function(l){s.forEach(u=>{let h=u;if(l.has(h)){let p=l.get(h),m=this[h];p!==m&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[a](p,m)}}),r.call(this,l)}}}var j=d(()=>{});function me(...t){t.map(e=>{let o=e.$code.toLowerCase();$e.has(o)?$e.set(o,Object.assign(Object.assign({},$e.get(o)),e)):$e.set(o,e),Mt||(Mt=e)}),Za()}function Za(){Ga&&(Ci=document.documentElement.dir||"ltr",xi=document.documentElement.lang||navigator.language),[...yi.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var yi,$e,Mt,Ci,xi,Ga,Mo,Bo=d(()=>{yi=new Set,$e=new Map,Ci="ltr",xi="en",Ga=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Ga){let t=new MutationObserver(Za);Ci=document.documentElement.dir||"ltr",xi=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}Mo=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){yi.add(this.host)}hostDisconnected(){yi.delete(this.host)}dir(){return`${this.host.dir||Ci}`.toLowerCase()}lang(){let e=`${this.host.lang||xi}`.toLowerCase().replace(/_/g,"-");try{return new Intl.Locale(e),e}catch{return Mt?Mt.$code.toLowerCase():"en"}}getTranslationData(e){var o,i;let a;try{a=new Intl.Locale(e.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let r=a.language.toLowerCase(),s=(i=(o=a.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",l=$e.get(`${r}-${s}`),u=$e.get(r);return{locale:a,language:r,region:s,primary:l,secondary:u}}exists(e,o){var i;let{primary:a,secondary:r}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(a&&a[e]||r&&r[e]||o.includeFallback&&Mt&&Mt[e])}term(e,...o){let{primary:i,secondary:a}=this.getTranslationData(this.lang()),r;if(i&&i[e])r=i[e];else if(a&&a[e])r=a[e];else if(Mt&&Mt[e])r=Mt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...o):r}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}}});var Ja,Qa,Bt=d(()=>{Bo();Ja={$code:"en",$name:"English",$dir:"ltr",allTagsRemoved:"All tags removed",am:"AM",autosizeColumn:"Autosize column",captions:"Captions",carousel:"Carousel",chooseDate:"Choose date",chooseDecade:"Choose decade",chooseMonth:"Choose month",chooseTime:"Choose time",chooseYear:"Choose year",clearEntry:"Clear entry",clearFilter:"Clear filter",clearSort:"Clear sort",close:"Close",closeCalendar:"Close calendar",closeTimeInput:"Close time picker",collapseRow:"Collapse row",columnMenu:"Column options",columnMovedToPosition:(t,e,o)=>`${t} moved to position ${e} of ${o}`,columns:"Columns",compactPageXOfY:(t,e)=>`${t} of ${e}`,completed:"Completed",copied:"Copied",copy:"Copy",createOption:t=>`Create "${t}"`,currentlyPlaying:"currently playing",currentValue:"Current value",date:"Date",datePickerKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the calendar.",day:"Day",dayPeriod:"AM/PM",decrement:"Decrement",deselectAllRows:"Deselect all rows",disabled:"Disabled",dropFileHere:"Drop file here or click to browse",dropFilesHere:"Drop files here or click to browse",empty:"Empty",endDate:"End date",enterFullscreen:"Enter fullscreen",error:"Error",exitFullscreen:"Exit fullscreen",expandRow:"Expand row",filterByColumn:t=>`Filter by ${t}`,filterFrom:"From",filterMax:"Max",filterMin:"Min",filterTo:"To",firstPage:"First page",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hideColumn:"Hide column",hidePassword:"Hide password",hour:"Hour",incompleteDate:"Enter a valid date.",increment:"Increment",jumpBackwardX:t=>`Jump back ${t} pages`,jumpForwardX:t=>`Jump forward ${t} pages`,lastPage:"Last page",loading:"Loading",locked:"Locked",minute:"Minute",month:"Month",moreOptions:"More Options",mute:"Mute",nextDecade:"Next decade",nextMonth:"Next month",nextPage:"Next page",nextSlide:"Next slide",nextVideo:"Next Video",nextYear:"Next year",noData:"No data",noOptions:"No options",noResults:"No matching results",notCompleted:"Not completed",now:"Now",numCharacters:t=>t===1?"1 character":`${t} characters`,numCharactersRemaining:t=>t===1?"1 character remaining":`${t} characters remaining`,numOptionsAvailable:t=>t===0?"No options available":t===1?"1 option available":`${t} options available`,numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,numRowsCopied:t=>t===1?"1 row copied":`${t} rows copied`,numRowsSelected:t=>t===1?"1 row selected":`${t} rows selected`,optionPosition:(t,e,o)=>`${t}, ${e} of ${o}`,optionsLoadError:"Options could not be loaded",pageXOfY:(t,e)=>`Page ${t} of ${e}`,pagination:"Pagination",pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",pinLeft:"Pin left",pinRight:"Pin right",play:"Play",playAnimation:"Play animation",playbackSpeed:"Playback speed",playlist:"Playlist",pm:"PM",previousDecade:"Previous decade",previousMonth:"Previous month",previousPage:"Previous page",previousSlide:"Previous slide",previousVideo:"Previous video",previousYear:"Previous year",progress:"Progress",rangeTooLong:t=>t===1?"Select a range no longer than 1 day":`Select a range no longer than ${t} days`,rangeTooShort:t=>t===1?"Select a range at least 1 day long":`Select a range at least ${t} days long`,readonly:"Read-only",remove:"Remove",resetColumns:"Reset columns",resize:"Resize",resizeColumn:"Resize column",rowsPerPage:"Rows per page",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",search:"Search",second:"Second",seek:"Seek",seekProgress:(t,e)=>`${t} of ${e}`,selectAColorFromTheScreen:"Select a color from the screen",selectAllRows:"Select all rows",selected:"Selected",selectedDateLabel:t=>`Selected: ${t}`,selectedRangeLabel:t=>`Selected range: ${t}`,selectGroup:"Select group",selectionCleared:"Selection cleared",selectRow:"Select row",showingNofMRows:(t,e)=>`Showing ${t} of ${e} rows`,showingXtoYofZ:(t,e,o)=>`${t}\u2013${e} of ${o}`,showPassword:"Show password",slideNum:t=>`Slide ${t}`,sortAscending:"Sort ascending",sortColumn:"Sort column",sortDescending:"Sort descending",startDate:"Start date",steps:"Steps",stepXOfY:(t,e)=>`Step ${t} of ${e}`,tagAdded:t=>`${t} added`,tagAlreadyAdded:t=>`${t} is already added`,tagInputKeyboardHelp:"Press Backspace or Delete to remove this tag.",tagRemoved:t=>`${t} removed`,time:"Time",timeInputKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the time picker.",today:"Today",toggleColorFormat:"Toggle color format",tooFewTags:t=>t===1?"Add at least 1 tag":`Add at least ${t} tags`,tooManyTags:t=>t===1?"Add no more than 1 tag":`Add no more than ${t} tags`,unmute:"Unmute",unpin:"Unpin",unpinColumn:"Unpin column",videoPlayer:"Video player",volume:"Volume",year:"Year",zoomIn:"Zoom in",zoomOut:"Zoom out"};me(Ja);Qa=Ja});var X,G=d(()=>{Bt();Bo();Bo();X=class extends Mo{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||"en":super.lang()}};me(Qa)});var ct,Wt,Lt,to=d(()=>{ct={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Wt=t=>(...e)=>({_$litDirective$:t,values:e}),Lt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}});var O,tr=d(()=>{gt();to();O=Wt(class extends Lt{constructor(t){if(super(t),t.type!==ct.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let o=t.element.classList;for(let i of this.st)i in e||(o.remove(i),this.st.delete(i));for(let i in e){let a=!!e[i];a===this.st.has(i)||this.nt?.has(i)||(a?(o.add(i),this.st.add(i)):(o.remove(i),this.st.delete(i)))}return W}})});var Pt=d(()=>{tr()});var Y,er=d(()=>{gt();Y=t=>t??_});var Po=d(()=>{er()});var ir,zn,Ei,or,Li,Vo,mu,fu,ar=d(()=>{gt();ir=Symbol.for(""),zn=t=>{if(t?.r===ir)return t?._$litStatic$},Ei=(t,...e)=>({_$litStatic$:e.reduce((o,i,a)=>o+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[a+1],t[0]),r:ir}),or=new Map,Li=t=>(e,...o)=>{let i=o.length,a,r,s=[],l=[],u,h=0,p=!1;for(;h<i;){for(u=e[h];h<i&&(r=o[h],(a=zn(r))!==void 0);)u+=a+e[++h],p=!0;h!==i&&l.push(r),s.push(u),h++}if(h===i&&s.push(e[i]),p){let m=s.join("$$lit$$");(e=or.get(m))===void 0&&(s.raw=s,or.set(m,e=s)),o=l}return t(e,...o)},Vo=Li(w),mu=Li(Fa),fu=Li(_a)});var rr=d(()=>{ar()});var x,Io=d(()=>{ne();nt();Rt();at();lt();st();Qe();Se();j();G();T();J();Pt();Po();rr();x=class extends V{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new dt(this,"[default]","start","end"),this.localize=new X(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="m",this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,xo()]}handleSizeChange(){it(this.localName,this.size)}constructLightDOMButton(){let t=document.createElement("button");for(let e of this.attributes)e.name!=="style"&&t.setAttribute(e.name,e.value);return t.type=this.type,t.style.position="absolute !important",t.style.width="0 !important",t.style.height="0 !important",t.style.clipPath="inset(50%) !important",t.style.overflow="hidden !important",t.style.whiteSpace="nowrap !important",this.name&&(t.name=this.name),t.value=this.value||"",t}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset"||!this.getForm())return;let o=this.constructLightDOMButton();this.parentElement?.append(o),o.click(),o.remove()}handleInvalid(){this.dispatchEvent(new Eo)}handleLabelSlotChange(){let t=this.labelSlot.assignedNodes({flatten:!0}),e=!1,o=!1,i=!1,a=!1;[...t].forEach(r=>{if(r.nodeType===Node.ELEMENT_NODE){let s=r;s.localName==="wa-icon"?(o=!0,e||(e=s.label!==void 0)):a=!0}else r.nodeType===Node.TEXT_NODE&&(r.textContent?.trim()||"").length>0&&(i=!0)}),this.isIconButton=o&&!i&&!a,this.customStates.set("icon-button",this.isIconButton),this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set("link",this.isLink())}handleLoadingChange(){this.customStates.set("loading",this.loading)}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=this.isLink(),e=t?Ei`a`:Ei`button`;return Vo`
      <${e}
        part="base button"
        class=${O({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start","withStart"),"has-end":this.hasSlotController.test("end","withEnd"),"is-icon-button":this.isIconButton})}
        ?disabled=${Y(t?void 0:this.disabled)}
        type=${Y(t?void 0:this.type)}
        title=${this.title}
        name=${Y(t?void 0:this.name)}
        value=${Y(t?void 0:this.value)}
        href=${Y(t?this.href:void 0)}
        target=${Y(t?this.target:void 0)}
        download=${Y(t?this.download:void 0)}
        rel=${Y(t&&this.rel?this.rel:void 0)}
        role=${Y(t?void 0:"button")}
        aria-disabled=${Y(t&&this.disabled?"true":void 0)}
        aria-busy=${this.loading?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Vo`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?Vo`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};x.shadowRootOptions={...V.shadowRootOptions,delegatesFocus:!0};x.css=[Ka,Oo,rt];n([$(".button")],x.prototype,"button",2);n([$("slot:not([name])")],x.prototype,"labelSlot",2);n([N()],x.prototype,"invalid",2);n([N()],x.prototype,"isIconButton",2);n([c()],x.prototype,"title",2);n([c({reflect:!0})],x.prototype,"variant",2);n([c({reflect:!0})],x.prototype,"appearance",2);n([c({reflect:!0})],x.prototype,"size",2);n([S("size")],x.prototype,"handleSizeChange",1);n([c({attribute:"with-caret",type:Boolean,reflect:!0})],x.prototype,"withCaret",2);n([c({attribute:"with-start",type:Boolean})],x.prototype,"withStart",2);n([c({attribute:"with-end",type:Boolean})],x.prototype,"withEnd",2);n([c({type:Boolean})],x.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],x.prototype,"loading",2);n([c({type:Boolean,reflect:!0})],x.prototype,"pill",2);n([c()],x.prototype,"type",2);n([c({reflect:!0})],x.prototype,"name",2);n([c({reflect:!0})],x.prototype,"value",2);n([c({reflect:!0})],x.prototype,"href",2);n([c()],x.prototype,"target",2);n([c()],x.prototype,"rel",2);n([c()],x.prototype,"download",2);n([c({attribute:"formaction"})],x.prototype,"formAction",2);n([c({attribute:"formenctype"})],x.prototype,"formEnctype",2);n([c({attribute:"formmethod"})],x.prototype,"formMethod",2);n([c({attribute:"formnovalidate",type:Boolean})],x.prototype,"formNoValidate",2);n([c({attribute:"formtarget"})],x.prototype,"formTarget",2);n([S("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);n([S("href")],x.prototype,"handleHrefChange",1);n([S("loading",{waitUntilFirstUpdate:!0})],x.prototype,"handleLoadingChange",1);x=n([R("wa-button")],x);x.disableWarning?.("change-in-update")});var sr,eo=d(()=>{k();sr=L`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;
    --size: 1em;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: var(--size);
    height: var(--size);
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) / 2);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
    r: var(--radius);
    fill: none;
    stroke-width: var(--track-width);
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: calc(0.597 * var(--circumference)), calc(0.796 * var(--circumference));
    stroke-dashoffset: calc(-0.04 * var(--circumference));
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: calc(0.008 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.278 * var(--circumference));
    }
    100% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.987 * var(--circumference));
    }
  }
`});var Ai,qo=d(()=>{eo();Q();G();T();k();J();Ai=class extends H{constructor(){super(...arguments),this.localize=new X(this)}render(){return w`
      <svg
        part="base spinner"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" />
        <circle class="indicator" />
      </svg>
    `}};Ai.css=sr;Ai=n([R("wa-spinner")],Ai)});var nr,ze=d(()=>{nr=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}}});var lr,Fe=d(()=>{lr=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}}});var cr,_e=d(()=>{k();cr=L`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* #region Canvas — the box the icon is centered within (mirrors Font Awesome's icon canvas). Orthogonal to font-size. */

  /* Fixed width (default): 1.25em × 1em (20 × 16px) */
  :host(:not([canvas])),
  :host([canvas='fixed']) {
    width: 1.25em;
    height: 1em;
    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Auto: hug the icon's width. \`auto-width\` is the deprecated alias for canvas="auto". */
  :host([canvas='auto']),
  :host([auto-width]:not([canvas])) {
    width: auto;
    height: 1em;
  }

  /* Square: 1.25em × 1.25em (20 × 20px) */
  :host([canvas='square']) {
    width: 1.25em;
    height: 1.25em;
    min-width: 1.25em;
    min-height: 1.25em;
  }

  /* Roomy: 1.5em × 1.5em (24 × 24px) */
  :host([canvas='roomy']) {
    width: 1.5em;
    height: 1.5em;
    min-width: 1.5em;
    min-height: 1.5em;
  }

  /* #endregion */

  svg {
    /* NOTE: Avoid setting fill here. A stylesheet rule beats SVG presentation attributes, breaking stroke-based
       libraries like Lucide (fill="none" stroke="currentColor") and attribute-based mutators (issue #1733). The default
       library applies fill="currentColor" in its mutator instead. */
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* #region Animations — ported from Font Awesome 7.3 (--fa-* props mapped to wa-icon's --* names) */

  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.5s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip-360']) {
    animation-name: flip-360;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.75s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  /* spin-reverse is FA's reverse modifier expressed as a standalone value; reverse any spin via --animation-direction: reverse */
  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap']) {
    animation-name: spin-snap;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-4']) {
    animation-name: spin-snap-4;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2.4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-8']) {
    animation-name: spin-snap-8;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='buzz']) {
    animation-name: buzz;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.6s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='wag']) {
    animation-name: wag;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: bottom center;
  }

  :host([animation='float']) {
    animation-name: float;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
    will-change: transform;
  }

  :host([animation='swing']) {
    animation-name: swing;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: top center;
  }

  :host([animation='jello']) {
    animation-name: jello;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='flip-360']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']),
    :host([animation='spin-snap']),
    :host([animation='spin-snap-4']),
    :host([animation='spin-snap-8']),
    :host([animation='buzz']),
    :host([animation='wag']),
    :host([animation='float']),
    :host([animation='swing']),
    :host([animation='jello']) {
      animation: none !important;
      transition: none !important;
    }
  }

  /* #endregion */

  /* #region Keyframes — ported verbatim from Font Awesome 7.3 */

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    45% {
      transform: scale(calc(1.22 * var(--beat-scale, 1.22)));
    }
    65% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    90% {
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
      /* No fallback by design (ported from FA 7.3): the first segment uses the user's --animation-timing or the CSS
         initial ease, while the explicit cubic-beziers on later stops drive the bounce physics. */
      animation-timing-function: var(--animation-timing);
    }
    14% {
      transform: scale(var(--bounce-start-scale-x, 1.06), var(--bounce-start-scale-y, 0.94))
        translateY(var(--bounce-anticipation, 3px));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    32% {
      transform: scale(var(--bounce-jump-scale-x, 0.94), var(--bounce-jump-scale-y, 1.12))
        translateY(calc(-1 * var(--bounce-height, 0.5em)));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    52% {
      transform: scale(1, 1) translateY(calc(-1 * var(--bounce-height, 0.5em) * 1.1));
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    70% {
      transform: scale(var(--bounce-land-scale-x, 1.06), var(--bounce-land-scale-y, 0.92)) translateY(0);
      animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
    }
    85% {
      transform: scale(0.98, 1.04) translateY(calc(-2px * var(--bounce-rebound, 1)));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes fade {
    0% {
      opacity: 1;
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    40% {
      opacity: var(--fade-opacity, 0.4);
      transform: scale(0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes beat-fade {
    0% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    25% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    45% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    65% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
  }

  @keyframes flip {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    35% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: linear;
    }
    65% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.5));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    92% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes flip-360 {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    50% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    80% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(35deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    20% {
      transform: rotate(-22deg) translateX(-1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    35% {
      transform: rotate(15deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    50% {
      transform: rotate(-9deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    65% {
      transform: rotate(5deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    78% {
      transform: rotate(-3deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    90% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    12% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    16.67% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    28.67% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    33.33% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    45.33% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    62% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    66.67% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    78.67% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    83.33% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    95.33% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-4 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    15% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    40% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    65% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    90% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-8 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    9% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    12.5% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    21.5% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    34% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    37.5% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    46.5% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    59% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    62.5% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    71.5% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    84% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    87.5% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    96.5% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes buzz {
    0% {
      transform: translateX(0) rotate(0deg);
      animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
    }
    5% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.5deg);
    }
    10% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.5deg);
    }
    15% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.3deg);
    }
    20% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.3deg);
    }
    25% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.7)) rotate(0.2deg);
    }
    30% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
    }
    35% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.4)) rotate(0.1deg);
    }
    40% {
      transform: translateX(0) rotate(0deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

  @keyframes wag {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    12% {
      transform: rotate(var(--wag-angle, 12deg));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    24% {
      transform: rotate(2deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    36% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.85));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    48% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    58% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.6));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    15% {
      transform: translateY(calc(-0.4 * var(--float-height, 6px))) translateX(var(--float-drift, 1px))
        rotate(var(--float-tilt, 1deg)) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    35% {
      transform: translateY(calc(-1 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-stretch-x, 0.98), var(--float-stretch-y, 1.03));
      animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
    }
    50% {
      transform: translateY(calc(-0.92 * var(--float-height, 6px))) translateX(calc(-0.5 * var(--float-drift, 1px)))
        rotate(calc(-0.5 * var(--float-tilt, 1deg))) scale(0.995, 1.01);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    70% {
      transform: translateY(calc(-0.3 * var(--float-height, 6px))) translateX(calc(-1 * var(--float-drift, 1px)))
        rotate(calc(-1 * var(--float-tilt, 1deg))) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    90% {
      transform: translateY(calc(0.05 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
    }
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(var(--swing-angle, 22deg));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    18% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.85));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    28% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.65));
      animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
    }
    38% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.45));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    56% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.1));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    64% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes jello {
    0% {
      transform: scale(1, 1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    12% {
      transform: scale(var(--jello-scale-x, 1.15), calc(2 - var(--jello-scale-x, 1.15)));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    24% {
      transform: scale(calc(2 - var(--jello-scale-y, 1.12)), var(--jello-scale-y, 1.12));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    36% {
      transform: scale(
        calc(1 + (var(--jello-scale-x, 1.15) - 1) * 0.5),
        calc(2 - (1 + (var(--jello-scale-x, 1.15) - 1) * 0.5))
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: scale(
        calc(2 - (1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)),
        calc(1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    58% {
      transform: scale(1.02, 0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  /* #endregion */
`});var Qu,ur,hr,Fn,dr,ki=d(()=>{gt();({I:Qu}=Ta),ur=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e,hr=t=>t.strings===void 0,Fn={},dr=(t,e=Fn)=>t._$AH=e});var pr=d(()=>{ki()});var oo,No,Si,$i,K,io=d(()=>{ze();Fe();_e();j();Q();se();T();k();J();pr();oo=Symbol(),No=Symbol(),$i=new Map,K=class extends H{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(t,e)=>{let o;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=w`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;let i=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(i,this),this.svg}try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?oo:No}catch{return No}try{let i=document.createElement("div");i.innerHTML=await o.text();let a=i.firstElementChild;if(a?.tagName?.toLowerCase()!=="svg")return oo;Si||(Si=new DOMParser);let s=Si.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):oo}catch{return oo}}}connectedCallback(){super.connectedCallback(),si(this)}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ni(this)}async getIconSource(){let t=He(this.library),e=this.family||li();if(this.name&&t){let o=this.canvas==="auto"||this.autoWidth,i;try{i=await t.resolver(this.name,e,this.variant,o)}catch{i=void 0}return{url:i,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){let{url:t,fromLibrary:e}=await this.getIconSource(),o=e?He(this.library):void 0;if(!t){this.svg=null;return}let i=$i.get(t);i||(i=this.resolveIcon(t,o),$i.set(t,i));let a=await i;a===No&&$i.delete(t);let r=await this.getIconSource();if(t===r.url){if(ur(a)){this.svg=a;return}switch(a){case No:case oo:this.svg=null,this.dispatchEvent(new nr);break;default:this.svg=a.cloneNode(!0),o?.mutator?.(this.svg,this),this.dispatchEvent(new lr)}}}willUpdate(t){return this.style||this.setStyleProperty("--rotate-angle",`${this.rotate}deg`),super.willUpdate(t)}updated(t){super.updated(t);let e=He(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);let o=this.shadowRoot?.querySelector("svg");o&&e?.mutator?.(o,this)}render(){return this.hasUpdated?this.svg:w`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};K.css=cr;n([N()],K.prototype,"svg",2);n([c({reflect:!0})],K.prototype,"name",2);n([c({reflect:!0})],K.prototype,"family",2);n([c({reflect:!0})],K.prototype,"variant",2);n([c({reflect:!0})],K.prototype,"canvas",2);n([c({attribute:"auto-width",type:Boolean,reflect:!0})],K.prototype,"autoWidth",2);n([c({attribute:"swap-opacity",type:Boolean,reflect:!0})],K.prototype,"swapOpacity",2);n([c()],K.prototype,"src",2);n([c()],K.prototype,"label",2);n([c({reflect:!0})],K.prototype,"library",2);n([c({type:Number,reflect:!0})],K.prototype,"rotate",2);n([c({type:String,reflect:!0})],K.prototype,"flip",2);n([c({type:String,reflect:!0})],K.prototype,"animation",2);n([S("label")],K.prototype,"handleLabelChange",1);n([S(["family","name","library","variant","src","autoWidth","canvas","swapOpacity"],{waitUntilFirstUpdate:!0})],K.prototype,"setIcon",1);K=n([R("wa-icon")],K)});var mr={};Ut(mr,{default:()=>x});var fr=d(()=>{Io();qo();eo();ne();nt();Rt();at();lt();st();Qe();Se();io();ze();Fe();_e();j();Q();G();Bt();se();ae();ie();re();T();});var gr,zi=d(()=>{k();gr=L`
  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .label {
    padding: 0;
  }

  .radio-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0; /* Radios handle their own spacing */
  }

  /* Horizontal */
  :host([orientation='horizontal']) [part~='form-control-input'] {
    flex-direction: row;
  }

  /* Help text */
  [part~='hint'] {
    margin-block-start: 0.5em;
  }
`});var Uo,ao=d(()=>{Uo=(t={})=>{let{validationElement:e,validationProperty:o}=t;e||typeof document<"u"&&"createElement"in document&&(e=Object.assign(document.createElement("input"),{required:!0})),o||(o="value");let i={observedAttributes:["required"],message:e?.validationMessage,checkValidity(a){let r={message:"",isValid:!0,invalidKeys:[]};return(a.required??a.hasAttribute("required"))&&!a[o]&&(r.message=typeof i.message=="function"?i.message(a):i.message||"",r.isValid=!1,r.invalidKeys.push("valueMissing")),r}};return i}});var At,kt=d(()=>{k();At=L`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);

    &:not(.has-slotted, .has-hint, .has-count) {
      display: none;
    }
  }
`});var vr,br=d(()=>{vr="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"});var wr,yr=d(()=>{br();wr=(t=21)=>{let e="",o=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=vr[o[t]&63];return e}});function ut(t,e,o){let i=a=>Object.is(a,-0)?0:a;return t<e?i(e):t>o?i(o):i(t)}function Ho(t=""){return`${t}${wr()}`}var fe=d(()=>{yr();});var U,Cr=d(()=>{zi();ao();kt();fe();nt();at();lt();st();j();T();k();J();Pt();U=class extends V{constructor(){super(),this.hasSlotController=new dt(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{let e=t.target.closest("wa-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;let o=this.value;this.value=e.value,e.checked=!0;let i=this.getAllRadios();for(let a of i)e!==a&&(a.checked=!1,a.setAttribute("tabindex","-1"));this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){let t=[Uo({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:Ho("__wa-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){typeof t=="number"&&(t=String(t)),this.valueHasChanged=!0,this._value=t}handleSizeChange(){it(this.localName,this.size)}get validationTarget(){if(!1)return;let t=this.querySelector(":is(wa-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("size")||t.has("value")||t.has("defaultValue"))&&this.syncRadioElements()}formResetCallback(...t){this._value=null,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){let t=this.getAllRadios();if(t.forEach((e,o)=>{this.size&&e.setAttribute("size",this.size),e.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),e.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),e.toggleAttribute("data-wa-radio-first",o===0),e.toggleAttribute("data-wa-radio-inner",o!==0&&o!==t.length-1),e.toggleAttribute("data-wa-radio-last",o===t.length-1),e.forceDisabled=this.disabled}),await Promise.all(t.map(async e=>{await e.updateComplete,!e.disabled&&e.value===this.value?e.checked=!0:e.checked=!1})),this.disabled)t.forEach(e=>{e.tabIndex=-1});else{let e=t.filter(i=>!i.disabled),o=e.find(i=>i.checked);e.length>0&&(o?e.forEach(i=>{i.tabIndex=i.checked?0:-1}):e.forEach((i,a)=>{i.tabIndex=a===0?0:-1})),t.filter(i=>i.disabled).forEach(i=>{i.tabIndex=-1})}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;let e=this.getAllRadios().filter(l=>!l.disabled);if(e.length<=0)return;t.preventDefault();let o=this.value,i=e.find(l=>l.checked)??e[0],a=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,r=e.indexOf(i)+a;r||(r=0),r<0&&(r=e.length-1),r>e.length-1&&(r=0);let s=e.some(l=>l.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(l=>{l.checked=!1,s||l.setAttribute("tabindex","-1")}),this.value=e[r].value,e[r].checked=!0,s?e[r].shadowRoot.querySelector("button").focus():(e[r].setAttribute("tabindex","0"),e[r].focus()),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}focus(t){if(this.disabled)return;let e=this.getAllRadios(),o=e.find(r=>r.checked),i=e.find(r=>!r.disabled),a=o||i;a&&a.focus(t)}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=this.label?!0:!!t,i=this.hint?!0:!!e;return w`
      <fieldset
        part="form-control"
        class=${O({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":o})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class=${O({label:!0,"has-label":o})}
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${O({"has-slotted":i})}
          aria-hidden=${i?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};U.css=[rt,At,gr];U.shadowRootOptions={...V.shadowRootOptions,delegatesFocus:!0};n([$("slot:not([name])")],U.prototype,"defaultSlot",2);n([c()],U.prototype,"label",2);n([c({attribute:"hint"})],U.prototype,"hint",2);n([c({reflect:!0})],U.prototype,"name",2);n([c({type:Boolean,reflect:!0})],U.prototype,"disabled",2);n([c({reflect:!0})],U.prototype,"orientation",2);n([N()],U.prototype,"value",1);n([c({attribute:"value",reflect:!0})],U.prototype,"defaultValue",2);n([c({reflect:!0})],U.prototype,"size",2);n([S("size")],U.prototype,"handleSizeChange",1);n([c({type:Boolean,reflect:!0})],U.prototype,"required",2);n([c({type:Boolean,attribute:"with-label"})],U.prototype,"withLabel",2);n([c({type:Boolean,attribute:"with-hint"})],U.prototype,"withHint",2);U=n([R("wa-radio-group")],U);U.disableWarning?.("change-in-update")});var xr,Fi=d(()=>{k();xr=L`
  :host {
    --checked-icon-color: var(--wa-form-control-activated-color);
    --checked-icon-scale: 0.7;

    color: var(--wa-form-control-value-color);
    display: inline-flex;
    flex-direction: row;
    align-items: top;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  :host(:not(:state(checked))) svg circle {
    opacity: 0;
  }

  [part~='label'] {
    display: inline;
  }

  [part~='hint'] {
    margin-block-start: 0.5em;
  }

  /* Default spacing for default appearance radios */
  :host([appearance='default']) {
    margin-block: 0.375em; /* Half of the original 0.75em gap on each side */
  }

  :host([appearance='default'][data-wa-radio-horizontal]) {
    margin-block: 0;
    margin-inline: 0.5em; /* Half of the original 1em gap on each side */
  }

  /* Remove margin from first/last items to prevent extra space */
  :host([appearance='default'][data-wa-radio-first]) {
    margin-block-start: 0;
    margin-inline-start: 0;
  }

  :host([appearance='default'][data-wa-radio-last]) {
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  /* Button appearance have no spacing, they get handled by the overlap margins below */
  :host([appearance='button']) {
    margin: 0;
    align-items: center;
    min-height: var(--wa-form-control-height);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
    border-radius: var(--wa-border-radius-m);
    padding: 0 var(--wa-form-control-padding-inline);
    transition:
      background-color var(--wa-transition-fast),
      border-color var(--wa-transition-fast);
  }

  /* Default appearance */
  :host([appearance='default']) {
    .control {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      border-color: var(--wa-form-control-border-color);
      border-radius: 50%;
      border-style: var(--wa-form-control-border-style);
      border-width: var(--wa-form-control-border-width);
      background-color: var(--wa-form-control-background-color);
      color: transparent;
      transition:
        background var(--wa-transition-normal),
        border-color var(--wa-transition-fast),
        box-shadow var(--wa-transition-fast),
        color var(--wa-transition-fast);
      transition-timing-function: var(--wa-transition-easing);

      margin-inline-end: 0.5em;
    }

    .checked-icon {
      display: flex;
      fill: currentColor;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      scale: var(--checked-icon-scale);
    }
  }

  /* Button appearance */
  :host([appearance='button']) {
    .control {
      display: none;
    }
  }

  /* Checked */
  :host(:state(checked)) .control {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-background-color);
  }

  /* Focus */
  :host(:focus-visible) .control {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host(:state(disabled)) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Horizontal grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-first]) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* Vertical grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-first]) {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }

  @media (hover: hover) {
    :host([appearance='button']:hover:not(:state(disabled), :state(checked))) {
      background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));
    }
  }

  :host([appearance='button']:focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([appearance='button']:state(checked)) {
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-color-brand-fill-quiet);
  }

  :host([appearance='button']:state(checked):focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Button overlap margins */
  :host([appearance='button'][data-wa-radio-horizontal]:not([data-wa-radio-first])) {
    margin-inline-start: calc(-1 * var(--wa-form-control-border-width));
  }

  :host([appearance='button'][data-wa-radio-vertical]:not([data-wa-radio-first])) {
    margin-block-start: calc(-1 * var(--wa-form-control-border-width));
  }

  /* Ensure interactive states are visible above adjacent buttons */
  :host([appearance='button']:hover),
  :host([appearance='button']:state(checked)) {
    position: relative;
    z-index: 1;
  }

  :host([appearance='button']:focus-visible) {
    z-index: 2;
  }
`});var vt,Er=d(()=>{Fi();kt();nt();at();st();j();T();k();J();vt=class extends V{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.appearance="default",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}handleSizeChange(){it(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){let e=this.disabled||this.forceDisabled;this.customStates.set("disabled",e),this.setAttribute("aria-disabled",e?"true":"false"),e?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return w`
      <span part="control" class="control">
        ${this.checked?w`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};vt.css=[At,rt,xr];n([N()],vt.prototype,"checked",2);n([N()],vt.prototype,"forceDisabled",2);n([c({reflect:!0})],vt.prototype,"value",2);n([c({reflect:!0})],vt.prototype,"appearance",2);n([c({reflect:!0})],vt.prototype,"size",2);n([S("size")],vt.prototype,"handleSizeChange",1);n([c({type:Boolean})],vt.prototype,"disabled",2);vt=n([R("wa-radio")],vt);vt.disableWarning?.("change-in-update")});var Lr={};Ut(Lr,{default:()=>U});var Ar=d(()=>{Cr();Er();Fi();zi();ao();kt();fe();nt();Rt();at();lt();st();io();ze();Fe();_e();j();Q();se();ae();ie();re();T();});var kr,_i=d(()=>{k();kr=L`
  :host {
    --tag-max-size: 10ch;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
  }

  /* Add ellipses to multi select options */
  :host wa-tag::part(content) {
    display: initial;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: var(--tag-max-size);
  }

  :host .disabled [part~='combobox'] {
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  :host .enabled:is(.open, :focus-within) [part~='combobox'] {
    outline-color: var(--wa-color-focus);
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;

    /* Pass through from select to the popup */
    --show-duration: inherit;
    --hide-duration: inherit;

    &::part(popup) {
      z-index: 900;
    }

    &[data-current-placement^='top']::part(popup) {
      transform-origin: bottom;
    }

    &[data-current-placement^='bottom']::part(popup) {
      transform-origin: top;
    }
  }

  /* Combobox */
  .combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    justify-content: start;

    min-height: var(--wa-form-control-height);

    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    color: var(--wa-form-control-value-color);
    cursor: pointer;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    overflow: hidden;
    padding: 0 var(--wa-form-control-padding-inline);
    position: relative;
    vertical-align: middle;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    /* Pills */
    :host([pill]) & {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .combobox {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  .display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    line-height: var(--wa-form-control-value-line-height);
    color: var(--wa-form-control-value-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
    }
  }

  /* Manage spacing when tags are present */
  :host([multiple]) {
    --_padding-with-tags: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));

    & .combobox:has(.tags wa-tag) {
      padding-block: var(--_padding-with-tags);
      padding-inline-start: var(--_padding-with-tags);
    }
  }

  /* Visually hide the display input when multiple is enabled */
  :host([multiple]) .combobox:has(.tags wa-tag) .display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .value-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    padding: 0;
    margin: 0;
  }

  .tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25em;

    /* Nested inside the box, so a step down from the box's radius */
    & wa-tag:not([pill]) {
      border-radius: var(--wa-border-radius-s);
    }

    .disabled & {
      cursor: not-allowed !important;
    }
  }

  /* Start and End */

  .start,
  .end {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  :host([multiple]) .combobox:has(.tags wa-tag) .start::slotted(*) {
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - var(--_padding-with-tags));
  }

  /* Clear button */
  [part~='clear-button'] {
    flex: 0 0 auto;
    display: inline-flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    inline-size: 1.5em;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: color var(--wa-transition-normal);
    cursor: pointer;
    /* The box is wider than the glyph, so overhang half that growth on each side. Keeps the glyph
       on the same trailing axis as the segmented-field pickers' clear buttons. */
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.125em);
    margin-inline-end: -0.125em;

    &:focus {
      outline: none;
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }
  }

  /* Expand icon */
  .expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
    transition: rotate var(--wa-transition-slow) var(--wa-transition-easing);
    rotate: 0deg;
    margin-inline-start: var(--wa-form-control-padding-inline);

    .open & {
      rotate: -180deg;
    }
  }

  /* Listbox */
  .listbox {
    display: block;
    position: relative;
    font: inherit;
    box-shadow: var(--wa-shadow-m);
    background: var(--wa-color-surface-raised);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    padding: 0.25em;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);

    &::slotted(wa-divider) {
      --spacing: 0.5em;
    }
  }

  /* Space options with half the listbox's padding */
  .listbox slot:not([name]) {
    display: flex;
    flex-direction: column;
    gap: 0.125em;
  }

  slot:not([name])::slotted(small) {
    display: block;
    font-size: var(--wa-font-size-smaller);
    font-weight: var(--wa-font-weight-semibold);
    color: var(--wa-color-text-quiet);
    padding-block: 0.5em;
    padding-inline: 2.25em;
  }
`});function _n(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}function Sr(t,e){let o=e.getBoundingClientRect();return t.clientX>=o.left&&t.clientX<=o.right&&t.clientY>=o.top&&t.clientY<=o.bottom}function Dn(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Rn(){let t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Wo(t){if(Di.add(t),!document.documentElement.classList.contains("wa-scroll-lock")){let e=Dn()+Rn(),o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),e<2&&(o=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",o),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${e}px`)}}function jo(t){Di.delete(t),Di.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function Ri(t,e,o="vertical",i="smooth"){let a=_n(t,e),r=a.top+e.scrollTop,s=a.left+e.scrollLeft,l=e.scrollLeft,u=e.scrollLeft+e.offsetWidth,h=e.scrollTop,p=e.scrollTop+e.offsetHeight;(o==="horizontal"||o==="both")&&(s<l?e.scrollTo({left:s,behavior:i}):s+t.clientWidth>u&&e.scrollTo({left:s-e.offsetWidth+t.clientWidth,behavior:i})),(o==="vertical"||o==="both")&&(r<h?e.scrollTo({top:r,behavior:i}):r+t.clientHeight>p&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:i}))}var Di,ro=d(()=>{Di=new Set});var De,jt=d(()=>{De=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}}});var Re,Xt=d(()=>{Re=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}}});var Te,Yt=d(()=>{Te=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}}});var Oe,Kt=d(()=>{Oe=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}}});var $r,Ti=d(()=>{$r=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}}});function Me(t){Gt(t),ge.push(t)}function Gt(t){for(let e=ge.length-1;e>=0;e--)if(ge[e]===t){ge.splice(e,1);break}}function ve(t){return ge.length>0&&ge[ge.length-1]===t}var ge,Zt=d(()=>{ge=[]});function Be(t,e){return new Promise(o=>{function i(a){a.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}var Pe=d(()=>{});function bt(t,e){return new Promise(o=>{let i=new AbortController,{signal:a}=i;if(t.classList.contains(e))return;t.classList.add(e);let r=!1,s=()=>{r||(r=!0,t.classList.remove(e),o(),i.abort())};t.addEventListener("animationend",s,{once:!0,signal:a}),t.addEventListener("animationcancel",s,{once:!0,signal:a}),requestAnimationFrame(()=>{!r&&t.getAnimations().length===0&&s()})})}var Jt=d(()=>{});var so,zr,Fr=d(()=>{gt();to();so=class extends Lt{constructor(e){if(super(e),this.it=_,e.type!==ct.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===_||e==null)return this._t=void 0,this.it=e;if(e===W)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let o=[e];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}};so.directiveName="unsafeHTML",so.resultType=1;zr=Wt(so)});var _r=d(()=>{Fr()});var E,Dr=d(()=>{_i();ro();jt();Xt();Yt();Kt();Ti();Zt();ao();kt();nt();at();lt();st();Pe();Jt();j();G();T();k();J();Pt();_r();E=class extends V{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.cachedOptions=null,this.hasSlotController=new dt(this,"hint","label"),this.localize=new X(this),this.selectionOrder=new Map,this.typeToSelectString="",this.slotChangePending=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="m",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=t=>w`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
          data-value=${t.value}
          @wa-remove=${e=>this.handleTagRemove(e,t)}
        >
          ${t.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{let e=t.target,o=e.closest('[part~="clear-button"]')!==null,i=e.closest("wa-button")!==null;if(!(o||i)){if(t.key==="Escape"&&this.open&&ve(this)&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){let a=this.getAllOptions(),r=a.indexOf(this.currentOption),s=Math.max(0,r);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(s=r+1,s>a.length-1&&(s=0)):t.key==="ArrowUp"?(s=r-1,s<0&&(s=a.length-1)):t.key==="Home"?s=0:t.key==="End"&&(s=a.length-1),this.setCurrentOption(a[s])}if(t.key?.length===1||t.key==="Backspace"){let a=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(let r of a)if(r.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()}}static get validators(){let t=[Uo({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...t]}get validationTarget(){return this.valueInput}set defaultValue(t){this._defaultValue=this.convertDefaultValue(t)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}rawValuesEqual(t,e){return t==null&&e==null?!0:t==null||e==null||t.length!==e.length?!1:t.every((o,i)=>o===e[i])}convertDefaultValue(t){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(t)&&(t=t[0]),t}set value(t){let e=this.value;t instanceof FormData&&(t=t.getAll(this.name)),t!=null&&!Array.isArray(t)&&(t=[t]);let o=this._value;this._value=t??null,this.rawValuesEqual(o,this._value)||(this.valueHasChanged=!0,this.requestUpdate("value",e))}get value(){let t=this._value??this.defaultValue??null;t!=null&&(t=Array.isArray(t)?t:[t]),this.optionValues=new Set(this.getAllOptions().filter(o=>!o.disabled).map(o=>o.value));let e=t;return t!=null&&(e=t.filter(o=>this.optionValues.has(o)),e=this.multiple?e:e[0],e=e??null),e}handleSizeChange(){it(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.processSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.cachedOptions=null}updateDefaultValue(){let e=this.getAllOptions().filter(o=>o.hasAttribute("selected")||o.defaultSelected);if(e.length>0){let o=e.map(i=>i.value);this._defaultValue=this.multiple?o:o[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),Me(this),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),Gt(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(t){t.preventDefault()}handleComboboxMouseDown(t){let o=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="wa-button");this.disabled||o||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.hasInteracted=!0,this.valueHasChanged=!0,this.value!==null&&(this.displayLabel="",this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new $r),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){let o=t.target.closest("wa-option");o&&!o.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){this.slotChangePending||(this.slotChangePending=!0,queueMicrotask(()=>{this.slotChangePending=!1,this.processSlotChange()}))}processSlotChange(){if(customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange()),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultSlotChange()});return}this.cachedOptions=null;let t=this.getAllOptions();this.updateDefaultValue();let e=this.value;if(e==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(e)||(e=[e]);let o=t.filter(i=>e.includes(i.value));this.setSelectedOptions(o)}handleTagRemove(t,e){if(t.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let o=e;if(!o){let i=t.target.closest("wa-tag[data-value]");if(i){let a=i.dataset.value;o=this.selectedOptions.find(r=>r.value===a)}}o&&(this.toggleOptionSelection(o,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this.cachedOptions?this.cachedOptions:this?.querySelectorAll?(this.cachedOptions=[...this.querySelectorAll("wa-option")],this.cachedOptions):[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(t){this.getAllOptions().forEach(o=>{o.current=!1,o.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus({preventScroll:!0}),this.open&&!this.listbox.hidden&&Ri(t,this.listbox,"vertical","auto"))}setSelectedOptions(t){let e=this.getAllOptions(),o=Array.isArray(t)?t:[t];e.forEach(i=>{o.includes(i)||(i.selected=!1)}),o.length&&o.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions().filter(s=>{if(!this.hasInteracted&&!this.valueHasChanged){let l=this.defaultValue,u=Array.isArray(l)?l:[l];return s.hasAttribute("selected")||s.defaultSelected||s.selected||u?.includes(s.value)}return s.selected}),o=new Set(e.map(s=>s.value));for(let s of this.selectionOrder.keys())o.has(s)||this.selectionOrder.delete(s);let a=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(let s of e)this.selectionOrder.has(s.value)||this.selectionOrder.set(s.value,a++);this.selectedOptions=e.sort((s,l)=>{let u=this.selectionOrder.get(s.value)??0,h=this.selectionOrder.get(l.value)??0;return u-h});let r=new Set(this.selectedOptions.map(s=>s.value));if(r.size>0||this._value){let s=this._value;if(this._value==null){let l=this.defaultValue??[];this._value=Array.isArray(l)?l:[l]}this._value=this._value?.filter(l=>!this.optionValues?.has(l))??null,this._value?.unshift(...r),this.requestUpdate("value",s)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let s=this.selectedOptions[0];this.displayLabel=s?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){let o=this.getTag(t,e);return o?typeof o=="string"?zr(o):o:null}else if(e===this.maxOptionsVisible)return w`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            ?pill=${this.pill}
            size=${this.size}
            >+${this.selectedOptions.length-e}</wa-tag
          >
        `;return null})}updated(t){super.updated(t),(t.has("value")||t.has("displayLabel"))&&this.customStates.set("blank",!this.value&&!this.displayLabel)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){let t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],o=t.filter(i=>e.includes(i.value));this.setSelectedOptions(o),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let t=new De;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await bt(this.popup.popup,"show"),this.currentOption&&Ri(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new Oe)}else{let t=new Re;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await bt(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Te)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Be(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Be(this,"wa-after-hide")}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=this.label?!0:!!t,i=this.hint?!0:!!e,a=(this.hasUpdated||!1)&&this.withClear&&!this.disabled&&(this.displayLabel||this.value&&this.value.length>0);return w`
      <div
        part="form-control"
        class=${O({"form-control":!0,"form-control-has-label":o})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${O({label:!0,"has-label":o})}
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${O({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple&&this.hasUpdated?w`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${a?w`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${O({"has-slotted":i})}
          aria-hidden=${i?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};E.css=[kr,At,rt];n([$(".select")],E.prototype,"popup",2);n([$(".combobox")],E.prototype,"combobox",2);n([$(".display-input")],E.prototype,"displayInput",2);n([$(".value-input")],E.prototype,"valueInput",2);n([$(".listbox")],E.prototype,"listbox",2);n([N()],E.prototype,"displayLabel",2);n([N()],E.prototype,"currentOption",2);n([N()],E.prototype,"selectedOptions",2);n([c({reflect:!0})],E.prototype,"name",2);n([c({attribute:!1})],E.prototype,"defaultValue",1);n([c({attribute:"value",reflect:!1})],E.prototype,"value",1);n([c({reflect:!0})],E.prototype,"size",2);n([S("size")],E.prototype,"handleSizeChange",1);n([c()],E.prototype,"placeholder",2);n([c({type:Boolean,reflect:!0})],E.prototype,"multiple",2);n([c({attribute:"max-options-visible",type:Number})],E.prototype,"maxOptionsVisible",2);n([c({type:Boolean})],E.prototype,"disabled",2);n([c({attribute:"with-clear",type:Boolean})],E.prototype,"withClear",2);n([c({type:Boolean,reflect:!0})],E.prototype,"open",2);n([c({reflect:!0})],E.prototype,"appearance",2);n([c({type:Boolean,reflect:!0})],E.prototype,"pill",2);n([c()],E.prototype,"label",2);n([c({reflect:!0})],E.prototype,"placement",2);n([c({attribute:"hint"})],E.prototype,"hint",2);n([c({attribute:"with-label",type:Boolean})],E.prototype,"withLabel",2);n([c({attribute:"with-hint",type:Boolean})],E.prototype,"withHint",2);n([c({type:Boolean,reflect:!0})],E.prototype,"required",2);n([c({attribute:!1})],E.prototype,"getTag",2);n([S("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1);n([S("value",{waitUntilFirstUpdate:!0})],E.prototype,"handleValueChange",1);n([S("open",{waitUntilFirstUpdate:!0})],E.prototype,"handleOpenChange",1);E=n([R("wa-select")],E);E.disableWarning?.("change-in-update")});var Rr,Oi=d(()=>{Rr=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}}});var Tr,Mi=d(()=>{k();Tr=L`
  @layer wa-component {
    :host {
      display: inline-flex;
      gap: 0.5em;
      border-radius: var(--wa-border-radius-m);
      align-items: center;
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
      border-style: var(--wa-border-style);
      border-width: var(--wa-border-width-s);
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      font-size: inherit;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
      -webkit-user-select: none;
      height: calc(var(--wa-form-control-height) * 0.8);
      line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
      padding: 0 0.75em;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }

    :host([appearance='filled']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }

    :host([appearance='accent']) {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
  }

  .content {
    font-size: var(--wa-font-size-smaller);
  }

  [part='remove-button'] {
    line-height: 1;
  }

  [part='remove-button']::part(base) {
    padding: 0;
    height: 1em;
    width: 1em;
    color: currentColor;
  }

  @media (hover: hover) {
    :host(:hover) > [part='remove-button']::part(base) {
      background-color: transparent;
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:active) > [part='remove-button']::part(base) {
    background-color: transparent;
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  /*
   * Pill modifier
   */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }
`});var Vt,Or=d(()=>{Oi();Mi();at();st();Se();j();Q();G();T();k();J();Vt=class extends H{constructor(){super(...arguments),this.localize=new X(this),this.variant="neutral",this.appearance="filled-outlined",this.size="m",this.pill=!1,this.withRemove=!1}handleSizeChange(){it(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new Rr)}render(){return w`
      <slot part="content" class="content"></slot>

      ${this.withRemove?w`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              size=${this.size}
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          `:""}
    `}};Vt.css=[Tr,Oo,rt];n([c({reflect:!0})],Vt.prototype,"variant",2);n([c({reflect:!0})],Vt.prototype,"appearance",2);n([c({reflect:!0})],Vt.prototype,"size",2);n([S("size")],Vt.prototype,"handleSizeChange",1);n([c({type:Boolean,reflect:!0})],Vt.prototype,"pill",2);n([c({attribute:"with-remove",type:Boolean})],Vt.prototype,"withRemove",2);Vt=n([R("wa-tag")],Vt)});var Mr,Bi=d(()=>{k();Mr=L`
  :host {
    --current-text-color: var(--wa-color-brand-on-loud);

    display: block;
    color: var(--wa-color-text-normal);
    -webkit-user-select: none;
    user-select: none;

    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    padding: 0.5em 1em 0.5em 0.25em;
    border-radius: var(--wa-border-radius-s);
    line-height: var(--wa-line-height-condensed);
    transition: var(--wa-transition-fast) background-color var(--wa-transition-easing);
    cursor: pointer;
  }

  :host(:focus) {
    outline: none;
  }

  @media (hover: hover) {
    :host(:not(:state(disabled), :state(current)):is(:state(hover), :hover)) {
      background-color: var(--wa-color-neutral-fill-normal);
      color: var(--wa-color-neutral-on-normal);
    }
  }

  :host(:state(current)),
  :host(:state(disabled):state(current)) {
    background-color: var(--wa-form-control-activated-color);
    color: var(--current-text-color);
    opacity: 1;
  }

  :host(:state(disabled)) {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wa-font-size-smaller);
    visibility: hidden;
    width: 2em;
  }

  :host(:state(selected)) .check {
    visibility: visible;
  }

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start::slotted(*) {
    margin-inline-end: 0.5em;
  }

  .end::slotted(*) {
    margin-inline-start: 0.5em;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`});function no(t,e=0){if(!t||!globalThis.Node)return"";if(typeof t[Symbol.iterator]=="function")return(Array.isArray(t)?t:[...t]).map(a=>no(a,--e)).join("");let o=t;if(o.nodeType===Node.TEXT_NODE)return o.textContent??"";if(o.nodeType===Node.ELEMENT_NODE){let i=o;if(i.hasAttribute("slot")||i.matches("style, script"))return"";if(i instanceof HTMLSlotElement){let a=i.assignedNodes({flatten:!0});if(a.length>0)return no(a,--e)}return e>-1?no(i,--e):i.textContent??""}return o.hasChildNodes()?no(o.childNodes,--e):""}var St,Br=d(()=>{Bi();Q();G();T();k();J();St=class extends H{constructor(){super(...arguments),this.localize=new X(this),this.cachedDefaultLabel="",this.isInitialized=!1,this.isDefaultLabelDirty=!0,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.handleHover=t=>{t.type==="mouseenter"?this.customStates.set("hover",!0):t.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(t){let e=this._label;this._label=t||"",this._label!==e&&this.requestUpdate("label",e)}get label(){return this._label?this._label:this.defaultLabel}get defaultLabel(){return(this.isDefaultLabelDirty||!this.cachedDefaultLabel)&&this.updateDefaultLabel(),this.cachedDefaultLabel}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){if(this.isDefaultLabelDirty=!0,!this.isInitialized){this.isInitialized=!0;return}let t=this.closest("wa-select, wa-combobox");t&&customElements.whenDefined(t.localName).then(()=>t.handleDefaultSlotChange?.())}willUpdate(t){t.has("defaultSelected")&&(this.didSSR&&this.hasUpdated||!this.didSSR)&&this.syncDefaultSelected(),super.willUpdate(t)}syncDefaultSelected(){if("closest"in this&&!this.closest("wa-combobox, wa-select")?.hasInteracted&&this.defaultSelected){let t=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",t)}}updated(t){t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected)),t.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),t.has("current")&&this.customStates.set("current",this.current),super.updated(t)}async firstUpdated(t){if(super.firstUpdated(t),this.didSSR&&!this.hasUpdated?(await this.updateComplete,this.syncDefaultSelected()):this.syncDefaultSelected(),this.selected&&!this.defaultSelected){let e=this.closest("wa-select, wa-combobox");e&&!e.hasInteracted&&(await customElements.whenDefined(e?.localName),await e.updateComplete,e.selectionChanged?.())}}updateDefaultLabel(){let t=this.cachedDefaultLabel;this.cachedDefaultLabel=no(this).trim(),this.isDefaultLabelDirty=!1;let e=this.cachedDefaultLabel!==t;return!this._label&&e&&this.requestUpdate("label",t),e}render(){let t=this.selected;return this.didSSR&&!this.hasUpdated?(this.updateComplete.then(()=>{this.requestUpdate()}),_):w`
      ${t?w`<wa-icon
            part="checked-icon"
            class="check"
            name="check"
            library="system"
            variant="solid"
            aria-hidden="true"
          ></wa-icon>`:w`<span part="checked-icon" class="check" aria-hidden="true"></span>`}
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};St.css=Mr;n([$(".label")],St.prototype,"defaultSlot",2);n([N()],St.prototype,"current",2);n([c({reflect:!0})],St.prototype,"value",2);n([c({type:Boolean})],St.prototype,"disabled",2);n([c({type:Boolean,attribute:!1})],St.prototype,"selected",2);n([c({type:Boolean,attribute:"selected"})],St.prototype,"defaultSelected",2);n([c()],St.prototype,"label",1);St=n([R("wa-option")],St)});var Pr,lo=d(()=>{Pr=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}}});var Vr,co=d(()=>{k();Vr=L`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`});function Pi(t,e,o){return wt(t,$t(e,o))}function be(t,e){return typeof t=="function"?t(e):t}function Qt(t){return t.split("-")[0]}function we(t){return t.split("-")[1]}function Vi(t){return t==="x"?"y":"x"}function Yo(t){return t==="y"?"height":"width"}function Ft(t){let e=t[0];return e==="t"||e==="b"?"y":"x"}function Ko(t){return Vi(Ft(t))}function Nr(t,e,o){o===void 0&&(o=!1);let i=we(t),a=Ko(t),r=Yo(a),s=a==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=uo(s)),[s,uo(s)]}function Ur(t){let e=uo(t);return[Xo(t),e,Xo(e)]}function Xo(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}function Bn(t,e,o){switch(t){case"top":case"bottom":return o?e?qr:Ir:e?Ir:qr;case"left":case"right":return e?On:Mn;default:return[]}}function Hr(t,e,o,i){let a=we(t),r=Bn(Qt(t),o==="start",i);return a&&(r=r.map(s=>s+"-"+a),e&&(r=r.concat(r.map(Xo)))),r}function uo(t){let e=Qt(t);return Tn[e]+t.slice(e.length)}function Pn(t){var e,o,i,a;return{top:(e=t.top)!=null?e:0,right:(o=t.right)!=null?o:0,bottom:(i=t.bottom)!=null?i:0,left:(a=t.left)!=null?a:0}}function Ii(t){return typeof t!="number"?Pn(t):{top:t,right:t,bottom:t,left:t}}function ye(t){let{x:e,y:o,width:i,height:a}=t;return{width:i,height:a,top:o,left:e,right:e+i,bottom:o+a,x:e,y:o}}var $t,wt,ho,po,zt,Tn,Ir,qr,On,Mn,Go=d(()=>{$t=Math.min,wt=Math.max,ho=Math.round,po=Math.floor,zt=t=>({x:t,y:t}),Tn={left:"right",right:"left",bottom:"top",top:"bottom"};Ir=["left","right"],qr=["right","left"],On=["top","bottom"],Mn=["bottom","top"]});function Wr(t,e,o){let{reference:i,floating:a}=t,r=Ft(e),s=Ko(e),l=Yo(s),u=Qt(e),h=r==="y",p=i.x+i.width/2-a.width/2,m=i.y+i.height/2-a.height/2,g=i[l]/2-a[l]/2,f;switch(u){case"top":f={x:p,y:i.y-a.height};break;case"bottom":f={x:p,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:m};break;case"left":f={x:i.x-a.width,y:m};break;default:f={x:i.x,y:i.y}}let v=we(e);return v&&(f[s]+=g*(v==="end"?1:-1)*(o&&h?-1:1)),f}async function jr(t,e){var o;e===void 0&&(e={});let{x:i,y:a,platform:r,rects:s,elements:l,strategy:u}=t,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:m="floating",altBoundary:g=!1,padding:f=0}=be(e,t),v=Ii(f),A=l[g?m==="floating"?"reference":"floating":m],C=ye(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(A)))==null||o?A:A.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:h,rootBoundary:p,strategy:u})),F=m==="floating"?{x:i,y:a,width:s.floating.width,height:s.floating.height}:s.reference,D=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),M=await(r.isElement==null?void 0:r.isElement(D))&&await(r.getScale==null?void 0:r.getScale(D))||{x:1,y:1},et=ye(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:F,offsetParent:D,strategy:u}):F);return{top:(C.top-et.top+v.top)/M.y,bottom:(et.bottom-C.bottom+v.bottom)/M.y,left:(C.left-et.left+v.left)/M.x,right:(et.right-C.right+v.right)/M.x}}async function qn(t,e){let{placement:o,platform:i,elements:a}=t,r=await(i.isRTL==null?void 0:i.isRTL(a.floating)),s=Qt(o),l=we(o),u=Ft(o)==="y",h=In.has(s)?-1:1,p=r&&u?-1:1,m=be(e,t),{mainAxis:g,crossAxis:f,alignmentAxis:v}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return l&&typeof v=="number"&&(f=l==="end"?v*-1:v),u?{x:f*p,y:g*h}:{x:g*h,y:f*p}}var Vn,Xr,Yr,Kr,In,Gr,Zr,Jr,Qr=d(()=>{Go();Go();Vn=50,Xr=async(t,e,o)=>{let{placement:i="bottom",strategy:a="absolute",middleware:r=[],platform:s}=o,l=s.detectOverflow?s:{...s,detectOverflow:jr},u=await(s.isRTL==null?void 0:s.isRTL(e)),h=await s.getElementRects({reference:t,floating:e,strategy:a}),{x:p,y:m}=Wr(h,i,u),g=i,f=0,v={};for(let b=0;b<r.length;b++){let A=r[b];if(!A)continue;let{name:C,fn:F}=A,{x:D,y:M,data:et,reset:I}=await F({x:p,y:m,initialPlacement:i,placement:g,strategy:a,middlewareData:v,rects:h,platform:l,elements:{reference:t,floating:e}});p=D??p,m=M??m,v[C]={...v[C],...et},I&&f<Vn&&(f++,typeof I=="object"&&(I.placement&&(g=I.placement),I.rects&&(h=I.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:a}):I.rects),{x:p,y:m}=Wr(h,g,u)),b=-1)}return{x:p,y:m,placement:g,strategy:a,middlewareData:v}},Yr=t=>({name:"arrow",options:t,async fn(e){let{x:o,y:i,placement:a,rects:r,platform:s,elements:l,middlewareData:u}=e,{element:h,padding:p=0}=be(t,e)||{};if(h==null)return{};let m=Ii(p),g={x:o,y:i},f=Ko(a),v=Yo(f),b=await s.getDimensions(h),A=f==="y",C=A?"top":"left",F=A?"bottom":"right",D=A?"clientHeight":"clientWidth",M=r.reference[v]+r.reference[f]-g[f]-r.floating[v],et=g[f]-r.reference[f],I=await(s.getOffsetParent==null?void 0:s.getOffsetParent(h)),ot=I?I[D]:0;(!ot||!await(s.isElement==null?void 0:s.isElement(I)))&&(ot=l.floating[D]||r.floating[v]);let pt=M/2-et/2,xt=ot/2-b[v]/2-1,Z=$t(m[C],xt),Ne=$t(m[F],xt),Ue=ot-b[v]-Ne,Et=ot/2-b[v]/2+pt,mt=Pi(Z,Et,Ue),ee=!u.arrow&&we(a)!=null&&Et!==mt&&r.reference[v]/2-(Et<Z?Z:Ne)-b[v]/2<0,Dt=ee?Et<Z?Et-Z:Et-Ue:0;return{[f]:g[f]+Dt,data:{[f]:mt,centerOffset:Et-mt-Dt,...ee&&{alignmentOffset:Dt}},reset:ee}}}),Kr=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;let{placement:a,middlewareData:r,rects:s,initialPlacement:l,platform:u,elements:h}=e,{mainAxis:p=!0,crossAxis:m=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:b=!0,...A}=be(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};let C=Qt(a),F=Ft(l),D=Qt(l)===l,M=await(u.isRTL==null?void 0:u.isRTL(h.floating)),et=g||(D||!b?[uo(l)]:Ur(l)),I=v!=="none";!g&&I&&et.push(...Hr(l,b,v,M));let ot=[l,...et],pt=await u.detectOverflow(e,A),xt=[],Z=((i=r.flip)==null?void 0:i.overflows)||[];if(p&&xt.push(pt[C]),m){let mt=Nr(a,s,M);xt.push(pt[mt[0]],pt[mt[1]])}if(Z=[...Z,{placement:a,overflows:xt}],!xt.every(mt=>mt<=0)){var Ne,Ue;let mt=(((Ne=r.flip)==null?void 0:Ne.index)||0)+1,ee=ot[mt];if(ee&&(!(m==="alignment"?F!==Ft(ee):!1)||Z.every(ft=>Ft(ft.placement)===F?ft.overflows[0]>0:!0)))return{data:{index:mt,overflows:Z},reset:{placement:ee}};let Dt=(Ue=Z.filter(oe=>oe.overflows[0]<=0).sort((oe,ft)=>oe.overflows[1]-ft.overflows[1])[0])==null?void 0:Ue.placement;if(!Dt)switch(f){case"bestFit":{var Et;let oe=(Et=Z.filter(ft=>{if(I){let Nt=Ft(ft.placement);return Nt===F||Nt==="y"}return!0}).map(ft=>[ft.placement,ft.overflows.filter(Nt=>Nt>0).reduce((Nt,Qs)=>Nt+Qs,0)]).sort((ft,Nt)=>ft[1]-Nt[1])[0])==null?void 0:Et[0];oe&&(Dt=oe);break}case"initialPlacement":Dt=l;break}if(a!==Dt)return{reset:{placement:Dt}}}return{}}}},In=new Set(["left","top"]);Gr=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;let{x:a,y:r,placement:s,middlewareData:l}=e,u=await qn(e,t);return s===((o=l.offset)==null?void 0:o.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:a+u.x,y:r+u.y,data:{...u,placement:s}}}}},Zr=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:i,placement:a,platform:r}=e,{mainAxis:s=!0,crossAxis:l=!1,limiter:u={fn:F=>{let{x:D,y:M}=F;return{x:D,y:M}}},...h}=be(t,e),p={x:o,y:i},m=await r.detectOverflow(e,h),g=Ft(a),f=Vi(g),v=p[f],b=p[g],A=(F,D)=>Pi(D+m[F==="y"?"top":"left"],D,D-m[F==="y"?"bottom":"right"]);s&&(v=A(f,v)),l&&(b=A(g,b));let C=u.fn({...e,[f]:v,[g]:b});return{...C,data:{x:C.x-o,y:C.y-i,enabled:{[f]:s,[g]:l}}}}}},Jr=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){let{placement:o,rects:i,platform:a,elements:r}=e,{apply:s=()=>{},...l}=be(t,e),u=await a.detectOverflow(e,l),h=Qt(o),p=we(o),m=Ft(o)==="y",{width:g,height:f}=i.floating,v,b;h==="top"||h==="bottom"?(v=h,b=p===(await(a.isRTL==null?void 0:a.isRTL(r.floating))?"start":"end")?"left":"right"):(b=h,v=p==="end"?"top":"bottom");let A=f-u.top-u.bottom,C=g-u.left-u.right,F=$t(f-u[v],A),D=$t(g-u[b],C),M=e.middlewareData.shift,et=!M,I=F,ot=D;M!=null&&M.enabled.x&&(ot=C),M!=null&&M.enabled.y&&(I=A),et&&!p&&(m?ot=g-2*wt(u.left,u.right):I=f-2*wt(u.top,u.bottom)),await s({...e,availableWidth:ot,availableHeight:I});let pt=await a.getDimensions(r.floating);return g!==pt.width||f!==pt.height?{reset:{rects:!0}}:{}}}}});function Zo(){return typeof window<"u"}function xe(t){return es(t)?(t.nodeName||"").toLowerCase():"#document"}function tt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function _t(t){var e;return(e=(es(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function es(t){return Zo()?t instanceof Node||t instanceof tt(t).Node:!1}function yt(t){return Zo()?t instanceof Element||t instanceof tt(t).Element:!1}function qt(t){return Zo()?t instanceof HTMLElement||t instanceof tt(t).HTMLElement:!1}function ts(t){return!Zo()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof tt(t).ShadowRoot}function mo(t){let{overflow:e,overflowX:o,overflowY:i,display:a}=Ct(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&a!=="inline"&&a!=="contents"}function os(t){return/^(table|td|th)$/.test(xe(t))}function fo(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}function Ve(t){let e=yt(t)?Ct(t):t;return Ce(e.transform)||Ce(e.translate)||Ce(e.scale)||Ce(e.rotate)||Ce(e.perspective)||!Jo()&&(Ce(e.backdropFilter)||Ce(e.filter))||Nn.test(e.willChange||"")||Un.test(e.contain||"")}function is(t){let e=te(t);for(;qt(e)&&!Ie(e);){if(Ve(e))return e;if(fo(e))return null;e=te(e)}return null}function Jo(){return qi==null&&(qi=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),qi}function Ie(t){return/^(html|body|#document)$/.test(xe(t))}function Ct(t){return tt(t).getComputedStyle(t)}function go(t){return yt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function te(t){if(xe(t)==="html")return t;let e=t.assignedSlot||t.parentNode||ts(t)&&t.host||_t(t);return ts(e)?e.host:e}function as(t){let e=te(t);return Ie(e)?(t.ownerDocument||t).body:qt(e)&&mo(e)?e:as(e)}function It(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);let a=as(t),r=a===((i=t.ownerDocument)==null?void 0:i.body),s=tt(a);if(r){let l=Qo(s);return e.concat(s,s.visualViewport||[],mo(a)?a:[],l&&o?It(l):[])}else return e.concat(a,It(a,[],o))}function Qo(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}var Nn,Un,Ce,qi,ti=d(()=>{Nn=/transform|translate|scale|rotate|perspective|filter/,Un=/paint|layout|strict|content/,Ce=t=>!!t&&t!=="none"});function ns(t){let e=Ct(t),o=parseFloat(e.width)||0,i=parseFloat(e.height)||0,a=qt(t),r=a?t.offsetWidth:o,s=a?t.offsetHeight:i,l=ho(o)!==r||ho(i)!==s;return l&&(o=r,i=s),{width:o,height:i,$:l}}function Ui(t){return yt(t)?t:t.contextElement}function qe(t){let e=Ui(t);if(!qt(e))return zt(1);let o=e.getBoundingClientRect(),{width:i,height:a,$:r}=ns(e),s=(r?ho(o.width):o.width)/i,l=(r?ho(o.height):o.height)/a;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}function ls(t){let e=tt(t);return!Jo()||!e.visualViewport?Hn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Wn(t,e,o){return e===void 0&&(e=!1),!!o&&e&&o===tt(t)}function Ee(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);let a=t.getBoundingClientRect(),r=Ui(t),s=zt(1);e&&(i?yt(i)&&(s=qe(i)):s=qe(t));let l=Wn(r,o,i)?ls(r):zt(0),u=(a.left+l.x)/s.x,h=(a.top+l.y)/s.y,p=a.width/s.x,m=a.height/s.y;if(r&&i){let g=tt(r),f=yt(i)?tt(i):i,v=g,b=Qo(v);for(;b&&f!==v;){let A=qe(b),C=b.getBoundingClientRect(),F=Ct(b),D=C.left+(b.clientLeft+parseFloat(F.paddingLeft))*A.x,M=C.top+(b.clientTop+parseFloat(F.paddingTop))*A.y;u*=A.x,h*=A.y,p*=A.x,m*=A.y,u+=D,h+=M,v=tt(b),b=Qo(v)}}return ye({width:p,height:m,x:u,y:h})}function ei(t,e){let o=go(t).scrollLeft;return e?e.left+o:Ee(_t(t)).left+o}function cs(t,e){let o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-ei(t,o),a=o.top+e.scrollTop;return{x:i,y:a}}function jn(t){let{elements:e,rect:o,offsetParent:i,strategy:a}=t,r=a==="fixed",s=_t(i),l=e?fo(e.floating):!1;if(i===s||l&&r)return o;let u={scrollLeft:0,scrollTop:0},h=zt(1),p=zt(0),m=qt(i);if((m||!r)&&((xe(i)!=="body"||mo(s))&&(u=go(i)),m)){let f=Ee(i);h=qe(i),p.x=f.x+i.clientLeft,p.y=f.y+i.clientTop}let g=s&&!m&&!r?cs(s,u):zt(0);return{width:o.width*h.x,height:o.height*h.y,x:o.x*h.x-u.scrollLeft*h.x+p.x+g.x,y:o.y*h.y-u.scrollTop*h.y+p.y+g.y}}function Xn(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function Yn(t){let e=go(t),o=t.ownerDocument.body,i=wt(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),a=wt(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),r=-e.scrollLeft+ei(t),s=-e.scrollTop;return Ct(o).direction==="rtl"&&(r+=wt(t.clientWidth,o.clientWidth)-i),{width:i,height:a,x:r,y:s}}function Gn(t,e,o){o===void 0&&(o="viewport");let i=o==="layoutViewport",a=tt(t),r=_t(t),s=a.visualViewport,l=r.clientWidth,u=r.clientHeight,h=0,p=0;if(s){let g=!Jo()||e==="fixed";i?g||(h=-s.offsetLeft,p=-s.offsetTop):(l=s.width,u=s.height,g&&(h=s.offsetLeft,p=s.offsetTop))}if(ei(r)<=0){let g=r.ownerDocument,f=g.body,v=getComputedStyle(f),b=g.compatMode==="CSS1Compat"&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,A=Math.abs(r.clientWidth-f.clientWidth-b),C=getComputedStyle(r).scrollbarGutter==="stable both-edges"?A/2:A;C<=Kn&&(l-=C)}return{width:l,height:u,x:h,y:p}}function Zn(t,e){let o=Ee(t,!0,e==="fixed"),i=o.top+t.clientTop,a=o.left+t.clientLeft,r=qe(t),s=t.clientWidth*r.x,l=t.clientHeight*r.y,u=a*r.x,h=i*r.y;return{width:s,height:l,x:u,y:h}}function rs(t,e,o){let i;if(e==="viewport"||e==="layoutViewport")i=Gn(t,o,e);else if(e==="document")i=Yn(_t(t));else if(yt(e))i=Zn(e,o);else{let a=ls(t);i={x:e.x-a.x,y:e.y-a.y,width:e.width,height:e.height}}return ye(i)}function Jn(t,e){let o=e.get(t);if(o)return o;let i=It(t,[],!1).filter(l=>yt(l)&&xe(l)!=="body"),a=null,r=Ct(t).position==="fixed",s=r?te(t):t;for(;yt(s)&&!Ie(s);){let l=Ct(s),u=Ve(s),h=a?a.position:r?"fixed":"";!u&&(h==="fixed"||h==="absolute"&&l.position==="static")?i=i.filter(m=>m!==s):a=l,s=te(s)}return e.set(t,i),i}function Qn(t){let{element:e,boundary:o,rootBoundary:i,strategy:a}=t,s=[...o==="clippingAncestors"?fo(e)?[]:Jn(e,this._c):[].concat(o),i],l=rs(e,s[0],a),u=l.top,h=l.right,p=l.bottom,m=l.left;for(let g=1;g<s.length;g++){let f=rs(e,s[g],a);u=wt(f.top,u),h=$t(f.right,h),p=$t(f.bottom,p),m=wt(f.left,m)}return{width:h-m,height:p-u,x:m,y:u}}function tl(t){let{width:e,height:o}=ns(t);return{width:e,height:o}}function el(t,e,o){let i=qt(e),a=_t(e),r=o==="fixed",s=Ee(t,!0,r,e),l={scrollLeft:0,scrollTop:0},u=zt(0);if((i||!r)&&((xe(e)!=="body"||mo(a))&&(l=go(e)),i)){let g=Ee(e,!0,r,e);u.x=g.x+e.clientLeft,u.y=g.y+e.clientTop}!i&&a&&(u.x=ei(a));let h=a&&!i&&!r?cs(a,l):zt(0),p=s.left+l.scrollLeft-u.x-h.x,m=s.top+l.scrollTop-u.y-h.y;return{x:p,y:m,width:s.width,height:s.height}}function Ni(t){return Ct(t).position==="static"}function ss(t,e){if(!qt(t)||Ct(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return _t(t)===o&&(o=o.ownerDocument.body),o}function us(t,e){let o=tt(t);if(fo(t))return o;if(!qt(t)){let a=te(t);for(;a&&!Ie(a);){if(yt(a)&&!Ni(a))return a;a=te(a)}return o}let i=ss(t,e);for(;i&&os(i)&&Ni(i);)i=ss(i,e);return i&&Ie(i)&&Ni(i)&&!Ve(i)?o:i||is(t)||o}function il(t){return Ct(t).direction==="rtl"}function hs(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function al(t,e,o){let i=null,a,r=_t(t);function s(){var p;clearTimeout(a),(p=i)==null||p.disconnect(),i=null}function l(p,m){p===void 0&&(p=!1),m===void 0&&(m=1),s();let g=t.getBoundingClientRect(),{left:f,top:v,width:b,height:A}=g;if(p||e(),!b||!A)return;let C=po(v),F=po(r.clientWidth-(f+b)),D=po(r.clientHeight-(v+A)),M=po(f),I={rootMargin:-C+"px "+-F+"px "+-D+"px "+-M+"px",threshold:wt(0,$t(1,m))||1},ot=!0;function pt(xt){let Z=xt[0].intersectionRatio;if(!hs(g,t.getBoundingClientRect()))return l();if(Z!==m){if(!ot)return l();Z?l(!1,Z):a=setTimeout(()=>{l(!1,1e-7)},1e3)}ot=!1}try{i=new IntersectionObserver(pt,{...I,root:r.ownerDocument})}catch{i=new IntersectionObserver(pt,I)}i.observe(t)}let u=tt(t),h=()=>l(o);return u.addEventListener("resize",h),l(!0),()=>{u.removeEventListener("resize",h),s()}}function ds(t,e,o,i){i===void 0&&(i={});let{ancestorScroll:a=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=i,h=Ui(t),p=a||r?[...h?It(h):[],...e?It(e):[]]:[];p.forEach(C=>{a&&C.addEventListener("scroll",o),r&&C.addEventListener("resize",o)});let m=h&&l?al(h,o,r):null,g=-1,f=null;s&&(f=new ResizeObserver(C=>{let[F]=C;F&&F.target===h&&f&&e&&(f.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var D;(D=f)==null||D.observe(e)})),o()}),h&&!u&&f.observe(h),e&&f.observe(e));let v,b=u?Ee(t):null;u&&A();function A(){let C=Ee(t);b&&!hs(b,C)&&o(),b=C,v=requestAnimationFrame(A)}return o(),()=>{var C;p.forEach(F=>{a&&F.removeEventListener("scroll",o),r&&F.removeEventListener("resize",o)}),m?.(),(C=f)==null||C.disconnect(),f=null,u&&cancelAnimationFrame(v)}}var Hn,Kn,ol,vo,ps,ms,fs,Hi,gs,vs,bs=d(()=>{Qr();Go();ti();ti();Hn=zt(0);Kn=25;ol=async function(t){let e=this.getOffsetParent||us,o=this.getDimensions,i=await o(t.floating);return{reference:el(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};vo={convertOffsetParentRelativeRectToViewportRelativeRect:jn,getDocumentElement:_t,getClippingRect:Qn,getOffsetParent:us,getElementRects:ol,getClientRects:Xn,getDimensions:tl,getScale:qe,isElement:yt,isRTL:il};ps=Gr,ms=Zr,fs=Kr,Hi=Jr,gs=Yr,vs=(t,e,o)=>{let i=new Map,a=o??{},r={...vo,...a.platform,_c:i};return Xr(t,e,{...a,platform:r})}});function ws(t){return rl(t)}function Wi(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function rl(t){for(let e=t;e;e=Wi(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Wi(t);e;e=Wi(e)){if(!(e instanceof Element))continue;let o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||Ve(o)||e.tagName==="BODY"))return e}return null}var ys=d(()=>{ti()});function Cs(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var sl,z,bo=d(()=>{lo();co();Q();G();T();bs();ys();k();J();Pt();sl=!!globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),z=class extends H{constructor(){super(...arguments),this.localize=new X(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),i=0,a=0,r=0,s=0,l=0,u=0,h=0,p=0;o?t.top<e.top?(i=t.left,a=t.bottom,r=t.right,s=t.bottom,l=e.left,u=e.top,h=e.right,p=e.top):(i=e.left,a=e.bottom,r=e.right,s=e.bottom,l=t.left,u=t.top,h=t.right,p=t.top):t.left<e.left?(i=t.right,a=t.top,r=e.left,s=e.top,l=t.right,u=t.bottom,h=e.left,p=e.bottom):(i=e.right,a=e.top,r=t.left,s=t.top,l=e.right,u=e.bottom,h=t.left,p=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${a}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=sl,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Cs(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=ds(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let t=[ps({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Hi({apply:({rects:i})=>{let a=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=a?`${i.reference.width}px`:"",this.popup.style.height=r?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let e;this.SUPPORTS_POPOVER&&!Cs(this.anchor)&&this.boundary==="scroll"&&(e=It(this.anchorEl).filter(i=>i instanceof Element)),this.flip&&t.push(fs({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(ms({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(Hi({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:a})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${a}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(gs({element:this.arrowEl,padding:this.arrowPadding}));let o=this.SUPPORTS_POPOVER?i=>vo.getOffsetParent(i,ws):vo.getOffsetParent;vs(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.SUPPORTS_POPOVER?"absolute":"fixed",platform:{...vo,getOffsetParent:o}}).then(({x:i,y:a,middlewareData:r,placement:s})=>{let l=this.localize.dir()==="rtl",u={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${i}px`,top:`${a}px`}),this.arrow){let h=r.arrow.x,p=r.arrow.y,m="",g="",f="",v="";if(this.arrowPlacement==="start"){let b=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",g=l?b:"",v=l?"":b}else if(this.arrowPlacement==="end"){let b=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";g=l?"":b,v=l?b:"",f=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(v=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":"",m=typeof p=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(v=typeof h=="number"?`${h}px`:"",m=typeof p=="number"?`${p}px`:"");Object.assign(this.arrowEl.style,{top:m,right:g,bottom:f,left:v,[u]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Pr)}render(){return w`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${O({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${O({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?w`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};z.css=Vr;n([$(".popup")],z.prototype,"popup",2);n([$(".arrow")],z.prototype,"arrowEl",2);n([c({attribute:!1,type:Boolean})],z.prototype,"SUPPORTS_POPOVER",2);n([c()],z.prototype,"anchor",2);n([c({type:Boolean,reflect:!0})],z.prototype,"active",2);n([c({reflect:!0})],z.prototype,"placement",2);n([c()],z.prototype,"boundary",2);n([c({type:Number})],z.prototype,"distance",2);n([c({type:Number})],z.prototype,"skidding",2);n([c({type:Boolean})],z.prototype,"arrow",2);n([c({attribute:"arrow-placement"})],z.prototype,"arrowPlacement",2);n([c({attribute:"arrow-padding",type:Number})],z.prototype,"arrowPadding",2);n([c({type:Boolean})],z.prototype,"flip",2);n([c({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],z.prototype,"flipFallbackPlacements",2);n([c({attribute:"flip-fallback-strategy"})],z.prototype,"flipFallbackStrategy",2);n([c({type:Object})],z.prototype,"flipBoundary",2);n([c({attribute:"flip-padding",type:Number})],z.prototype,"flipPadding",2);n([c({type:Boolean})],z.prototype,"shift",2);n([c({type:Object})],z.prototype,"shiftBoundary",2);n([c({attribute:"shift-padding",type:Number})],z.prototype,"shiftPadding",2);n([c({attribute:"auto-size"})],z.prototype,"autoSize",2);n([c()],z.prototype,"sync",2);n([c({type:Object})],z.prototype,"autoSizeBoundary",2);n([c({attribute:"auto-size-padding",type:Number})],z.prototype,"autoSizePadding",2);n([c({attribute:"hover-bridge",type:Boolean})],z.prototype,"hoverBridge",2);z=n([R("wa-popup")],z)});var xs={};Ut(xs,{default:()=>E});var Es=d(()=>{Dr();Or();Oi();Mi();_i();Br();Bi();ro();jt();Xt();Yt();Kt();Ti();bo();lo();co();Zt();ao();kt();Io();qo();eo();ne();nt();Rt();at();lt();st();Qe();Se();Pe();Jt();io();ze();Fe();_e();j();Q();G();Bt();se();ae();ie();re();T();});var Ls,ji=d(()=>{k();Ls=class{constructor(t,e){this.element=t,this.callback=e}start(...t){if(!!1){this.observer??(this.observer=new ResizeObserver(()=>this.check())),this.observer.observe(this.element);for(let e of t)this.observer.observe(e);this.initialCheckHandle??(this.initialCheckHandle=requestAnimationFrame(()=>{this.initialCheckHandle=void 0,this.check()}))}}stop(){this.initialCheckHandle!==void 0&&(cancelAnimationFrame(this.initialCheckHandle),this.initialCheckHandle=void 0),this.observer?.disconnect()}check(){this.callback(this.element.getClientRects().length>0)}}});function As(t){return t.split(" ").map(e=>e.trim()).filter(e=>e!=="")}var Xi=d(()=>{});var ks,Yi=d(()=>{k();ks=L`
  :host {
    --width: 31rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: var(--width);
    max-width: calc(100% - var(--wa-space-2xl));
    max-height: calc(100% - var(--wa-space-2xl));
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-panel-border-radius);
    border: none;
    box-shadow: var(--wa-shadow-l);
    padding: 0;
    margin: auto;

    &.show {
      animation: show-dialog var(--show-duration) ease;

      &::backdrop {
        animation: show-backdrop var(--show-duration, 200ms) ease;
      }
    }

    &.hide {
      animation: show-dialog var(--hide-duration) ease reverse;

      &::backdrop {
        animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .dialog:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog {
      max-height: 80vh;
    }
  }

  .open {
    display: flex;
    opacity: 1;
  }

  .header {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: nowrap;

    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:first-of-type)) {
    margin-inline-start: var(--wa-spacing-xs);
  }

  .dialog::backdrop {
    /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
    backdrop-filter: var(--backdrop-filter);
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.02;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-dialog {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .dialog {
      border: solid 1px white;
    }
  }
`});var ht,Ss=d(()=>{ji();ro();Xi();jt();Xt();Yt();Kt();Yi();Zt();lt();Jt();j();Q();G();T();k();J();Pt();Po();ht=class extends H{constructor(){super(...arguments),this.localize=new X(this),this.hasSlotController=new dt(this,"footer","header-actions","label"),this.renderedWatcher=new Ls(this,t=>this.handleRenderedChange(t)),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.withLabel=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&ve(this)&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(t){super.firstUpdated(t),this.open&&(this.addOpenListeners(),this.dialog.showModal(),Wo(this),this.renderedWatcher.start(this.dialog))}disconnectedCallback(){super.disconnectedCallback(),this.renderedWatcher.stop(),jo(this),this.removeOpenListeners()}async requestClose(t){let e=new Re({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,bt(this.dialog,"pulse");return}this.removeOpenListeners(),await bt(this.dialog,"hide"),this.open=!1,this.dialog.close(),jo(this),this.renderedWatcher.stop();let o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.dispatchEvent(new Te)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),Me(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),Gt(this)}handleDialogCancel(t){t.preventDefault(),!this.dialog.classList.contains("hide")&&t.target===this.dialog&&ve(this)&&this.requestClose(this.dialog)}handleDialogClick(t){let o=t.target.closest('[data-dialog="close"]');o&&(t.stopPropagation(),this.requestClose(o))}async handleDialogPointerDown(t){t.target===this.dialog&&!Sr(t,this.dialog)&&(this.lightDismiss?this.requestClose(this.dialog):await bt(this.dialog,"pulse"))}handleRenderedChange(t){if(!this.open){this.renderedWatcher.stop();return}!t&&this.dialog.open?(this.removeOpenListeners(),this.dialog.close(),jo(this)):t&&!this.dialog.open&&(this.addOpenListeners(),this.dialog.showModal(),Wo(this))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open?(this.open=!0,this.requestClose(this.dialog)):this.open||this.renderedWatcher.stop()}async show(){let t=new De;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),Wo(this),this.renderedWatcher.start(this.dialog),requestAnimationFrame(()=>{let e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await bt(this.dialog,"show"),this.dispatchEvent(new Oe)}render(){let t=!this.withoutHeader,e=this.hasSlotController.test("footer","withFooter"),o=this.label.length>0||this.hasSlotController.test("label","withLabel");return w`
      <dialog
        part="dialog"
        aria-labelledby=${Y(t&&o?"title":void 0)}
        aria-label=${Y(!t&&this.label?this.label:void 0)}
        class=${O({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?w`
              <div part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"\u200B"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${i=>this.requestClose(i.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </div>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        <!-- Use a hidden element so we still get "slotchange" events. -->
        <div part="footer" class="footer" ?hidden=${!e}>
          <slot name="footer"></slot>
        </div>
      </dialog>
    `}};ht.css=ks;n([$(".dialog")],ht.prototype,"dialog",2);n([c({type:Boolean,reflect:!0})],ht.prototype,"open",2);n([c({reflect:!0})],ht.prototype,"label",2);n([c({attribute:"without-header",type:Boolean,reflect:!0})],ht.prototype,"withoutHeader",2);n([c({attribute:"light-dismiss",type:Boolean})],ht.prototype,"lightDismiss",2);n([c({attribute:"with-footer",type:Boolean})],ht.prototype,"withFooter",2);n([c({attribute:"with-label",type:Boolean})],ht.prototype,"withLabel",2);n([S("open",{waitUntilFirstUpdate:!0})],ht.prototype,"handleOpenChange",1);ht=n([R("wa-dialog")],ht);document.addEventListener("click",t=>{let e=t.target.closest("[data-dialog]");if(e instanceof Element){let[o,i]=As(e.getAttribute("data-dialog")||"");if(o==="open"&&i?.length){let r=e.getRootNode().getElementById(i);r?.localName==="wa-dialog"?r.open=!0:console.warn(`A dialog with an ID of "${i}" could not be found in this document.`)}}}),document.addEventListener("pointerdown",()=>{})});var $s={};Ut($s,{default:()=>ht});var zs=d(()=>{Ss();ji();ro();Xi();jt();Xt();Yt();Kt();Yi();Zt();Io();qo();eo();ne();nt();Rt();at();lt();st();Qe();Se();Jt();io();ze();Fe();_e();j();Q();G();Bt();se();ae();ie();re();T();});var Fs,Ki=d(()=>{k();Fs=L`
  :host {
    --track-size: 0.5em;
    --thumb-width: 1.4em;
    --thumb-height: 1.4em;
    --marker-width: 0.1875em;
    --marker-height: 0.1875em;
  }

  :host([orientation='vertical']) {
    width: auto;
  }

  #label:has(~ .vertical) {
    display: block;
    order: 2;
    max-width: none;
    text-align: center;
  }

  #description:has(~ .vertical) {
    order: 3;
    text-align: center;
  }

  /* Add extra space between slider and label, when present */
  #label.has-label ~ #slider {
    &.horizontal {
      margin-block-start: 0.5em;
    }
    &.vertical {
      margin-block-end: 0.5em;
    }
  }

  #slider {
    touch-action: none;

    &:focus {
      outline: none;
    }

    &:focus-visible:not(.disabled) #thumb,
    &:focus-visible:not(.disabled) #thumb-min,
    &:focus-visible:not(.disabled) #thumb-max {
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  #track {
    position: relative;
    border-radius: 9999px;
    background: var(--wa-color-neutral-fill-normal);
    isolation: isolate;
  }

  /* Orientation */
  .horizontal #track {
    height: var(--track-size);
  }

  .vertical #track {
    order: 1;
    width: var(--track-size);
    height: 200px;
  }

  /* Disabled */
  .disabled #track {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Indicator */
  #indicator {
    position: absolute;
    border-radius: inherit;
    background-color: var(--wa-form-control-activated-color);

    &:dir(ltr) {
      right: calc(100% - max(var(--start), var(--end)));
      left: min(var(--start), var(--end));
    }

    &:dir(rtl) {
      right: min(var(--start), var(--end));
      left: calc(100% - max(var(--start), var(--end)));
    }
  }

  .horizontal #indicator {
    top: 0;
    height: 100%;
  }

  .vertical #indicator {
    top: calc(100% - var(--end));
    bottom: var(--start);
    left: 0;
    width: 100%;
  }

  /* Thumbs */
  #thumb,
  #thumb-min,
  #thumb-max {
    z-index: 3;
    position: absolute;
    width: var(--thumb-width);
    height: var(--thumb-height);
    border: solid 0.125em var(--wa-color-surface-default);
    border-radius: 50%;
    background-color: var(--wa-form-control-activated-color);
    cursor: pointer;
  }

  .disabled #thumb,
  .disabled #thumb-min,
  .disabled #thumb-max {
    cursor: inherit;
  }

  .horizontal #thumb,
  .horizontal #thumb-min,
  .horizontal #thumb-max {
    top: calc(50% - var(--thumb-height) / 2);

    &:dir(ltr) {
      right: auto;
      left: calc(var(--position) - var(--thumb-width) / 2);
    }

    &:dir(rtl) {
      right: calc(var(--position) - var(--thumb-width) / 2);
      left: auto;
    }
  }

  .vertical #thumb,
  .vertical #thumb-min,
  .vertical #thumb-max {
    bottom: calc(var(--position) - var(--thumb-height) / 2);
    left: calc(50% - var(--thumb-width) / 2);
  }

  /* Range-specific thumb styles */
  :host([range]) {
    #thumb-min:focus-visible,
    #thumb-max:focus-visible {
      z-index: 4; /* Ensure focused thumb appears on top */
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  /* Markers */
  #markers {
    pointer-events: none;
  }

  .marker {
    z-index: 2;
    position: absolute;
    width: var(--marker-width);
    height: var(--marker-height);
    border-radius: 50%;
    background-color: var(--wa-color-surface-default);
  }

  .marker:first-of-type,
  .marker:last-of-type {
    display: none;
  }

  .horizontal .marker {
    top: calc(50% - var(--marker-height) / 2);
    left: calc(var(--position) - var(--marker-width) / 2);
  }

  .vertical .marker {
    top: calc(var(--position) - var(--marker-height) / 2);
    left: calc(50% - var(--marker-width) / 2);
  }

  /* Marker labels */
  #references {
    position: relative;

    slot {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    ::slotted(*) {
      color: var(--wa-color-text-quiet);
      font-size: 0.875em;
      line-height: 1;
    }
  }

  .horizontal {
    #references {
      margin-block-start: 0.5em;
    }
  }

  .vertical {
    display: flex;
    margin-inline: auto;

    #track {
      order: 1;
    }

    #references {
      order: 2;
      width: min-content;
      margin-inline-start: 0.75em;

      slot {
        flex-direction: column;
      }
    }
  }

  .vertical #references slot {
    flex-direction: column;
  }
`});function*Gi(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Gi(t.shadowRoot.activeElement)))}var Zi=d(()=>{});function _s(t,e){let o=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!o&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&ul(e)})}function ul(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;let o=Array.from(e.elements),i=0;for(let r of o)cl(r)&&(i+=1);if(i===1){e.requestSubmit(null);return}let a=o.find(r=>r.type==="submit"&&!r.matches(":disabled"));a&&(["input","button"].includes(a.localName)?e.requestSubmit(a):a.click())}var nl,ll,cl,Ji=d(()=>{nl=new Map([["input",!0],["wa-input",!0],["wa-tag-input",!0],["wa-number-input",!0],["wa-otp-input",!0],["wa-slider",!0]]),ll=new Map([["button",!1],["checkbox",!1],["color",!1],["date",!1],["datetime-local",!1],["email",!0],["file",!1],["hidden",!1],["image",!1],["month",!1],["number",!0],["password",!0],["radio",!1],["range",!1],["reset",!0],["search",!0],["submit",!1],["tel",!0],["text",!0],["time",!1],["url",!0],["week",!1]]),cl=t=>{let e=t?.localName;if(!e||!!!nl.get(e))return!1;if(e!=="input"&&e!=="wa-input")return!0;let i=t.type;return!!ll.get(i)}});var Qi,wo,ta=d(()=>{Qi=typeof window<"u"&&"ontouchstart"in window,wo=class{constructor(t,e){this.isActive=!1,this.isDragging=!1,this.handleDragStart=o=>{let i="touches"in o?o.touches[0].clientX:o.clientX,a="touches"in o?o.touches[0].clientY:o.clientY;this.isDragging||!Qi&&o.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("pointercancel",this.handleDragStop),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),document.addEventListener("touchcancel",this.handleDragStop),this.options.start(i,a))},this.handleDragStop=o=>{let i="changedTouches"in o?o.changedTouches[0].clientX:o.clientX,a="changedTouches"in o?o.changedTouches[0].clientY:o.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.options.stop(i,a)},this.handleDragMove=o=>{let i="touches"in o?o.touches[0].clientX:o.clientX,a="touches"in o?o.touches[0].clientY:o.clientY;window.getSelection()?.removeAllRanges(),this.options.move(i,a)},this.element=t,this.options={start:()=>{},stop:()=>{},move:()=>{},...e},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),Qi&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.element.removeEventListener("pointerdown",this.handleDragStart),Qi&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(t){(t!==void 0?t:!this.isActive)?this.start():this.stop()}}});var Ds,hl,Le,Rs=d(()=>{gt();to();Ds="important",hl=" !"+Ds,Le=Wt(class extends Lt{constructor(t){if(super(t),t.type!==ct.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{let i=t[o];return i==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){let{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?o.removeProperty(i):o[i]=null);for(let i in e){let a=e[i];if(a!=null){this.ft.add(i);let r=typeof a=="string"&&a.endsWith(hl);i.includes("-")||r?o.setProperty(i,r?a.slice(0,-11):a,r?Ds:""):o[i]=a}}return W}})});var Ts=d(()=>{Rs()});function ea(t,e,o){let i=(t-e)/o;return Math.abs(i-Math.round(i))>1e-9}var dl,y,Os=d(()=>{Ki();Zi();Ji();ta();kt();fe();nt();at();lt();st();j();G();T();k();J();Pt();Ts();dl=()=>({observedAttributes:["min","max","step"],checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]},o=(i,a,r,s)=>{if(typeof document>"u")return"";let l=document.createElement("input");return l.type="range",l.min=String(a),l.max=String(r),l.step=String(s),l.value=String(i),l.checkValidity(),l.validationMessage};if(t.isRange){let i=t.minValue,a=t.maxValue;if(i<t.min)return e.isValid=!1,e.invalidKeys.push("rangeUnderflow"),e.message=o(i,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,e;if(a>t.max)return e.isValid=!1,e.invalidKeys.push("rangeOverflow"),e.message=o(a,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,e;if(t.step&&t.step!==1){let r=ea(i,t.min,t.step),s=ea(a,t.min,t.step);if(r||s){e.isValid=!1,e.invalidKeys.push("stepMismatch");let l=r?i:a;return e.message=o(l,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,e}}}else{let i=t.value;if(i<t.min)return e.isValid=!1,e.invalidKeys.push("rangeUnderflow"),e.message=o(i,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,e;if(i>t.max)return e.isValid=!1,e.invalidKeys.push("rangeOverflow"),e.message=o(i,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,e;if(t.step&&t.step!==1&&ea(i,t.min,t.step))return e.isValid=!1,e.invalidKeys.push("stepMismatch"),e.message=o(i,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,e}return e}}),y=class extends V{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new dt(this,"hint","label"),this.localize=new X(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=null,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="m",this.min=0,this.max=100,this.step=1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,dl()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){if(this.valueHasChanged){let e=this._value??this.minValue??0;return ut(e,this.min,this.max)}let t=this._value??this.defaultValue;return ut(t,this.min,this.max)}set value(t){t=Number(t)??this.minValue,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get isRange(){return this.range}handleSizeChange(){it(this.localName,this.size)}firstUpdated(t){super.firstUpdated(t),this.isRange?(this.draggableThumbMin=new wo(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,o)=>{this.setThumbValueFromCoordinates(e,o,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new wo(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,o)=>{this.setThumbValueFromCoordinates(e,o,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new wo(this.track,{start:(e,o)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{let i=this.getValueFromCoordinates(e,o),a=Math.abs(i-this.minValue),r=Math.abs(i-this.maxValue);if(a===r)if(i>this.maxValue)this.activeThumb="max";else if(i<this.minValue)this.activeThumb="min";else{let s=this.localize.dir()==="rtl",l=this.orientation==="vertical",u=l?o:e,h=this.lastTrackPosition||u;this.lastTrackPosition=u;let p=u>h!==s&&!l||u<h&&l;this.activeThumb=p?"max":"min"}else this.activeThumb=a<=r?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(e,o,this.activeThumb),this.showRangeTooltips()},move:(e,o)=>{this.activeThumb&&this.setThumbValueFromCoordinates(e,o,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new wo(this.slider,{start:(e,o)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(e,o),this.showTooltip()},move:(e,o)=>{this.setValueFromCoordinates(e,o)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}willUpdate(t){this.isRange&&(t.has("minValue")||t.has("maxValue")||t.has("min")||t.has("max"))&&(this.minValue=ut(this.minValue,this.min,this.maxValue),this.maxValue=ut(this.maxValue,this.minValue,this.max)),super.willUpdate(t)}updated(t){if(this.isRange&&(t.has("minValue")||t.has("maxValue"))&&this.updateFormValue(),t.has("disabled")||t.has("readonly")){let e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(t)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):(this._value=null,this.defaultValue=this.defaultValue??parseFloat(this.getAttribute("value")??String(this.min))),this.valueHasChanged=!1,this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(t){let e=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length,o=Number(this.step),i=Number(this.min),a=Number(this.max);return t=Math.round(t/o)*o,t=ut(t,i,a),parseFloat(t.toFixed(e))}getPercentageFromValue(t){return(t-this.min)/(this.max-this.min)*100}getValueFromCoordinates(t,e){let o=this.localize.dir()==="rtl",i=this.orientation==="vertical",{top:a,right:r,bottom:s,left:l,height:u,width:h}=this.trackBoundingClientRect,p=i?e:t,m=i?{start:a,end:s,size:u}:{start:l,end:r,size:h},f=(i||o?m.end-p:p-m.start)/m.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*f)}handleBlur(){this.isRange?requestAnimationFrame(()=>{let t=this.shadowRoot?.activeElement;t===this.thumbMin||t===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(t){let e=t.target;this.isRange?(e===this.thumbMin?this.activeThumb="min":e===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(t){let e=this.localize.dir()==="rtl",o=t.target;if(this.disabled||this.readonly||this.isRange&&(o===this.thumbMin?this.activeThumb="min":o===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;let i=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value,a=i;switch(t.key){case"ArrowUp":case(e?"ArrowLeft":"ArrowRight"):t.preventDefault(),a=this.clampAndRoundToStep(i+this.step);break;case"ArrowDown":case(e?"ArrowRight":"ArrowLeft"):t.preventDefault(),a=this.clampAndRoundToStep(i-this.step);break;case"Home":t.preventDefault(),a=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":t.preventDefault(),a=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":t.preventDefault();let r=Math.max(i+(this.max-this.min)/10,i+this.step);a=this.clampAndRoundToStep(r);break;case"PageDown":t.preventDefault();let s=Math.min(i-(this.max-this.min)/10,i-this.step);a=this.clampAndRoundToStep(s);break;case"Enter":_s(t,this);return}a!==i&&(this.isRange?(this.activeThumb==="min"?a>this.maxValue?(this.maxValue=a,this.minValue=a):this.minValue=Math.max(this.min,a):a<this.minValue?(this.minValue=a,this.maxValue=a):this.maxValue=Math.min(this.max,a),this.updateFormValue()):this.value=ut(a,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(t){t.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(t,e){let o=this.value;this.value=this.getValueFromCoordinates(t,e),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(t,e,o){let i=this.getValueFromCoordinates(t,e),a=o==="min"?this.minValue:this.maxValue;o==="min"?i>this.maxValue?(this.maxValue=i,this.minValue=i):this.minValue=Math.max(this.min,i):i<this.minValue?(this.minValue=i,this.maxValue=i):this.maxValue=Math.min(this.max,i),a!==(o==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;let t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(t&&(t.open=!0),e&&(e.open=!1)):this.activeThumb==="max"&&(e&&(e.open=!0),t&&(t.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;let t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");t&&(t.open=!1),e&&(e.open=!1)}updateFormValue(t){if(this.isRange){let e=new FormData;e.append(this.name||"",String(this.minValue)),e.append(this.name||"",String(this.maxValue)),this.setValue(e,e);return}super.updateFormValue(t)}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){if(this.isRange){for(let t of Gi())if(t===this.thumbMin){this.thumbMin.blur();break}else if(t===this.thumbMax){this.thumbMax.blur();break}}else this.slider.blur()}stepDown(){if(this.isRange){let t=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=ut(t,this.min,this.maxValue),this.updateFormValue()}else{let t=this.clampAndRoundToStep(this.value-this.step);this.value=t}}stepUp(){if(this.isRange){let t=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=ut(t,this.minValue,this.max),this.updateFormValue()}else{let t=this.clampAndRoundToStep(this.value+this.step);this.value=t}}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=this.label?!0:!!t,i=this.hint?!0:!!e,a=this.hasSlotController.test("reference"),r=O({xs:this.size==="xs",s:this.size==="s"||this.size==="small",m:this.size==="m"||this.size==="medium",l:this.size==="l"||this.size==="large",xl:this.size==="xl",small:this.size==="small"||this.size==="s",medium:this.size==="medium"||this.size==="m",large:this.size==="large"||this.size==="l",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),s=[];if(this.withMarkers)for(let g=this.min;g<=this.max;g+=this.step)s.push(this.getPercentageFromValue(g));let l=w`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${O({vh:!o,"has-label":o})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,u=w`
      <div
        id="hint"
        part="hint"
        class=${O({"has-slotted":i})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,h=this.withMarkers?w`
          <div id="markers" part="markers">
            ${s.map(g=>w`<span part="marker" class="marker" style=${Le({"--position":`${g}%`})}></span>`)}
          </div>
        `:"",p=a?w`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",m=(g,f)=>this.withTooltip?w`
            <wa-tooltip
              id=${`tooltip${g!=="thumb"?"-"+g:""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                tooltip:tooltip__tooltip,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${g}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter=="function"?this.valueFormatter(f):this.localize.number(f)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){let g=ut(this.getPercentageFromValue(this.minValue),0,100),f=ut(this.getPercentageFromValue(this.maxValue),0,100);return w`
        ${l}

        <div id="slider" part="slider" class=${r}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${Le({"--start":`${Math.min(g,f)}%`,"--end":`${Math.max(g,f)}%`})}
            ></div>

            ${h}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${Le({"--position":`${g}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.minValue):this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (minimum value)`:"Minimum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style=${Le({"--position":`${f}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.maxValue):this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (maximum value)`:"Maximum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${p} ${u}
        </div>

        ${m("thumb-min",this.minValue)} ${m("thumb-max",this.maxValue)}
      `}else{let g=ut(this.getPercentageFromValue(this.value),0,100),f=ut(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return w`
        ${l}

        <div
          id="slider"
          part="slider"
          class=${r}
          role="slider"
          aria-disabled=${this.disabled?"true":"false"}
          aria-readonly=${this.disabled?"true":"false"}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.value):this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled?-1:0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${Le({"--start":`${f}%`,"--end":`${g}%`})}
            ></div>

            ${h}
            <span id="thumb" part="thumb" style=${Le({"--position":`${g}%`})}></span>
          </div>

          ${p} ${u}
        </div>

        ${m("thumb",this.value)}
      `}}};y.formAssociated=!0;y.observeSlots=!0;y.css=[rt,At,Fs];n([$("#slider")],y.prototype,"slider",2);n([$("#thumb")],y.prototype,"thumb",2);n([$("#thumb-min")],y.prototype,"thumbMin",2);n([$("#thumb-max")],y.prototype,"thumbMax",2);n([$("#track")],y.prototype,"track",2);n([$("#tooltip")],y.prototype,"tooltip",2);n([c()],y.prototype,"label",2);n([c({attribute:"hint"})],y.prototype,"hint",2);n([c({reflect:!0})],y.prototype,"name",2);n([c({type:Number,attribute:"min-value"})],y.prototype,"minValue",2);n([c({type:Number,attribute:"max-value"})],y.prototype,"maxValue",2);n([c({attribute:"value",reflect:!0,type:Number})],y.prototype,"defaultValue",2);n([N()],y.prototype,"value",1);n([c({type:Boolean,reflect:!0})],y.prototype,"range",2);n([c({type:Boolean})],y.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],y.prototype,"readonly",2);n([c({reflect:!0})],y.prototype,"orientation",2);n([c({reflect:!0})],y.prototype,"size",2);n([S("size")],y.prototype,"handleSizeChange",1);n([c({attribute:"indicator-offset",type:Number})],y.prototype,"indicatorOffset",2);n([c({type:Number})],y.prototype,"min",2);n([c({type:Number})],y.prototype,"max",2);n([c({type:Number})],y.prototype,"step",2);n([c({type:Boolean})],y.prototype,"autofocus",2);n([c({attribute:"tooltip-distance",type:Number})],y.prototype,"tooltipDistance",2);n([c({attribute:"tooltip-placement",reflect:!0})],y.prototype,"tooltipPlacement",2);n([c({attribute:"with-markers",type:Boolean})],y.prototype,"withMarkers",2);n([c({attribute:"with-tooltip",type:Boolean})],y.prototype,"withTooltip",2);n([c({attribute:"with-label",type:Boolean})],y.prototype,"withLabel",2);n([c({attribute:"with-hint",type:Boolean})],y.prototype,"withHint",2);n([c({attribute:!1})],y.prototype,"valueFormatter",2);y=n([R("wa-slider")],y)});var Ms,oi=d(()=>{k();Ms=L`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip {
    --popup-border-width: var(--wa-tooltip-border-width);

    /* Inset box-shadow, not a border: Safari seams a clip-path edge that runs along a border. */
    &::part(arrow) {
      box-shadow: inset calc(-1 * var(--wa-tooltip-border-width)) calc(-1 * var(--wa-tooltip-border-width)) 0 0
        var(--wa-tooltip-border-color);
    }
  }
`});function Bs(t,e){for(;e;){if(e===t)return!0;e instanceof Element&&e.assignedSlot?e=e.assignedSlot:e.parentNode?e=e.parentNode:e instanceof ShadowRoot?e=e.host:e=null}return!1}var B,oa=d(()=>{oi();jt();Xt();Yt();Kt();bo();Zt();fe();Pe();Jt();j();Q();T();k();J();Pt();B=class extends H{constructor(){super(...arguments),this.dismissedByPress=!1,this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.dismissedByPress=!1,this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{if(this.hasTrigger("click")){this.open?this.hide():this.show();return}this.hasTrigger("manual")||this.lightDismiss()},this.handleFocus=()=>{this.dismissedByPress||this.hasTrigger("focus")&&this.show()},this.handleMouseDown=()=>{this.hasTrigger("click")||this.hasTrigger("manual")||this.lightDismiss()},this.handleDocumentKeyDown=t=>{this.hasTrigger("manual")||t.key==="Escape"&&this.open&&ve(this)&&(t.preventDefault(),t.stopPropagation(),this.hide())},this.handleDocumentClick=t=>{this.hasTrigger("manual")||this.anchor&&t.composedPath().includes(this.anchor)||this.hide()},this.handleMouseOver=()=>{this.dismissedByPress||this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=t=>{let e=t.relatedTarget,o=!!(e&&this.anchor&&Bs(this.anchor,e)),i=!!(e&&Bs(this,e));o||i||(this.dismissedByPress=!1,this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)))}}connectedCallback(){super.connectedCallback(),typeof document<"u"&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.dismissedByPress=!1,this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=Ho("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),Gt(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(t){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition()),super.firstUpdated(t)}lightDismiss(){clearTimeout(this.hoverTimeout),this.dismissedByPress=!0,this.hide()}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,e){let i=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);i.includes(e)||(i.push(e),t.setAttribute("aria-labelledby",i.join(" ")))}removeFromAriaLabelledBy(t,e){let a=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(r=>r!==e);a.length>0?t.setAttribute("aria-labelledby",a.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;let t=new De;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.hasTrigger("manual")||(document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),Me(this)),this.body.hidden=!1,this.popup.active=!0,await bt(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Oe)}else{let t=new Re;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),Gt(this),await bt(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Te)}}handleForChange(){let t=this.getRootNode?.();if(!t)return;let e=this.for?t.getElementById?.(this.for):null,o=this.anchor;if(e===o)return;this.dismissedByPress=!1;let{signal:i}=this.eventController;e&&(this.addToAriaLabelledBy(e,this.id),e.addEventListener("blur",this.handleBlur,{capture:!0,signal:i}),e.addEventListener("focus",this.handleFocus,{capture:!0,signal:i}),e.addEventListener("click",this.handleClick,{signal:i}),e.addEventListener("mousedown",this.handleMouseDown,{signal:i}),e.addEventListener("mouseover",this.handleMouseOver,{signal:i}),e.addEventListener("mouseout",this.handleMouseOut,{signal:i})),o&&(this.removeFromAriaLabelledBy(o,this.id),o.removeEventListener("blur",this.handleBlur,{capture:!0}),o.removeEventListener("focus",this.handleFocus,{capture:!0}),o.removeEventListener("click",this.handleClick),o.removeEventListener("mousedown",this.handleMouseDown),o.removeEventListener("mouseover",this.handleMouseOver),o.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=e}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Be(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Be(this,"wa-after-hide")}render(){return w`
      <wa-popup
        part="base tooltip"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${O({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};B.css=Ms;B.dependencies={"wa-popup":z};n([$("slot:not([name])")],B.prototype,"defaultSlot",2);n([$(".body")],B.prototype,"body",2);n([$("wa-popup")],B.prototype,"popup",2);n([c()],B.prototype,"placement",2);n([c({type:Boolean,reflect:!0})],B.prototype,"disabled",2);n([c({type:Number})],B.prototype,"distance",2);n([c({type:Boolean,reflect:!0})],B.prototype,"open",2);n([c({type:Number})],B.prototype,"skidding",2);n([c({attribute:"show-delay",type:Number})],B.prototype,"showDelay",2);n([c({attribute:"hide-delay",type:Number})],B.prototype,"hideDelay",2);n([c()],B.prototype,"trigger",2);n([c({attribute:"without-arrow",type:Boolean,reflect:!0})],B.prototype,"withoutArrow",2);n([c()],B.prototype,"for",2);n([N()],B.prototype,"anchor",2);n([S("open",{waitUntilFirstUpdate:!0})],B.prototype,"handleOpenChange",1);n([S("for")],B.prototype,"handleForChange",1);n([S(["distance","placement","skidding"])],B.prototype,"handleOptionsChange",1);n([S("disabled")],B.prototype,"handleDisabledChange",1);B=n([R("wa-tooltip")],B)});var Ps={};Ut(Ps,{default:()=>y});var Vs=d(()=>{Os();Ki();Zi();oa();oi();jt();Xt();Yt();Kt();Ji();ta();bo();lo();co();Zt();kt();fe();nt();Rt();at();lt();st();Pe();Jt();j();Q();G();Bt();T();});var Is,ia=d(()=>{k();Is=L`
  :host {
    --height: var(--wa-form-control-toggle-size);
    --width: calc(var(--height) * 1.75);
    --thumb-size: 0.75em;

    display: inline-flex;
    line-height: var(--wa-form-control-value-line-height);
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    color: var(--wa-form-control-value-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch {
    flex: 0 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--height);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    transition-property: translate, background, border-color, box-shadow;
    transition-duration: var(--wa-transition-normal);
    transition-timing-function: var(--wa-transition-easing);
  }

  :host([did-ssr]:not(:defined)) .switch {
    transition-property: unset;
    transition-duration: unset;
    transition-timing-function: unset;
  }

  .switch .thumb {
    aspect-ratio: 1 / 1;
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--wa-form-control-border-color);
    border-radius: 50%;
    translate: calc((var(--width) - var(--height)) / -2);
    transition: inherit;
  }
  .switch .thumb:dir(rtl) {
    translate: calc((var(--width) - var(--height)) / 2);
  }

  .input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Focus */
  label:not(.disabled) .input:focus-visible ~ [part~='control'] {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Checked */
  .checked .switch {
    background-color: var(--wa-form-control-activated-color);
    border-color: var(--wa-form-control-activated-color);
  }

  .checked .switch .thumb {
    background-color: var(--wa-color-surface-default);
    translate: calc((var(--width) - var(--height)) / 2);
  }
  .checked .switch .thumb:dir(rtl) {
    translate: calc((var(--width) - var(--height)) / -2);
  }

  /* Disabled */
  label:has(> :disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  [part~='label'] {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  @media (forced-colors: active) {
    :checked:enabled + .switch:hover .thumb,
    :checked + .switch .thumb {
      background-color: ButtonText;
    }
  }
`});var qs,Ns=d(()=>{gt();to();ki();qs=Wt(class extends Lt{constructor(t){if(super(t),t.type!==ct.PROPERTY&&t.type!==ct.ATTRIBUTE&&t.type!==ct.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!hr(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===W||e===_)return e;let o=t.element,i=t.name;if(t.type===ct.PROPERTY){if(e===o[i])return W}else if(t.type===ct.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(i))return W}else if(t.type===ct.ATTRIBUTE&&o.getAttribute(i)===e+"")return W;return dr(t),e}})});var Us=d(()=>{Ns()});var q,Hs=d(()=>{ia();kt();ne();nt();at();lt();st();j();G();T();k();J();Pt();Po();Us();q=class extends V{constructor(){super(...arguments),this.hasSlotController=new dt(this,"hint"),this.localize=new X(this),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="m",this.disabled=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,xo()]}get value(){return this._value??"on"}set value(t){this._value=t}handleSizeChange(){it(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(t){this._checked=!!t,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(t){let e=this.localize.dir()==="rtl";t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=e,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!e,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(t){super.willUpdate(t),(t.has("value")||t.has("checked")||t.has("defaultChecked")||t.has("disabled"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){if(this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleValueOrCheckedChange()});return}this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}setValue(t,e){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(t??"on",e)}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){let t=this.hasSlotController.test("hint","withHint"),e=this.hint?!0:!!t,o=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,i=this.didSSR&&!this.hasUpdated?null:qs(this.checked);return w`
      <label
        part="base switch"
        class=${O({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${Y(this.name)}
          value=${Y(this.value)}
          .checked=${Y(i)}
          ?checked=${o}
          ?disabled=${this.disabled}
          ?required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          aria-describedby="hint"
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch">
          <span part="thumb" class="thumb"></span>
        </span>

        <slot part="label" class="label"></slot>
      </label>

      <slot
        id="hint"
        name="hint"
        part="hint"
        class=${O({"has-slotted":e})}
        aria-hidden=${e?"false":"true"}
        >${this.hint}</slot
      >
    `}};q.shadowRootOptions={...V.shadowRootOptions,delegatesFocus:!0};q.css=[At,rt,Is];n([$('input[type="checkbox"]')],q.prototype,"input",2);n([c()],q.prototype,"title",2);n([c({reflect:!0})],q.prototype,"name",2);n([c({reflect:!0})],q.prototype,"value",1);n([c({reflect:!0})],q.prototype,"size",2);n([S("size")],q.prototype,"handleSizeChange",1);n([c({type:Boolean})],q.prototype,"disabled",2);n([c({type:Boolean,attribute:!1})],q.prototype,"checked",1);n([c({type:Boolean,attribute:"checked",reflect:!0})],q.prototype,"defaultChecked",2);n([c({type:Boolean,reflect:!0})],q.prototype,"required",2);n([c({attribute:"hint"})],q.prototype,"hint",2);n([c({attribute:"with-hint",type:Boolean})],q.prototype,"withHint",2);n([S(["checked","defaultChecked"])],q.prototype,"handleStateChange",1);n([S("disabled",{waitUntilFirstUpdate:!0})],q.prototype,"handleDisabledChange",1);q=n([R("wa-switch")],q);q.disableWarning?.("change-in-update")});var Ws={};Ut(Ws,{default:()=>q});var js=d(()=>{Hs();ia();kt();ne();nt();Rt();at();lt();st();j();Q();G();Bt();T();});var Xs={};Ut(Xs,{default:()=>B});var Ys=d(()=>{oa();oi();jt();Xt();Yt();Kt();bo();lo();co();Zt();fe();Pe();Jt();j();Q();G();Bt();T();});var Gs={};Ut(Gs,{default:()=>pl});var Ks,pl,Zs=d(()=>{G();Bt();T();Ks={$code:"zh-cn",$name:"\u7B80\u4F53\u4E2D\u6587",$dir:"ltr",allTagsRemoved:"\u5DF2\u79FB\u9664\u6240\u6709\u6807\u7B7E",am:"\u4E0A\u5348",autosizeColumn:"\u81EA\u9002\u5E94\u5217\u5BBD",captions:"\u5B57\u5E55",carousel:"\u8DD1\u9A6C\u706F",chooseDate:"\u9009\u62E9\u65E5\u671F",chooseDecade:"\u9009\u62E9\u5E74\u4EE3",chooseMonth:"\u9009\u62E9\u6708\u4EFD",chooseTime:"\u9009\u62E9\u65F6\u95F4",chooseYear:"\u9009\u62E9\u5E74\u4EFD",clearEntry:"\u6E05\u7A7A",clearFilter:"\u6E05\u9664\u7B5B\u9009",clearSort:"\u6E05\u9664\u6392\u5E8F",close:"\u5173\u95ED",closeCalendar:"\u5173\u95ED\u65E5\u5386",closeTimeInput:"\u5173\u95ED\u65F6\u95F4\u9009\u62E9\u5668",collapseRow:"\u6298\u53E0\u884C",columnMenu:"\u5217\u9009\u9879",columnMovedToPosition:(t,e,o)=>`${t} \u5DF2\u79FB\u81F3\u7B2C ${e} \u4E2A\u4F4D\u7F6E\uFF0C\u5171 ${o} \u4E2A`,columns:"\u5217",compactPageXOfY:(t,e)=>`${t} / ${e}`,completed:"\u5DF2\u5B8C\u6210",copied:"\u5DF2\u590D\u5236",copy:"\u590D\u5236",createOption:t=>`\u521B\u5EFA"${t}"`,currentlyPlaying:"\u6B63\u5728\u64AD\u653E",currentValue:"\u5F53\u524D\u503C",date:"\u65E5\u671F",datePickerKeyboardHelp:"\u4F7F\u7528\u65B9\u5411\u952E\u66F4\u6539\u503C\uFF1B\u6309 Alt+\u4E0B\u65B9\u5411\u952E\u6253\u5F00\u65E5\u5386\u3002",day:"\u65E5",dayPeriod:"\u4E0A\u5348/\u4E0B\u5348",decrement:"\u51CF\u5C11",deselectAllRows:"\u53D6\u6D88\u9009\u62E9\u6240\u6709\u884C",disabled:"\u5DF2\u7981\u7528",dropFileHere:"Drop file here or click to browse",dropFilesHere:"Drop files here or click to browse",empty:"\u7A7A",endDate:"\u7ED3\u675F\u65E5\u671F",enterFullscreen:"\u8FDB\u5165\u5168\u5C4F",error:"\u9519\u8BEF",exitFullscreen:"\u9000\u51FA\u5168\u5C4F",expandRow:"\u5C55\u5F00\u884C",filterByColumn:t=>`\u6309${t}\u7B5B\u9009`,filterFrom:"\u5F00\u59CB",filterMax:"\u6700\u5927\u503C",filterMin:"\u6700\u5C0F\u503C",filterTo:"\u7ED3\u675F",firstPage:"\u9996\u9875",goToSlide:(t,e)=>`\u8F6C\u5230\u7B2C ${t} \u5F20\u5E7B\u706F\u7247\uFF0C\u5171 ${e} \u5F20`,hideColumn:"\u9690\u85CF\u5217",hidePassword:"\u9690\u85CF\u5BC6\u7801",hour:"\u65F6",incompleteDate:"\u8BF7\u8F93\u5165\u6709\u6548\u7684\u65E5\u671F\u3002",increment:"\u589E\u52A0",jumpBackwardX:t=>`\u5411\u540E\u8DF3\u8F6C ${t} \u9875`,jumpForwardX:t=>`\u5411\u524D\u8DF3\u8F6C ${t} \u9875`,lastPage:"\u672B\u9875",loading:"\u52A0\u8F7D\u4E2D",locked:"\u5DF2\u9501\u5B9A",minute:"\u5206",month:"\u6708",moreOptions:"\u66F4\u591A\u9009\u9879",mute:"\u9759\u97F3",nextDecade:"\u4E0B\u4E00\u4E2A\u5E74\u4EE3",nextMonth:"\u4E0B\u4E2A\u6708",nextPage:"\u4E0B\u4E00\u9875",nextSlide:"\u4E0B\u4E00\u5F20\u5E7B\u706F\u7247",nextVideo:"\u4E0B\u4E00\u4E2A\u89C6\u9891",nextYear:"\u4E0B\u4E00\u5E74",noData:"\u6682\u65E0\u6570\u636E",noOptions:"\u6682\u65E0\u9009\u9879",noResults:"\u65E0\u5339\u914D\u7ED3\u679C",notCompleted:"\u672A\u5B8C\u6210",now:"\u6B64\u523B",numCharacters:t=>`${t}\u4E2A\u5B57\u7B26`,numCharactersRemaining:t=>`\u5269\u4F59${t}\u4E2A\u5B57\u7B26`,numOptionsAvailable:t=>t===0?"\u6CA1\u6709\u53EF\u7528\u9009\u9879":`${t} \u4E2A\u53EF\u7528\u9009\u9879`,numOptionsSelected:t=>t===0?"\u672A\u9009\u62E9\u4EFB\u4F55\u9879\u76EE":t===1?"\u5DF2\u9009\u62E9 1 \u4E2A\u9879\u76EE":`${t} \u9009\u62E9\u9879\u76EE`,numRowsCopied:t=>`\u5DF2\u590D\u5236 ${t} \u884C`,numRowsSelected:t=>`\u5DF2\u9009\u62E9 ${t} \u884C`,optionPosition:(t,e,o)=>`${t}\uFF0C${e} / ${o}`,optionsLoadError:"\u65E0\u6CD5\u52A0\u8F7D\u9009\u9879",pageXOfY:(t,e)=>`\u7B2C ${t} \u9875\uFF0C\u5171 ${e} \u9875`,pagination:"\u5206\u9875",pause:"\u6682\u505C",pauseAnimation:"\u6682\u505C\u52A8\u753B",pictureInPicture:"\u753B\u4E2D\u753B",pinLeft:"\u56FA\u5B9A\u5230\u5DE6\u4FA7",pinRight:"\u56FA\u5B9A\u5230\u53F3\u4FA7",play:"\u64AD\u653E",playAnimation:"\u64AD\u653E\u52A8\u753B",playbackSpeed:"\u64AD\u653E\u901F\u5EA6",playlist:"\u64AD\u653E\u5217\u8868",pm:"\u4E0B\u5348",previousDecade:"\u4E0A\u4E00\u4E2A\u5E74\u4EE3",previousMonth:"\u4E0A\u4E2A\u6708",previousPage:"\u4E0A\u4E00\u9875",previousSlide:"\u4E0A\u4E00\u5F20\u5E7B\u706F\u7247",previousVideo:"\u4E0A\u4E00\u4E2A\u89C6\u9891",previousYear:"\u4E0A\u4E00\u5E74",progress:"\u8FDB\u5EA6",rangeTooLong:t=>t===1?"\u8BF7\u9009\u62E9\u4E0D\u8D85\u8FC7 1 \u5929\u7684\u8303\u56F4":`\u8BF7\u9009\u62E9\u4E0D\u8D85\u8FC7 ${t} \u5929\u7684\u8303\u56F4`,rangeTooShort:t=>t===1?"\u8BF7\u9009\u62E9\u81F3\u5C11 1 \u5929\u7684\u8303\u56F4":`\u8BF7\u9009\u62E9\u81F3\u5C11 ${t} \u5929\u7684\u8303\u56F4`,readonly:"\u53EA\u8BFB",remove:"\u5220\u9664",resetColumns:"\u91CD\u7F6E\u5217",resize:"\u8C03\u6574\u5927\u5C0F",resizeColumn:"\u8C03\u6574\u5217\u5BBD",rowsPerPage:"\u6BCF\u9875\u884C\u6570",scrollableRegion:"\u53EF\u6EDA\u52A8\u533A\u57DF",scrollToEnd:"\u6EDA\u52A8\u81F3\u9875\u5C3E",scrollToStart:"\u6EDA\u52A8\u81F3\u9875\u9996",search:"\u641C\u7D22",second:"\u79D2",seek:"\u8DF3\u8F6C",seekProgress:(t,e)=>`${t} / ${e}`,selectAColorFromTheScreen:"\u4ECE\u5C4F\u5E55\u4E2D\u9009\u62E9\u4E00\u79CD\u989C\u8272",selectAllRows:"\u9009\u62E9\u6240\u6709\u884C",selected:"\u5DF2\u9009\u62E9",selectedDateLabel:t=>`\u5DF2\u9009\u62E9\uFF1A${t}`,selectedRangeLabel:t=>`\u5DF2\u9009\u62E9\u8303\u56F4\uFF1A${t}`,selectGroup:"\u9009\u62E9\u5206\u7EC4",selectionCleared:"\u5DF2\u6E05\u9664\u9009\u62E9",selectRow:"\u9009\u62E9\u884C",showingNofMRows:(t,e)=>`\u663E\u793A ${t} \u884C\uFF0C\u5171 ${e} \u884C`,showingXtoYofZ:(t,e,o)=>`${t}\u2013${e}\uFF0C\u5171 ${o} \u9879`,showPassword:"\u663E\u793A\u5BC6\u7801",slideNum:t=>`\u5E7B\u706F\u7247 ${t}`,sortAscending:"\u5347\u5E8F\u6392\u5E8F",sortColumn:"\u6392\u5E8F\u5217",sortDescending:"\u964D\u5E8F\u6392\u5E8F",startDate:"\u5F00\u59CB\u65E5\u671F",steps:"\u6B65\u9AA4",stepXOfY:(t,e)=>`\u7B2C ${t} \u6B65\uFF0C\u5171 ${e} \u6B65`,tagAdded:t=>`\u5DF2\u6DFB\u52A0 ${t}`,tagAlreadyAdded:t=>`${t} \u5DF2\u6DFB\u52A0`,tagInputKeyboardHelp:"\u6309 Backspace \u6216 Delete \u952E\u79FB\u9664\u6B64\u6807\u7B7E\u3002",tagRemoved:t=>`\u5DF2\u79FB\u9664 ${t}`,time:"\u65F6\u95F4",timeInputKeyboardHelp:"\u4F7F\u7528\u65B9\u5411\u952E\u66F4\u6539\u503C\uFF1B\u6309 Alt+\u4E0B\u65B9\u5411\u952E\u6253\u5F00\u65F6\u95F4\u9009\u62E9\u5668\u3002",today:"\u4ECA\u5929",toggleColorFormat:"\u5207\u6362\u989C\u8272\u6A21\u5F0F",tooFewTags:t=>`\u8BF7\u81F3\u5C11\u6DFB\u52A0 ${t} \u4E2A\u6807\u7B7E`,tooManyTags:t=>`\u6700\u591A\u53EA\u80FD\u6DFB\u52A0 ${t} \u4E2A\u6807\u7B7E`,unmute:"\u53D6\u6D88\u9759\u97F3",unpin:"\u53D6\u6D88\u56FA\u5B9A",unpinColumn:"\u53D6\u6D88\u56FA\u5B9A\u5217",videoPlayer:"\u89C6\u9891\u64AD\u653E\u5668",volume:"\u97F3\u91CF",year:"\u5E74",zoomIn:"\u653E\u5927",zoomOut:"\u7F29\u5C0F"};me(Ks);pl=Ks});se();ae();ie();re();T();var fa=Object.freeze(["theater","images","info","minus","plus","expand","arrow-up","crosshair","arrow-right","arrow-left","shuffle","armchair","box","rotate-ccw","sun","settings-2","maximize","move-horizontal","download","external-link","x","chevron-down","check","circle"]),_l=new URL("../icons.svg",import.meta.url).href;var ml={check:"check",circle:"circle","chevron-down":"chevron-down",xmark:"x"};function Js(t){return{resolver(e){let o=t(e);if(!fa.includes(o))throw new Error(`Unregistered UI icon: ${e}`);return new URL(`../icons.svg#${o}`,import.meta.url).href},spriteSheet:!0,mutator(e){for(let[o,i]of Object.entries({viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}))e.setAttribute(o,i)}}}Co("system",Js(t=>ml[t]));Co("default",Js(t=>t));await Promise.all([Promise.resolve().then(()=>(fr(),mr)),Promise.resolve().then(()=>(Ar(),Lr)),Promise.resolve().then(()=>(Es(),xs)),Promise.resolve().then(()=>(zs(),$s)),Promise.resolve().then(()=>(Vs(),Ps)),Promise.resolve().then(()=>(js(),Ws)),Promise.resolve().then(()=>(Ys(),Xs)),Promise.resolve().then(()=>(Zs(),Gs))]);
/*! For license information please see components.js.LEGAL.txt */
