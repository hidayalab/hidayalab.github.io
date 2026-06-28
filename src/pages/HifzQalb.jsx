import { useLanguage } from '../contexts/LanguageContext'

export default function HifzQalbPage() {
  const { t, language } = useLanguage()
  const isBangla = language === 'bn'
  const tq = t.hifzqalb

  return (
    <div className="pt-16 md:pt-[72px] min-h-screen bg-[#FAF6F1] dark:bg-ink-950 text-primary-900 dark:text-white transition-colors duration-300">
      <style>{`
        @keyframes wfloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes wpulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
        .hq-float { animation: wfloat 6.5s ease-in-out infinite; }
        .hq-pulse { animation: wpulse 2.4s ease-in-out infinite; }
      `}</style>

      {/* ── Floating app CTA pill (always visible while scrolling) ── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-[#0E3A3A] text-[#FAF6F1] rounded-full shadow-[0_8px_32px_rgba(14,58,58,0.35)] px-2 py-2 dark:bg-primary-800" style={{ backdropFilter: 'blur(8px)' }}>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#FAF6F1] text-[#0E3A3A] rounded-full px-4 py-2 text-[13px] font-medium hover:bg-[#F4ECE3] transition-colors dark:bg-ink-100 dark:text-primary-900"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 1.8 13 11.2 3.6 20.6c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Zm10.9 10.9 2.6 2.6-9.3 5.3 6.7-7.9Zm3.9-3.9 2.8 1.6c.7.4.7 1.4 0 1.8l-2.8 1.6-2.9-2.5 2.9-2.5ZM5.2 1.4l9.3 5.3-2.6 2.6-6.7-7.9Z"/></svg>
          {tq.hero.android}
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[#FAF6F1] rounded-full px-4 py-2 text-[13px] font-medium opacity-90 hover:opacity-100 transition-opacity"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          {tq.hero.openWebApp}
        </a>
      </div>

      {/* ============ HERO ============ */}
      <header id="home" className="relative bg-[radial-gradient(1100px_560px_at_18%_-8%,#F4ECE3_0%,transparent_60%),radial-gradient(820px_520px_at_92%_0%,#F0E7DA_0%,transparent_55%),#FAF6F1] dark:bg-gradient-to-b dark:from-ink-900 dark:to-ink-950">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="absolute top-[-40px] right-[-60px] w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] opacity-[0.05] pointer-events-none dark:stroke-white" fill="none" stroke="#0E3A3A" strokeWidth="0.5"><rect x="22" y="22" width="56" height="56"/><rect x="22" y="22" width="56" height="56" transform="rotate(45 50 50)"/><circle cx="50" cy="50" r="34"/><circle cx="50" cy="50" r="20"/></svg>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 pt-14 pb-20 sm:pt-[78px] sm:pb-[86px] grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 sm:gap-14 items-center relative">
          
          {/* Copy */}
          <div>
            <div dir="rtl" className="font-['Amiri'] text-[18px] sm:text-[24px] text-[#1F5C5C] mb-[14px] sm:mb-[18px] dark:text-primary-300">{tq.hero.bismillah}</div>
            <span className="inline-flex items-center gap-[7px] sm:gap-[9px] bg-[#FFFDF9] border border-[rgba(14,58,58,0.12)] rounded-[999px] px-[10px_8px_5px_10px] sm:px-[15px_11px_7px_15px] mb-[18px] sm:mb-[26px] dark:bg-ink-800 dark:border-primary-500/20">
              <span className="hq-pulse w-[5px] h-[5px] sm:w-[7px] sm:h-[7px] rounded-[999px] bg-[#C9A36A]"></span>
              <span className="text-[10px] sm:text-[11.5px] tracking-[0.16em] uppercase text-[#9C7A47] dark:text-gold-400">{tq.hero.badge}</span>
            </span>
            <h1 className="font-display text-[clamp(32px,8vw,56px)] sm:text-[clamp(40px,5.4vw,68px)] leading-[1.03] tracking-[-0.02em] text-[#0E3A3A] mb-[16px] sm:mb-[22px] dark:text-white">
              {tq.hero.titleLine1}<br/>
              {tq.hero.titleLine2}<br/>
              {tq.hero.titleLine3}
            </h1>
            <p className="text-[15px] sm:text-[18px] leading-[1.62] text-[#2B3636] mb-[24px] sm:mb-[34px] max-w-[500px] text-wrap-pretty dark:text-ink-300">{tq.hero.subtitle}</p>
            <div className="flex flex-wrap gap-[10px] sm:gap-[13px] items-center mb-[16px] sm:mb-[22px]">
              <a href="#get" className="wcta inline-flex items-center gap-2 sm:gap-2.5 bg-[#0E3A3A] text-[#FAF6F1] rounded-full px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium border-none text-decoration-none shadow-lg hover:-translate-y-0.5 transition-transform duration-200 dark:bg-primary-700 dark:text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sm:w-[20px] sm:h-[20px]"><path d="M3.6 1.8 13 11.2 3.6 20.6c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Zm10.9 10.9 2.6 2.6-9.3 5.3 6.7-7.9Zm3.9-3.9 2.8 1.6c.7.4.7 1.4 0 1.8l-2.8 1.6-2.9-2.5 2.9-2.5ZM5.2 1.4l9.3 5.3-2.6 2.6-6.7-7.9Z"/></svg>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[8px] sm:text-[10px] tracking-wider opacity-70">{tq.hero.downloadAndroid}</span>
                  <span className="text-xs sm:text-base">{tq.hero.android}</span>
                </span>
              </a>
              <a href="#get" className="wcta inline-flex items-center gap-2 sm:gap-2.5 bg-transparent text-[#0E3A3A] rounded-full px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium border border-[rgba(14,58,58,0.35)] text-decoration-none hover:bg-[#0E3A3A] hover:text-[#FAF6F1] transition-all duration-200 dark:text-white dark:border-primary-500/30 dark:hover:bg-primary-700">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[19px] sm:h-[19px]"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                {tq.hero.openWebApp}
              </a>
            </div>
            <div className="flex items-center gap-[7px] sm:gap-[9px] text-[11px] sm:text-[13px] text-[#5A6464] dark:text-ink-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F7A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[16px] sm:h-[16px]"><polyline points="20 6 9 17 4 12"/></svg>
              {tq.hero.noAds}
            </div>
          </div>

          {/* Hero phone : HOME */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="hq-float w-[260px] h-[540px] sm:w-[308px] sm:h-[646px] bg-[#FAF6F1] rounded-[36px] sm:rounded-[42px] border-[7px] sm:border-[9px] border-[#102E2E] relative overflow-hidden shadow-[0_30px_70px_rgba(14,58,58,0.2)] sm:shadow-[0_44px_96px_rgba(14,58,58,0.26)] flex flex-col flex-[0_0_auto] dark:bg-ink-900 dark:border-primary-700">
              <div className="h-[26px] sm:h-[30px] flex-[0_0_26px] sm:flex-[0_0_30px] flex items-end justify-between px-5 sm:px-6 pb-[4px] sm:pb-[5px]">
                <span className="text-[10px] sm:text-[11px] font-medium text-[#0E3A3A] dark:text-white">9:41</span>
                <span className="flex gap-[4px] sm:gap-[5px] items-center text-[#0E3A3A] dark:text-white"><svg width="12" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="sm:w-[14px] sm:h-[10px]"><line x1="4" y1="20" x2="4" y2="15"/><line x1="10" y1="20" x2="10" y2="11"/><line x1="16" y1="20" x2="16" y2="7"/><line x1="22" y1="20" x2="22" y2="4"/></svg><svg width="16" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="sm:w-[19px] sm:h-[10px]"><rect x="1" y="7" width="18" height="10" rx="2.5"/><rect x="3.5" y="9.5" width="11" height="5" rx="1" fill="currentColor" stroke="none"/></svg></span>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden px-4 sm:px-[18px] pt-1">
                <div className="flex justify-between items-start mb-[14px] sm:mb-[17px]">
                  <div>
                    <div className="text-[8px] sm:text-[9px] tracking-[0.22em] uppercase text-[#5A6464] mb-[6px] sm:mb-[7px] dark:text-ink-400">Thursday · 18 Jumādā II</div>
                    <div className="font-display text-[19px] sm:text-[23px] leading-[1.05] text-[#0E3A3A] dark:text-white">Assalamu alaikum,<br/>Yusuf</div>
                  </div>
                  <div className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-[999px] bg-[#0E3A3A] text-[#FAF6F1] flex items-center justify-center font-display text-[13px] sm:text-[15px] flex-[0_0_32px] sm:flex-[0_0_36px] dark:bg-primary-700">Y</div>
                </div>
                
                {/* Path card */}
                <div className="bg-[#0E3A3A] rounded-[18px] sm:rounded-[20px] px-4 sm:px-[17px] py-[14px_16px_14px] sm:py-[16px_17px_17px] text-[#FAF6F1] mb-[10px] sm:mb-[12px] dark:bg-primary-700">
                  <div className="flex justify-between items-center mb-[11px] sm:mb-[13px]">
                    <span className="text-[8px] sm:text-[8.5px] tracking-[0.22em] uppercase text-[#F3DED5] dark:text-gold-200">Your path</span>
                    <span className="inline-flex items-center gap-[4px] sm:gap-[5px] bg-[rgba(201,163,106,0.18)] rounded-[999px] px-[7px_3px_7px_3px] sm:px-[9px_4px_9px_4px] text-[#C9A36A]"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="sm:w-[11px] sm:h-[11px]"><path d="M12 2c.5 3-1.8 4.2-1.8 6.5 0 1.2.8 2 1.8 2s1.6-.7 1.7-1.8c1.2 1 2.1 2.8 2.1 4.6a5.8 5.8 0 1 1-11.6 0c0-2.4 1.4-4.1 2.6-5.6C8.3 9 9.6 6.5 12 2Z"/></svg><span className="text-[10px] sm:text-[11px] font-display text-[#FFFDF9] dark:text-white">23</span></span>
                  </div>
                  <div className="flex items-end justify-between gap-[8px] sm:gap-[10px] mb-[12px] sm:mb-[15px]">
                    <span className="font-display text-[17px] sm:text-[21px] leading-[1.02] text-[#FFFDF9] dark:text-white">Juz ʿAmma Mastery</span>
                    <span dir="rtl" className="font-['Amiri'] text-[15px] sm:text-[18px] text-[#F3DED5] whitespace-nowrap dark:text-gold-200">جُزء عَمَّ</span>
                  </div>
                  <div className="flex items-baseline justify-between mb-[6px] sm:mb-[7px]"><span className="text-[10px] sm:text-[11px] text-[#F3DED5] dark:text-gold-200">231 of 564 verses</span><span className="font-display text-[12px] sm:text-[14px] text-[#FFFDF9] dark:text-white">41%</span></div>
                  <span className="block h-[5px] sm:h-[6px] rounded-[999px] bg-[rgba(243,222,213,0.16)] relative overflow-hidden"><span className="absolute inset-0 auto-0-0 w-[41%] bg-[#C9A36A] rounded-[999px]"></span></span>
                </div>
                
                {/* Today's training */}
                <div className="text-[8px] sm:text-[9px] tracking-[0.22em] uppercase text-[#5A6464] my-[14px_2px_7px] sm:my-[16px_2px_9px] dark:text-ink-400">Today's training</div>
                <div className="bg-[#F4ECE3] rounded-[16px] sm:rounded-[18px] px-4 sm:px-[15px_15px_12px_15px] py-[12px_12px_12px_12px] sm:py-[15px_15px_14px_15px] border border-[#D9D3CB] dark:bg-ink-800 dark:border-primary-500/20">
                  <div className="flex items-baseline justify-between gap-[6px] sm:gap-[8px] mb-[10px] sm:mb-[12px]"><span className="font-display text-[14px] sm:text-[17px] text-[#0E3A3A] dark:text-white">A short, guided set</span><span className="text-[9px] sm:text-[10px] text-[#5A6464] dark:text-ink-400">~9 min</span></div>
                  <div className="flex gap-[6px] sm:gap-[8px] mb-[12px] sm:mb-[14px]">
                    <div className="flex-1 bg-[#FAF6F1] border border-[#D9D3CB] rounded-[10px] sm:rounded-[12px] px-3 sm:px-[11px_10px_11px_10px] py-2 sm:py-[10px_11px_10px_11px] dark:bg-ink-700 dark:border-primary-500/20"><div className="flex items-baseline gap-[4px] sm:gap-[5px]"><span className="font-display text-[17px] sm:text-[21px] leading-1 text-[#0E3A3A] dark:text-white">1</span><span className="text-[9px] sm:text-[10px] text-[#5A6464] dark:text-ink-400">new</span></div><div className="text-[8px] sm:text-[8.5px] tracking-[0.1em] uppercase text-[#5A6464] mt-[4px] sm:mt-[5px] dark:text-ink-400">To memorize</div></div>
                    <div className="flex-1 bg-[#FAF6F1] border border-[#D9D3CB] rounded-[10px] sm:rounded-[12px] px-3 sm:px-[11px_10px_11px_10px] py-2 sm:py-[10px_11px_10px_11px] dark:bg-ink-700 dark:border-primary-500/20"><div className="flex items-baseline gap-[4px] sm:gap-[5px]"><span className="font-display text-[17px] sm:text-[21px] leading-1 text-[#0E3A3A] dark:text-white">3</span><span className="text-[9px] sm:text-[10px] text-[#5A6464] dark:text-ink-400">review</span></div><div className="text-[8px] sm:text-[8.5px] tracking-[0.1em] uppercase text-[#5A6464] mt-[4px] sm:mt-[5px] dark:text-ink-400">Due now</div></div>
                  </div>
                  <div className="w-full bg-[#0E3A3A] text-[#FAF6F1] rounded-[999px] px-3 sm:px-4 py-3 sm:py-3.5 text-[11px] sm:text-[13px] tracking-[0.03em] flex items-center justify-center gap-[6px] sm:gap-[8px] dark:bg-primary-700 dark:text-white">Begin today's session<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="sm:w-[14px] sm:h-[14px]"><path d="M8 5v14l11-7z"/></svg></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ STATS STRIP ============ */}
      <section className="bg-[#0E3A3A] text-[#FAF6F1] dark:bg-primary-900 dark:text-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-6 sm:py-[30px] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-[18px]">
          <div className="text-center"><div className="font-display text-[26px] sm:text-[34px] leading-1 text-[#FFFDF9] dark:text-white">4</div><div className="text-[10px] sm:text-[11px] tracking-[0.06em] text-[#7FA9A9] mt-1.5 sm:mt-2 dark:text-primary-300">{tq.stats.guidedPaths}</div></div>
          <div className="text-center border-l border-[rgba(243,222,213,0.14)] sm:border-l border-none"><div className="font-display text-[26px] sm:text-[34px] leading-1 text-[#FFFDF9] dark:text-white">114</div><div className="text-[10px] sm:text-[11px] tracking-[0.06em] text-[#7FA9A9] mt-1.5 sm:mt-2 dark:text-primary-300">{tq.stats.surahsToRead}</div></div>
          <div className="text-center border-l border-[rgba(243,222,213,0.14)] sm:border-l border-none"><div className="font-display text-[26px] sm:text-[34px] leading-1 text-[#C9A36A] dark:text-gold-400">$0</div><div className="text-[10px] sm:text-[11px] tracking-[0.06em] text-[#7FA9A9] mt-1.5 sm:mt-2 dark:text-primary-300">{tq.stats.freeForever}</div></div>
          <div className="text-center border-l border-[rgba(243,222,213,0.14)] sm:border-l border-none"><div className="font-display text-[26px] sm:text-[34px] leading-1 text-[#FFFDF9] dark:text-white">2</div><div className="text-[10px] sm:text-[11px] tracking-[0.06em] text-[#7FA9A9] mt-1.5 sm:mt-2 dark:text-primary-300">{tq.stats.platforms}</div></div>
        </div>
      </section>

      {/* ============ WHY ============ */}
      <section className="bg-[#F4ECE3] dark:bg-ink-800">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-16 sm:py-[90px]">
          <div className="max-w-[680px] mb-10 sm:mb-[52px]">
            <div className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#9C7A47] mb-4 sm:mb-[18px] dark:text-gold-400">{tq.why.eyebrow}</div>
            <h2 className="font-display text-[clamp(28px,5vw,40px)] sm:text-[clamp(32px,4vw,46px)] leading-[1.08] tracking-[-0.01em] text-[#0E3A3A] mb-4 sm:mb-[18px] dark:text-white">{tq.why.title}</h2>
            <p className="text-[15px] sm:text-[17px] leading-[1.6] text-[#2B3636] mb-0 max-w-[600px] text-wrap-pretty dark:text-ink-300">{tq.why.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[18px]">
            {tq.why.features.map((feature, index) => (
              <div key={index} className="wcard bg-[#FAF6F1] border border-[#D9D3CB] rounded-[20px] sm:rounded-[22px] px-5 sm:px-[26px_26px_28px_26px] py-5 sm:py-[28px_26px_28px_26px] dark:bg-ink-700 dark:border-primary-500/20 hover:-translate-y-1 transition-transform duration-200 hover:border-[rgba(14,58,58,0.28)] hover:shadow-xl">
                <span className="inline-flex w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] rounded-[12px] sm:rounded-[14px] bg-[#F4ECE3] border border-[#D9D3CB] items-center justify-center text-[#1F5C5C] mb-4 sm:mb-[18px] dark:bg-ink-600 dark:border-primary-500/30">
                  {index === 0 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>}
                  {index === 1 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>}
                  {index === 2 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]"><path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v.5a2.6 2.6 0 0 0-2 4 2.6 2.6 0 0 0 1 4.6A2.5 2.5 0 0 0 12 16V4.5A2.5 2.5 0 0 0 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v.5a2.6 2.6 0 0 1 2 4 2.6 2.6 0 0 1-1 4.6A2.5 2.5 0 0 1 12 16"/></svg>}
                  {index === 3 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>}
                  {index === 4 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>}
                  {index === 5 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3z"/></svg>}
                </span>
                <h3 className="font-display text-[18px] sm:text-[22px] text-[#0E3A3A] mb-2.5 sm:mb-[10px] dark:text-white">{feature.title}</h3>
                <p className="text-[13px] sm:text-[14.5px] leading-[1.6] text-[#5A6464] mb-0 text-wrap-pretty dark:text-ink-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-[#FAF6F1] dark:bg-ink-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-16 sm:py-[96px]">
          <div className="text-center max-w-[640px] mx-auto mb-12 sm:mb-[64px]">
            <div className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#9C7A47] mb-4 sm:mb-[18px] dark:text-gold-400">{tq.how.eyebrow}</div>
            <h2 className="font-display text-[clamp(28px,5vw,40px)] sm:text-[clamp(32px,4vw,46px)] leading-[1.08] tracking-[-0.01em] text-[#0E3A3A] mb-0 dark:text-white">{tq.how.title}</h2>
          </div>

          {/* Step 1 */}
          <div className="whow-row grid grid-cols-1 lg:grid-cols-2 gap-[40px] sm:gap-[56px] items-center mb-16 sm:mb-[88px]">
            <div>
              <div className="flex items-center gap-[12px] sm:gap-[14px] mb-4 sm:mb-[18px]"><span className="font-display text-[16px] sm:text-[18px] text-[#C9A36A] border border-[#C9A36A] rounded-[999px] w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] flex items-center justify-center dark:text-gold-400 dark:border-gold-400">01</span><span className="text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[#5A6464] dark:text-ink-400">{tq.how.step1.eyebrow}</span></div>
              <h3 className="font-display text-[26px] sm:text-[32px] leading-[1.1] text-[#0E3A3A] mb-3 sm:mb-[14px] dark:text-white">{tq.how.step1.title}</h3>
              <p className="text-[14px] sm:text-[16px] leading-[1.62] text-[#2B3636] mb-4 sm:mb-[18px] max-w-[460px] text-wrap-pretty dark:text-ink-300">{tq.how.step1.description}</p>
              <div className="flex flex-col gap-2 sm:gap-[9px]">
                <div className="flex items-center gap-[8px] sm:gap-[10px] text-[13px] sm:text-[14px] text-[#2B3636] dark:text-ink-300"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F7A5A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[16px] sm:h-[16px]"><polyline points="20 6 9 17 4 12"/></svg>{tq.how.step1.features[0]}</div>
                <div className="flex items-center gap-[8px] sm:gap-[10px] text-[13px] sm:text-[14px] text-[#2B3636] dark:text-ink-300"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F7A5A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[16px] sm:h-[16px]"><polyline points="20 6 9 17 4 12"/></svg>{tq.how.step1.features[1]}</div>
              </div>
            </div>
            <div className="flex justify-center order-first lg:order-last">
              <div className="w-[260px] sm:w-[288px] bg-[#FAF6F1] rounded-[36px] sm:rounded-[40px] border-[7px] sm:border-[9px] border-[#102E2E] overflow-hidden shadow-[0_20px_50px_rgba(14,58,58,0.15)] sm:shadow-[0_30px_70px_rgba(14,58,58,0.18)] dark:bg-ink-700 dark:border-primary-700">
                <div className="px-4 sm:px-5 py-5 sm:pt-[26px] sm:pb-[22px]">
                  <div className="text-[8px] sm:text-[9px] tracking-[0.22em] uppercase text-[#5A6464] my-1.5 sm:my-[7px_2px] dark:text-ink-400">Step 1 of 2 · Your path</div>
                  <div className="font-display text-[20px] sm:text-[24px] leading-[1.06] text-[#0E3A3A] mb-4 dark:text-white">{tq.how.step1.screenTitle}</div>
                  <div className="flex flex-col gap-2.5 sm:gap-[11px]">
                    <div className="bg-[#0E3A3A] rounded-[16px] sm:rounded-[18px] px-4 sm:px-[15px] py-3 sm:py-[15px] text-[#FAF6F1] dark:bg-primary-700 dark:text-white">
                      <div className="flex items-center justify-between gap-[8px] sm:gap-[10px] mb-2 sm:mb-[9px]"><span className="flex items-center gap-[8px] sm:gap-[10px]"><span className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] rounded-[10px] sm:rounded-[11px] bg-[rgba(250,246,241,0.12)] flex items-center justify-center text-[#C9A36A]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[17px] sm:h-[17px]"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></span><span className="font-display text-[14px] sm:text-[16px] text-[#FFFDF9] dark:text-white">{tq.how.step1.path1}</span></span></div>
                      <div className="text-[10px] sm:text-[11.5px] leading-[1.45] text-[#F3DED5] dark:text-gold-200">{tq.how.step1.path1Desc}</div>
                    </div>
                    <div className="bg-[#F4ECE3] border border-[#D9D3CB] rounded-[16px] sm:rounded-[18px] px-4 sm:px-[15px] py-3 sm:py-[14px] dark:bg-ink-600 dark:border-primary-500/20">
                      <div className="flex items-center gap-[8px] sm:gap-[10px] mb-1.5 sm:mb-[7px]"><span className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-[9px] sm:rounded-[10px] bg-[#FAF6F1] border border-[#D9D3CB] flex items-center justify-center text-[#1F5C5C] dark:bg-ink-500 dark:border-primary-500/30"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[16px] sm:h-[16px]"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="4.2" y1="10.2" x2="5.6" y2="11.6"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.4" y1="11.6" x2="19.8" y2="10.2"/><line x1="23" y1="22" x2="1" y2="22"/><polyline points="8 6 12 2 16 6"/></svg></span><span className="font-display text-[14px] sm:text-[16px] text-[#0E3A3A] dark:text-white">{tq.how.step1.path2}</span></div>
                      <div className="text-[10px] sm:text-[11.5px] leading-[1.45] text-[#5A6464] dark:text-ink-300">{tq.how.step1.path2Desc}</div>
                    </div>
                    <div className="bg-[#F4ECE3] border border-[#D9D3CB] rounded-[16px] sm:rounded-[18px] px-4 sm:px-[15px] py-3 sm:py-[14px] dark:bg-ink-600 dark:border-primary-500/20">
                      <div className="flex items-center gap-[8px] sm:gap-[10px]"><span className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-[9px] sm:rounded-[10px] bg-[#FAF6F1] border border-[#D9D3CB] flex items-center justify-center text-[#1F5C5C] dark:bg-ink-500 dark:border-primary-500/30"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[16px] sm:h-[16px]"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></span><span className="font-display text-[14px] sm:text-[16px] text-[#0E3A3A] dark:text-white">{tq.how.step1.path3}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="whow-row grid grid-cols-1 lg:grid-cols-2 gap-[40px] sm:gap-[56px] items-center mb-16 sm:mb-[88px]">
            <div className="order-2 lg:order-2">
              <div className="flex items-center gap-[12px] sm:gap-[14px] mb-4 sm:mb-[18px]"><span className="font-display text-[16px] sm:text-[18px] text-[#C9A36A] border border-[#C9A36A] rounded-[999px] w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] flex items-center justify-center dark:text-gold-400 dark:border-gold-400">02</span><span className="text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[#5A6464] dark:text-ink-400">{tq.how.step2.eyebrow}</span></div>
              <h3 className="font-display text-[26px] sm:text-[32px] leading-[1.1] text-[#0E3A3A] mb-3 sm:mb-[14px] dark:text-white">{tq.how.step2.title}</h3>
              <p className="text-[14px] sm:text-[16px] leading-[1.62] text-[#2B3636] mb-4 sm:mb-[18px] max-w-[460px] text-wrap-pretty dark:text-ink-300">{tq.how.step2.description}</p>
              <div className="flex flex-col gap-2 sm:gap-[9px]">
                <div className="flex items-center gap-[8px] sm:gap-[10px] text-[13px] sm:text-[14px] text-[#2B3636] dark:text-ink-300"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F7A5A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[16px] sm:h-[16px]"><polyline points="20 6 9 17 4 12"/></svg>{tq.how.step2.features[0]}</div>
                <div className="flex items-center gap-[8px] sm:gap-[10px] text-[13px] sm:text-[14px] text-[#2B3636] dark:text-ink-300"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F7A5A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[16px] sm:h-[16px]"><polyline points="20 6 9 17 4 12"/></svg>{tq.how.step2.features[1]}</div>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-1">
              <div className="w-[260px] sm:w-[288px] bg-[#FAF6F1] rounded-[36px] sm:rounded-[40px] border-[7px] sm:border-[9px] border-[#102E2E] overflow-hidden shadow-[0_20px_50px_rgba(14,58,58,0.15)] sm:shadow-[0_30px_70px_rgba(14,58,58,0.18)] dark:bg-ink-700 dark:border-primary-700">
                <div className="px-4 sm:px-[22px] py-5 sm:pt-[24px] sm:pb-[18px] flex flex-col">
                  <div className="flex gap-[3px] sm:gap-[4px] mb-4 sm:mb-[18px]"><span className="flex-1 h-[3px] sm:h-[4px] rounded-[999px] bg-[#C9A36A]"></span><span className="flex-1 h-[3px] sm:h-[4px] rounded-[999px] bg-[#C9A36A]"></span><span className="flex-1 h-[3px] sm:h-[4px] rounded-[999px] bg-[#0E3A3A]"></span><span className="flex-1 h-[3px] sm:h-[4px] rounded-[999px] bg-[#D9D3CB]"></span></div>
                  <div className="text-center">
                    <div className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#9C7A47] mb-2.5 sm:mb-[10px] dark:text-gold-400">{tq.how.step2.badge}</div>
                    <div className="mb-4 sm:mb-5"><span className="font-display text-[14px] sm:text-[16px] text-[#0E3A3A] dark:text-white">Al-Ikhlāṣ</span><span className="text-[10px] sm:text-[11px] text-[#5A6464] dark:text-ink-400"> · Verse 1</span></div>
                    <div dir="rtl" className="font-['Amiri_Quran','Amiri'] text-[28px] sm:text-[34px] leading-[1.9] text-[#0E3A3A] mb-3.5 sm:mb-4 dark:text-white">قُلْ هُوَ اللَّهُ أَحَدٌ</div>
                    <div className="text-[12px] sm:text-[13.5px] italic text-[#1F5C5C] mb-1.5 sm:mb-2 dark:text-primary-300">{tq.how.step2.transliteration}</div>
                    <div className="text-[12px] sm:text-[13px] leading-[1.5] text-[#2B3636] mb-4 sm:mb-[22px] dark:text-ink-300">{tq.how.step2.translation}</div>
                    <div className="flex justify-center mb-3 sm:mb-[14px]"><span className="w-[54px] h-[54px] sm:w-[62px] sm:h-[62px] rounded-[999px] bg-[#0E3A3A] text-[#FAF6F1] flex items-center justify-center dark:bg-primary-700 dark:text-white"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="sm:w-[24px] sm:h-[24px]"><path d="M8 5v14l11-7z"/></svg></span></div>
                    <div className="text-[10px] sm:text-[11px] text-[#5A6464] mb-4 sm:mb-[18px] dark:text-ink-400">{tq.how.step2.instruction}</div>
                    <div className="bg-[#0E3A3A] text-[#FAF6F1] rounded-[999px] px-3.5 sm:px-[14px] py-3 sm:py-[14px] text-[11px] sm:text-[13px] tracking-[0.03em] flex items-center justify-center gap-[6px] sm:gap-[8px] dark:bg-primary-700 dark:text-white">{tq.how.step2.button}<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[15px] sm:h-[15px]"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="whow-row grid grid-cols-1 lg:grid-cols-2 gap-[40px] sm:gap-[56px] items-center">
            <div>
              <div className="flex items-center gap-[12px] sm:gap-[14px] mb-4 sm:mb-[18px]"><span className="font-display text-[16px] sm:text-[18px] text-[#C9A36A] border border-[#C9A36A] rounded-[999px] w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] flex items-center justify-center dark:text-gold-400 dark:border-gold-400">03</span><span className="text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[#5A6464] dark:text-ink-400">{tq.how.step3.eyebrow}</span></div>
              <h3 className="font-display text-[26px] sm:text-[32px] leading-[1.1] text-[#0E3A3A] mb-3 sm:mb-[14px] dark:text-white">{tq.how.step3.title}</h3>
              <p className="text-[14px] sm:text-[16px] leading-[1.62] text-[#2B3636] mb-4 sm:mb-[18px] max-w-[460px] text-wrap-pretty dark:text-ink-300">{tq.how.step3.description}</p>
              <div className="flex flex-col gap-2 sm:gap-[9px]">
                <div className="flex items-center gap-[8px] sm:gap-[10px] text-[13px] sm:text-[14px] text-[#2B3636] dark:text-ink-300"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F7A5A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[16px] sm:h-[16px]"><polyline points="20 6 9 17 4 12"/></svg>{tq.how.step3.features[0]}</div>
                <div className="flex items-center gap-[8px] sm:gap-[10px] text-[13px] sm:text-[14px] text-[#2B3636] dark:text-ink-300"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F7A5A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[16px] sm:h-[16px]"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>{tq.how.step3.features[1]}</div>
              </div>
            </div>
            <div className="flex justify-center order-first lg:order-last">
              <div className="w-[260px] sm:w-[288px] bg-[#FAF6F1] rounded-[36px] sm:rounded-[40px] border-[7px] sm:border-[9px] border-[#102E2E] overflow-hidden shadow-[0_20px_50px_rgba(14,58,58,0.15)] sm:shadow-[0_30px_70px_rgba(14,58,58,0.18)] dark:bg-ink-700 dark:border-primary-700">
                <div className="px-4 sm:px-[20px] py-5 sm:pt-[24px] sm:pb-[18px]">
                  <div className="flex gap-[3px] sm:gap-[4px] mb-4 sm:mb-[18px]"><span className="flex-1 h-[3px] sm:h-[4px] rounded-[999px] bg-[#C9A36A]"></span><span className="flex-1 h-[3px] sm:h-[4px] rounded-[999px] bg-[#C9A36A]"></span><span className="flex-1 h-[3px] sm:h-[4px] rounded-[999px] bg-[#C9A36A]"></span><span className="flex-1 h-[3px] sm:h-[4px] rounded-[999px] bg-[#0E3A3A]"></span></div>
                  <div className="text-center mb-3.5 sm:mb-4"><div className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#9B6A5E] mb-1.5 sm:mb-[7px] dark:text-gold-400">{tq.how.step3.badge}</div><span className="font-display text-[13px] sm:text-[15px] text-[#0E3A3A] dark:text-white">An-Naṣr</span><span className="text-[10px] sm:text-[11px] text-[#5A6464] dark:text-ink-400"> · Verse 1</span></div>
                  <div className="bg-[#F4ECE3] rounded-[12px] sm:rounded-[14px] px-3.5 sm:px-[14px] py-2.5 sm:py-[11px] mb-4 sm:mb-5 text-center dark:bg-ink-600 dark:border-primary-500/20"><span className="text-[8px] sm:text-[8.5px] tracking-[0.16em] uppercase text-[#5A6464] dark:text-ink-400">{tq.how.step3.cue}</span><p className="text-[11px] sm:text-[12px] leading-[1.45] text-[#2B3636] mt-1 sm:mt-[5px_0_0] dark:text-ink-300">{tq.how.step3.cueText}</p></div>
                  <div dir="rtl" className="flex flex-wrap gap-[6px] sm:gap-[8px] justify-center mb-2 sm:mb-2">
                    <span className="border border-[#D9D3CB] bg-[#F4ECE3] text-[#0E3A3A] rounded-[10px] sm:rounded-[11px] px-3 sm:px-[13px] py-2 sm:py-[8px] font-['Amiri'] text-[20px] sm:text-[23px] dark:bg-ink-600 dark:border-primary-500/20 dark:text-white">إِذَا</span>
                    <span className="border border-[1.5px_dashed_#8A9090] bg-[#FAF6F1] text-[#8A9090] rounded-[10px] sm:rounded-[11px] px-4 sm:px-[16px] py-2 sm:py-[8px] font-['Amiri'] text-[20px] sm:text-[23px] dark:bg-ink-700 dark:border-primary-500/30 dark:text-ink-400">⋯</span>
                    <span className="border border-[#D9D3CB] bg-[#F4ECE3] text-[#0E3A3A] rounded-[10px] sm:rounded-[11px] px-3 sm:px-[13px] py-2 sm:py-[8px] font-['Amiri'] text-[20px] sm:text-[23px] dark:bg-ink-600 dark:border-primary-500/20 dark:text-white">نَصْرُ</span>
                    <span className="border border-[#C9A36A] bg-[rgba(201,163,106,0.2)] text-[#0E3A3A] rounded-[10px] sm:rounded-[11px] px-3 sm:px-[13px] py-2 sm:py-[8px] font-['Amiri'] text-[20px] sm:text-[23px] dark:bg-gold-500/20 dark:border-gold-400/50 dark:text-white">اللَّهِ</span>
                    <span className="border border-[1.5px_dashed_#8A9090] bg-[#FAF6F1] text-[#8A9090] rounded-[10px] sm:rounded-[11px] px-4 sm:px-[16px] py-2 sm:py-[8px] font-['Amiri'] text-[20px] sm:text-[23px] dark:bg-ink-700 dark:border-primary-500/30 dark:text-ink-400">⋯</span>
                  </div>
                  <div className="text-center text-[10px] sm:text-[11px] text-[#5A6464] mt-3.5 sm:mt-[14px] dark:text-ink-400">{tq.how.step3.instruction}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MUSHAF SHOWCASE (dark) ============ */}
      <section className="bg-[#0E3A3A] text-[#FAF6F1] relative overflow-hidden dark:bg-primary-900 dark:text-white">
        <svg viewBox="0 0 100 100" className="absolute bottom-[-60px] left-[-50px] w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] opacity-[0.06] pointer-events-none" fill="none" stroke="#C9A36A" strokeWidth="0.5"><rect x="22" y="22" width="56" height="56"/><rect x="22" y="22" width="56" height="56" transform="rotate(45 50 50)"/><circle cx="50" cy="50" r="34"/></svg>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-16 sm:py-[90px] grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-center relative">
          <div>
            <div className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#C9A36A] mb-4 sm:mb-[18px] dark:text-gold-400">{tq.mushaf.eyebrow}</div>
            <h2 className="font-display text-[clamp(28px,5vw,40px)] sm:text-[clamp(32px,4vw,46px)] leading-[1.08] tracking-[-0.01em] text-[#FFFDF9] mb-4 sm:mb-[18px] dark:text-white">{tq.mushaf.title}</h2>
            <p className="text-[15px] sm:text-[17px] leading-[1.62] text-[#F3DED5] mb-6 sm:mb-[30px] max-w-[480px] text-wrap-pretty dark:text-gold-200">{tq.mushaf.description}</p>
            <div className="flex flex-wrap gap-2 sm:gap-[10px]">
              {tq.mushaf.scripts.map((script, index) => (
                <span key={index} className="border border-[rgba(243,222,213,0.24)] rounded-[999px] px-3.5 sm:px-[16px_9px_9px_16px] py-2 sm:py-[9px_9px_9px_9px] text-[11px] sm:text-[13px] text-[#FAF6F1] dark:border-primary-500/30 dark:text-white inline-flex items-center gap-1 sm:gap-[8px]">
                  {script === 'উসমানি' || script === 'নাসখ' || script === 'ইন্দোপাক' ? script : (
                    <><span className="w-[9px] h-[9px] sm:w-[11px] sm:h-[11px] rounded-[999px]" style={{
                      backgroundColor: script === 'ক্রিম' ? '#FAF6F1' : script === 'সেপিয়া' ? '#E0CBA6' : '#0B1E1E'
                    }}></span>{script}</>
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center order-first lg:order-last">
            <div className="w-[260px] sm:w-[300px] bg-[#FAF6F1] rounded-[36px] sm:rounded-[40px] border-[7px] sm:border-[9px] border-[#051a1a] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.3)] sm:shadow-[0_40px_90px_rgba(0,0,0,0.35)] dark:bg-ink-700 dark:border-primary-700">
              <div className="px-4 sm:px-[18px] py-0">
                <div className="flex items-center justify-between mb-1.5 sm:mb-2"><span className="flex items-center gap-[3px] sm:gap-[4px] text-[#0E3A3A] text-[10px] sm:text-[11px] dark:text-white"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[15px] sm:h-[15px]"><polyline points="15 18 9 12 15 6"/></svg>Surahs</span><span className="text-[8px] sm:text-[9px] tracking-[0.18em] uppercase text-[#5A6464] dark:text-ink-400">Surah 112</span><span className="w-[16px] sm:w-[18px]"></span></div>
                <div className="text-center px-2 sm:px-2 py-2.5 sm:py-[10px_8px_16px_8px] border-b border-[#D9D3CB] dark:border-primary-500/20">
                  <div className="font-['Amiri_Quran','Amiri'] text-[28px] sm:text-[34px] text-[#0E3A3A] leading-[1.1] mb-1 sm:mb-[5px] dark:text-white">الإخلاص</div>
                  <div className="font-display text-[15px] sm:text-[18px] text-[#0E3A3A] dark:text-white">Al-Ikhlāṣ</div>
                  <div className="text-[8px] sm:text-[9px] tracking-[0.16em] uppercase text-[#5A6464] mt-1 sm:mt-[6px] dark:text-ink-400">{tq.mushaf.surahInfo}</div>
                </div>
              </div>
              <div className="px-4 sm:px-[18px] pt-4 sm:pt-[18px]">
                <div className="border-b border-[#D9D3CB] px-0 pt-3 sm:pt-[14px] pb-4 sm:pb-[16px] dark:border-primary-500/20">
                  <div className="flex items-center justify-between mb-2.5 sm:mb-[11px]"><span className="flex items-center gap-[6px] sm:gap-[8px]"><span className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] rounded-[999px] bg-[#0E3A3A] text-[#FAF6F1] flex items-center justify-center font-display text-[11px] sm:text-[12px] dark:bg-primary-700 dark:text-white">1</span><span className="flex items-center gap-[4px] sm:gap-[5px]"><span className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-[999px] bg-[#4F7A5A]"></span><span className="text-[8px] sm:text-[8.5px] tracking-[0.12em] uppercase text-[#4F7A5A] dark:text-primary-300">{tq.mushaf.memorized}</span></span></span><span className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] rounded-[999px] bg-[#4F7A5A] text-[#FAF6F1] flex items-center justify-center dark:bg-primary-600 dark:text-white"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[14px] sm:h-[14px]"><polyline points="20 6 9 17 4 12"/></svg></span></div>
                  <div dir="rtl" className="font-['Amiri_Quran','Amiri'] text-[22px] sm:text-[25px] leading-2 text-[#0E3A3A] text-right mb-2 sm:mb-[9px] dark:text-white">قُلْ هُوَ اللَّهُ أَحَدٌ</div>
                  <div className="text-[11px] sm:text-[12.5px] text-[#2B3636] leading-[1.5] dark:text-ink-300">{tq.mushaf.verse1Translation}</div>
                </div>
                <div className="px-0 pt-3 sm:pt-[16px] pb-1">
                  <div className="flex items-center justify-between mb-2.5 sm:mb-[11px]"><span className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] rounded-[999px] bg-[#F4ECE3] text-[#0E3A3A] flex items-center justify-center font-display text-[11px] sm:text-[12px] dark:bg-ink-600 dark:text-white">2</span><span className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] rounded-[999px] border border-[#D9D3CB] text-[#8A9090] flex items-center justify-center dark:border-primary-500/30 dark:text-ink-400"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="sm:w-[15px] sm:h-[15px]"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span></div>
                  <div dir="rtl" className="font-['Amiri_Quran','Amiri'] text-[22px] sm:text-[25px] leading-2 text-[#0E3A3A] text-right mb-2 sm:mb-[9px] dark:text-white">اللَّهُ الصَّمَدُ</div>
                  <div className="text-[11px] sm:text-[12.5px] text-[#2B3636] leading-[1.5] dark:text-ink-300">{tq.mushaf.verse2Translation}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PATHS ============ */}
      <section className="bg-[#F4ECE3] dark:bg-ink-800">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-16 sm:py-[90px]">
          <div className="max-w-[640px] mb-10 sm:mb-[50px]">
            <div className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#9C7A47] mb-4 sm:mb-[18px] dark:text-gold-400">{tq.paths.eyebrow}</div>
            <h2 className="font-display text-[clamp(28px,5vw,40px)] sm:text-[clamp(32px,4vw,46px)] leading-[1.08] tracking-[-0.01em] text-[#0E3A3A] mb-3.5 sm:mb-4 dark:text-white">{tq.paths.title}</h2>
            <p className="text-[15px] sm:text-[17px] leading-[1.6] text-[#2B3636] mb-0 max-w-[560px] dark:text-ink-300">{tq.paths.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[18px]">
            
            {/* Prayer */}
            <div className="wcard bg-[#FAF6F1] border border-[#D9D3CB] rounded-[20px] sm:rounded-[24px] px-5 sm:px-[26px] pt-5 pb-5 sm:pt-[26px] sm:pb-[24px] dark:bg-ink-700 dark:border-primary-500/20 hover:-translate-y-1 transition-transform duration-200 hover:border-[rgba(14,58,58,0.28)] hover:shadow-xl">
              <div className="flex items-start justify-between gap-[10px] sm:gap-[12px] mb-3.5 sm:mb-[14px]">
                <span className="flex items-center gap-3 sm:gap-[13px]"><span className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] rounded-[12px] sm:rounded-[14px] bg-[#F4ECE3] border border-[#D9D3CB] flex items-center justify-center text-[#1F5C5C] dark:bg-ink-600 dark:border-primary-500/30"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="4.2" y1="10.2" x2="5.6" y2="11.6"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.4" y1="11.6" x2="19.8" y2="10.2"/><line x1="23" y1="22" x2="1" y2="22"/><polyline points="8 6 12 2 16 6"/></svg></span><span><span className="block font-display text-[17px] sm:text-[21px] text-[#0E3A3A] leading-[1.1] dark:text-white">{tq.paths.prayer.title}</span><span className="block text-[10px] sm:text-[11px] text-[#5A6464] mt-1 sm:mt-[3px] dark:text-ink-400">{tq.paths.prayer.subtitle}</span></span></span>
                <span dir="rtl" className="font-['Amiri'] text-[16px] sm:text-[20px] text-[#1F5C5C] whitespace-nowrap dark:text-primary-300">سُوَر الصَّلاة</span>
              </div>
              <p className="text-[13px] sm:text-[14px] leading-[1.55] text-[#2B3636] mb-4 sm:mb-[16px] dark:text-ink-300">{tq.paths.prayer.description}</p>
              <div className="flex items-center justify-between pt-3 sm:pt-[15px] border-t border-[#D9D3CB] dark:border-primary-500/20">
                <span className="inline-flex items-center gap-1.5 sm:gap-[6px] text-[11px] sm:text-[12px] text-[#2B3636] dark:text-ink-300"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[14px] sm:h-[14px]"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>{tq.paths.prayer.duration}</span>
                <span className="inline-flex items-center gap-2 sm:gap-[8px]"><span className="text-[9px] sm:text-[10px] tracking-[0.1em] uppercase text-[#5A6464] dark:text-ink-400">{tq.paths.prayer.difficulty}</span><span className="inline-flex gap-1 sm:gap-[3px]"><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#C9A36A]"></span><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#D9D3CB]"></span><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#D9D3CB]"></span><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#D9D3CB]"></span></span></span>
              </div>
            </div>
            
            {/* Juz */}
            <div className="wcard bg-[#FAF6F1] border border-[#D9D3CB] rounded-[20px] sm:rounded-[24px] px-5 sm:px-[26px] pt-5 pb-5 sm:pt-[26px] sm:pb-[24px] dark:bg-ink-700 dark:border-primary-500/20 hover:-translate-y-1 transition-transform duration-200 hover:border-[rgba(14,58,58,0.28)] hover:shadow-xl">
              <div className="flex items-start justify-between gap-[10px] sm:gap-[12px] mb-3.5 sm:mb-[14px]">
                <span className="flex items-center gap-3 sm:gap-[13px]"><span className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] rounded-[12px] sm:rounded-[14px] bg-[#F4ECE3] border border-[#D9D3CB] flex items-center justify-center text-[#1F5C5C] dark:bg-ink-600 dark:border-primary-500/30"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></span><span><span className="block font-display text-[17px] sm:text-[21px] text-[#0E3A3A] leading-[1.1] dark:text-white">{tq.paths.juz.title}</span><span className="block text-[10px] sm:text-[11px] text-[#5A6464] mt-1 sm:mt-[3px] dark:text-ink-400">{tq.paths.juz.subtitle}</span></span></span>
                <span dir="rtl" className="font-['Amiri'] text-[16px] sm:text-[20px] text-[#1F5C5C] whitespace-nowrap dark:text-primary-300">جُزء عَمَّ</span>
              </div>
              <p className="text-[13px] sm:text-[14px] leading-[1.55] text-[#2B3636] mb-4 sm:mb-[16px] dark:text-ink-300">{tq.paths.juz.description}</p>
              <div className="flex items-center justify-between pt-3 sm:pt-[15px] border-t border-[#D9D3CB] dark:border-primary-500/20">
                <span className="inline-flex items-center gap-1.5 sm:gap-[6px] text-[11px] sm:text-[12px] text-[#2B3636] dark:text-ink-300"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[14px] sm:h-[14px]"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>{tq.paths.juz.duration}</span>
                <span className="inline-flex items-center gap-2 sm:gap-[8px]"><span className="text-[9px] sm:text-[10px] tracking-[0.1em] uppercase text-[#5A6464] dark:text-ink-400">{tq.paths.juz.difficulty}</span><span className="inline-flex gap-1 sm:gap-[3px]"><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#C9A36A]"></span><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#C9A36A]"></span><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#D9D3CB]"></span><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#D9D3CB]"></span></span></span>
              </div>
            </div>
            
            {/* Spiritual */}
            <div className="wcard bg-[#FAF6F1] border border-[#D9D3CB] rounded-[20px] sm:rounded-[24px] px-5 sm:px-[26px] pt-5 pb-5 sm:pt-[26px] sm:pb-[24px] dark:bg-ink-700 dark:border-primary-500/20 hover:-translate-y-1 transition-transform duration-200 hover:border-[rgba(14,58,58,0.28)] hover:shadow-xl">
              <div className="flex items-start justify-between gap-[10px] sm:gap-[12px] mb-3.5 sm:mb-[14px]">
                <span className="flex items-center gap-3 sm:gap-[13px]"><span className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] rounded-[12px] sm:rounded-[14px] bg-[#F4ECE3] border border-[#D9D3CB] flex items-center justify-center text-[#1F5C5C] dark:bg-ink-600 dark:border-primary-500/30"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></span><span><span className="block font-display text-[17px] sm:text-[21px] text-[#0E3A3A] leading-[1.1] dark:text-white">{tq.paths.spiritual.title}</span><span className="block text-[10px] sm:text-[11px] text-[#5A6464] mt-1 sm:mt-[3px] dark:text-ink-400">{tq.paths.spiritual.subtitle}</span></span></span>
                <span dir="rtl" className="font-['Amiri'] text-[16px] sm:text-[20px] text-[#1F5C5C] whitespace-nowrap dark:text-primary-300">سُوَر مُخْتَارَة</span>
              </div>
              <p className="text-[13px] sm:text-[14px] leading-[1.55] text-[#2B3636] mb-4 sm:mb-[16px] dark:text-ink-300">{tq.paths.spiritual.description}</p>
              <div className="flex items-center justify-between pt-3 sm:pt-[15px] border-t border-[#D9D3CB] dark:border-primary-500/20">
                <span className="inline-flex items-center gap-1.5 sm:gap-[6px] text-[11px] sm:text-[12px] text-[#2B3636] dark:text-ink-300"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[14px] sm:h-[14px]"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>{tq.paths.spiritual.duration}</span>
                <span className="inline-flex items-center gap-2 sm:gap-[8px]"><span className="text-[9px] sm:text-[10px] tracking-[0.1em] uppercase text-[#5A6464] dark:text-ink-400">{tq.paths.spiritual.difficulty}</span><span className="inline-flex gap-1 sm:gap-[3px]"><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#C9A36A]"></span><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#C9A36A]"></span><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#D9D3CB]"></span><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#D9D3CB]"></span></span></span>
              </div>
            </div>
            
            {/* Full Hifz */}
            <div className="wcard bg-[#0E3A3A] border border-[rgba(243,222,213,0.14)] rounded-[20px] sm:rounded-[24px] px-5 sm:px-[26px] pt-5 pb-5 sm:pt-[26px] sm:pb-[24px] text-[#FAF6F1] dark:bg-primary-900 dark:text-white">
              <div className="flex items-start justify-between gap-[10px] sm:gap-[12px] mb-3.5 sm:mb-[14px]">
                <span className="flex items-center gap-3 sm:gap-[13px]"><span className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] rounded-[12px] sm:rounded-[14px] bg-[rgba(250,246,241,0.1)] flex items-center justify-center text-[#C9A36A]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3z"/></svg></span><span><span className="block font-display text-[17px] sm:text-[21px] text-[#FFFDF9] dark:text-white leading-[1.1]">{tq.paths.full.title}</span><span className="block text-[10px] sm:text-[11px] text-[#7FA9A9] mt-1 sm:mt-[3px] dark:text-primary-300">{tq.paths.full.subtitle}</span></span></span>
                <span dir="rtl" className="font-['Amiri'] text-[16px] sm:text-[20px] text-[#F3DED5] whitespace-nowrap dark:text-gold-200">الحِفظ الكامِل</span>
              </div>
              <p className="text-[13px] sm:text-[14px] leading-[1.55] text-[#F3DED5] mb-4 sm:mb-[16px] dark:text-gold-200">{tq.paths.full.description}</p>
              <div className="flex items-center justify-between pt-3 sm:pt-[15px] border-t border-[rgba(243,222,213,0.14)]">
                <span className="inline-flex items-center gap-1.5 sm:gap-[6px] text-[11px] sm:text-[12px] text-[#F3DED5] dark:text-gold-200"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[14px] sm:h-[14px]"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>{tq.paths.full.duration}</span>
                <span className="inline-flex items-center gap-2 sm:gap-[8px]"><span className="text-[9px] sm:text-[10px] tracking-[0.1em] uppercase text-[#7FA9A9] dark:text-primary-300">{tq.paths.full.difficulty}</span><span className="inline-flex gap-1 sm:gap-[3px]"><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#C9A36A]"></span><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#C9A36A]"></span><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#C9A36A]"></span><span className="w-[12px] h-[4px] sm:w-[14px] sm:h-[5px] rounded-[999px] bg-[#C9A36A]"></span></span></span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="get" className="bg-[#FAF6F1] dark:bg-ink-950">
        <div className="max-w-[640px] mx-auto px-4 sm:px-8 py-16 sm:py-[96px] text-center">
          <div style={{ background: 'radial-gradient(800px 400px at 50% -20%, #154848 0%, #0E3A3A 70%)', borderRadius: 34, padding: '64px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }} className="max-sm:rounded-[28px] max-sm:px-6 max-sm:py-12">
            <svg viewBox="0 0 100 100" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] opacity-[0.06] pointer-events-none" fill="none" stroke="#C9A36A" strokeWidth="0.5"><rect x="24" y="24" width="52" height="52"/><rect x="24" y="24" width="52" height="52" transform="rotate(45 50 50)"/></svg>
            <div className="relative">
              <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="#C9A36A" strokeWidth="2.6" strokeLinejoin="round" className="mb-6 sm:mb-[24px] sm:w-[60px] sm:h-[60px]"><rect x="24" y="24" width="52" height="52"/><rect x="24" y="24" width="52" height="52" transform="rotate(45 50 50)"/><path d="M50 46 c-2.6 -3 -7.2 -1.6 -7.2 2.3 c0 3.9 7.2 7.7 7.2 7.7 s7.2 -3.8 7.2 -7.7 c0 -3.9 -4.6 -5.3 -7.2 -2.3 Z" fill="#C9A36A" stroke="none"/></svg>
              <div className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#C9A36A] mb-4 sm:mb-[18px] dark:text-gold-400">{tq.cta.eyebrow}</div>
              <h2 className="font-display text-[clamp(28px,5vw,44px)] sm:text-[clamp(34px,4.4vw,52px)] leading-[1.06] tracking-[-0.01em] text-[#FFFDF9] mb-4 sm:mb-[18px] dark:text-white">{tq.cta.title}</h2>
              <p className="text-[15px] sm:text-[17px] leading-[1.6] sm:leading-[1.62] text-[#F3DED5] mb-8 sm:mb-[34px] max-w-[500px] text-wrap-pretty dark:text-gold-200">{tq.cta.description}</p>
              <div className="flex flex-wrap gap-3 sm:gap-[13px] justify-center mb-6 sm:mb-[26px]">
                <a href="#" className="wcta inline-flex items-center gap-2 sm:gap-2.5 bg-[#C9A36A] text-[#07292B] rounded-full px-5 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium border-none text-decoration-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sm:w-[20px] sm:h-[20px]"><path d="M3.6 1.8 13 11.2 3.6 20.6c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Zm10.9 10.9 2.6 2.6-9.3 5.3 6.7-7.9Zm3.9-3.9 2.8 1.6c.7.4.7 1.4 0 1.8l-2.8 1.6-2.9-2.5 2.9-2.5ZM5.2 1.4l9.3 5.3-2.6 2.6-6.7-7.9Z"/></svg>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[9px] sm:text-[10px] tracking-wider opacity-70">{tq.cta.downloadAndroid}</span>
                    <span className="text-xs sm:text-base">{tq.cta.android}</span>
                  </span>
                </a>
                <a href="#" className="wcta inline-flex items-center gap-2 sm:gap-2.5 bg-transparent text-[#FAF6F1] rounded-full px-5 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium border border-[rgba(243,222,213,0.4)] text-decoration-none">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[19px] sm:h-[19px]"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  {tq.cta.openWebApp}
                </a>
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-[22px] justify-center text-[12px] sm:text-[13px] text-[#7FA9A9]">
                <span className="inline-flex items-center gap-1.5 sm:gap-[7px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A36A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[15px] sm:h-[15px]"><polyline points="20 6 9 17 4 12"/></svg>{tq.cta.features[0]}</span>
                <span className="inline-flex items-center gap-1.5 sm:gap-[7px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A36A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[15px] sm:h-[15px]"><polyline points="20 6 9 17 4 12"/></svg>{tq.cta.features[1]}</span>
                <span className="inline-flex items-center gap-1.5 sm:gap-[7px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A36A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[15px] sm:h-[15px]"><polyline points="20 6 9 17 4 12"/></svg>{tq.cta.features[2]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}