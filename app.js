// ============================================================
// IMMI TALLER - APP.JS
// ============================================================

const CONFIG = {
  SUPABASE_URL: 'https://clbhrpjftwjbndmcammm.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsYmhycGpmdHdqYm5kbWNhbW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1Njc4NDUsImV4cCI6MjA5NDE0Mzg0NX0.M4QIyXmr-UEeUr679fM2rU1uUISHyoXO_c86TIsKZc0',
  EMAILJS_SERVICE_ID: 'service_c0f9srk',
  EMAILJS_PUBLIC_KEY: 'T-qpaYtHz23IGTriO',
  EMAILJS_TEMPLATE_CLIENTE: 'template_n1o3ukb',
  EMAILJS_TEMPLATE_VENDEDOR: 'template_kh6s91d',
  EMAILJS_TEMPLATE_PERSONALIZADO: 'TU_TEMPLATE_PERSONALIZADO',
};

// ============================================================
// CSS
// ============================================================
const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--lino:#f4f0e8;--lino-osc:#e8e2d4;--marfil:#faf8f3;--oro:#b8975a;--oro-cl:#d4b483;--oro-osc:#8b6d3a;--carbon:#2c2416;--texto:#3d3020;--suave:#7a6b52;--display:'Cormorant Garamond',serif;--body:'Jost',sans-serif;--sombra:0 4px 24px rgba(44,36,22,.08);--sombra-m:0 8px 40px rgba(44,36,22,.14);--sombra-f:0 16px 60px rgba(44,36,22,.2);--r:2px;--rm:6px;--tr:all .35s cubic-bezier(.4,0,.2,1)}
html{scroll-behavior:smooth}
body{font-family:var(--body);background:var(--marfil);color:var(--texto);font-size:16px;line-height:1.7;overflow-x:hidden}
h1,h2,h3,h4{font-family:var(--display);font-weight:400;line-height:1.2}
h1{font-size:clamp(2.8rem,6vw,5rem)} h2{font-size:clamp(2rem,4vw,3.2rem)} h3{font-size:clamp(1.4rem,2.5vw,2rem)}
p{font-weight:300;color:var(--suave)}
a{color:var(--oro);text-decoration:none;transition:var(--tr)} a:hover{color:var(--oro-osc)}
.wrap{max-width:1200px;margin:0 auto;padding:0 24px}
.tag{font-size:.75rem;font-weight:500;letter-spacing:.25em;text-transform:uppercase;color:var(--oro);display:block;margin-bottom:16px}
.divider{width:60px;height:1px;background:linear-gradient(90deg,transparent,var(--oro),transparent);margin:24px auto}
.btn{display:inline-flex;align-items:center;gap:8px;font-family:var(--body);font-size:.8rem;font-weight:500;letter-spacing:.15em;text-transform:uppercase;cursor:pointer;border:none;border-radius:var(--r);padding:14px 32px;transition:var(--tr)}
.btn-p{background:var(--carbon);color:var(--oro-cl);box-shadow:var(--sombra)} .btn-p:hover{background:#1a1408;transform:translateY(-2px);box-shadow:var(--sombra-m);color:var(--oro-cl)}
.btn-o{background:transparent;color:var(--carbon);border:1px solid var(--carbon)} .btn-o:hover{background:var(--carbon);color:var(--oro-cl)}
.btn-g{background:var(--oro);color:var(--marfil);box-shadow:var(--sombra)} .btn-g:hover{background:var(--oro-osc);transform:translateY(-2px);color:var(--marfil)}
.btn-gh{background:transparent;color:var(--suave);border:1px solid var(--lino-osc);padding:10px 20px} .btn-gh:hover{border-color:var(--oro);color:var(--oro)}
.btn-green{background:#2e7d32;color:white} .btn-green:hover{background:#1b5e20;color:white}
.btn:disabled{opacity:.5;cursor:not-allowed;transform:none!important}
#nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(250,248,243,.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--lino-osc);transition:var(--tr)}
#nav.sc{box-shadow:var(--sombra)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;max-width:1200px;margin:0 auto}
.nav-logo{font-family:var(--display);font-size:1.6rem;font-style:italic;color:var(--carbon);cursor:pointer} .nav-logo span{color:var(--oro);font-weight:300}
.nav-links{display:flex;gap:32px;list-style:none;align-items:center}
.nav-links a,.nav-links button{font-size:.78rem;letter-spacing:.15em;text-transform:uppercase;color:var(--suave);font-weight:400;cursor:pointer;background:none;border:none;font-family:var(--body)}
.nav-links a:hover,.nav-links button:hover{color:var(--oro)}
.ham{display:none;cursor:pointer;flex-direction:column;gap:5px;background:none;border:none} .ham span{width:24px;height:1.5px;background:var(--carbon);display:block}
#hero{min-height:100vh;background:linear-gradient(160deg,var(--marfil) 0%,var(--lino) 60%,#ede5d0 100%);display:flex;align-items:center;padding-top:80px;position:relative;overflow:hidden}
#hero::before{content:'✦';position:absolute;top:15%;right:8%;font-size:8rem;color:var(--oro);opacity:.06;animation:float 6s ease-in-out infinite}
#hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:120px;background:linear-gradient(transparent,var(--marfil))}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;width:100%;max-width:1200px;margin:0 auto;padding:0 24px}
.hero-orn{font-size:.75rem;letter-spacing:.3em;text-transform:uppercase;color:var(--oro);display:flex;align-items:center;gap:12px;margin-bottom:24px;font-weight:300}
.hero-orn::before,.hero-orn::after{content:'';flex:1;max-width:40px;height:1px;background:var(--oro);opacity:.5}
.hero-sub{font-family:var(--display);font-size:clamp(1.3rem,2.5vw,2rem);font-style:italic;color:var(--suave);font-weight:300;margin-bottom:28px}
.hero-desc{font-size:1rem;line-height:1.8;margin-bottom:40px;max-width:480px}
.hero-ctas{display:flex;gap:16px;flex-wrap:wrap}
.hero-img{position:relative;background:linear-gradient(145deg,var(--lino-osc),var(--lino));border-radius:4px;aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;overflow:hidden;box-shadow:var(--sombra-f)}
.hero-img img{width:100%;height:100%;object-fit:cover}
.hero-ph{text-align:center;padding:40px;font-family:var(--display);color:var(--suave)} .hero-ph .ic{font-size:4rem;opacity:.3;margin-bottom:16px}
.hero-frame{position:absolute;inset:12px;border:1px solid rgba(184,151,90,.3);border-radius:2px;pointer-events:none}
section{padding:100px 0} .sec-hdr{text-align:center;margin-bottom:64px} .sec-hdr h2{margin-bottom:16px} .sec-hdr p{max-width:560px;margin:0 auto}
#sobre{background:var(--carbon);color:var(--lino);position:relative;overflow:hidden}
#sobre::before{content:'☩';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:20rem;color:rgba(184,151,90,.04);pointer-events:none}
#sobre .tag{color:var(--oro-cl)} #sobre h2{color:var(--lino)} #sobre p{color:rgba(244,240,232,.7)}
.sobre-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
.valores{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:40px}
.val{padding:24px;border:1px solid rgba(184,151,90,.2);border-radius:var(--r)} .val-ic{font-size:1.5rem;margin-bottom:8px}
.val h4{font-family:var(--display);font-size:1.1rem;color:var(--oro-cl);margin-bottom:4px}
#precios{background:#fdfbf7}
.precios-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
.p-card{background:var(--marfil);border:1px solid var(--lino-osc);border-radius:var(--rm);padding:40px 32px;text-align:center;transition:var(--tr);position:relative;overflow:hidden}
.p-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--lino-osc);transition:var(--tr)}
.p-card:hover::before,.p-card.dest::before{background:linear-gradient(90deg,var(--oro),var(--oro-cl))} .p-card:hover{transform:translateY(-4px);box-shadow:var(--sombra-m)} .p-card.dest{border-color:var(--oro)}
.p-badge{position:absolute;top:12px;right:12px;background:var(--oro);color:var(--marfil);font-size:.65rem;letter-spacing:.1em;padding:4px 10px;border-radius:20px;text-transform:uppercase;font-weight:500}
.p-tam{font-family:var(--display);font-size:1.6rem;color:var(--texto);margin-bottom:8px}
.p-val{font-family:var(--display);font-size:2.8rem;color:var(--oro-osc);margin-bottom:4px;line-height:1} .p-val span{font-size:1.2rem;color:var(--suave)}
.p-desc{font-size:.88rem;margin-bottom:24px}
.gal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.gal-item{aspect-ratio:1;overflow:hidden;border-radius:var(--r);background:var(--lino);position:relative;cursor:pointer}
.gal-item img{width:100%;height:100%;object-fit:cover;transition:transform .5s} .gal-item:hover img{transform:scale(1.05)}
.gal-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(44,36,22,.8) 0%,transparent 60%);opacity:0;transition:var(--tr);display:flex;align-items:flex-end;padding:20px}
.gal-item:hover .gal-ov{opacity:1} .gal-ov span{font-family:var(--display);color:var(--lino);font-size:1rem;font-style:italic}
#lugares{background:var(--lino)}
.lugares-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}
.l-card{background:var(--marfil);border:1px solid var(--lino-osc);border-radius:var(--rm);padding:32px;transition:var(--tr);display:flex;flex-direction:column;gap:16px}
.l-card:hover{transform:translateY(-3px);box-shadow:var(--sombra-m)} .l-info h4{font-family:var(--display);font-size:1.3rem;margin-bottom:4px}
.l-link{display:inline-flex;align-items:center;gap:6px;font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;color:var(--oro);font-weight:500;margin-top:auto}
#redes{background:var(--carbon);color:var(--lino);text-align:center} #redes h2{color:var(--lino);margin-bottom:16px} #redes p{color:rgba(244,240,232,.6);margin-bottom:40px}
.redes-links{display:flex;justify-content:center;gap:20px;flex-wrap:wrap}
.r-btn{display:flex;align-items:center;gap:12px;padding:16px 32px;border-radius:var(--r);font-family:var(--body);font-size:.85rem;font-weight:500;letter-spacing:.1em;cursor:pointer;text-transform:uppercase;transition:var(--tr);border:none;text-decoration:none}
.r-ig{background:linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);color:white} .r-ig:hover{transform:translateY(-3px);color:white}
.r-wa{background:#25d366;color:white} .r-wa:hover{transform:translateY(-3px);color:white}
.cont-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
.cont-info{display:flex;flex-direction:column;gap:24px}
.cont-item{display:flex;align-items:flex-start;gap:16px}
.cont-ic{width:44px;height:44px;border-radius:50%;background:var(--lino);border:1px solid var(--lino-osc);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0}
.cont-item h4{font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px;color:var(--suave)} .cont-item p,.cont-item a{font-size:1rem;color:var(--texto)}
footer{background:var(--carbon);color:rgba(244,240,232,.5);text-align:center;padding:40px 24px;font-size:.82rem}
.foot-logo{font-family:var(--display);font-size:1.8rem;font-style:italic;color:var(--oro);display:block;margin-bottom:8px}
.page-hdr{background:linear-gradient(135deg,var(--carbon) 0%,#3d3020 100%);padding:120px 0 60px;text-align:center} .page-hdr h1{color:var(--lino)}
.filtros{display:flex;align-items:center;gap:16px;flex-wrap:wrap;padding:32px 0;border-bottom:1px solid var(--lino-osc);margin-bottom:40px}
.f-btn{padding:8px 20px;border-radius:20px;border:1px solid var(--lino-osc);background:transparent;font-family:var(--body);font-size:.82rem;letter-spacing:.08em;cursor:pointer;transition:var(--tr);text-transform:uppercase;color:var(--suave)}
.f-btn.on,.f-btn:hover{background:var(--carbon);color:var(--oro-cl);border-color:var(--carbon)}
.tipo-card{background:var(--marfil);border:1px solid var(--lino-osc);border-radius:var(--rm);overflow:hidden;transition:var(--tr)}
.tipo-card:hover{transform:translateY(-4px);box-shadow:var(--sombra-m)}
.tipo-img{aspect-ratio:1;overflow:hidden;background:var(--lino);display:flex;align-items:center;justify-content:center;position:relative}
.tipo-img img{width:100%;height:100%;object-fit:cover;transition:transform .4s} .tipo-card:hover .tipo-img img{transform:scale(1.04)}
.tipo-sin-stock{position:absolute;top:0;left:0;right:0;background:rgba(198,40,40,.9);color:white;text-align:center;padding:6px;font-size:.75rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase}
.tipo-info{padding:20px} .tipo-cod{font-size:.72rem;letter-spacing:.15em;color:var(--oro);text-transform:uppercase}
.tipo-nom{font-family:var(--display);font-size:1.3rem;margin:4px 0 12px}
.tipo-stock-row{display:flex;align-items:center;gap:8px;margin-bottom:6px;font-size:.82rem;flex-wrap:wrap}
.tipo-acc{padding:16px 20px;border-top:1px solid var(--lino-osc)} .tipo-acc .btn{width:100%;justify-content:center;font-size:.72rem}
.stepper{display:flex;justify-content:center;margin-bottom:60px;border-bottom:1px solid var(--lino-osc)}
.step{flex:1;max-width:200px;text-align:center;padding:16px;border-bottom:2px solid transparent;transition:var(--tr)} .step.on{border-bottom-color:var(--oro)}
.step-n{width:32px;height:32px;border-radius:50%;margin:0 auto 8px;display:flex;align-items:center;justify-content:center;font-size:.85rem;background:var(--lino-osc);color:var(--suave);font-family:var(--body);font-weight:500;transition:var(--tr)}
.step.on .step-n{background:var(--oro);color:white} .step.done .step-n{background:var(--carbon);color:var(--oro-cl)}
.step-l{font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--suave)} .step.on .step-l{color:var(--oro)}
.compra-panel{max-width:680px;margin:0 auto}
.tam-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:32px}
.tam-opt{border:2px solid var(--lino-osc);border-radius:var(--rm);padding:24px 16px;text-align:center;cursor:pointer;transition:var(--tr);background:var(--marfil)}
.tam-opt:hover,.tam-opt.sel{border-color:var(--oro);background:#faf5ea}
.tam-ic{font-size:2rem;margin-bottom:8px} .tam-nom{font-family:var(--display);font-size:1.2rem;margin-bottom:4px} .tam-pre{font-size:.85rem;color:var(--oro-osc);font-weight:500}
.fg{margin-bottom:24px} .fl{display:block;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:var(--suave);margin-bottom:8px;font-weight:500}
.fi,.fs,.ft{width:100%;padding:14px 16px;border:1px solid var(--lino-osc);border-radius:var(--r);background:var(--marfil);color:var(--texto);font-family:var(--body);font-size:.95rem;transition:var(--tr);outline:none}
.fi:focus,.fs:focus,.ft:focus{border-color:var(--oro);box-shadow:0 0 0 3px rgba(184,151,90,.12)} .ft{resize:vertical;min-height:120px}
.pago-opts{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px}
.pago-opt{border:2px solid var(--lino-osc);border-radius:var(--rm);padding:20px;text-align:center;cursor:pointer;transition:var(--tr);background:var(--marfil)}
.pago-opt:hover,.pago-opt.sel{border-color:var(--oro);background:#faf5ea} .pago-ic{font-size:2rem;margin-bottom:8px} .pago-nom{font-family:var(--display);font-size:1rem}
.resumen{background:var(--lino);border:1px solid var(--lino-osc);border-radius:var(--rm);padding:24px;margin-bottom:24px}
.res-item{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--lino-osc);font-size:.9rem}
.res-item:last-child{border:none;font-weight:500} .res-item span:first-child{color:var(--suave)}
.res-tot{color:var(--oro-osc)!important;font-family:var(--display)!important;font-size:1.3rem!important}
.overlay{position:fixed;inset:0;background:rgba(44,36,22,.6);z-index:2000;display:none;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px)}
.overlay.on{display:flex}
.modal{background:var(--marfil);border-radius:var(--rm);padding:40px;max-width:560px;width:100%;box-shadow:var(--sombra-f);position:relative;animation:mIn .35s cubic-bezier(.4,0,.2,1);max-height:90vh;overflow-y:auto}
.m-close{position:absolute;top:16px;right:16px;width:32px;height:32px;border-radius:50%;border:none;background:var(--lino-osc);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1rem;color:var(--suave);transition:var(--tr)}
.m-close:hover{background:var(--carbon);color:var(--lino)} .modal h3{font-family:var(--display);font-size:1.6rem;margin-bottom:12px} .modal p{margin-bottom:24px}
.m-acts{display:flex;gap:12px;flex-wrap:wrap;flex-direction:column}
.adm-layout{display:grid;grid-template-columns:240px 1fr;min-height:100vh}
.adm-side{background:var(--carbon);padding:32px 0;display:flex;flex-direction:column}
.adm-logo{font-family:var(--display);font-size:1.4rem;font-style:italic;color:var(--oro);padding:0 24px;margin-bottom:40px}
.adm-nav{list-style:none;flex:1}
.adm-nav button{display:flex;align-items:center;gap:12px;padding:14px 24px;color:rgba(244,240,232,.6);font-size:.85rem;letter-spacing:.05em;transition:var(--tr);width:100%;text-align:left;background:none;border:none;cursor:pointer;font-family:var(--body)}
.adm-nav button:hover,.adm-nav button.on{background:rgba(184,151,90,.15);color:var(--oro-cl);border-left:2px solid var(--oro)}
.adm-main{background:var(--lino);padding:40px;overflow-y:auto}
.adm-hdr{margin-bottom:32px;display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px}
.adm-hdr h1{font-size:2rem}
.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px;margin-bottom:32px}
.stat{background:var(--marfil);border:1px solid var(--lino-osc);border-radius:var(--rm);padding:24px;text-align:center}
.stat-v{font-family:var(--display);font-size:2.2rem;color:var(--oro-osc)} .stat-l{font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;color:var(--suave);margin-top:4px}
.tbl-wrap{background:var(--marfil);border-radius:var(--rm);overflow:hidden;border:1px solid var(--lino-osc);margin-bottom:24px;overflow-x:auto}
.tbl-hdr{padding:20px 24px;border-bottom:1px solid var(--lino-osc);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
table{width:100%;border-collapse:collapse} th{padding:12px 16px;text-align:left;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--suave);background:var(--lino);font-weight:500;white-space:nowrap}
td{padding:14px 16px;border-bottom:1px solid var(--lino-osc);font-size:.88rem;vertical-align:middle} tr:last-child td{border-bottom:none} tr:hover td{background:var(--lino)}
.badge{display:inline-block;padding:3px 10px;border-radius:20px;font-size:.72rem;font-weight:500}
.b-stock{background:#e8f5e9;color:#2e7d32} .b-cons{background:#fff8e1;color:#f57f17} .b-vend{background:#e3f2fd;color:#1565c0}
.b-pag{background:#e8f5e9;color:#2e7d32} .b-pen{background:#fff8e1;color:#f57f17} .b-can{background:#fce4ec;color:#c62828}
.stock-tipo-card{background:var(--marfil);border:1px solid var(--lino-osc);border-radius:var(--rm);overflow:hidden;margin-bottom:24px}
.stock-tipo-hdr{display:flex;align-items:center;gap:20px;padding:20px 24px;border-bottom:1px solid var(--lino-osc);flex-wrap:wrap}
.stock-tipo-img{width:72px;height:72px;border-radius:var(--r);object-fit:cover;background:var(--lino);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:1.5rem;opacity:.3}
.stock-tipo-info{flex:1} .stock-tipo-nom{font-family:var(--display);font-size:1.4rem} .stock-tipo-cod{font-size:.75rem;letter-spacing:.15em;color:var(--oro);text-transform:uppercase}
.stock-unidades{padding:0 24px 16px}
.unidad-row{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--lino-osc);flex-wrap:wrap} .unidad-row:last-child{border-bottom:none}
.cobro-card{background:var(--marfil);border:1px solid var(--lino-osc);border-radius:var(--rm);padding:24px;margin-bottom:16px}
.cobro-lugar{font-family:var(--display);font-size:1.3rem;margin-bottom:8px} .cobro-monto{font-family:var(--display);font-size:2rem;color:var(--oro-osc);margin-bottom:12px}
.cobro-item{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--lino-osc);font-size:.85rem} .cobro-item:last-child{border:none}
.chart-wrap{background:var(--marfil);border:1px solid var(--lino-osc);border-radius:var(--rm);padding:24px;margin-bottom:24px}
.chart-tit{font-family:var(--display);font-size:1.2rem;margin-bottom:16px}
.bar-chart{display:flex;align-items:flex-end;gap:8px;height:160px}
.bar-it{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px}
.bar-f{width:100%;background:linear-gradient(to top,var(--oro-osc),var(--oro-cl));border-radius:2px 2px 0 0;min-height:4px;transition:height .6s ease}
.bar-lb{font-size:.7rem;color:var(--suave);text-align:center} .bar-v{font-size:.7rem;font-weight:500;color:var(--texto)}
.login-pg{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--carbon),#3d3020)}
.login-box{background:var(--marfil);border-radius:var(--rm);padding:48px;max-width:420px;width:100%;box-shadow:var(--sombra-f)}
.login-logo{text-align:center;margin-bottom:32px} .login-logo span{font-family:var(--display);font-size:2rem;font-style:italic;color:var(--oro)}
.err-box{background:#fce4ec;color:#c62828;padding:12px 16px;border-radius:var(--r);margin-bottom:16px;font-size:.88rem}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
@keyframes mIn{from{opacity:0;transform:scale(.95) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
.fade{animation:fadeUp .6s ease forwards}
@media(max-width:900px){.hero-grid,.sobre-grid,.cont-grid{grid-template-columns:1fr;gap:40px}.hero-img{max-height:400px;aspect-ratio:4/3}.precios-grid{grid-template-columns:1fr;max-width:400px;margin:0 auto}.gal-grid{grid-template-columns:repeat(2,1fr)}.adm-layout{grid-template-columns:1fr}.adm-side{display:none}.valores{grid-template-columns:1fr}}
@media(max-width:640px){.nav-links{display:none}.ham{display:flex}.nav-links.mob-open{display:flex;flex-direction:column;position:absolute;top:70px;left:0;right:0;background:var(--marfil);padding:20px;border-bottom:1px solid var(--lino-osc);gap:16px}.tam-grid{grid-template-columns:1fr}.pago-opts{grid-template-columns:1fr}section{padding:60px 0}.gal-grid{grid-template-columns:repeat(2,1fr)}.stepper{gap:0}.step{padding:12px 4px}.step-l{font-size:.6rem}}
`;

// ============================================================
// ESTADO GLOBAL
// ============================================================
let DB = null;
let CFG = {};
let PRECIOS = {};
let PAGINA = 'home';
let TIPOS_CACHE = [];
let ARCHIVO_DATA = [];
let FILTRO_ARCH = 'todos';
let FILTRO_LUGARES = [];
let COMPRA = { paso:1, tamanio:null, tipo:null, tipoCuadro:null, unidad:null, pago:null };

// ============================================================
// INIT / ROUTER
// ============================================================
function init() {
  const s = document.createElement('style');
  s.textContent = CSS;
  document.head.appendChild(s);
  DB = window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
  emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY);
  window.addEventListener('hashchange', router);
  router();
}

function router() {
  const h = location.hash || '#home';
  if (h === '#archivo') render('archivo');
  else if (h === '#compra') render('compra');
  else if (h === '#admin-login') render('admin-login');
  else if (h === '#admin') render('admin');
  else render('home');
}

function ir(p) { location.hash = '#' + p; }

function irSeccion(id) {
  if (PAGINA !== 'home') { ir('home'); setTimeout(() => document.getElementById(id)?.scrollIntoView({behavior:'smooth'}), 400); }
  else document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
}

async function render(pag) {
  PAGINA = pag;
  const app = document.getElementById('app');
  if (!CFG.email_vendedor) await cargarConfig();
  if (pag === 'home') { app.innerHTML = htmlHome(); await cargarHome(); initNavScroll(); }
  else if (pag === 'archivo') { app.innerHTML = htmlArchivo(); cargarArchivo(); }
  else if (pag === 'compra') { app.innerHTML = htmlCompra(); initCompra(); }
  else if (pag === 'admin-login') app.innerHTML = htmlAdminLogin();
  else if (pag === 'admin') {
    const { data:{ session } } = await DB.auth.getSession();
    if (!session) { ir('admin-login'); return; }
    app.innerHTML = htmlAdmin();
    cargarSecAdmin('kpis');
  }
  window.scrollTo(0,0);
}

async function cargarConfig() {
  const [{ data:cfg },{ data:pre }] = await Promise.all([
    DB.from('configuracion').select('*'),
    DB.from('precios').select('*'),
  ]);
  if (cfg) cfg.forEach(r => CFG[r.clave] = r.valor);
  if (pre) pre.forEach(r => PRECIOS[r.tamanio] = Number(r.precio));
}

function cerrarModal(id) { document.getElementById(id)?.classList.remove('on'); }

// ============================================================
// NAV / FOOTER
// ============================================================
function htmlNav() {
  return `<nav id="nav"><div class="nav-inner">
    <div class="nav-logo" onclick="ir('home')">Immi <span>taller</span></div>
    <ul class="nav-links" id="nav-links">
      <li><button onclick="irSeccion('sobre')">Nosotras</button></li>
      <li><button onclick="irSeccion('precios')">Precios</button></li>
      <li><button onclick="ir('archivo')">Archivo</button></li>
      <li><button onclick="irSeccion('lugares')">Dónde encontrarnos</button></li>
      <li><button class="btn btn-g" style="padding:8px 20px" onclick="ir('compra')">Comprar</button></li>
    </ul>
    <button class="ham" onclick="document.getElementById('nav-links').classList.toggle('mob-open')"><span></span><span></span><span></span></button>
  </div></nav>`;
}

function initNavScroll() {
  window.onscroll = () => document.getElementById('nav')?.classList.toggle('sc', window.scrollY > 50);
}

function htmlFooter() {
  return `<footer><div class="wrap">
    <span class="foot-logo">Immi taller</span>
    <p>Arte sacro pintado a mano · por Pao Navedo</p>
    <p style="margin-top:8px">© ${new Date().getFullYear()} Immi Taller</p>
    <p style="margin-top:32px"><button onclick="ir('admin-login')" style="background:none;border:none;cursor:pointer;color:rgba(244,240,232,0.12);font-size:.7rem;font-family:var(--body);letter-spacing:.1em">admin</button></p>
  </div></footer>`;
}

const IG_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`;
const WA_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

// ============================================================
// HOME
// ============================================================
function htmlHome() {
  const igUrl = CFG.instagram_url || 'https://instagram.com/immi.taller';
  const waUrl = CFG.whatsapp_numero ? `https://wa.me/${CFG.whatsapp_numero}` : '#';
  return `${htmlNav()}
  <section id="hero"><div class="hero-grid">
    <div class="fade">
      <div class="hero-orn">Arte Sacro · Hecho a mano</div>
      <h1>Immi<br><em>taller</em></h1>
      <p class="hero-sub">por Pao Navedo</p>
      <p class="hero-desc">${CFG.descripcion_emprendimiento||'Arte que ora. Cuadros pintados con devoción en acrílico, óleo y acuarela, llevando la fe y la belleza sacra a cada hogar.'}</p>
      <div class="hero-ctas">
        <button class="btn btn-p" onclick="ir('archivo')">Ver archivo de cuadros</button>
        <button class="btn btn-o" onclick="ir('compra')">Encargar cuadro</button>
      </div>
    </div>
    <div class="hero-img fade" style="animation-delay:.2s">
      <div class="hero-ph"><div class="ic">✝</div><p style="font-family:var(--display);font-style:italic;font-size:1.1rem">Tus imágenes aquí</p></div>
      <div class="hero-frame"></div>
    </div>
  </div></section>
  <section id="sobre"><div class="wrap"><div class="sobre-grid">
    <div>
      <span class="tag">Nuestra historia</span>
      <h2>Arte que nace<br>de la fe</h2>
      <div class="divider" style="margin:24px 0"></div>
      <p style="color:rgba(244,240,232,.75);line-height:1.9;margin-bottom:24px">${CFG.descripcion_emprendimiento||'Immi Taller nació del amor por el arte y la devoción a la fe católica.'}</p>
      <button class="btn btn-o" style="border-color:rgba(184,151,90,.5);color:var(--oro-cl)" onclick="ir('archivo')">Ver todos los cuadros</button>
    </div>
    <div class="valores">
      <div class="val"><div class="val-ic">🙏</div><h4>Fe</h4><p>Cada obra nace de la devoción y el amor a lo sagrado</p></div>
      <div class="val"><div class="val-ic">🎨</div><h4>Artesanía</h4><p>Pintado completamente a mano, con técnicas tradicionales</p></div>
      <div class="val"><div class="val-ic">✨</div><h4>Personalización</h4><p>Cada cuadro puede ser único, hecho especialmente para vos</p></div>
      <div class="val"><div class="val-ic">❤️</div><h4>Amor</h4><p>El cariño y dedicación se ve en cada detalle de la obra</p></div>
    </div>
  </div></div></section>
  <section id="galeria-preview" style="background:var(--marfil)"><div class="wrap">
    <div class="sec-hdr"><span class="tag">Archivo de obras</span><h2>Cuadros recientes</h2><p>Una selección de nuestras obras más recientes.</p></div>
    <div class="gal-grid" id="gal-home"><div style="grid-column:1/-1;text-align:center;color:var(--suave);padding:40px">Cargando...</div></div>
    <div style="text-align:center;margin-top:48px"><button class="btn btn-p" onclick="ir('archivo')">Ver archivo completo</button></div>
  </div></section>
  <section id="precios"><div class="wrap">
    <div class="sec-hdr"><span class="tag">Inversión</span><h2>Precios de nuestras obras</h2><p>Cada cuadro es pintado a mano con amor y dedicación. Los personalizados se cotizan aparte.</p></div>
    <div class="precios-grid" id="precios-grid"><div style="grid-column:1/-1;text-align:center;color:var(--suave)">Cargando...</div></div>
  </div></section>
  <section id="lugares"><div class="wrap">
    <div class="sec-hdr"><span class="tag">Dónde encontrarnos</span><h2>Lugares físicos</h2><p>También podés encontrar nuestros cuadros en estos comercios.</p></div>
    <div class="lugares-grid" id="lugares-grid"><div style="text-align:center;color:var(--suave);padding:40px">Cargando...</div></div>
  </div></section>
  <section id="redes"><div class="wrap">
    <span class="tag" style="color:var(--oro-cl)">Seguinos</span>
    <h2>Encontranos en redes</h2>
    <p>Seguí nuestro proceso creativo, novedades y obras nuevas.</p>
    <div class="redes-links" style="margin-top:40px">
      <a href="${igUrl}" target="_blank" class="r-btn r-ig">${IG_SVG} @immi.taller</a>
      <a href="${waUrl}" target="_blank" class="r-btn r-wa">${WA_SVG} WhatsApp</a>
    </div>
  </div></section>
  <section id="contacto" style="background:var(--marfil)"><div class="wrap">
    <div class="sec-hdr"><span class="tag">Hablemos</span><h2>Contacto</h2></div>
    <div class="cont-grid">
      <div class="cont-info">
        <div class="cont-item"><div class="cont-ic">📱</div><div><h4>WhatsApp</h4><a href="${waUrl}" target="_blank">Escribinos</a></div></div>
        <div class="cont-item"><div class="cont-ic">📸</div><div><h4>Instagram</h4><a href="${igUrl}" target="_blank">@immi.taller</a></div></div>
        <div class="cont-item"><div class="cont-ic">✉️</div><div><h4>Email</h4><a href="mailto:${CFG.email_vendedor||''}">${CFG.email_vendedor||'—'}</a></div></div>
      </div>
      <div>
        <p style="font-family:var(--display);font-size:1.4rem;font-style:italic;color:var(--texto);line-height:1.6;margin-bottom:24px">"Cada obra es única como la fe de quien la recibe."</p>
        <p style="margin-bottom:32px">Atendemos pedidos personalizados, consultas y encargos especiales.</p>
        <button class="btn btn-p" onclick="ir('compra')">Encargar un cuadro</button>
      </div>
    </div>
  </div></section>
  ${htmlFooter()}`;
}

async function cargarHome() {
  const [{ data:tipos },{ data:precios },{ data:lugares }] = await Promise.all([
    DB.from('tipos_cuadro').select('*').eq('activo',true).limit(6),
    DB.from('precios').select('*').order('precio'),
    DB.from('lugares').select('*').eq('activo',true),
  ]);
  const galEl = document.getElementById('gal-home');
  if (galEl) galEl.innerHTML = tipos?.length ? tipos.map(t=>`<div class="gal-item" onclick="ir('archivo')">${t.imagen_url?`<img src="${t.imagen_url}" alt="${t.nombre}" loading="lazy"/>`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;opacity:.2">✝</div>'}<div class="gal-ov"><span>${t.nombre}</span></div></div>`).join('') : '<p style="grid-column:1/-1;text-align:center;color:var(--suave)">Próximamente nuestras obras</p>';
  const ics = {'15x15':'🖼️','20x20':'🎨','personalizado':'✨'};
  const precEl = document.getElementById('precios-grid');
  if (precEl && precios?.length) precEl.innerHTML = precios.map(p=>`<div class="p-card ${p.tamanio==='20x20'?'dest':''}">${p.tamanio==='20x20'?'<span class="p-badge">Popular</span>':''}<div class="p-tam">${ics[p.tamanio]||'🖼️'} ${p.tamanio}</div><div class="p-val">${Number(p.precio)>0?`<span>$</span>${Number(p.precio).toLocaleString('es-AR')}`:'A definir'}</div><p class="p-desc">${p.descripcion||''}</p><button class="btn ${p.tamanio==='20x20'?'btn-g':'btn-o'}" style="width:100%;justify-content:center" onclick="ir('compra')">Comprar</button></div>`).join('');
  const lugEl = document.getElementById('lugares-grid');
  if (lugEl) lugEl.innerHTML = lugares?.length ? lugares.map(l=>`<div class="l-card"><div style="font-size:2rem">🏪</div><div class="l-info"><h4>${l.nombre}</h4><p>${l.direccion||''}</p>${l.telefono?`<p>📞 ${l.telefono}</p>`:''}</div>${l.google_maps_url?`<a href="${l.google_maps_url}" target="_blank" class="l-link">📍 Ver en el mapa →</a>`:''}</div>`).join('') : '<p style="text-align:center;color:var(--suave)">Próximamente en locales físicos.</p>';
}

// ============================================================
// ARCHIVO PÚBLICO
// ============================================================
function htmlArchivo() {
  return `${htmlNav()}
  <div class="page-hdr"><div class="wrap"><span class="tag">Arte sacro</span><h1>Archivo de obras</h1><p style="color:rgba(244,240,232,.65);margin-top:12px;max-width:500px;margin-left:auto;margin-right:auto">Cada cuadro es único, pintado con fe y dedicación.</p></div></div>
  <div style="background:var(--marfil);min-height:60vh;padding:40px 0"><div class="wrap">
  <div class="filtros">
  <button class="f-btn on" onclick="setFiltroArch(this,'todos')">Todos</button>
  <button class="f-btn" onclick="setFiltroArch(this,'stock')">Solo en stock</button>
  <div style="position:relative">
    <button class="f-btn" onclick="toggleDropdownLugares()" id="btn-drop-lugares">📍 Lugares <span id="lugares-count"></span> ▾</button>
    <div id="drop-lugares" style="display:none;position:absolute;top:calc(100% + 4px);left:0;background:var(--marfil);border:1px solid var(--lino-osc);border-radius:var(--rm);box-shadow:var(--sombra-m);min-width:240px;max-height:300px;overflow-y:auto;z-index:100;padding:8px 0">
      <div id="drop-lugares-content" style="padding:8px 0">Cargando...</div>
      <div style="border-top:1px solid var(--lino-osc);padding:8px 16px;display:flex;justify-content:space-between;gap:8px">
        <button onclick="limpiarLugares()" style="background:none;border:none;color:var(--suave);font-size:.75rem;cursor:pointer;font-family:var(--body)">Limpiar</button>
        <button onclick="document.getElementById('drop-lugares').style.display='none'" style="background:none;border:none;color:var(--oro);font-size:.75rem;cursor:pointer;font-family:var(--body)">Cerrar</button>
      </div>
    </div>
   </div>
  </div>
    <div id="archivo-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:28px;padding-bottom:80px">
      <p style="grid-column:1/-1;text-align:center;color:var(--suave);padding:40px">Cargando...</p>
    </div>
  </div></div>
  <div class="overlay" id="modal-cons"><div class="modal">
    <button class="m-close" onclick="cerrarModal('modal-cons')">✕</button>
    <div style="text-align:center;font-size:2rem;margin-bottom:12px">🏪</div>
    <h3>Cuadro en consignación</h3>
    <p>Este cuadro está disponible en estos locales:</p>
    <div id="cons-lista" style="margin-bottom:24px"></div>
    <div class="m-acts">
      <button class="btn btn-o" id="btn-comp-pers-cons">🎨 Encargar versión personalizada</button>
      <button class="btn btn-gh" onclick="cerrarModal('modal-cons')">Cerrar</button>
    </div>
  </div></div>
  ${htmlFooter()}`;
}

function setFiltroArch(btn, f) {
  document.querySelectorAll('.f-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on'); FILTRO_ARCH=f; renderArchivo();
}

function toggleDropdownLugares() {
  const d = document.getElementById('drop-lugares');
  d.style.display = d.style.display === 'block' ? 'none' : 'block';
}

function toggleLugarFiltro(checkbox) {
  if (checkbox.checked) {
    if (!FILTRO_LUGARES.includes(checkbox.value)) FILTRO_LUGARES.push(checkbox.value);
  } else {
    FILTRO_LUGARES = FILTRO_LUGARES.filter(id => id !== checkbox.value);
  }
  actualizarContadorLugares();
  renderArchivo();
}

function limpiarLugares() {
  FILTRO_LUGARES = [];
  document.querySelectorAll('#drop-lugares-content input[type="checkbox"]').forEach(cb => cb.checked = false);
  actualizarContadorLugares();
  renderArchivo();
}

function actualizarContadorLugares() {
  const el = document.getElementById('lugares-count');
  if (el) el.textContent = FILTRO_LUGARES.length > 0 ? `(${FILTRO_LUGARES.length})` : '';
}

// Cerrar dropdown si se clickea afuera
document.addEventListener('click', (e) => {
  const drop = document.getElementById('drop-lugares');
  const btn = document.getElementById('btn-drop-lugares');
  if (drop && drop.style.display === 'block' && !drop.contains(e.target) && e.target !== btn && !btn?.contains(e.target)) {
    drop.style.display = 'none';
  }
});


async function cargarArchivo() {
  const { data:tipos } = await DB.from('tipos_cuadro').select('*').eq('activo',true).order('codigo_id');
  if (!tipos||tipos.length===0) { document.getElementById('archivo-grid').innerHTML='<p style="grid-column:1/-1;text-align:center;color:var(--suave);padding:40px">No hay cuadros en el archivo aún.</p>'; return; }
  const ids = tipos.map(t=>t.id);
  const [{ data:unidades },{ data:todosLugares }] = await Promise.all([
    DB.from('unidades_cuadro').select('*,lugares(id,nombre,direccion,google_maps_url)').in('tipo_cuadro_id',ids).eq('activo',true).neq('estado','vendido'),
    DB.from('lugares').select('*').eq('activo',true).order('nombre'),
  ]);
  ARCHIVO_DATA = tipos.map(t=>({...t,unidades:(unidades||[]).filter(u=>u.tipo_cuadro_id===t.id)}));

  const drop = document.getElementById('drop-lugares-content');
  if (drop) {
    drop.innerHTML = (todosLugares||[]).map(l => `
      <label style="display:flex;align-items:center;gap:8px;padding:6px 16px;cursor:pointer;font-size:.88rem;transition:background .2s" onmouseover="this.style.background='var(--lino)'" onmouseout="this.style.background='transparent'">
        <input type="checkbox" value="${l.id}" onchange="toggleLugarFiltro(this)" style="width:16px;height:16px;accent-color:var(--oro);cursor:pointer"/>
        ${l.nombre}
      </label>
    `).join('') || '<p style="padding:8px 16px;color:var(--suave);font-size:.85rem">Sin lugares cargados</p>';
  }

  renderArchivo();
}

function renderArchivo() {
  let data = ARCHIVO_DATA;
  const filtroStockActivo = FILTRO_ARCH === 'stock';
  const filtroLugarActivo = FILTRO_LUGARES.length > 0;

  if (filtroStockActivo || filtroLugarActivo) {
    data = data.filter(t => {
      const tieneStock = t.unidades.some(u=>u.estado==='stock');
      const enAlgunLugar = t.unidades.some(u=>u.estado==='consignacion' && FILTRO_LUGARES.includes(u.lugares?.id));
      if (filtroStockActivo && filtroLugarActivo) return tieneStock || enAlgunLugar;
      if (filtroStockActivo) return tieneStock;
      if (filtroLugarActivo) return enAlgunLugar;
      return true;
    });
  }

  const grid = document.getElementById('archivo-grid');
  if (!grid) return;
  if (data.length===0) { grid.innerHTML='<p style="grid-column:1/-1;text-align:center;color:var(--suave);padding:40px">No hay cuadros con ese filtro.</p>'; return; }
  grid.innerHTML = data.map(t=>{
    const enS = t.unidades.filter(u=>u.estado==='stock');
    const enC = t.unidades.filter(u=>u.estado==='consignacion');
    const sinStock = enS.length===0 && enC.length===0;
    const porLugar = {};
    enC.forEach(u=>{ const n=u.lugares?.nombre||'Sin nombre'; porLugar[n]=(porLugar[n]||0)+1; });
    const tams = [...new Set(t.unidades.map(u=>u.tamanio))];
    return `<div class="tipo-card">
      <div class="tipo-img">
        ${t.imagen_url?`<img src="${t.imagen_url}" alt="${t.nombre}" loading="lazy"/>`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;opacity:.2">✝</div>'}
        ${sinStock?'<div class="tipo-sin-stock">Sin stock</div>':''}
      </div>
      <div class="tipo-info">
        <span class="tipo-cod">${t.codigo_id}</span>
        <div class="tipo-nom">${t.nombre}</div>
        ${t.descripcion?`<p style="font-size:.82rem;margin-bottom:12px">${t.descripcion}</p>`:''}
        ${tams.length?`<p style="font-size:.78rem;color:var(--suave);margin-bottom:8px">Tamaños: ${tams.join(', ')}</p>`:''}
        ${enS.length?`<div class="tipo-stock-row"><span class="badge b-stock">En stock</span><span style="color:var(--suave)">${enS.length} disponible${enS.length!==1?'s':''}</span></div>`:''}
        ${Object.entries(porLugar).map(([lugar,cant])=>`<div class="tipo-stock-row"><span class="badge b-cons">Consignación</span><span style="color:var(--suave)">${cant} en ${lugar}</span></div>`).join('')}
        ${sinStock?'<p style="font-size:.82rem;color:#c62828;margin-top:4px">Sin disponibilidad por ahora</p>':''}
        ${enC.length>0?'<p style="font-size:.78rem;color:var(--suave);margin-top:6px">Precio: a definir según lugar</p>':''}
      </div>
      <div class="tipo-acc">
        ${enS.length>0?`<button class="btn btn-p" onclick="irACompraArchivo('${t.id}')">Comprar este cuadro</button>`:enC.length>0?`<button class="btn btn-g" onclick="mostrarConsig('${t.id}')">Ver en consignación</button>`:`<button class="btn btn-o" onclick="irAPersonalizadoArchivo('${t.id}')">Encargar versión similar</button>`}
      </div>
    </div>`;
  }).join('');
}

function irACompraArchivo(tipoId) {
  const t = ARCHIVO_DATA.find(x=>x.id===tipoId);
  COMPRA = { paso:1, tipo:'stock', tipoCuadro:t, unidad:null, pago:null, tamanio:null };
  ir('compra');
}
function irAPersonalizadoArchivo(tipoId) {
  const t = ARCHIVO_DATA.find(x=>x.id===tipoId);
  COMPRA = { paso:1, tipo:'personalizado_archivo', tipoCuadro:t, unidad:null, pago:null, tamanio:'personalizado' };
  ir('compra');
}
function mostrarConsig(tipoId) {
  const t = ARCHIVO_DATA.find(x=>x.id===tipoId);
  const cons = (t?.unidades||[]).filter(u=>u.estado==='consignacion');
  const lista = document.getElementById('cons-lista');
  if (lista) lista.innerHTML = cons.map(u=>`<div style="background:var(--lino);border-radius:var(--r);padding:12px;margin-bottom:8px"><strong>${u.lugares?.nombre||'Local'}</strong>${u.lugares?.direccion?`<br><span style="font-size:.85rem;color:var(--suave)">${u.lugares.direccion}</span>`:''}${u.lugares?.google_maps_url?`<br><a href="${u.lugares.google_maps_url}" target="_blank" style="font-size:.82rem">📍 Ver en el mapa</a>`:''}</div>`).join('');
  document.getElementById('btn-comp-pers-cons').onclick = () => { cerrarModal('modal-cons'); irAPersonalizadoArchivo(tipoId); };
  document.getElementById('modal-cons').classList.add('on');
}

// ============================================================
// COMPRA WEB
// ============================================================
function htmlCompra() {
  return `${htmlNav()}
  <div class="page-hdr"><div class="wrap"><span class="tag">Adquirí tu obra</span><h1>Comprar cuadro</h1></div></div>
  <div style="background:var(--marfil);padding:60px 0;min-height:60vh"><div class="wrap">
    <div class="stepper">
      <div class="step on" id="stp-1"><div class="step-n">1</div><div class="step-l">Tipo</div></div>
      <div class="step" id="stp-2"><div class="step-n">2</div><div class="step-l">Cuadro</div></div>
      <div class="step" id="stp-3"><div class="step-n">3</div><div class="step-l">Datos</div></div>
      <div class="step" id="stp-4"><div class="step-n">4</div><div class="step-l">Pago</div></div>
    </div>
    <div class="compra-panel" id="compra-panel"></div>
  </div></div>
  ${htmlFooter()}`;
}

async function initCompra() {
  if (!PRECIOS['15x15']) await cargarConfig();
  if (COMPRA.tipoCuadro && COMPRA.tipo==='stock') renderPaso(2, 'sel-tamanio');
  else if (COMPRA.tipoCuadro && COMPRA.tipo==='personalizado_archivo') renderPaso(3);
  else renderPaso(1);
}

function setStepper(paso) {
  [1,2,3,4].forEach(i=>{ const el=document.getElementById(`stp-${i}`); if(!el)return; el.classList.remove('on','done'); if(i<paso)el.classList.add('done'); if(i===paso)el.classList.add('on'); });
}

function renderPaso(paso, sub) {
  setStepper(paso);
  const panel = document.getElementById('compra-panel');
  if (!panel) return;
  if (paso===1) panel.innerHTML = htmlPaso1();
  else if (paso===2) {
    if (sub==='sel-tamanio') renderSelTamanio(panel);
    else if (sub==='sel-tipo-perso') renderSelTipoPerso(panel);
    else if (COMPRA.tipo==='stock') renderSelCuadro(panel);
    else if (!COMPRA.tipo) renderSelTipoPerso(panel);
    else if (COMPRA.tipo==='personalizado_archivo') renderSelTipoArchivo(panel);
  }
  else if (paso===3) panel.innerHTML = htmlPaso3();
  else if (paso===4) { panel.innerHTML = htmlPaso4(); actualizarResumen(); }
  else if (paso===99) panel.innerHTML = htmlExito();
  else if (paso===98) panel.innerHTML = htmlExitoPersonalizado();
  window.scrollTo({top:200,behavior:'smooth'});
}

function htmlPaso1() {
  const ics={'15x15':'🖼️','20x20':'🎨','personalizado':'✨'};
  const descs={'15x15':'Ideal para regalos','20x20':'El más popular','personalizado':'Tamaño a medida'};
  return `<h3 style="font-family:var(--display);font-size:2rem;margin-bottom:8px">¿Qué tipo de cuadro querés?</h3>
  <p style="margin-bottom:32px">Elegí el tamaño o si querés un cuadro personalizado</p>
  <div class="tam-grid">${['15x15','20x20','personalizado'].map(t=>`
    <div class="tam-opt ${COMPRA.tamanio===t?'sel':''}" onclick="selTam('${t}')">
      <div class="tam-ic">${ics[t]}</div>
      <div class="tam-nom">${t==='personalizado'?'Personalizado':t+' cm'}</div>
      <div class="tam-pre">${PRECIOS[t]>0?'$'+Number(PRECIOS[t]).toLocaleString('es-AR'):'A definir'}</div>
      <p style="font-size:.75rem;color:var(--suave);margin-top:4px">${descs[t]}</p>
    </div>`).join('')}
  </div>`;
}

function selTam(t) {
  COMPRA.tamanio = t;
  if (t==='personalizado') { COMPRA.tipo=null; renderPaso(2,'sel-tipo-perso'); }
  else { COMPRA.tipo='stock'; renderSelCuadro(document.getElementById('compra-panel')); setStepper(2); }
}

function renderSelTamanio(panel) {
  setStepper(2);
  const tipo = COMPRA.tipoCuadro;
  const tams = tipo?.tamanios_disponibles||['15x15','20x20'];
  panel.innerHTML = `<h3 style="font-family:var(--display);font-size:2rem;margin-bottom:8px">Elegí el tamaño</h3>
  <p style="margin-bottom:24px">Para <em>${tipo?.nombre||'este cuadro'}</em></p>
  <div class="tam-grid">${tams.map(t=>`
    <div class="tam-opt" onclick="selTamArchivo('${t}')">
      <div class="tam-ic">🖼️</div><div class="tam-nom">${t} cm</div>
      <div class="tam-pre">${PRECIOS[t]>0?'$'+Number(PRECIOS[t]).toLocaleString('es-AR'):'A definir'}</div>
    </div>`).join('')}
  </div>
  <button class="btn btn-gh" onclick="ir('archivo')">← Volver al archivo</button>`;
}

async function selTamArchivo(t) {
  COMPRA.tamanio = t;
  await renderSelCuadro(document.getElementById('compra-panel'));
  setStepper(2);
}

async function renderSelCuadro(panel) {
  let query = DB.from('unidades_cuadro').select('*,tipos_cuadro(nombre,imagen_url,codigo_id)').eq('estado','stock').eq('activo',true);
  if (COMPRA.tipoCuadro) query = query.eq('tipo_cuadro_id',COMPRA.tipoCuadro.id);
  if (COMPRA.tamanio) query = query.eq('tamanio',COMPRA.tamanio);
  const { data:unidades } = await query;
  panel.innerHTML = `<h3 style="font-family:var(--display);font-size:2rem;margin-bottom:8px">Elegí tu cuadro</h3>
  <p style="margin-bottom:24px">Unidades disponibles${COMPRA.tamanio?' en '+COMPRA.tamanio:''}</p>
  <div id="unid-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;margin-bottom:32px">
  ${!unidades||unidades.length===0
    ? `<div style="grid-column:1/-1;text-align:center;padding:32px"><p style="color:var(--suave)">No hay unidades en stock para este criterio.</p><button class="btn btn-o" style="margin-top:16px" onclick="renderPaso(1)">Cambiar selección</button></div>`
    : unidades.map(u=>`<div class="tipo-card" style="cursor:pointer" id="uc-${u.id}" onclick="selUnidadCompra('${u.id}','${(u.tipos_cuadro?.nombre||'').replace(/'/g,"\\'")}','${u.tamanio}')">
        <div class="tipo-img" style="aspect-ratio:1">${u.tipos_cuadro?.imagen_url?`<img src="${u.tipos_cuadro.imagen_url}" style="width:100%;height:100%;object-fit:cover"/>`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2.5rem;opacity:.2">✝</div>'}</div>
        <div class="tipo-info" style="padding:12px">
          <span class="tipo-cod">${u.tipos_cuadro?.codigo_id||''}</span>
          <div class="tipo-nom" style="font-size:1.1rem">${u.tipos_cuadro?.nombre||'—'}</div>
          <p style="font-size:.82rem">${u.tamanio} · ${u.tecnica||'—'}</p>
          <p style="font-family:var(--display);font-size:1.1rem;color:var(--oro-osc);margin-top:4px">${PRECIOS[u.tamanio]>0?'$'+Number(PRECIOS[u.tamanio]).toLocaleString('es-AR'):'A definir'}</p>
        </div>
      </div>`).join('')}
  </div>
  <div style="display:flex;gap:12px">
    <button class="btn btn-gh" onclick="renderPaso(1)">← Volver</button>
    <button class="btn btn-p" id="btn-sig-u" onclick="renderPaso(3)" ${COMPRA.unidad?'':'disabled'}>Continuar →</button>
  </div>`;
}

function selUnidadCompra(id, nombre, tamanio) {
  COMPRA.unidad = { id, nombre, tamanio };
  COMPRA.tamanio = tamanio;
  if (!COMPRA.tipoCuadro) COMPRA.tipoCuadro = { nombre };
  document.querySelectorAll('#unid-grid .tipo-card').forEach(el=>el.style.borderColor='');
  const el = document.getElementById(`uc-${id}`); if(el) el.style.borderColor='var(--oro)';
  const btn = document.getElementById('btn-sig-u'); if(btn) btn.disabled=false;
}

function renderSelTipoPerso(panel) {
  setStepper(2);
  panel.innerHTML = `<h3 style="font-family:var(--display);font-size:2rem;margin-bottom:8px">¿Qué tipo de personalizado?</h3>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0 32px">
    <div class="tam-opt" onclick="selTipoPerso('archivo')"><div class="tam-ic">🖼️</div><div class="tam-nom" style="font-size:1rem">Del archivo</div><p style="font-size:.8rem;color:var(--suave);margin-top:4px">Un cuadro que ya hicimos, reinterpretado (+10%)</p></div>
    <div class="tam-opt" onclick="selTipoPerso('nuevo')"><div class="tam-ic">✨</div><div class="tam-nom" style="font-size:1rem">Completamente nuevo</div><p style="font-size:.8rem;color:var(--suave);margin-top:4px">Una idea única, nunca hecha antes</p></div>
  </div>
  <button class="btn btn-gh" onclick="renderPaso(1)">← Volver</button>`;
}

async function selTipoPerso(tipo) {
  const panel = document.getElementById('compra-panel');
  if (tipo==='nuevo') { COMPRA.tipo='personalizado_nuevo'; COMPRA.tipoCuadro=null; renderPaso(3); }
  else { COMPRA.tipo='personalizado_archivo'; await renderSelTipoArchivo(panel); }
}

async function renderSelTipoArchivo(panel) {
  setStepper(2);
  const { data:tipos } = await DB.from('tipos_cuadro').select('*').eq('activo',true);
  TIPOS_CACHE = tipos||[];
  panel.innerHTML = `<h3 style="font-family:var(--display);font-size:2rem;margin-bottom:8px">Elegí el cuadro base</h3>
  <p style="margin-bottom:24px;color:var(--suave)">Seleccioná qué cuadro querés que recreemos para vos (+10%)</p>
  <div id="arch-sel" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px;margin-bottom:32px">
  ${(tipos||[]).map(t=>`<div class="tipo-card" style="cursor:pointer" id="as-${t.id}" onclick="selTipoCuadroPerso('${t.id}')">
    <div class="tipo-img" style="aspect-ratio:1">${t.imagen_url?`<img src="${t.imagen_url}" style="width:100%;height:100%;object-fit:cover"/>`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2rem;opacity:.2">✝</div>'}</div>
    <div class="tipo-info" style="padding:10px"><span class="tipo-cod">${t.codigo_id}</span><div class="tipo-nom" style="font-size:1rem">${t.nombre}</div></div>
  </div>`).join('')}
  </div>
  <div style="display:flex;gap:12px">
    <button class="btn btn-gh" onclick="renderSelTipoPerso(document.getElementById('compra-panel'))">← Volver</button>
    <button class="btn btn-p" id="btn-sig-arch" onclick="renderPaso(3)" ${COMPRA.tipoCuadro?'':'disabled'}>Continuar →</button>
  </div>`;
  if (COMPRA.tipoCuadro) { const el=document.getElementById(`as-${COMPRA.tipoCuadro.id}`); if(el){el.style.borderColor='var(--oro)'; document.getElementById('btn-sig-arch').disabled=false;} }
}

function selTipoCuadroPerso(id) {
  COMPRA.tipoCuadro = TIPOS_CACHE.find(x=>x.id===id)||{id};
  document.querySelectorAll('#arch-sel .tipo-card').forEach(el=>el.style.borderColor='');
  const el=document.getElementById(`as-${id}`); if(el) el.style.borderColor='var(--oro)';
  const btn=document.getElementById('btn-sig-arch'); if(btn) btn.disabled=false;
}

function htmlPaso3() {
  const esNuevo = COMPRA.tipo==='personalizado_nuevo';
  return `<h3 style="font-family:var(--display);font-size:2rem;margin-bottom:8px">Tus datos</h3>
  <p style="margin-bottom:32px">Necesitamos esta información para coordinar la entrega</p>
  <div class="fg"><label class="fl">Nombre completo *</label><input class="fi" id="c-nom" value="${COMPRA._nombre||''}"/></div>
  <div class="fg"><label class="fl">Email *</label><input class="fi" type="email" id="c-email" value="${COMPRA._email||''}"/></div>
  <div class="fg"><label class="fl">Teléfono / WhatsApp</label><input class="fi" type="tel" id="c-tel" value="${COMPRA._tel||''}"/></div>
  <div class="fg"><label class="fl">Zona de entrega *</label><input class="fi" id="c-zona" value="${COMPRA._zona||''}"/><p style="font-size:.8rem;color:var(--suave);margin-top:6px">⚠️ No realizamos envíos a domicilio. La entrega se coordina personalmente.</p></div>
  ${esNuevo?`
  <div class="fg"><label class="fl">Tamaño deseado</label><select class="fs" id="c-tam-p"><option value="">Seleccioná</option><option value="15x15">15x15 cm</option><option value="20x20">20x20 cm</option><option value="otro">Otro</option></select></div>
  <div class="fg"><label class="fl">Descripción del cuadro *</label><textarea class="ft" id="c-desc" placeholder="Contanos qué querés: imagen, colores, técnica, destino...">${COMPRA._desc||''}</textarea></div>
  <div class="fg"><label class="fl">Imagen de referencia</label>
    <input class="fi" type="file" id="c-imgref-file" accept="image/*" style="padding:10px"/>
    <p style="font-size:.8rem;color:var(--suave);margin-top:6px">Si no tenés imagen ahora, podés enviarla por WhatsApp luego.</p>
  </div>`:''}
  <div style="display:flex;gap:12px">
    <button class="btn btn-gh" onclick="renderPaso(2)">← Volver</button>
    <button class="btn btn-p" onclick="avanzarPaso3()">Continuar →</button>
  </div>`;
}

async function avanzarPaso3() {
  const nom = document.getElementById('c-nom')?.value.trim();
  const email = document.getElementById('c-email')?.value.trim();
  const zona = document.getElementById('c-zona')?.value.trim();
  if (!nom||!email||!zona) { alert('Completá los campos obligatorios.'); return; }
  if (COMPRA.tipo==='personalizado_nuevo') {
    const desc = document.getElementById('c-desc')?.value.trim();
    if (!desc) { alert('Por favor describí el cuadro.'); return; }
    COMPRA._desc = desc;
    const fi = document.getElementById('c-imgref-file');
    if (fi?.files?.length>0) {
      const f = fi.files[0]; const ext = f.name.split('.').pop();
      const fname = `ref-${Date.now()}.${ext}`;
      const { error:ue } = await DB.storage.from('cuadros').upload(fname,f,{upsert:true});
      if (!ue) { const {data:ud} = DB.storage.from('cuadros').getPublicUrl(fname); COMPRA._imgref = ud.publicUrl; }
      else { alert('Error al subir imagen. Podés continuar sin ella.'); COMPRA._imgref=''; }
    } else COMPRA._imgref='';
  }
  COMPRA._nombre=nom; COMPRA._email=email;
  COMPRA._tel = document.getElementById('c-tel')?.value;
  COMPRA._zona = zona;
  renderPaso(4);
}

function htmlPaso4() {
  return `<h3 style="font-family:var(--display);font-size:2rem;margin-bottom:8px">Forma de pago</h3>
  <p style="margin-bottom:24px">Elegí cómo querés abonar</p>
  <div class="pago-opts">
    <div class="pago-opt" id="pag-ef" onclick="selPago('efectivo')"><div class="pago-ic">💵</div><div class="pago-nom">Efectivo</div><p style="font-size:.8rem;color:var(--suave);margin-top:4px">Al momento de la entrega</p></div>
    <div class="pago-opt" id="pag-mp" onclick="selPago('mercadopago')"><div class="pago-ic">💳</div><div class="pago-nom">MercadoPago</div><p style="font-size:.8rem;color:var(--suave);margin-top:4px">Transferencia o tarjeta</p></div>
  </div>
  <div class="resumen" id="resumen"></div>
  <p id="pago-msg" style="font-size:.88rem;color:var(--suave);margin-bottom:16px"></p>
  <div style="display:flex;gap:12px;flex-wrap:wrap">
    <button class="btn btn-gh" onclick="renderPaso(3)">← Volver</button>
    <button class="btn btn-g" id="btn-conf" onclick="confirmarPedido()" disabled>✓ Confirmar pedido</button>
  </div>`;
}

function selPago(met) {
  COMPRA.pago = met;
  document.querySelectorAll('.pago-opt').forEach(o=>o.classList.remove('sel'));
  document.getElementById(`pag-${met==='efectivo'?'ef':'mp'}`).classList.add('sel');
  document.getElementById('btn-conf').disabled = false;
  document.getElementById('pago-msg').textContent = met==='efectivo' ? '💵 Abonás al momento de la entrega.' : '💳 Al confirmar, te enviamos el link de pago.';
}

function actualizarResumen() {
  let precio = 0;
  let cuadroNom = '—';
  if (COMPRA.unidad && COMPRA.tamanio) precio = PRECIOS[COMPRA.tamanio]||0;
  if (COMPRA.tipoCuadro) cuadroNom = COMPRA.tipoCuadro.nombre||'—';
  if (COMPRA.tipo==='personalizado_nuevo') cuadroNom = 'Personalizado nuevo';
  if (COMPRA.tipo==='personalizado_archivo' && precio) precio = precio*(1+Number(CFG.recargo_personalizado_archivo||10)/100);
  COMPRA._precio = precio;
  const el = document.getElementById('resumen'); if(!el) return;
  el.innerHTML = `<h4 style="margin-bottom:16px;font-family:var(--display)">Resumen del pedido</h4>
  <div class="res-item"><span>Cuadro</span><span>${cuadroNom}</span></div>
  <div class="res-item"><span>Tamaño</span><span>${COMPRA.tamanio||'—'}</span></div>
  <div class="res-item"><span>Cliente</span><span>${COMPRA._nombre||'—'}</span></div>
  <div class="res-item"><span>Entrega</span><span>${COMPRA._zona||'—'}</span></div>
  <div class="res-item res-tot"><span>Total</span><span>${precio>0?'$'+Number(precio).toLocaleString('es-AR'):'A definir'}</span></div>`;
}

async function confirmarPedido() {
  const btn = document.getElementById('btn-conf'); btn.disabled=true; btn.textContent='Procesando...';
  const datos = {
    numero_pedido: 'PED-'+Date.now(),
    tipo: COMPRA.tipo,
    tipo_cuadro_id: COMPRA.tipoCuadro?.id||null,
    unidad_id: COMPRA.unidad?.id||null,
    cliente_nombre: COMPRA._nombre,
    cliente_email: COMPRA._email,
    cliente_telefono: COMPRA._tel||null,
    zona_envio: COMPRA._zona,
    metodo_pago: COMPRA.pago,
    tamanio: COMPRA.tamanio,
    precio_total: COMPRA._precio||null,
    descripcion_personalizado: COMPRA._desc||null,
    imagen_referencia_url: COMPRA._imgref||null,
  };
  const { error } = await DB.from('pedidos').insert(datos);
  if (error) { alert('Error al procesar. Intentá de nuevo.'); btn.disabled=false; btn.textContent='✓ Confirmar pedido'; return; }
  if (COMPRA.unidad?.id) await DB.from('unidades_cuadro').update({estado:'vendido'}).eq('id',COMPRA.unidad.id);
  try {
    const ep = {cliente_nombre:datos.cliente_nombre,numero_pedido:datos.numero_pedido,cuadro:COMPRA.tipoCuadro?.nombre||'Personalizado',tamanio:datos.tamanio,precio:COMPRA._precio>0?'$'+Number(COMPRA._precio).toLocaleString('es-AR'):'A definir',zona:datos.zona_envio,metodo_pago:datos.metodo_pago==='efectivo'?'Efectivo':'MercadoPago',to_email:datos.cliente_email,vendedor_email:CFG.email_vendedor};
    if (COMPRA.tipo==='personalizado_nuevo') await emailjs.send(CONFIG.EMAILJS_SERVICE_ID,CONFIG.EMAILJS_TEMPLATE_PERSONALIZADO,{...ep,to_email:CFG.email_vendedor,descripcion:datos.descripcion_personalizado,imagen_ref:datos.imagen_referencia_url||'Sin imagen'});
    else { await emailjs.send(CONFIG.EMAILJS_SERVICE_ID,CONFIG.EMAILJS_TEMPLATE_CLIENTE,ep); await emailjs.send(CONFIG.EMAILJS_SERVICE_ID,CONFIG.EMAILJS_TEMPLATE_VENDEDOR,{...ep,to_email:CFG.email_vendedor}); }
  } catch(e){console.warn('Email:',e);}
  COMPRA._numpedido = datos.numero_pedido;
  if (COMPRA.tipo==='personalizado_nuevo') renderPaso(98); else renderPaso(99);
}

function htmlExito() {
  return `<div style="text-align:center;padding:40px 0">
    <div style="font-size:4rem;margin-bottom:16px">🙏</div>
    <h3 style="font-family:var(--display);font-size:2.4rem;margin-bottom:12px">¡Pedido confirmado!</h3>
    <p style="max-width:480px;margin:0 auto 32px">Gracias por tu compra. Te enviamos un email con los detalles.</p>
    <p style="font-family:var(--display);font-size:1.2rem;color:var(--oro);margin-bottom:32px">📋 ${COMPRA._numpedido||''}</p>
    <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
      <button class="btn btn-o" onclick="ir('archivo')">Ver más cuadros</button>
      <button class="btn btn-p" onclick="ir('home')">Volver al inicio</button>
    </div>
  </div>`;
}

function htmlExitoPersonalizado() {
  const wa = CFG.whatsapp_numero ? `https://wa.me/${CFG.whatsapp_numero}?text=${encodeURIComponent(`🎨 Pedido personalizado\n\nCliente: ${COMPRA._nombre}\nEmail: ${COMPRA._email}\nTel: ${COMPRA._tel||'No indicado'}\nZona: ${COMPRA._zona}\n\nDescripción:\n${COMPRA._desc}\n\nImagen: ${COMPRA._imgref||'Sin imagen'}\n\nN° ${COMPRA._numpedido}`)}` : '#';
  return `<div style="text-align:center;padding:40px 0">
    <div style="font-size:4rem;margin-bottom:16px">✨</div>
    <h3 style="font-family:var(--display);font-size:2.4rem;margin-bottom:12px">¡Pedido enviado!</h3>
    <p style="max-width:480px;margin:0 auto 32px">Recibimos tu pedido. Pao se comunica a la brevedad para acordar detalles y precio.</p>
    <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
      <a href="${wa}" target="_blank" class="btn btn-g">💬 Seguir por WhatsApp</a>
      <button class="btn btn-o" onclick="ir('home')">Volver al inicio</button>
    </div>
  </div>`;
}

// ============================================================
// ADMIN LOGIN
// ============================================================
function htmlAdminLogin() {
  return `<div class="login-pg"><div class="login-box">
    <div class="login-logo"><span>Immi taller</span><p style="font-family:var(--body);font-size:.78rem;letter-spacing:.2em;text-transform:uppercase;color:var(--suave);margin-top:4px">Panel de administración</p></div>
    <div id="login-err" class="err-box" style="display:none"></div>
    <div class="fg"><label class="fl">Email</label><input class="fi" type="email" id="adm-email" onkeydown="if(event.key==='Enter')admLogin()"/></div>
    <div class="fg"><label class="fl">Contraseña</label><input class="fi" type="password" id="adm-pw" onkeydown="if(event.key==='Enter')admLogin()"/></div>
    <button class="btn btn-p" style="width:100%;justify-content:center;margin-top:8px" onclick="admLogin()" id="btn-adm-login">Ingresar al panel</button>
    <p style="text-align:center;margin-top:24px;font-size:.82rem"><a onclick="ir('home')" style="color:var(--suave);cursor:pointer">← Volver al sitio</a></p>
  </div></div>`;
}

async function admLogin() {
  const btn=document.getElementById('btn-adm-login'), err=document.getElementById('login-err');
  btn.textContent='Ingresando...'; btn.disabled=true; err.style.display='none';
  const { error } = await DB.auth.signInWithPassword({email:document.getElementById('adm-email').value,password:document.getElementById('adm-pw').value});
  if (error) { err.textContent='Email o contraseña incorrectos.'; err.style.display='block'; btn.textContent='Ingresar al panel'; btn.disabled=false; }
  else ir('admin');
}

// ============================================================
// ADMIN DASHBOARD
// ============================================================
function htmlAdmin() {
  return `<div class="adm-layout">
    <aside class="adm-side">
      <div class="adm-logo">Immi taller<br><span style="font-size:.75rem;font-style:normal;color:var(--suave);font-family:var(--body);letter-spacing:.1em">ADMIN</span></div>
      <ul class="adm-nav">
        <li><button onclick="cargarSecAdmin('kpis')" id="an-kpis" class="on">📊 KPIs de ventas</button></li>
        <li><button onclick="cargarSecAdmin('catalogo')" id="an-catalogo">🖼️ Catálogo de cuadros</button></li>
        <li><button onclick="cargarSecAdmin('stock')" id="an-stock">📦 Stock</button></li>
        <li><button onclick="cargarSecAdmin('pedidos')" id="an-pedidos">📋 Pedidos web</button></li>
        <li><button onclick="cargarSecAdmin('cobros')" id="an-cobros">💰 Cobros consignación</button></li>
        <li><button onclick="cargarSecAdmin('precios')" id="an-precios">🏷️ Precios</button></li>
        <li><button onclick="cargarSecAdmin('lugares')" id="an-lugares">📍 Lugares físicos</button></li>
        <li><button onclick="cargarSecAdmin('config')" id="an-config">⚙️ Configuración</button></li>
      </ul>
      <div style="padding:24px;border-top:1px solid rgba(244,240,232,.1);margin-top:auto">
        <button onclick="ir('home')" style="background:none;border:none;color:rgba(244,240,232,.4);font-size:.8rem;cursor:pointer;display:block;margin-bottom:8px;font-family:var(--body)">← Ver sitio</button>
        <button onclick="DB.auth.signOut().then(()=>ir('home'))" style="background:none;border:none;color:rgba(244,240,232,.4);font-size:.8rem;cursor:pointer;font-family:var(--body)">Cerrar sesión</button>
      </div>
    </aside>
    <main class="adm-main" id="adm-main">Cargando...</main>
  </div>`;
}

async function cargarSecAdmin(sec) {
  document.querySelectorAll('.adm-nav button').forEach(b=>b.classList.remove('on'));
  document.getElementById(`an-${sec}`)?.classList.add('on');
  const main = document.getElementById('adm-main'); if(!main) return;
  if (sec==='kpis') await renderKPIs(main);
  else if (sec==='catalogo') await renderCatalogo(main);
  else if (sec==='stock') await renderStock(main);
  else if (sec==='pedidos') await renderPedidos(main);
  else if (sec==='cobros') await renderCobros(main);
  else if (sec==='precios') await renderPrecios(main);
  else if (sec==='lugares') await renderLugares(main);
  else if (sec==='config') await renderConfig(main);
}

// ---- KPIs ----
async function renderKPIs(main) {
  const [{ data:ventas },{ data:pedidos }] = await Promise.all([
    DB.from('ventas').select('*'),
    DB.from('pedidos').select('*'),
  ]);
  const V = ventas||[], P = pedidos||[];
  const totalVentas = V.filter(v=>v.precio_venta).reduce((s,v)=>s+(v.precio_venta||0),0);
  const totalPend = V.filter(v=>!v.cobrado && v.canal==='consignacion').reduce((s,v)=>s+(v.precio_venta||0),0);

  const porMes = {};
  V.filter(v=>v.precio_venta).forEach(v=>{ const m=v.created_at.slice(0,7); porMes[m]=(porMes[m]||0)+(v.precio_venta||0); });
  const meses = Object.keys(porMes).sort().slice(-6);
  const maxV = Math.max(...meses.map(m=>porMes[m]),1);

  main.innerHTML=`
  <div class="adm-hdr"><h1>KPIs de ventas</h1></div>
  <div class="stats-grid">
    <div class="stat"><div class="stat-v">$${Number(totalVentas).toLocaleString('es-AR')}</div><div class="stat-l">Total vendido</div></div>
    <div class="stat"><div class="stat-v">${V.length}</div><div class="stat-l">Ventas totales</div></div>
    <div class="stat"><div class="stat-v">${P.length}</div><div class="stat-l">Pedidos web</div></div>
    <div class="stat"><div class="stat-v" style="color:#f57f17">$${Number(totalPend).toLocaleString('es-AR')}</div><div class="stat-l">Pendiente cobrar</div></div>
  </div>
  <div class="chart-wrap">
    <div class="chart-tit">Ventas por mes ($)</div>
    <div class="bar-chart">
      ${meses.length===0?'<p style="text-align:center;color:var(--suave);align-self:center;width:100%">Sin datos aún</p>':meses.map(m=>{const[y,mo]=m.split('-');const lbl=new Date(y,mo-1).toLocaleDateString('es-AR',{month:'short'});const pct=(porMes[m]/maxV)*100;return`<div class="bar-it"><div class="bar-v">$${Math.round(porMes[m]/1000)}k</div><div class="bar-f" style="height:${Math.max(pct,4)}%"></div><div class="bar-lb">${lbl}</div></div>`;}).join('')}
    </div>
  </div>
  <div class="tbl-wrap">
    <div class="tbl-hdr"><h3 style="font-family:var(--display);font-size:1.2rem">Ventas por canal</h3></div>
    <table><thead><tr><th>Canal</th><th>Cantidad</th><th>Total $</th><th>Promedio $</th></tr></thead><tbody>
    ${[{key:'presencial',l:'Presencial'},{key:'web',l:'Web'},{key:'consignacion',l:'Consignación'}].map(c=>{const vs=V.filter(v=>v.canal===c.key);const t=vs.reduce((s,v)=>s+(v.precio_venta||0),0);return`<tr><td>${c.l}</td><td>${vs.length}</td><td>$${Number(t).toLocaleString('es-AR')}</td><td>$${vs.length?Number(t/vs.length).toLocaleString('es-AR'):'—'}</td></tr>`;}).join('')}
    </tbody></table>
  </div>`;
}

// ---- CATÁLOGO ----
async function renderCatalogo(main) {
  const { data:tipos } = await DB.from('tipos_cuadro').select('*').order('created_at',{ascending:false});
  TIPOS_CACHE = tipos||[];
  main.innerHTML=`
  <div class="adm-hdr">
    <div><h1>Catálogo de cuadros</h1><p style="color:var(--suave)">Los diseños/tipos de cuadros que ofrecés</p></div>
    <button class="btn btn-g" onclick="abrirFormTipo(null)">+ Nuevo tipo de cuadro</button>
  </div>
  <div id="form-tipo-inline" style="display:none;margin-bottom:24px"></div>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px">
  ${(tipos||[]).filter(t=>t.activo).map(t=>`
    <div class="tipo-card">
      <div class="tipo-img" style="aspect-ratio:4/3">${t.imagen_url?`<img src="${t.imagen_url}" style="width:100%;height:100%;object-fit:cover"/>`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2.5rem;opacity:.2">✝</div>'}</div>
      <div class="tipo-info">
        <span class="tipo-cod">${t.codigo_id}</span>
        <div class="tipo-nom">${t.nombre}</div>
        <p style="font-size:.82rem;margin-top:4px">Tamaños: ${(t.tamanios_disponibles||[]).join(', ')||'—'}</p>
        ${t.descripcion?`<p style="font-size:.82rem;margin-top:4px">${t.descripcion}</p>`:''}
      </div>
      <div class="tipo-acc" style="display:flex;gap:8px">
        <button class="btn btn-gh" style="flex:1;justify-content:center;padding:8px;font-size:.72rem" onclick='abrirFormTipo(${JSON.stringify(t).replace(/'/g,"&#39;")})'>Editar</button>
        <button class="btn btn-gh" style="flex:1;justify-content:center;padding:8px;color:#c62828;font-size:.72rem" onclick="eliminarTipo('${t.id}','${(t.nombre||'').replace(/'/g,'')}')">Eliminar</button>
      </div>
    </div>`).join('')}
  </div>`;
}

function abrirFormTipo(t) {
  const el = document.getElementById('form-tipo-inline'); if(!el) return;
  el.style.display='block';
  const tams = ['15x15','20x20','personalizado'];
  const selTams = t?.tamanios_disponibles||[];
  el.innerHTML=`<div style="background:var(--marfil);border:1px solid var(--lino-osc);border-radius:var(--rm);padding:32px;margin-bottom:24px">
    <h3 style="font-family:var(--display);font-size:1.6rem;margin-bottom:24px">${t?'Editar tipo de cuadro':'Nuevo tipo de cuadro'}</h3>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="fg"><label class="fl">Nombre *</label><input class="fi" id="tf-nom" value="${t?.nombre||''}"/></div>
      <div class="fg"><label class="fl">Código ID *</label><input class="fi" id="tf-cod" value="${t?.codigo_id||''}" placeholder="IMM-001"/></div>
      <div class="fg" style="grid-column:1/-1"><label class="fl">Descripción</label><textarea class="ft" id="tf-desc" style="min-height:80px">${t?.descripcion||''}</textarea></div>
      <div class="fg" style="grid-column:1/-1"><label class="fl">Tamaños disponibles</label>
        <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:4px">
          ${tams.map(tam=>`<label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:.9rem"><input type="checkbox" id="tf-tam-${tam}" ${selTams.includes(tam)?'checked':''} style="width:16px;height:16px;accent-color:var(--oro)"/> ${tam}</label>`).join('')}
        </div>
      </div>
      <div class="fg" style="grid-column:1/-1"><label class="fl">Imagen del cuadro</label>
        ${t?.imagen_url?`<img src="${t.imagen_url}" style="width:120px;height:120px;object-fit:cover;border-radius:var(--r);margin-bottom:8px;display:block"/>`:''}
        <input class="fi" type="file" id="tf-img-file" accept="image/*" style="padding:10px"/>
        <input type="hidden" id="tf-img" value="${t?.imagen_url||''}"/>
      </div>
    </div>
    <div style="display:flex;gap:12px;margin-top:8px">
      <button class="btn btn-p" onclick="guardarTipo('${t?.id||''}')">Guardar</button>
      <button class="btn btn-gh" onclick="document.getElementById('form-tipo-inline').style.display='none'">Cancelar</button>
    </div>
  </div>`;
  el.scrollIntoView({behavior:'smooth'});
}

async function guardarTipo(id) {
  const fi = document.getElementById('tf-img-file');
  if (fi?.files?.length>0) {
    const f = fi.files[0]; const ext = f.name.split('.').pop();
    const fname = `tipo-${Date.now()}.${ext}`;
    const { error:ue } = await DB.storage.from('cuadros').upload(fname,f,{upsert:true});
    if (!ue) { const { data:ud } = DB.storage.from('cuadros').getPublicUrl(fname); document.getElementById('tf-img').value = ud.publicUrl; }
    else { alert('Error al subir imagen: '+ue.message); return; }
  }
  const tams = ['15x15','20x20','personalizado'].filter(t=>document.getElementById(`tf-tam-${t}`)?.checked);
  const datos = {
    nombre: document.getElementById('tf-nom').value,
    codigo_id: document.getElementById('tf-cod').value,
    descripcion: document.getElementById('tf-desc').value||null,
    tamanios_disponibles: tams,
    imagen_url: document.getElementById('tf-img').value||null,
  };
  let err;
  if (id) ({ error:err } = await DB.from('tipos_cuadro').update(datos).eq('id',id));
  else ({ error:err } = await DB.from('tipos_cuadro').insert(datos));
  if (err) { alert('Error: '+err.message); return; }
  document.getElementById('form-tipo-inline').style.display='none';
  renderCatalogo(document.getElementById('adm-main'));
}

async function eliminarTipo(id, nombre) {
  if (!confirm(`¿Eliminar "${nombre}"? Esto no afecta las unidades físicas existentes.`)) return;
  await DB.from('tipos_cuadro').update({activo:false}).eq('id',id);
  renderCatalogo(document.getElementById('adm-main'));
}

// ---- STOCK ----
async function renderStock(main) {
  const [{ data:tipos },{ data:unidades },{ data:lugares }] = await Promise.all([
    DB.from('tipos_cuadro').select('*').eq('activo',true).order('codigo_id'),
    DB.from('unidades_cuadro').select('*,lugares(nombre)').eq('activo',true).order('fecha_ingreso',{ascending:false}),
    DB.from('lugares').select('*').eq('activo',true),
  ]);
  TIPOS_CACHE = tipos||[];
  const totalStock = (unidades||[]).filter(u=>u.estado==='stock').length;
  const totalCons = (unidades||[]).filter(u=>u.estado==='consignacion').length;
  const totalVend = (unidades||[]).filter(u=>u.estado==='vendido').length;

  main.innerHTML=`
  <div class="adm-hdr">
    <div><h1>Stock</h1><p style="color:var(--suave)">Gestión de unidades físicas</p></div>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <button class="btn btn-g" onclick="document.getElementById('modal-carga').classList.add('on')">📥 Cargar cuadros</button>
      <button class="btn btn-p" onclick="document.getElementById('modal-venta').classList.add('on')">💰 Registrar venta</button>
    </div>
  </div>
  <div class="stats-grid">
    <div class="stat"><div class="stat-v">${totalStock}</div><div class="stat-l">En stock</div></div>
    <div class="stat"><div class="stat-v">${totalCons}</div><div class="stat-l">En consignación</div></div>
    <div class="stat"><div class="stat-v">${totalVend}</div><div class="stat-l">Vendidos</div></div>
  </div>
  <div>
  ${(tipos||[]).map(t=>{
    const uTipo = (unidades||[]).filter(u=>u.tipo_cuadro_id===t.id);
    const enS = uTipo.filter(u=>u.estado==='stock');
    const enC = uTipo.filter(u=>u.estado==='consignacion');
    const enV = uTipo.filter(u=>u.estado==='vendido');
    if (uTipo.length===0) return '';
    return `<div class="stock-tipo-card">
      <div class="stock-tipo-hdr">
        ${t.imagen_url?`<img src="${t.imagen_url}" class="stock-tipo-img"/>`:'<div class="stock-tipo-img">✝</div>'}
        <div class="stock-tipo-info">
          <div class="stock-tipo-cod">${t.codigo_id}</div>
          <div class="stock-tipo-nom">${t.nombre}</div>
          <div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap">
            ${enS.length?`<span class="badge b-stock">${enS.length} en stock</span>`:''}
            ${enC.length?`<span class="badge b-cons">${enC.length} en consignación</span>`:''}
            ${enV.length?`<span class="badge b-vend">${enV.length} vendidos</span>`:''}
          </div>
        </div>
      </div>
      <div class="stock-unidades">
        ${uTipo.filter(u=>u.estado!=='vendido').map(u=>`
        <div class="unidad-row">
          <span class="badge ${u.estado==='stock'?'b-stock':'b-cons'}">${u.estado==='stock'?'Stock':'Consignación'}</span>
          <span style="font-size:.85rem">${u.tamanio}</span>
          <span style="font-size:.82rem;color:var(--suave)">${u.tecnica||'—'}</span>
          ${u.estado==='consignacion'?`<span style="font-size:.82rem;color:var(--suave)">📍 ${u.lugares?.nombre||'—'}</span>`:''}
          <button class="btn btn-gh" style="padding:4px 10px;font-size:.72rem;margin-left:auto" onclick="eliminarUnidad('${u.id}')">✕ Quitar</button>
        </div>`).join('')}
      </div>
    </div>`;
  }).join('')}
  </div>
  <div class="overlay" id="modal-carga"><div class="modal" style="max-width:560px">
    <button class="m-close" onclick="cerrarModal('modal-carga')">✕</button>
    <h3>📥 Cargar cuadros al stock</h3>
    <p style="margin-bottom:24px">Registrá cuadros nuevos que terminaste de pintar</p>
    <div class="fg"><label class="fl">Tipo de cuadro *</label>
      <select class="fs" id="c-tipo-id"><option value="">Seleccioná...</option>${(tipos||[]).map(t=>`<option value="${t.id}">${t.codigo_id} — ${t.nombre}</option>`).join('')}</select>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="fg"><label class="fl">Tamaño *</label><select class="fs" id="c-tam"><option value="">Seleccioná</option><option value="15x15">15x15</option><option value="20x20">20x20</option><option value="personalizado">Personalizado</option></select></div>
      <div class="fg"><label class="fl">Técnica</label><select class="fs" id="c-tec"><option value="">Sin especif.</option><option value="acrilico">Acrílico</option><option value="oleo">Óleo</option><option value="acuarela">Acuarela</option></select></div>
      <div class="fg"><label class="fl">Cantidad *</label><input class="fi" type="number" id="c-cant" value="1" min="1"/></div>
      <div class="fg"><label class="fl">Destino *</label>
        <select class="fs" id="c-dest" onchange="document.getElementById('c-lugar-wrap').style.display=this.value==='consignacion'?'block':'none'">
          <option value="stock">Stock</option>
          <option value="consignacion">Consignación</option>
        </select>
      </div>
    </div>
    <div id="c-lugar-wrap" style="display:none">
      <div class="fg"><label class="fl">¿En qué lugar? *</label>
        <select class="fs" id="c-lugar-id"><option value="">Seleccioná...</option>${(lugares||[]).map(l=>`<option value="${l.id}">${l.nombre}</option>`).join('')}</select>
      </div>
    </div>
    <div style="display:flex;gap:12px;margin-top:8px">
      <button class="btn btn-p" onclick="guardarCarga()">Cargar</button>
      <button class="btn btn-gh" onclick="cerrarModal('modal-carga')">Cancelar</button>
    </div>
  </div></div>
  <div class="overlay" id="modal-venta"><div class="modal" style="max-width:560px">
    <button class="m-close" onclick="cerrarModal('modal-venta')">✕</button>
    <h3>💰 Registrar venta</h3>
    <p style="margin-bottom:24px">Venta presencial o consignación que ya se realizó</p>
    <div class="fg"><label class="fl">Tipo de cuadro *</label>
      <select class="fs" id="v-tipo-id" onchange="cargarUnidadesVenta(this.value)"><option value="">Seleccioná...</option>${(tipos||[]).map(t=>`<option value="${t.id}">${t.codigo_id} — ${t.nombre}</option>`).join('')}</select>
    </div>
    <div class="fg" id="v-unid-wrap" style="display:none"><label class="fl">Unidad vendida *</label>
      <select class="fs" id="v-unid-id"><option value="">Seleccioná...</option></select>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="fg"><label class="fl">Canal *</label>
        <select class="fs" id="v-canal" onchange="document.getElementById('v-lugar-wrap').style.display=this.value==='consignacion'?'block':'none'">
          <option value="presencial">Presencial</option>
          <option value="consignacion">Consignación</option>
        </select>
      </div>
      <div class="fg"><label class="fl">Precio de venta ($)</label><input class="fi" type="number" id="v-precio" placeholder="Vacío si personalizado"/></div>
    </div>
    <div id="v-lugar-wrap" style="display:none">
      <div class="fg"><label class="fl">Lugar de consignación</label>
        <select class="fs" id="v-lugar-id"><option value="">Seleccioná...</option>${(lugares||[]).map(l=>`<option value="${l.id}">${l.nombre}</option>`).join('')}</select>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="fg"><label class="fl">Nombre cliente</label><input class="fi" id="v-cliente-nom"/></div>
      <div class="fg"><label class="fl">Teléfono</label><input class="fi" id="v-cliente-tel"/></div>
    </div>
    <div style="display:flex;gap:24px;margin-bottom:24px;flex-wrap:wrap">
      <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:.9rem"><input type="checkbox" id="v-cobrado" style="width:16px;height:16px;accent-color:var(--oro)"/> Cobrado</label>
      <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:.9rem"><input type="checkbox" id="v-entregado" checked style="width:16px;height:16px;accent-color:var(--oro)"/> Entregado</label>
    </div>
    <div style="display:flex;gap:12px">
      <button class="btn btn-p" onclick="guardarVenta()">Registrar venta</button>
      <button class="btn btn-gh" onclick="cerrarModal('modal-venta')">Cancelar</button>
    </div>
  </div></div>`;
}

async function cargarUnidadesVenta(tipoId) {
  const wrap = document.getElementById('v-unid-wrap'), sel = document.getElementById('v-unid-id');
  if (!tipoId) { wrap.style.display='none'; return; }
  const { data } = await DB.from('unidades_cuadro').select('*,lugares(nombre)').eq('tipo_cuadro_id',tipoId).eq('activo',true).neq('estado','vendido');
  wrap.style.display='block';
  sel.innerHTML = '<option value="">Seleccioná unidad</option>'+(data||[]).map(u=>`<option value="${u.id}">${u.tamanio} · ${u.tecnica||'—'} · ${u.estado==='consignacion'?'En '+(u.lugares?.nombre||'—'):'Stock'}</option>`).join('');
}

async function guardarCarga() {
  const tipoId = document.getElementById('c-tipo-id').value;
  const tam = document.getElementById('c-tam').value;
  const cant = Number(document.getElementById('c-cant').value)||1;
  const dest = document.getElementById('c-dest').value;
  const lugarId = document.getElementById('c-lugar-id')?.value;
  if (!tipoId||!tam) { alert('Completá tipo y tamaño.'); return; }
  if (dest==='consignacion'&&!lugarId) { alert('Seleccioná el lugar.'); return; }
  const { data:precCons } = await DB.from('precios_consignacion').select('precio').eq('tamanio',tam).maybeSingle();
  const rows = [];
  for (let i=0;i<cant;i++) rows.push({
    tipo_cuadro_id: tipoId, tamanio: tam,
    tecnica: document.getElementById('c-tec').value||null,
    estado: dest,
    lugar_id: dest==='consignacion'?lugarId:null,
    precio_consignacion: dest==='consignacion'?(precCons?.precio||0):null,
  });
  const { error } = await DB.from('unidades_cuadro').insert(rows);
  if (error) { alert('Error: '+error.message); return; }
  cerrarModal('modal-carga');
  renderStock(document.getElementById('adm-main'));
}

async function guardarVenta() {
  const unidId = document.getElementById('v-unid-id').value;
  const canal = document.getElementById('v-canal').value;
  const precio = document.getElementById('v-precio').value;
  const lugarId = document.getElementById('v-lugar-id')?.value;
  if (!unidId) { alert('Seleccioná la unidad vendida.'); return; }
  if (canal==='consignacion'&&!lugarId) { alert('Seleccioná el lugar.'); return; }
  const venta = {
    unidad_id: unidId, canal, lugar_id: lugarId||null,
    cliente_nombre: document.getElementById('v-cliente-nom').value||null,
    cliente_telefono: document.getElementById('v-cliente-tel').value||null,
    precio_venta: precio?Number(precio):null,
    cobrado: document.getElementById('v-cobrado').checked,
    entregado: document.getElementById('v-entregado').checked,
  };
  const { error } = await DB.from('ventas').insert(venta);
  if (error) { alert('Error: '+error.message); return; }
  await DB.from('unidades_cuadro').update({estado:'vendido'}).eq('id',unidId);
  cerrarModal('modal-venta');
  renderStock(document.getElementById('adm-main'));
}

async function eliminarUnidad(id) {
  if (!confirm('¿Quitar esta unidad del stock? No se cuenta como vendida.')) return;
  await DB.from('unidades_cuadro').update({activo:false}).eq('id',id);
  renderStock(document.getElementById('adm-main'));
}

// ---- PEDIDOS WEB ----
async function renderPedidos(main) {
  const { data } = await DB.from('pedidos').select('*,tipos_cuadro(nombre)').order('created_at',{ascending:false});
  main.innerHTML=`
  <div class="adm-hdr"><h1>Pedidos web</h1></div>
  <div class="tbl-wrap"><table><thead><tr><th>N° Pedido</th><th>Cliente</th><th>Tipo</th><th>Cuadro</th><th>Total</th><th>Pago</th><th>Estado</th><th>Entregado</th><th>Ref.</th><th>Fecha</th></tr></thead><tbody>
  ${(data||[]).map(p=>`<tr>
    <td style="font-family:var(--display);font-size:.85rem">${p.numero_pedido}</td>
    <td>${p.cliente_nombre}<br><span style="font-size:.75rem;color:var(--suave)">${p.cliente_email}</span>${p.cliente_telefono?`<br><span style="font-size:.75rem;color:var(--suave)">${p.cliente_telefono}</span>`:''}</td>
    <td style="font-size:.82rem">${{stock:'Stock',personalizado_archivo:'Pers. archivo',personalizado_nuevo:'Pers. nuevo'}[p.tipo]||p.tipo}</td>
    <td style="font-size:.85rem">${p.tipos_cuadro?.nombre||'—'}${p.descripcion_personalizado?`<br><span style="font-size:.75rem;color:var(--suave);display:block;max-width:160px">${p.descripcion_personalizado}</span>`:''}${p.tamanio?`<br><span style="font-size:.75rem;color:var(--suave)">${p.tamanio}</span>`:''}</td>
    <td>${p.precio_total?'$'+Number(p.precio_total).toLocaleString('es-AR'):'<span style="color:var(--oro)">A definir</span>'}</td>
    <td style="text-transform:capitalize">${p.metodo_pago||'—'}</td>
    <td><select style="font-size:.75rem;padding:4px;border:1px solid var(--lino-osc);border-radius:var(--r);background:var(--marfil)" onchange="DB.from('pedidos').update({estado_pago:this.value,updated_at:new Date()}).eq('id','${p.id}').then()">
      ${['pendiente','pagado','cancelado'].map(e=>`<option value="${e}" ${p.estado_pago===e?'selected':''}>${e.charAt(0).toUpperCase()+e.slice(1)}</option>`).join('')}
    </select></td>
    <td style="text-align:center"><input type="checkbox" ${p.entregado?'checked':''} onchange="DB.from('pedidos').update({entregado:this.checked}).eq('id','${p.id}').then()" style="width:18px;height:18px;cursor:pointer;accent-color:var(--oro)"/></td>
    <td>${p.imagen_referencia_url?`<a href="${p.imagen_referencia_url}" target="_blank"><img src="${p.imagen_referencia_url}" style="width:48px;height:48px;object-fit:cover;border-radius:4px;border:1px solid var(--lino-osc)"/></a>`:'—'}</td>
    <td style="font-size:.8rem">${new Date(p.created_at).toLocaleDateString('es-AR')}</td>
  </tr>`).join('')}
  </tbody></table></div>`;
}

// ---- COBROS ----
async function renderCobros(main) {
  const [{ data:lugares },{ data:ventas },{ data:historial }] = await Promise.all([
    DB.from('lugares').select('*').eq('activo',true),
    DB.from('ventas').select('*,unidades_cuadro(tamanio,tipos_cuadro(nombre))').eq('canal','consignacion').eq('cobrado',false),
    DB.from('cobros_consignacion').select('*,lugares(nombre)').order('created_at',{ascending:false}).limit(20),
  ]);

  main.innerHTML=`
  <div class="adm-hdr"><h1>Cobros de consignación</h1></div>
  <h3 style="font-family:var(--display);font-size:1.6rem;margin-bottom:16px">Pendiente de cobro</h3>
  ${(lugares||[]).map(l=>{
    const vs = ventas?.filter(v=>v.lugar_id===l.id)||[];
    if (vs.length===0) return `<div class="cobro-card" style="opacity:.5"><div class="cobro-lugar">${l.nombre}</div><p style="font-size:.88rem">Sin ventas pendientes</p></div>`;
    const total = vs.reduce((s,v)=>s+(v.precio_venta||0),0);
    return `<div class="cobro-card">
      <div class="cobro-lugar">🏪 ${l.nombre}</div>
      <div class="cobro-monto">$${Number(total).toLocaleString('es-AR')}</div>
      <div style="margin:12px 0">
        ${vs.map(v=>`<div class="cobro-item">
          <span>${v.unidades_cuadro?.tipos_cuadro?.nombre||'Cuadro'} (${v.unidades_cuadro?.tamanio||'—'})</span>
          <span>${v.precio_venta?'$'+Number(v.precio_venta).toLocaleString('es-AR'):'A definir'}</span>
        </div>`).join('')}
      </div>
      <button class="btn btn-green" onclick="registrarCobro('${l.id}','${(l.nombre||'').replace(/'/g,'')}',${total},${JSON.stringify(vs.map(v=>v.id)).replace(/"/g,'&quot;')})">✓ Marcar como cobrado ($${Number(total).toLocaleString('es-AR')})</button>
    </div>`;
  }).join('')}
  <h3 style="font-family:var(--display);font-size:1.6rem;margin:32px 0 16px">Historial de cobros</h3>
  <div class="tbl-wrap"><table><thead><tr><th>Lugar</th><th>Cuadros</th><th>Monto</th><th>Fecha</th></tr></thead><tbody>
  ${(historial||[]).map(c=>`<tr>
    <td>${c.lugares?.nombre||'—'}</td>
    <td>${c.cantidad_cuadros}</td>
    <td>$${Number(c.monto_total).toLocaleString('es-AR')}</td>
    <td>${new Date(c.created_at).toLocaleDateString('es-AR')}</td>
  </tr>`).join('')}
  </tbody></table></div>`;
}

async function registrarCobro(lugarId, lugarNom, total, ventaIds) {
  if (!confirm(`¿Confirmar cobro de $${Number(total).toLocaleString('es-AR')} de ${lugarNom}?`)) return;
  const { data:cobro, error:ce } = await DB.from('cobros_consignacion').insert({lugar_id:lugarId,monto_total:total,cantidad_cuadros:ventaIds.length,detalle:{ventas:ventaIds}}).select().single();
  if (ce) { alert('Error: '+ce.message); return; }
  await DB.from('ventas').update({cobrado:true,cobro_id:cobro.id}).in('id',ventaIds);
  renderCobros(document.getElementById('adm-main'));
}

// ---- PRECIOS ----
async function renderPrecios(main) {
  const [{ data:pw },{ data:pc }] = await Promise.all([
    DB.from('precios').select('*'),
    DB.from('precios_consignacion').select('*'),
  ]);
  main.innerHTML=`
  <div class="adm-hdr"><h1>Precios</h1></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;max-width:900px">
    <div>
      <h3 style="font-family:var(--display);font-size:1.4rem;margin-bottom:16px">Precios web (clientes)</h3>
      ${(pw||[]).map(p=>`<div class="stat" style="margin-bottom:12px;text-align:left">
        <div class="stat-l">${p.tamanio}</div>
        <div style="display:flex;align-items:center;gap:12px;margin-top:8px;flex-wrap:wrap">
          <div class="stat-v" style="font-size:1.4rem">$${Number(p.precio).toLocaleString('es-AR')}</div>
          <input type="number" class="fi" id="pw-${p.tamanio}" value="${p.precio}" style="width:120px"/>
          <button class="btn btn-g" style="padding:8px 14px;font-size:.75rem" onclick="guardarPrecioWeb('${p.tamanio}')">Guardar</button>
        </div>
      </div>`).join('')}
    </div>
    <div>
      <h3 style="font-family:var(--display);font-size:1.4rem;margin-bottom:16px">Precios consignación (nos paga el lugar)</h3>
      ${(pc||[]).map(p=>`<div class="stat" style="margin-bottom:12px;text-align:left">
        <div class="stat-l">${p.tamanio}</div>
        <div style="display:flex;align-items:center;gap:12px;margin-top:8px;flex-wrap:wrap">
          <div class="stat-v" style="font-size:1.4rem">$${Number(p.precio).toLocaleString('es-AR')}</div>
          <input type="number" class="fi" id="pc-${p.tamanio}" value="${p.precio}" style="width:120px"/>
          <button class="btn btn-g" style="padding:8px 14px;font-size:.75rem" onclick="guardarPrecioConsig('${p.tamanio}')">Guardar</button>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

async function guardarPrecioWeb(tam) {
  const v = document.getElementById(`pw-${tam}`)?.value;
  const { error } = await DB.from('precios').update({precio:Number(v),updated_at:new Date()}).eq('tamanio',tam);
  if (error) alert('Error');
  else { alert('Precio actualizado ✓'); await cargarConfig(); renderPrecios(document.getElementById('adm-main')); }
}
async function guardarPrecioConsig(tam) {
  const v = document.getElementById(`pc-${tam}`)?.value;
  const { error } = await DB.from('precios_consignacion').update({precio:Number(v),updated_at:new Date()}).eq('tamanio',tam);
  if (error) alert('Error'); else alert('Precio actualizado ✓');
}

// ---- LUGARES ----
async function renderLugares(main) {
  const { data } = await DB.from('lugares').select('*').order('nombre');
  main.innerHTML=`
  <div class="adm-hdr">
    <div><h1>Lugares físicos</h1><p style="color:var(--suave)">Santerías y comercios de consignación</p></div>
    <button class="btn btn-g" onclick="abrirFormLugar(null)">+ Agregar lugar</button>
  </div>
  <div id="form-lugar-inline" style="display:none;margin-bottom:24px"></div>
  <div class="tbl-wrap"><table><thead><tr><th>Nombre</th><th>Dirección</th><th>Teléfono</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>
  ${(data||[]).map(l=>`<tr>
    <td>${l.nombre}</td><td style="font-size:.85rem">${l.direccion||'—'}</td><td>${l.telefono||'—'}</td>
    <td>${l.activo?'✅ Activo':'❌ Inactivo'}</td>
    <td>
      <button class="btn btn-gh" style="padding:6px 12px;font-size:.72rem" onclick='abrirFormLugar(${JSON.stringify(l).replace(/'/g,"&#39;")})'>Editar</button>
      <button class="btn btn-gh" style="padding:6px 12px;font-size:.72rem;margin-left:4px" onclick="toggleLugar('${l.id}',${l.activo})">${l.activo?'Desactivar':'Activar'}</button>
    </td>
  </tr>`).join('')}
  </tbody></table></div>`;
}

function abrirFormLugar(l) {
  const el = document.getElementById('form-lugar-inline'); if(!el) return;
  el.style.display='block';
  el.innerHTML=`<div style="background:var(--marfil);border:1px solid var(--lino-osc);border-radius:var(--rm);padding:32px">
    <h3 style="font-family:var(--display);font-size:1.6rem;margin-bottom:24px">${l?'Editar lugar':'Agregar lugar'}</h3>
    <div class="fg"><label class="fl">Nombre *</label><input class="fi" id="lf-nom" value="${l?.nombre||''}"/></div>
    <div class="fg"><label class="fl">Dirección</label><input class="fi" id="lf-dir" value="${l?.direccion||''}"/></div>
    <div class="fg"><label class="fl">Teléfono</label><input class="fi" id="lf-tel" value="${l?.telefono||''}"/></div>
    <div class="fg"><label class="fl">Link Google Maps</label><input class="fi" type="url" id="lf-maps" value="${l?.google_maps_url||''}"/></div>
    <div style="display:flex;gap:12px">
      <button class="btn btn-p" onclick="guardarLugar('${l?.id||''}')">Guardar</button>
      <button class="btn btn-gh" onclick="document.getElementById('form-lugar-inline').style.display='none'">Cancelar</button>
    </div>
  </div>`;
  el.scrollIntoView({behavior:'smooth'});
}

async function guardarLugar(id) {
  const datos = {
    nombre: document.getElementById('lf-nom').value,
    direccion: document.getElementById('lf-dir').value,
    telefono: document.getElementById('lf-tel').value,
    google_maps_url: document.getElementById('lf-maps').value,
  };
  let err;
  if (id) ({ error:err } = await DB.from('lugares').update(datos).eq('id',id));
  else ({ error:err } = await DB.from('lugares').insert(datos));
  if (err) { alert('Error: '+err.message); return; }
  document.getElementById('form-lugar-inline').style.display='none';
  renderLugares(document.getElementById('adm-main'));
}

async function toggleLugar(id, activo) {
  await DB.from('lugares').update({activo:!activo}).eq('id',id);
  renderLugares(document.getElementById('adm-main'));
}

// ---- CONFIG ----
async function renderConfig(main) {
  const { data } = await DB.from('configuracion').select('*');
  const labels = { instagram_url:'URL de Instagram', whatsapp_numero:'WhatsApp (sin +, con código país)', email_vendedor:'Email del vendedor', descripcion_emprendimiento:'Descripción del emprendimiento', recargo_personalizado_archivo:'Recargo personalizado del archivo (%)' };
  window._cfgClaves = (data||[]).map(c=>c.clave);
  main.innerHTML=`
  <div class="adm-hdr"><h1>Configuración</h1></div>
  <div style="max-width:600px">
    ${(data||[]).map(c=>`<div class="fg"><label class="fl">${labels[c.clave]||c.clave}</label>${c.clave==='descripcion_emprendimiento'?`<textarea class="ft" id="cfg-${c.clave}" style="min-height:100px">${c.valor||''}</textarea>`:`<input class="fi" id="cfg-${c.clave}" value="${c.valor||''}"/>`}</div>`).join('')}
    <button class="btn btn-g" onclick="guardarConfig(window._cfgClaves)">Guardar configuración</button>
  </div>`;
}

async function guardarConfig(claves) {
  for (const clave of claves) {
    const el = document.getElementById(`cfg-${clave}`);
    if (el) await DB.from('configuracion').update({valor:el.value,updated_at:new Date()}).eq('clave',clave);
  }
  alert('Configuración guardada ✓');
  await cargarConfig();
}

// ============================================================
// ARRANCAR
// ============================================================
init();
