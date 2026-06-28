import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const translations = {
  en: {
    seo: {
      title: 'HidayaSoft — Digital Solutions for the Ummah',
      description: 'HidayaSoft builds modern, faith-conscious digital solutions for the Ummah — from Qard Hasan microfinance to school and business management tools.',
      keywords: 'HidayaSoft, Islamic software, Ummah technology, Amana Fund, Qard Hasan, microfinance, HidayaERP, school management system, HifzQalb, Quran memorization app, halal software',
    },
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      impact: 'Impact',
      contact: 'Contact',
      getInTouch: 'Get in touch',
    },
    hero: {
      eyebrow: 'Digital solutions for the Ummah',
      titleLine1: 'Technology with',
      titleLine2: 'barakah & purpose',
      subtitle:
        'HidayaSoft builds modern, trustworthy software that empowers the Ummah — from interest-free microfinance to school and business management, and tools that bring hearts closer to the Qur’an.',
      cta1: 'Explore our products',
      cta2: 'Our charity commitment',
      features: [
        { title: 'Modern & smooth', desc: 'Built with current tech and a polished, intuitive experience.' },
        { title: 'Trustworthy', desc: 'Privacy-first, ethical, and aligned with Islamic values.' },
        { title: 'Purpose-driven', desc: 'Part of our income flows to Amana Fund for charity.' },
      ],
      stats: [
        { value: '4+', label: 'Products for the Ummah' },
        { value: '100%', label: 'Faith-conscious' },
        { value: '∞', label: 'Sadaqah jariyah' },
      ],
    },
    about: {
      eyebrow: 'About HidayaSoft',
      titlePre: 'Building ',
      titleHighlight: 'digital solutions',
      titlePost: ' for the Ummah',
      intro:
        'HidayaSoft is a faith-conscious software studio. We craft modern tools that solve real problems for Muslim individuals, businesses, schools, and charities — and we channel part of our income back to the community through Amana Fund.',
      missionTitle: 'Our mission',
      missionP1Pre:
        'We believe technology should serve humanity while honouring divine guidance. Our journey began with ',
      missionP1Bold: 'Amana Fund',
      missionP1Post:
        ' — providing interest-free loans (Qard Hasan) to help families build sustainable sources of income. We built their website and management software, and we kept going.',
      missionP2:
        'Today we’re building tools for businesses, schools, and seekers of the Qur’an — each designed to be smooth, modern, and inspiring for the community it serves.',
      verseTrans: '“And that there is nothing for man except what he strives for.” — Qur’an 53:39',
      stats: [
        { v: '4+', l: 'Products in motion' },
        { v: '100%', l: 'Faith-conscious' },
        { v: '0%', l: 'Riba (interest)' },
        { v: '24/7', l: 'Dedication' },
      ],
      values: [
        { title: 'Faith-first', description: 'Every product is built to respect Islamic values and ethics — beneficial, halal, and sincere in intention.' },
        { title: 'Trust & privacy', description: 'We protect our users with privacy-first design and the highest standards of digital amanah (trust).' },
        { title: 'Excellence (Ihsan)', description: 'We pursue ihsan in craft — modern, smooth, and reliable software that people love to use.' },
        { title: 'For the Ummah', description: 'We build for real needs of the community, and give back through charity with every step forward.' },
      ],
    },
    products: {
      eyebrow: 'What we build',
      title: 'Software in service of faith and community.',
      learnMore: 'Learn more',
      status: { Live: 'Live', Building: 'Building', 'In progress': 'In progress' },
      items: [
        { title: 'Amana Fund', tagline: 'Interest-free micro-finance', description: 'Qard Hasan loans that help families build a lasting source of income. We built Amana’s website and management software.' },
        { title: 'HidayaERP', tagline: 'Finance, simplified', description: 'Inventory, customers, suppliers, purchases, sales and payments — with a customized dashboard to watch every flow.' },
        { title: 'School Management', tagline: 'For schools & investors', description: 'Track teachers, students, staff and investor records — with attendance, expenses, and salary & tuition handling.' },
        { title: 'HifzQalb', tagline: 'A friend for your hifz', description: 'For those memorizing the Qur’an and revising again and again — a companion that reminds you of the verses you forget.' },
      ],
    },
    impact: {
      eyebrow: 'Sadaqah Jariyah',
      titlePre: 'A part of everything we build funds ',
      titleHighlight: 'Amana Fund.',
      body:
        'Amana Fund gives interest-free loans (Qard Hasan) to families in need — turning a moment of hardship into a lasting source of income. When you work with HidayaSoft, you help fund that work.',
      cta: 'About Amana Fund',
    },
    contact: {
      eyebrow: 'Get in touch',
      title: 'Let’s build something for the ummah.',
      subtitle:
        'Whether you’re an institution, an investor, or a cause that needs software done right — we’d love to hear from you.',
      cta: 'Start a conversation',
    },
    footer: {
      tagline: 'Digital solutions for the ummah.',
      note: 'A part of our income supports Amana Fund — interest-free loans for those in need.',
      productsTitle: 'Products',
      connectTitle: 'Connect',
      copyright: 'HidayaSoft. Built with intention.',
      items: {
        'Amana Fund': 'Amana Fund',
        HidayaERP: 'HidayaERP',
        'School Management': 'School Management',
        HifzQalb: 'HifzQalb',
        About: 'About',
        Impact: 'Impact',
        Contact: 'Contact',
      },
    },
    hifzqalb: {
      nav: {
        why: 'Why HifzQalb',
        how: 'How it works',
        paths: 'Paths',
        getTheApp: 'Get the app',
      },
      hero: {
        bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        badge: '100% free · Web & Android',
        titleLine1: 'Carry the Qur\'an',
        titleLine2: 'in your heart,',
        titleLine3: 'verse by verse.',
        subtitle: 'HifzQalb guides you through short, daily sessions — learn a new verse, revisit what\'s fading, and prove it from memory. A gentle, beautiful companion for your hifz journey.',
        downloadAndroid: 'Download for',
        android: 'Android',
        openWebApp: 'Open the web app',
        noAds: 'No ads · No sign-up wall · No cost, ever',
      },
      stats: {
        guidedPaths: 'Guided paths',
        surahsToRead: 'Surahs to read',
        freeForever: 'Free, forever',
        platforms: 'Platforms · Web & Android',
      },
      why: {
        eyebrow: 'Why HifzQalb',
        title: 'Memorizing is hard. Forgetting is harder. We built for both.',
        subtitle: 'Every feature exists to do one thing — help the verses you learn stay learned, without overwhelming you.',
        features: [
          {
            title: 'Smart, spaced review',
            description: 'HifzQalb brings each verse back just before you\'d forget it — so what you memorize actually sticks for life.',
          },
          {
            title: 'Short daily sessions',
            description: 'Learn → review → recall in about nine minutes. Small, sustainable steps you can keep up between salah.',
          },
          {
            title: 'Active recall, not re-reading',
            description: 'Fill-in-the-blank verse tiles make you retrieve the words from memory — the single most effective way to retain them.',
          },
          {
            title: 'A path for every life',
            description: 'From the short surahs of daily prayer to full hifz — pick a goal that fits your time, and change course whenever you need.',
          },
          {
            title: 'A mushaf you\'ll love to read',
            description: 'Uthmani, Naskh and IndoPak scripts, adjustable text size, and calm cream, sepia and night themes for any time of day.',
          },
          {
            title: 'Yours, offline & private',
            description: 'No account needed. Your progress lives on your device and keeps working without a connection. No ads, no tracking.',
          },
        ],
      },
      how: {
        eyebrow: 'How it works',
        title: 'Three steps. A few minutes a day.',
        step1: {
          eyebrow: 'Choose your path',
          title: 'Start where you are.',
          description: 'Pick a goal that fits your life — the nine surahs of daily prayer, the whole of Juz ʿAmma, the beloved spiritual chapters, or full hifz. Each path is paced and sequenced for you.',
          features: [
            'See exactly what each path holds before you commit',
            'Change course anytime, your progress carries over',
          ],
          screenTitle: 'Where will you begin?',
          path1: 'Juz ʿAmma Mastery',
          path1Desc: 'Master the final juz, one surah at a time.',
          path2: 'Daily Prayer Surahs',
          path2Desc: 'The nine you recite in every salah.',
          path3: 'Spiritual Surahs',
        },
        step2: {
          eyebrow: 'Your daily session',
          title: 'Learn a verse. Slowly.',
          description: 'Each new ayah arrives with its transliteration, meaning and recitation. Listen, repeat aloud, and take it in — one verse at a time, never a wall of text.',
          features: [
            'Clear recitation audio for every verse',
            'Transliteration and meaning, toggle on or off',
          ],
          badge: 'A new verse to memorise',
          surahVerse: 'Al-Ikhlāṣ · Verse 1',
          arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
          transliteration: 'Qul huwa-llāhu aḥad',
          translation: 'Say: He is God, the One.',
          instruction: 'Listen, then repeat aloud three times.',
          button: 'I\'ve learnt it',
        },
        step3: {
          eyebrow: 'Active recall',
          title: 'Prove it from memory.',
          description: 'Words drop out of the verse and you fill the gaps from memory. A small, honest test that turns reading into real retention — and tells HifzQalb when to bring a verse back.',
          features: [
            'Tell the app how well you knew it',
            'Struggled verses come back sooner, automatically',
          ],
          badge: 'Fill in from memory',
          surahVerse: 'An-Naṣr · Verse 1',
          cue: 'Cue',
          cueText: 'When the help of God and the victory come,',
          instruction: 'Tap each blank as you recall it',
        },
      },
      mushaf: {
        eyebrow: 'The mushaf',
        title: 'A reading experience that honours the words.',
        description: 'Read any surah in full, mark each verse as memorized, and make the page truly yours — choose the script, the size, and a theme that\'s easy on the eyes from fajr to ʿishāʾ.',
        scripts: ['Uthmani', 'Naskh', 'IndoPak', 'Cream', 'Sepia', 'Night'],
        surahInfo: 'Sincerity · Meccan · 4 verses',
        memorized: 'Memorized',
        verse1Translation: 'Say: He is God, the One.',
        verse2Translation: 'God, the Eternal Refuge.',
      },
      paths: {
        eyebrow: 'Choose your path',
        title: 'Find the journey that fits your life.',
        subtitle: 'Whether you have five minutes or a lifetime, there\'s a path paced for you.',
        prayer: {
          title: 'Daily Prayer Surahs',
          subtitle: '9 surahs · the ones you recite',
          description: 'Memorise the short surahs you recite in every salah — the perfect first step.',
          duration: '~5 min · 3 weeks',
          difficulty: 'Gentle',
        },
        juz: {
          title: 'Juz ʿAmma Mastery',
          subtitle: '37 surahs · the 30th juz',
          description: 'The juz every ḥāfiẓ begins with — short, rhythmic, sequenced from the easiest surahs upward.',
          duration: '~12 min · 5 months',
          difficulty: 'Steady',
        },
        spiritual: {
          title: 'Selected Spiritual Surahs',
          subtitle: '4 surahs · the beloved chapters',
          description: 'Yā-Sīn, Al-Kahf, Ar-Raḥmān and Al-Mulk — taken slowly, broken into gentle passages.',
          duration: '~15 min · 8 months',
          difficulty: 'Deep',
        },
        full: {
          title: 'Full Hifz',
          subtitle: '114 surahs · the whole Qur\'an',
          description: 'The journey of a lifetime — new memorisation scheduled against constant review, so nothing slips away.',
          duration: '~25 min · paced with you',
          difficulty: 'Lifelong',
        },
      },
      cta: {
        eyebrow: 'Free, for the sake of Allah',
        title: 'Begin your hifz today.',
        description: 'HifzQalb is completely free — no ads, no subscriptions, no sign-up. A portion of HidayaSoft\'s income flows to interest-free loans through Amana Fund, so every use is a small sadaqah jariyah.',
        downloadAndroid: 'Download for',
        android: 'Android',
        openWebApp: 'Open the web app',
        features: [
          'No account required',
          'Works offline',
          'No ads, ever',
        ],
      },
      footer: {
        tagline: 'A gentle companion for memorising and revising the Qur\'an — built with iḥsān by HidayaSoft, digital solutions for the Ummah.',
        verse: 'وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ',
        verseTranslation: '"And there is nothing for man except what he strives for." — Qur\'an 53:39',
        productsTitle: 'App',
        hidayasoftTitle: 'HidayaSoft',
        copyright: '© 2026 HidayaSoft · Built with iḥsān for the Ummah',
        free: 'Free · Web & Android',
      },
    },
  },
  bn: {
    seo: {
      title: 'হিদায়াসফট — উম্মাহর জন্য আধুনিক ডিজিটাল সমাধান',
      description: 'হিদায়াসফট উম্মাহর জন্য আধুনিক ও ঈমান-সচেতন ডিজিটাল সমাধান তৈরি করছে—সুদমুক্ত ঋণ (করজে হাসানা) থেকে শুরু করে স্কুল ও ব্যবসা ব্যবস্থাপনা টুলস পর্যন্ত।',
      keywords: 'হিদায়াসফট, ইসলামিক সফটওয়্যার, আমানাহ ফান্ড, সুদমুক্ত ঋণ, করজে হাসানা, মাইক্রোফাইন্যান্স, হিফজুল কলব, কুরআন মুখস্থ করার অ্যাপ, হালাল সফটওয়্যার, HidayaSoft',
    },
    nav: {
      home: 'হোম',
      about: 'আমাদের কথা',
      products: 'পণ্যসমূহ',
      impact: 'আমাদের প্রভাব',
      contact: 'যোগাযোগ',
      getInTouch: 'যোগাযোগ করুন',
    },
    hero: {
      eyebrow: 'উম্মাহর জন্য ডিজিটাল সমাধান',
      titleLine1: 'প্রযুক্তি হোক',
      titleLine2: 'বরকতময় ও উদ্দেশ্যপূর্ণ',
      subtitle:
        'হিদায়াসফট তৈরি করছে আধুনিক ও নির্ভরযোগ্য সফটওয়্যার যা মুসলিম উম্মাহর কল্যাণে নিবেদিত—সুদমুক্ত ঋণ থেকে শুরু করে স্কুল ও ব্যবসা ব্যবস্থাপনা, আর এমন সব ডিজিটাল মাধ্যম যা আমাদের হৃদয়কে কুরআনের আরও কাছে নিয়ে যায়।',
      cta1: 'আমাদের কাজগুলো দেখুন',
      cta2: 'আমাদের সামাজিক অঙ্গীকার',
      features: [
        { title: 'আধুনিক ও সহজ', desc: 'সর্বাধুনিক প্রযুক্তিতে তৈরি, যা ব্যবহারে আপনি পাবেন এক সহজ ও সুন্দর অভিজ্ঞতা।' },
        { title: 'নির্ভরযোগ্য', desc: 'তথ্য সুরক্ষা ও গোপনীয়তাকে আমরা সর্বোচ্চ গুরুত্ব দেই এবং ইসলামি মূল্যবোধ মেনে চলি।' },
        { title: 'কল্যাণকর', desc: 'আমাদের আয়ের একটি নির্দিষ্ট অংশ সরাসরি আমানা ফান্ডের মাধ্যমে সামাজিক কাজে ব্যয় হয়।' },
      ],
      stats: [
        { value: '৪+', label: 'উম্মাহর জন্য টুলস' },
        { value: '১০০%', label: 'ঈমান-সচেতন' },
        { value: '∞', label: 'সদকায়ে জারিয়া' },
      ],
    },
    about: {
      eyebrow: 'হিদায়াসফট সম্পর্কে',
      titlePre: 'উম্মাহর জন্য ',
      titleHighlight: 'ডিজিটাল সমাধান',
      titlePost: ' তৈরি করছি',
      intro:
        'হিদায়াসফট একটি ঈমান-সচেতন সফটওয়্যার স্টুডিও। আমরা এমন সব আধুনিক ডিজিটাল মাধ্যম তৈরি করি যা মুসলিম উম্মাহর বিভিন্ন ব্যক্তি, ব্যবসা, স্কুল ও দাতব্য প্রতিষ্ঠানের বাস্তব সমস্যার সমাধান দেয়—পাশাপাশি আমাদের আয়ের একটি অংশ আমানা ফান্ডের মাধ্যমে আমরা সমাজে ফিরিয়ে দেই।',
      missionTitle: 'আমাদের লক্ষ্য',
       missionP1Pre:
        'আমরা বিশ্বাস করি যে, প্রযুক্তি মানুষের কল্যাণে কাজ করবে এবং একই সাথে তা ঐশ্বরিক নির্দেশনাকে মেনে চলবে। আমাদের যাত্রা শুরু হয়েছিল ',
      missionP1Bold: 'আমানাহ ফান্ড',
      missionP1Post:
        ' (Amana Fund) এর মাধ্যমে—যা পরিবারগুলোকে স্বাবলম্বী আয়ের উৎস তৈরি করতে সুদমুক্ত ঋণ (করজে হাসানা) প্রদান করে। আমরা তাদের ওয়েবসাইট এবং ম্যানেজমেন্ট সফটওয়্যার তৈরি করেছি, এবং আমাদের এই পথচলা এখনও চলছে।',
      missionP2:
        'আজ আমরা ব্যবসা প্রতিষ্ঠান, শিক্ষাপ্রতিষ্ঠান এবং পবিত্র কুরআন অন্বেষণকারীদের জন্য বিভিন্ন ডিজিটাল টুলস বা মাধ্যম তৈরি করছি—যার প্রতিটিই এমনভাবে ডিজাইন করা হয়েছে যেন তা সংশ্লিষ্ট কমিউনিটির জন্য সহজ, আধুনিক এবং অনুপ্রেরণাদায়ক হয়।',
      verseTrans: '"আর মানুষের জন্য তা-ই থাকে, যার জন্য সে চেষ্টা করে।" — কুরআন ৫৩:৩৯',
      stats: [
        { v: '৪+', l: 'চলমান প্রজেক্ট' },
        { v: '১০০%', l: 'ঈমান-সচেতন' },
        { v: '০%', l: 'রিবা (সুদ)' },
        { v: '২৪/৭', l: 'নিষ্ঠা' },
      ],
      values: [
        { title: 'ঈমান সবার আগে', description: 'আমাদের প্রতিটি কাজ ইসলামি মূল্যবোধ ও নৈতিকতা মেনে তৈরি—যা মানুষের উপকার করে এবং যার নেপথ্যে থাকে সঠিক নিয়ত।' },
        { title: 'আস্থা ও আমানত', description: 'আমরা ব্যবহারকারীর তথ্যের সুরক্ষাকে সর্বোচ্চ গুরুত্ব দিয়ে থাকি এবং ডিজিটাল আমানতদারিতার আদর্শ মেনে চলি।' },
        { title: 'কাজে শ্রেষ্ঠত্ব (ইহসান)', description: 'আমরা প্রতিটি কাজে "ইহসান" বা শ্রেষ্ঠত্ব অর্জনের চেষ্টা করি—যাতে আমাদের সফটওয়্যারগুলো আধুনিক ও নির্ভরযোগ হয়।' },
        { title: 'উম্মাহর কল্যাণ', description: 'উম্মাহর বাস্তব প্রয়োজনগুলো পূরণ করাই আমাদের লক্ষ্য এবং প্রতিটি সাফল্যে আমরা সমাজের প্রতি আমাদের দায়িত্ব পালন করি।' },
      ],
    },
    products: {
      eyebrow: 'আমাদের কাজ',
      title: 'ঈমান ও উম্মাহর সেবায় আধুনিক সফটওয়্যার।',
      learnMore: 'বিস্তারিত দেখুন',
      status: { Live: 'সক্রিয়', Building: 'নির্মাণাধীন', 'In progress': 'চলমান' },
      items: [
        { title: 'আমানাহ ফান্ড', tagline: 'সুদমুক্ত ঋণ সুবিধা', description: 'করজে হাসানা ঋণের মাধ্যমে পরিবারগুলোকে স্বাবলম্বী হওয়ার সুযোগ করে দেয়। আমরা তাদের ওয়েবসাইট ও সফটওয়্যার পার্টনার হিসেবে কাজ করি।' },
        { title: 'HidayaERP', tagline: 'ব্যবসা ও হিসাব সহজ করতে', description: 'স্টক, কাস্টমার, সাপ্লায়ার ও কেনা-বেচার হিসাব রাখার এক সহজ ও আধুনিক সমাধান। এটি আপনার ব্যবসার পূর্ণ নিয়ন্ত্রণে সাহায্য করবে।' },
        { title: 'স্কুল ম্যানেজমেন্ট', tagline: 'শিক্ষাপ্রতিষ্ঠানের জন্য', description: 'শিক্ষার্থী, শিক্ষক ও কর্মীদের তথ্য এবং বেতন-খরচের হিসাব রাখার এক সম্পূর্ণ ডিজিটাল সিস্টেম।' },
        { title: 'HifzQalb', tagline: 'কুরআন হিফজের সাথী', description: 'পবিত্র কুরআন মুখস্থকারী ও রিভিশনকারীদের জন্য এক অনন্য অ্যাপ, যা আপনাকে আপনার ভুলগুলো শুধরে নিতে সাহায্য করবে।' },
      ],
    },
    impact: {
      eyebrow: 'সদকায়ে জারিয়া',
      titlePre: 'আমাদের প্রতিটি কাজের একটি অংশ অর্থায়ন করে ',
      titleHighlight: 'আমানাহ ফান্ড।',
      body:
        'আমানাহ ফান্ড অভাবী পরিবারগুলোকে সুদমুক্ত ঋণ দিয়ে তাদের স্বাবলম্বী আয়ের উৎস খুঁজে পেতে সাহায্য করে। আপনি যখন হিদায়াসফটের সাথে কাজ করেন, আপনি মূলত এই পবিত্র ও মহান কাজের অংশীদার হন।',
      cta: 'আমানাহ ফান্ড সম্পর্কে জানুন',
    },
    contact: {
      eyebrow: 'যোগাযোগ করুন',
      title: 'আসুন উম্মাহর জন্য বিশেষ কিছু করি।',
      subtitle:
        'আপনি যদি কোনো প্রতিষ্ঠান বা উদ্যোগের জন্য মানসম্মত ও আধুনিক সফটওয়্যার সমাধান খুঁজে থাকেন, তবে আমরা আপনার পাশে আছি।',
      cta: 'আলোচনা শুরু করুন',
    },
    footer: {
      tagline: 'উম্মাহর জন্য আধুনিক ডিজিটাল সমাধান।',
      note: 'আমাদের আয়ের একটি অংশ সরাসরি আমানা ফান্ডকে সহায়তা করে—অভাবীদের জন্য সুদমুক্ত ঋণের মাধ্যমে।',
      productsTitle: 'আমাদের পণ্যসমূহ',
      connectTitle: 'যুক্ত থাকুন',
      copyright: 'হিদায়াসফট। নিষ্ঠা ও ভালোবাসার সাথে নির্মিত।',
      items: {
        'Amana Fund': 'আমানাহ ফান্ড',
        HidayaERP: 'HidayaERP',
        'School Management': 'স্কুল ম্যানেজমেন্ট',
        HifzQalb: 'HifzQalb',
        About: 'পরিচিতি',
        Impact: 'আমাদের প্রভাব',
        Contact: 'যোগাযোগ',
      },
    },
    hifzqalb: {
      nav: {
        why: 'হিফজকলব কেন',
        how: 'কিভাবে কাজ করে',
        paths: 'পথসমূহ',
        getTheApp: 'অ্যাপটি নিন',
      },
      hero: {
        bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        badge: '১০০% ফ্রি · ওয়েব ও অ্যান্ড্রয়েড',
        titleLine1: 'কুরআনকে ধারণ করুন',
        titleLine2: 'আপনার হৃদয়ে,',
        titleLine3: 'আয়াত আয়াত করে।',
        subtitle: 'হিফজকলব আপনাকে ছোট ছোট দৈনিক অধিবেশনের মাধ্যমে গাইড করে — নতুন আয়াত শিখুন, যা ভুলে যাচ্ছেন তা পুনরায় দেখুন, এবং স্মৃতি থেকে প্রমাণ করুন। আপনার হিফজ যাত্রার এক নমনীয়, সুন্দর সঙ্গী।',
        downloadAndroid: 'ডাউনলোড করুন',
        android: 'অ্যান্ড্রয়েড',
        openWebApp: 'ওয়েব অ্যাপ খুলুন',
        noAds: 'কোনো বিজ্ঞাপন নেই · কোনো সাইন-আপ নেই · কোনো খরচ নেই',
      },
      stats: {
        guidedPaths: 'গাইডেড পথ',
        surahsToRead: 'সূরা পড়ার জন্য',
        freeForever: 'চিরকাল ফ্রি',
        platforms: 'প্ল্যাটফর্ম · ওয়েব ও অ্যান্ড্রয়েড',
      },
      why: {
        eyebrow: 'হিফজকলব কেন',
        title: 'মুখস্থ করা কঠিন। ভুলে যাওয়া আরও কঠিন। আমরা উভয়ের জন্য তৈরি করেছি।',
        subtitle: 'প্রতিটি ফিচারের একটি উদ্দেশ্য — আপনার শেখা আয়াতগুলো শেখা থাকুক, কোনো চাপ ছাড়াই।',
        features: [
          {
            title: 'স্মার্ট, স্পেসড রিভিউ',
            description: 'হিফজকলব প্রতিটি আয়াত ঠিক তখনই ফিরিয়ে আনে যখন আপনি ভুলে যাওয়ার আগে — যাতে আপনার মুখস্থ করা আয়াতগুলো আজীবন থাকে।',
          },
          {
            title: 'ছোট দৈনিক অধিবেশন',
            description: 'শিখুন → রিভিউ করুন → স্মরণ করুন — মাত্র নয় মিনিটে। সালাতের মাঝে রাখা যায় এমন ছোট, টেকসই পদক্ষেপ।',
          },
          {
            title: 'অ্যাক্টিভ রিকল, পুনঃপঠন নয়',
            description: 'ফিল-ইন-দ্য-ব্ল্যাঙ্ক আয়াত টাইলস আপনাকে স্মৃতি থেকে শব্দ উদ্ধার করতে বাধ্য করে — এটিই সবচেয়ে কার্যকর উপায়।',
          },
          {
            title: 'প্রতিটি জীবনের জন্য একটি পথ',
            description: 'দৈনিক সালাতের ছোট সূরা থেকে শুরু করে পূর্ণ হিফজ — আপনার সময়ের সাথে মিলে এমন লক্ষ্য বেছে নিন, এবং যখনই প্রয়োজন পথ পরিবর্তন করুন।',
          },
          {
            title: 'একটি মুশাফ যা পড়তে ভালো লাগবে',
            description: 'উসমানি, নাসখ এবং ইন্দোপাক লিপি, সামঞ্জস্যপূর্ণ টেক্সট সাইজ, এবং শান্ত ক্রিম, সেপিয়া এবং নাইট থিম — যেকোনো সময়ের জন্য।',
          },
          {
            title: 'আপনার, অফলাইন ও ব্যক্তিগত',
            description: 'কোনো অ্যাকাউন্টের প্রয়োজন নেই। আপনার অগ্রগতি আপনার ডিভাইসে থাকে এবং কোনো সংযোগ ছাড়াই কাজ করে। কোনো বিজ্ঞাপন, কোনো ট্র্যাকিং নেই।',
          },
        ],
      },
      how: {
        eyebrow: 'কিভাবে কাজ করে',
        title: 'তিনটি ধাপ। দিনে কয়েক মিনিট।',
        step1: {
          eyebrow: 'আপনার পথ বেছে নিন',
          title: 'যেখান থেকে শুরু করুন।',
          description: 'আপনার জীবনের সাথে মিলে এমন লক্ষ্য বেছে নিন — দৈনিক সালাতের নয়টি সূরা, সম্পূর্ণ জুজ আম্মা, প্রিয় আধ্যাত্মিক সূরাগুলো, অথবা পূর্ণ হিফজ। প্রতিটি পথ আপনার জন্য গতি ও ক্রমানুসারে সাজানো।',
          features: [
            'প্রতিটি পথে কী আছে তা আগে দেখুন',
            'যেকোনো সময় পথ পরিবর্তন করুন, আপনার অগ্রগতি সাথে থাকবে',
          ],
          screenTitle: 'কোথায় শুরু করবেন?',
          path1: 'জুজ আম্মা মাস্টারি',
          path1Desc: 'শেষ জুজটি মাস্টার করুন, এক সূরা এক সূরা করে।',
          path2: 'দৈনিক সালাত সূরা',
          path2Desc: 'প্রতিটি সালাতে আপনি যে নয়টি সূরা পড়েন।',
          path3: 'আধ্যাত্মিক সূরা',
        },
        step2: {
          eyebrow: 'আপনার দৈনিক অধিবেশন',
          title: 'একটি আয়াত শিখুন। ধীরে ধীরে।',
          description: 'প্রতিটি নতুন আয়াত তার উচ্চারণ, অর্থ এবং তিলাওয়াত সহ আসে। শুনুন, জোরে পুনরাবৃত্তি করুন, এবং গ্রহণ করুন — একটি আয়াত একটি আয়াত করে, কখনও একসাথে অনেকগুলো নয়।',
          features: [
            'প্রতিটি আয়াতের জন্য পরিষ্কার তিলাওয়াত অডিও',
            'উচ্চারণ এবং অর্থ, চালু বা বন্ধ করুন',
          ],
          badge: 'মুখস্থ করার জন্য নতুন আয়াত',
          surahVerse: 'আল-ইখলাস · আয়াত ১',
          arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
          transliteration: 'কুল হুওয়াল্লাহু আহাদ',
          translation: 'বলুন: তিনি আল্লাহ, এক।',
          instruction: 'শুনুন, তারপর তিনবার জোরে পুনরাবৃত্তি করুন।',
          button: 'আমি শিখে ফেলেছি',
        },
        step3: {
          eyebrow: 'অ্যাক্টিভ রিকল',
          title: 'স্মৃতি থেকে প্রমাণ করুন।',
          description: 'আয়াত থেকে শব্দগুলো বাদ পড়ে যায় এবং আপনি স্মৃতি থেকে ফাঁকা স্থানগুলো পূরণ করেন। পঠনকে বাস্তব ধারণে পরিণত করে এমন একটি ছোট, সৎ পরীক্ষা — এবং হিফজকলবকে জানায় কখন আয়াত ফিরিয়ে আনা হবে।',
          features: [
            'অ্যাপকে জানান আপনি কতটা ভালো জানতেন',
            'কঠিন আয়াতগুলো স্বয়ংক্রিয়ভাবে আগে ফিরে আসে',
          ],
          badge: 'স্মৃতি থেকে পূরণ করুন',
          surahVerse: 'আন-নাসর · আয়াত ১',
          cue: 'ইঙ্গিত',
          cueText: 'যখন আল্লাহর সাহায্য ও বিজয় আসে,',
          instruction: 'প্রতিটি ফাঁকা স্থানে ট্যাপ করুন যখন আপনি স্মরণ করতে পারবেন',
        },
      },
      mushaf: {
        eyebrow: 'মুশাফ',
        title: 'একটি পাঠন অভিজ্ঞতা যা শব্দগুলোর সম্মান করে।',
        description: 'যেকোনো সূরা সম্পূর্ণ পড়ুন, প্রতিটি আয়াত মুখস্থ হিসেবে চিহ্নিত করুন, এবং পেজটিকে সত্যিই আপনার করুন — লিপি, সাইজ, এবং একটি থিম বেছে নিন যা ফজর থেকে ইশার জন্য চোখের জন্য সহজ।',
        scripts: ['উসমানি', 'নাসখ', 'ইন্দোপাক', 'ক্রিম', 'সেপিয়া', 'নাইট'],
        surahInfo: 'ইখলাস · মক্কি · ৪ আয়াত',
        memorized: 'মুখস্থ',
        verse1Translation: 'বলুন: তিনি আল্লাহ, এক।',
        verse2Translation: 'আল্লাহ, চিরন্তন আশ্রয়।',
      },
      paths: {
        eyebrow: 'আপনার পথ বেছে নিন',
        title: 'আপনার জীবনের সাথে মিলে এমন যাত্রা খুঁজুন।',
        subtitle: 'আপনার হাতে পাঁচ মিনিট হোক বা আজীবন, আপনার জন্য একটি পথ আছে।',
        prayer: {
          title: 'দৈনিক সালাত সূরা',
          subtitle: '৯ সূরা · যা আপনি পড়েন',
          description: 'প্রতিটি সালাতে আপনি যে ছোট সূরাগুলো পড়েন তা মুখস্থ করুন — সঠিক প্রথম ধাপ।',
          duration: '~৫ মিনিট · ৩ সপ্তাহ',
          difficulty: 'নমনীয়',
        },
        juz: {
          title: 'জুজ আম্মা মাস্টারি',
          subtitle: '৩৭ সূরা · ৩০তম জুজ',
          description: 'যে জুজ দিয়ে প্রতিটি হাফেজ শুরু করে — ছোট, ছন্দময়, সবচেয়ে সহজ সূরা থেকে শুরু করে ক্রমানুসারে সাজানো।',
          duration: '~১২ মিনিট · ৫ মাস',
          difficulty: 'স্থির',
        },
        spiritual: {
          title: 'নির্বাচিত আধ্যাত্মিক সূরা',
          subtitle: '৪ সূরা · প্রিয় অধ্যায়',
          description: 'ইয়া-সিন, আল-কাহফ, আর-রাহমান এবং আল-মুলক — ধীরে ধীরে, নমনীয় অংশে ভাগ করা।',
          duration: '~১৫ মিনিট · ৮ মাস',
          difficulty: 'গভীর',
        },
        full: {
          title: 'পূর্ণ হিফজ',
          subtitle: '১১৪ সূরা · সম্পূর্ণ কুরআন',
          description: 'আজীবনের যাত্রা — নতুন মুখস্থকরণ ধ্রুবক রিভিউ সহ নির্ধারিত, যাতে কিছুই হারিয়ে না যায়।',
          duration: '~২৫ মিনিট · আপনার সাথে গতি',
          difficulty: 'আজীবন',
        },
      },
      cta: {
        eyebrow: 'আল্লাহর জন্য ফ্রি',
        title: 'আজ থেকেই আপনার হিফজ শুরু করুন।',
        description: 'হিফজকলব সম্পূর্ণ ফ্রি — কোনো বিজ্ঞাপন, কোনো সাবস্ক্রিপশন, কোনো সাইন-আপ নেই। হিদায়াসফটের আয়ের একটি অংশ আমানা ফান্ডের মাধ্যমে সুদমুক্ত ঋণে যায়, তাই প্রতিটি ব্যবহার একটি ছোট সদকায়ে জারিয়া।',
        downloadAndroid: 'ডাউনলোড করুন',
        android: 'অ্যান্ড্রয়েড',
        openWebApp: 'ওয়েব অ্যাপ খুলুন',
        features: [
          'কোনো অ্যাকাউন্টের প্রয়োজন নেই',
          'অফলাইনে কাজ করে',
          'কখনও কোনো বিজ্ঞাপন নেই',
        ],
      },
      footer: {
        tagline: 'কুরআন মুখস্থ ও রিভিশনের জন্য এক নমনীয় সঙ্গী — হিদায়াসফট দ্বারা ইহসানের সাথে তৈরি, উম্মাহর জন্য ডিজিটাল সমাধান।',
        verse: 'وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ',
        verseTranslation: '"আর মানুষের জন্য তা-ই থাকে, যার জন্য সে চেষ্টা করে।" — কুরআন ৫৩:৩৯',
        productsTitle: 'অ্যাপ',
        hidayasoftTitle: 'হিদায়াসফট',
        copyright: '© ২০২৬ হিদায়াসফট · উম্মাহর জন্য ইহসানের সাথে নির্মিত',
        free: 'ফ্রি · ওয়েব ও অ্যান্ড্রয়েড',
      },
    },
  },
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // 1. Check URL parameters first (good for SEO crawling)
    const params = new URLSearchParams(window.location.search)
    const langParam = params.get('lang')
    if (langParam === 'bn' || langParam === 'en') return langParam

    // 2. Check local storage
    const saved = localStorage.getItem('hidayasoft-lang')
    if (saved === 'bn' || saved === 'en') return saved

    // 3. Check browser language
    const browserLang = navigator.language || navigator.userLanguage
    if (browserLang.startsWith('bn')) return 'bn'

    return 'en'
  })

  useEffect(() => {
    localStorage.setItem('hidayasoft-lang', language)
    const root = document.documentElement
    root.setAttribute('lang', language)
    root.classList.toggle('lang-bn', language === 'bn')

    // Update URL if needed for consistent crawling, or just leave it
    // We don't want to force ?lang=en on everyone, but ?lang=bn is useful
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'bn' : 'en'))
  }

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isBangla: language === 'bn',
    t: translations[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
