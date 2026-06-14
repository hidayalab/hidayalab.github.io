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
    nav: {
      home: 'হোম',
      about: 'পরিচিতি',
      products: 'পণ্য',
      impact: 'অবদান',
      contact: 'যোগাযোগ',
      getInTouch: 'যোগাযোগ করুন',
    },
    hero: {
      eyebrow: 'উম্মাহর জন্য ডিজিটাল সমাধান',
      titleLine1: 'প্রযুক্তি হোক',
      titleLine2: 'বরকত ও উদ্দেশ্যময়',
      subtitle:
        'হিদায়াসফট আধুনিক ও নির্ভরযোগ্য সফটওয়্যার তৈরি করে যা উম্মাহকে শক্তিশালী করে — সুদমুক্ত ক্ষুদ্রঋণ থেকে শুরু করে স্কুল ও ব্যবসা ব্যবস্থাপনা, এবং এমন টুল যা হৃদয়কে কুরআনের আরও কাছে নিয়ে আসে।',
      cta1: 'আমাদের পণ্য দেখুন',
      cta2: 'আমাদের দান প্রতিশ্রুতি',
      features: [
        { title: 'আধুনিক ও মসৃণ', desc: 'সর্বাধুনিক প্রযুক্তিতে নির্মিত, পরিশীলিত ও সহজবোধ্য অভিজ্ঞতা।' },
        { title: 'নির্ভরযোগ্য', desc: 'গোপনীয়তা-প্রথম, নৈতিক এবং ইসলামি মূল্যবোধের সাথে সঙ্গতিপূর্ণ।' },
        { title: 'উদ্দেশ্যমুখী', desc: 'আমাদের আয়ের একটি অংশ দান হিসেবে আমানা ফান্ডে যায়।' },
      ],
      stats: [
        { value: '৪+', label: 'উম্মাহর জন্য পণ্য' },
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
        'হিদায়াসফট একটি ঈমান-সচেতন সফটওয়্যার স্টুডিও। আমরা আধুনিক টুল তৈরি করি যা মুসলিম ব্যক্তি, ব্যবসা, স্কুল ও দাতব্য সংস্থার বাস্তব সমস্যার সমাধান করে — এবং আমাদের আয়ের একটি অংশ আমানা ফান্ডের মাধ্যমে সমাজে ফিরিয়ে দিই।',
      missionTitle: 'আমাদের লক্ষ্য',
      missionP1Pre:
        'আমরা বিশ্বাস করি প্রযুক্তি মানবতার সেবা করবে আর আল্লাহর হিদায়াতকে সম্মান করবে। আমাদের যাত্রা শুরু হয়েছিল ',
      missionP1Bold: 'আমানা ফান্ড',
      missionP1Post:
        ' দিয়ে — যা পরিবারগুলোকে টেকসই আয়ের উৎস গড়তে সুদমুক্ত ঋণ (কর্জে হাসানা) প্রদান করে। আমরা তাদের ওয়েবসাইট ও ব্যবস্থাপনা সফটওয়্যার তৈরি করেছি, এবং এগিয়ে চলেছি।',
      missionP2:
        'আজ আমরা ব্যবসা, স্কুল ও কুরআনের অন্বেষীদের জন্য টুল তৈরি করছি — প্রতিটিই মসৃণ, আধুনিক এবং যে সমাজের সেবা করে তার জন্য অনুপ্রেরণাদায়ক।',
      verseTrans: '“আর মানুষ তা-ই পায়, যার জন্য সে চেষ্টা করে।” — কুরআন ৫৩:৩৯',
      stats: [
        { v: '৪+', l: 'চলমান পণ্য' },
        { v: '১০০%', l: 'ঈমান-সচেতন' },
        { v: '০%', l: 'রিবা (সুদ)' },
        { v: '২৪/৭', l: 'নিষ্ঠা' },
      ],
      values: [
        { title: 'ঈমান-প্রথম', description: 'প্রতিটি পণ্য ইসলামি মূল্যবোধ ও নৈতিকতাকে সম্মান করে তৈরি — উপকারী, হালাল এবং নিয়তে আন্তরিক।' },
        { title: 'আস্থা ও গোপনীয়তা', description: 'আমরা গোপনীয়তা-প্রথম ডিজাইন ও সর্বোচ্চ ডিজিটাল আমানতের মান দিয়ে ব্যবহারকারীদের রক্ষা করি।' },
        { title: 'শ্রেষ্ঠত্ব (ইহসান)', description: 'আমরা কাজে ইহসান অর্জনের চেষ্টা করি — আধুনিক, মসৃণ ও নির্ভরযোগ্য সফটওয়্যার যা মানুষ ব্যবহার করতে ভালোবাসে।' },
        { title: 'উম্মাহর জন্য', description: 'আমরা সমাজের বাস্তব প্রয়োজনে তৈরি করি, এবং প্রতিটি পদক্ষেপে দানের মাধ্যমে ফিরিয়ে দিই।' },
      ],
    },
    products: {
      eyebrow: 'আমরা যা তৈরি করি',
      title: 'ঈমান ও সমাজের সেবায় সফটওয়্যার।',
      learnMore: 'আরও জানুন',
      status: { Live: 'চালু', Building: 'নির্মাণাধীন', 'In progress': 'চলমান' },
      items: [
        { title: 'আমানা ফান্ড', tagline: 'সুদমুক্ত ক্ষুদ্রঋণ', description: 'কর্জে হাসানা ঋণ যা পরিবারগুলোকে স্থায়ী আয়ের উৎস গড়তে সাহায্য করে। আমরা আমানার ওয়েবসাইট ও ব্যবস্থাপনা সফটওয়্যার তৈরি করেছি।' },
        { title: 'হিদায়াইআরপি', tagline: 'সহজ অর্থব্যবস্থাপনা', description: 'ইনভেন্টরি, গ্রাহক, সরবরাহকারী, ক্রয়, বিক্রয় ও পেমেন্ট — প্রতিটি লেনদেন দেখার জন্য কাস্টম ড্যাশবোর্ডসহ।' },
        { title: 'স্কুল ব্যবস্থাপনা', tagline: 'স্কুল ও বিনিয়োগকারীদের জন্য', description: 'শিক্ষক, শিক্ষার্থী, কর্মী ও বিনিয়োগকারীর তথ্য ট্র্যাক করুন — উপস্থিতি, খরচ এবং বেতন ও টিউশন ব্যবস্থাপনাসহ।' },
        { title: 'হিফজুল কলব', tagline: 'আপনার হিফজের বন্ধু', description: 'যারা কুরআন মুখস্থ করছেন ও বারবার রিভিশন দিচ্ছেন তাদের জন্য — একজন সঙ্গী যা আপনাকে ভুলে যাওয়া আয়াত মনে করিয়ে দেয়।' },
      ],
    },
    impact: {
      eyebrow: 'সদকায়ে জারিয়া',
      titlePre: 'আমরা যা কিছু তৈরি করি তার একটি অংশ অর্থায়ন করে ',
      titleHighlight: 'আমানা ফান্ড।',
      body:
        'আমানা ফান্ড অভাবী পরিবারগুলোকে সুদমুক্ত ঋণ (কর্জে হাসানা) দেয় — কষ্টের এক মুহূর্তকে স্থায়ী আয়ের উৎসে রূপান্তরিত করে। আপনি যখন হিদায়াসফটের সাথে কাজ করেন, আপনি সেই কাজে অবদান রাখেন।',
      cta: 'আমানা ফান্ড সম্পর্কে',
    },
    contact: {
      eyebrow: 'যোগাযোগ করুন',
      title: 'আসুন উম্মাহর জন্য কিছু তৈরি করি।',
      subtitle:
        'আপনি প্রতিষ্ঠান, বিনিয়োগকারী, কিংবা এমন কোনো উদ্যোগ — যার সঠিক সফটওয়্যার দরকার, আমরা আপনার কথা শুনতে চাই।',
      cta: 'কথা শুরু করুন',
    },
    footer: {
      tagline: 'উম্মাহর জন্য ডিজিটাল সমাধান।',
      note: 'আমাদের আয়ের একটি অংশ আমানা ফান্ডকে সহায়তা করে — অভাবীদের জন্য সুদমুক্ত ঋণ।',
      productsTitle: 'পণ্য',
      connectTitle: 'যোগাযোগ',
      copyright: 'হিদায়াসফট। যত্নের সাথে নির্মিত।',
      items: {
        'Amana Fund': 'আমানা ফান্ড',
        HidayaERP: 'হিদায়াইআরপি',
        'School Management': 'স্কুল ব্যবস্থাপনা',
        'Hifzul Qalb': 'হিফজুল কলব',
        About: 'পরিচিতি',
        Impact: 'অবদান',
        Contact: 'যোগাযোগ',
      },
    },
  },
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('hidayasoft-lang') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('hidayasoft-lang', language)
    const root = document.documentElement
    root.setAttribute('lang', language)
    root.classList.toggle('lang-bn', language === 'bn')
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
