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
      keywords: 'HidayaSoft, Islamic software, Ummah technology, Amana Fund, Qard Hasan, microfinance, HidayaERP, school management system, Hifzul Qalb, Quran memorization app, halal software',
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
        { title: 'Hifzul Qalb', tagline: 'A friend for your hifz', description: 'For those memorizing the Qur’an and revising again and again — a companion that reminds you of the verses you forget.' },
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
        'Hifzul Qalb': 'Hifzul Qalb',
        About: 'About',
        Impact: 'Impact',
        Contact: 'Contact',
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
      titleLine2: 'বরকতময় ও উদ্দেশ্যপূর্ণ',
      subtitle:
        'হিদায়াসফট তৈরি করছে আধুনিক ও নির্ভরযোগ্য সফটওয়্যার যা মুসলিম উম্মাহর কল্যাণে নিবেদিত—সুদমুক্ত ঋণ থেকে শুরু করে স্কুল ও ব্যবসা ব্যবস্থাপনা, আর এমন সব ডিজিটাল মাধ্যম যা আমাদের হৃদয়কে কুরআনের আরও কাছে নিয়ে যায়।',
      cta1: 'আমাদের কাজগুলো দেখুন',
      cta2: 'আমাদের সামাজিক অঙ্গীকার',
      features: [
        { title: 'আধুনিক ও সহজ', desc: 'সর্বাধুনিক প্রযুক্তিতে তৈরি, যা ব্যবহারে আপনি পাবেন এক সহজ ও সুন্দর অভিজ্ঞতা।' },
        { title: 'নির্ভরযোগ্য', desc: 'তথ্য সুরক্ষা ও গোপনীয়তাকে আমরা সর্বোচ্চ গুরুত্ব দেই এবং ইসলামি মূল্যবোধ মেনে চলি।' },
        { title: 'কল্যাণকর', desc: 'আমাদের আয়ের একটি নির্দিষ্ট অংশ সরাসরি আমানা ফান্ডের মাধ্যমে সামাজিক কাজে ব্যয় হয়।' },
      ],
      stats: [
        { value: '৪+', label: 'উম্মাহর জন্য টুলস' },
        { value: '১০০%', label: 'ঈমান-সচেতন' },
        { value: '∞', label: 'সদকায়ে জারিয়া' },
      ],
    },
    about: {
      eyebrow: 'হিদায়াসফট সম্পর্কে',
      titlePre: 'উম্মাহর জন্য ',
      titleHighlight: 'ডিজিটাল সমাধান',
      titlePost: ' তৈরি করছি',
      intro:
        'হিদায়াসফট একটি ঈমান-সচেতন সফটওয়্যার স্টুডিও। আমরা এমন সব আধুনিক ডিজিটাল মাধ্যম তৈরি করি যা মুসলিম উম্মাহর বিভিন্ন ব্যক্তি, ব্যবসা, স্কুল ও দাতব্য প্রতিষ্ঠানের বাস্তব সমস্যার সমাধান দেয়—পাশাপাশি আমাদের আয়ের একটি অংশ আমানা ফান্ডের মাধ্যমে আমরা সমাজে ফিরিয়ে দেই।',
      missionTitle: 'আমাদের লক্ষ্য',
      missionP1Pre:
        'আমরা বিশ্বাস করি যে, প্রযুক্তি মানুষের কল্যাণে কাজ করবে এবং একই সাথে তা ঐশ্বরিক নির্দেশনাকে মেনে চলবে। আমাদের যাত্রা শুরু হয়েছিল ‘',
      missionP1Bold: 'আমানাহ ফান্ড',
      missionP1Post:
        '’ (Amana Fund) এর মাধ্যমে—যা পরিবারগুলোকে স্বাবলম্বী আয়ের উৎস তৈরি করতে সুদমুক্ত ঋণ (করজে হাসানা) প্রদান করে। আমরা তাদের ওয়েবসাইট এবং ম্যানেজমেন্ট সফটওয়্যার তৈরি করেছি, এবং আমাদের এই পথচলা এখনও চলছে।',
      missionP2:
        'আজ আমরা ব্যবসা প্রতিষ্ঠান, শিক্ষাপ্রতিষ্ঠান এবং পবিত্র কুরআন অন্বেষণকারীদের জন্য বিভিন্ন ডিজিটাল টুলস বা মাধ্যম তৈরি করছি—যার প্রতিটিই এমনভাবে ডিজাইন করা হয়েছে যেন তা সংশ্লিষ্ট কমিউনিটির জন্য সহজ, আধুনিক এবং অনুপ্রেরণাদায়ক হয়।',
      verseTrans: '“আর মানুষের জন্য তা-ই থাকে, যার জন্য সে চেষ্টা করে।” — কুরআন ৫৩:৩৯',
      stats: [
        { v: '৪+', l: 'চলমান প্রজেক্ট' },
        { v: '১০০%', l: 'ঈমান-সচেতন' },
        { v: '০%', l: 'রিবা (সুদ)' },
        { v: '২৪/৭', l: 'নিষ্ঠা' },
      ],
      values: [
        { title: 'ঈমান সবার আগে', description: 'আমাদের প্রতিটি কাজ ইসলামি মূল্যবোধ ও নৈতিকতা মেনে তৈরি—যা মানুষের উপকার করে এবং যার নেপথ্যে থাকে সঠিক নিয়ত।' },
        { title: 'আস্থা ও আমানত', description: 'আমরা ব্যবহারকারীর তথ্যের সুরক্ষাকে সর্বোচ্চ গুরুত্ব দিয়ে থাকি এবং ডিজিটাল আমানতদারিতার আদর্শ মেনে চলি।' },
        { title: 'কাজে শ্রেষ্ঠত্ব (ইহসান)', description: 'আমরা প্রতিটি কাজে ‘ইহসান’ বা শ্রেষ্ঠত্ব অর্জনের চেষ্টা করি—যাতে আমাদের সফটওয়্যারগুলো আধুনিক ও নির্ভরযোগ হয়।' },
        { title: 'উম্মাহর কল্যাণ', description: 'উম্মাহর বাস্তব প্রয়োজনগুলো পূরণ করাই আমাদের লক্ষ্য এবং প্রতিটি সাফল্যে আমরা সমাজের প্রতি আমাদের দায়িত্ব পালন করি।' },
      ],
    },
    products: {
      eyebrow: 'আমাদের কাজ',
      title: 'ঈমান ও উম্মাহর সেবায় আধুনিক সফটওয়্যার।',
      learnMore: 'বিস্তারিত দেখুন',
      status: { Live: 'সক্রিয়', Building: 'নির্মাণাধীন', 'In progress': 'চলমান' },
      items: [
        { title: 'আমানাহ ফান্ড', tagline: 'সুদমুক্ত ঋণ সুবিধা', description: 'করজে হাসানা ঋণের মাধ্যমে পরিবারগুলোকে স্বাবলম্বী হওয়ার সুযোগ করে দেয়। আমরা তাদের ওয়েবসাইট ও সফটওয়্যার পার্টনার হিসেবে কাজ করি।' },
        { title: 'HidayaERP', tagline: 'ব্যবসা ও হিসাব সহজ করতে', description: 'স্টক, কাস্টমার, সাপ্লায়ার ও কেনা-বেচার হিসাব রাখার এক সহজ ও আধুনিক সমাধান। এটি আপনার ব্যবসার পূর্ণ নিয়ন্ত্রণে সাহায্য করবে।' },
        { title: 'স্কুল ম্যানেজমেন্ট', tagline: 'শিক্ষাপ্রতিষ্ঠানের জন্য', description: 'শিক্ষার্থী, শিক্ষক ও কর্মীদের তথ্য এবং বেতন-খরচের হিসাব রাখার এক সম্পূর্ণ ডিজিটাল সিস্টেম।' },
        { title: 'হিফজুল কলব', tagline: 'কুরআন হিফজের সাথী', description: 'পবিত্র কুরআন মুখস্থকারী ও রিভিশনকারীদের জন্য এক অনন্য অ্যাপ, যা আপনাকে আপনার ভুলগুলো শুধরে নিতে সাহায্য করবে।' },
      ],
    },
    impact: {
      eyebrow: 'সদকায়ে জারিয়া',
      titlePre: 'আমাদের প্রতিটি কাজের একটি অংশ অর্থায়ন করে ',
      titleHighlight: 'আমানাহ ফান্ড।',
      body:
        'আমানাহ ফান্ড অভাবী পরিবারগুলোকে সুদমুক্ত ঋণ দিয়ে তাদের স্বাবলম্বী আয়ের উৎস খুঁজে পেতে সাহায্য করে। আপনি যখন হিদায়াসফটের সাথে কাজ করেন, আপনি মূলত এই পবিত্র ও মহান কাজের অংশীদার হন।',
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
      note: 'আমাদের আয়ের একটি অংশ সরাসরি আমানা ফান্ডকে সহায়তা করে—অভাবীদের জন্য সুদমুক্ত ঋণের মাধ্যমে।',
      productsTitle: 'আমাদের পণ্যসমূহ',
      connectTitle: 'যুক্ত থাকুন',
      copyright: 'হিদায়াসফট। নিষ্ঠা ও ভালোবাসার সাথে নির্মিত।',
      items: {
        'Amana Fund': 'আমানাহ ফান্ড',
        HidayaERP: 'HidayaERP',
        'School Management': 'স্কুল ম্যানেজমেন্ট',
        'Hifzul Qalb': 'হিফজুল কলব',
        About: 'পরিচিতি',
        Impact: 'আমাদের প্রভাব',
        Contact: 'যোগাযোগ',
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
