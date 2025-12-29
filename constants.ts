import { 
  BarChart2, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  BookOpen, 
  Users, 
  Video, 
  MessageCircle 
} from 'lucide-react';
import { Review, VideoTestimonial, CurriculumModule, FAQItem, Feature } from './types';

export const HERO_TICKER_ITEMS = [
  { symbol: "JKH", price: "185.50", change: "+1.2%" },
  { symbol: "COMB", price: "82.10", change: "+0.5%" },
  { symbol: "HNB", price: "160.00", change: "+2.1%" },
  { symbol: "SAMP", price: "74.50", change: "-0.2%" },
  { symbol: "LOLC", price: "345.25", change: "+4.5%" },
  { symbol: "EXPO", price: "140.00", change: "+1.8%" },
  { symbol: "DIAL", price: "9.80", change: "+0.0%" },
  { symbol: "HAYL", price: "92.00", change: "+3.1%" },
];

export const FACEBOOK_REVIEWS = [
  {
    id: 'fb1',
    name: 'MFS AHAMED',
    src: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fahamed9052%2Fposts%2Fpfbid0nBCiLf1vK2GyYGo7yR3np1oEcPRwLiS6Rx7QZihkDZ5psD8donvAA115FTLuoCpGl&show_text=true&width=500',
    height: 291
  },
  {
    id: 'fb2',
    name: 'RM ASLAM',
    src: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmohamedaslam.rm.3%2Fposts%2Fpfbid02rZzLPVZ4cCZH7ERZGGoXrYPznRjfTjVvgQt3Ln1DeY6FDoor3XrwTpri8tuAp9Til&show_text=true&width=500',
    height: 310
  },
  {
    id: 'fb3',
    name: 'Theivendram Ravi',
    src: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftheivendram.ravi%2Fposts%2Fpfbid04qVes5oyxWeKVVBPsoyk5nu5SggsAS8V1vhkv4Z9Q65TakWA5aNNVnZAGk5HgbFel&show_text=true&width=500',
    height: 285
  },
  {
    id: 'fb4',
    name: 'Kajenthiran thuwaragan',
    src: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkupenthiran.thuwaragan.7%2Fposts%2Fpfbid0GgKMKfLcUWL76kuTMZVCMMUcP8a54uCoS98QH5TMUUMjQSVeYAh4CTphTtCTL4kBl&show_text=true&width=500',
    height: 304
  },
  {
    id: 'fb5',
    name: 'Nero shad',
    src: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmbmarshad%2Fposts%2Fpfbid0824TEpxCjzSYkrRyqH1gE3eP54iy2sY3jz4ZFNCokgM8WT1RW6A39uRemHBWaLVjl&show_text=true&width=500',
    height: 233
  },
  {
    id: 'fb6',
    name: 'Varnan Varnan',
    src: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvarnan.subramaniyam%2Fposts%2Fpfbid0CKAhyss2WpPQFikvD4j3hss7PhG1nfiLxojBHtoLqw4n8ESet3nDyx1rXb1gtqdyl&show_text=true&width=500',
    height: 227
  },
  {
    id: 'fb7',
    name: 'Mhd Nahfees',
    src: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmohamed.nahfeesnaseer%2Fposts%2Fpfbid02SDgdxbKavyFwJ6sGtXYkRV8fsGLny5yUJ514obi7Xu3GpzcwmSCSHDoQeixnudVGl&show_text=true&width=500',
    height: 250
  },
  {
    id: 'fb8',
    name: 'Thanu Sri',
    src: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthanulakshan.sriskantharaja%2Fposts%2Fpfbid0137N73KBsMucYUZJskTFVCWELptHFap6NvZy9Mmj33dXcMsJgwkVYWh7pWFUQAH1l&show_text=true&width=500',
    height: 304
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Kasun Perera',
    role: 'Software Engineer',
    content: "Renzo's course completely changed how I look at the CSE. I went from losing money to consistent weekly profits.",
    rating: 5,
    date: '2 days ago',
    imageUrl: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'Dilini Silva',
    role: 'Entrepreneur',
    content: "The technical analysis module is gold. It's explained so simply that even a beginner like me understood it immediately.",
    rating: 5,
    date: '1 week ago',
    imageUrl: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: 'Mohamed Fazil',
    role: 'Accountant',
    content: "Best investment I made this year. The risk management strategies saved my capital multiple times.",
    rating: 5,
    date: '3 weeks ago',
    imageUrl: 'https://picsum.photos/100/100?random=3'
  },
  {
    id: '4',
    name: 'Amara Jayasooriya',
    role: 'Student',
    content: "I paid for the course with my first month's trading profits. Highly recommend!",
    rating: 5,
    date: '1 month ago',
    imageUrl: 'https://picsum.photos/100/100?random=4'
  }
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'v1',
    name: 'Shehan D.',
    location: 'Kandy',
    result: 'Made LKR 150,000 in 2 months',
    thumbnailUrl: 'https://picsum.photos/600/400?random=10',
    videoUrl: '#',
    duration: '2:14'
  },
  {
    id: 'v2',
    name: 'Nimali K.',
    location: 'Colombo',
    result: 'Quit my 9-5 to trade full time',
    thumbnailUrl: 'https://picsum.photos/600/400?random=11',
    videoUrl: '#',
    duration: '3:45'
  },
  {
    id: 'v3',
    name: 'Rajiv M.',
    location: 'Galle',
    result: 'Built a LKR 5M Portfolio',
    thumbnailUrl: 'https://picsum.photos/600/400?random=12',
    videoUrl: '#',
    duration: '1:58'
  }
];

export const FEATURES: Feature[] = [
  {
    icon: BarChart2,
    title: 'Technical Analysis Mastery',
    description: 'Master candlestick patterns, indicators, and chart reading to predict market movements.'
  },
  {
    icon: TrendingUp,
    title: 'CSE Market Fundamentals',
    description: 'Understand how the Colombo Stock Exchange works, trading hours, and market structure.'
  },
  {
    icon: ShieldCheck,
    title: 'Risk Management',
    description: 'Learn position sizing and stop-loss strategies to protect your hard-earned capital.'
  },
  {
    icon: Clock,
    title: 'Entry & Exit Strategies',
    description: 'Know exactly when to enter a trade and when to take profits for maximum gain.'
  },
  {
    icon: BookOpen,
    title: 'Fundamental Analysis',
    description: 'Evaluate Sri Lankan companies using financial statements and key ratios.'
  },
  {
    icon: Users,
    title: 'Trading Psychology',
    description: 'Master emotional control, discipline, and patience to trade like a professional.'
  },
  {
    icon: Video,
    title: 'Live Trading Sessions',
    description: 'Watch Renzo analyze the market in real-time and learn from live examples.'
  },
  {
    icon: MessageCircle,
    title: 'Lifetime Community',
    description: 'Join a private WhatsApp group with 1,500+ traders to share ideas and signals.'
  }
];

export const CURRICULUM: CurriculumModule[] = [
  {
    id: 1,
    title: 'Introduction to Stock Market & CSE',
    lessonCount: 5,
    duration: '2h 15m',
    lessons: ['What is the Stock Market?', 'Overview of CSE', 'Opening a CDS Account', 'Market Participants', 'Trading Platforms Setup']
  },
  {
    id: 2,
    title: 'Technical Analysis Foundations',
    lessonCount: 8,
    duration: '3h 45m',
    lessons: ['Understanding Price Action', 'Candlestick Anatomy', 'Major Chart Patterns', 'Support & Resistance', 'Trend Lines & Channels']
  },
  {
    id: 3,
    title: 'Advanced Technical Indicators',
    lessonCount: 6,
    duration: '3h 10m',
    lessons: ['Moving Averages (SMA/EMA)', 'RSI Strategies', 'MACD Mastery', 'Bollinger Bands', 'Volume Analysis', 'Combining Indicators']
  },
  {
    id: 4,
    title: 'Fundamental Analysis',
    lessonCount: 5,
    duration: '2h 50m',
    lessons: ['Reading Annual Reports', 'P/E, EPS, and NAV', 'Dividend Investing', 'Macroeconomic Factors in SL', 'Sector Analysis']
  },
  {
    id: 5,
    title: 'Risk Management & Psychology',
    lessonCount: 7,
    duration: '4h 00m',
    lessons: ['Position Sizing Calculator', 'Setting Stop Losses', 'Risk/Reward Ratio', 'Dealing with Loss', 'The Trader Mindset', 'Journaling Trades']
  },
  {
    id: 6,
    title: 'Live Trading & Application',
    lessonCount: 4,
    duration: '2h 30m',
    lessons: ['Pre-market Routine', 'Live Market Analysis', 'Executing Trades', 'Portfolio Review']
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is this course suitable for complete beginners?",
    answer: "Yes! We start from the absolute basics of what a stock is and guide you step-by-step to advanced trading strategies. No prior finance knowledge is required."
  },
  {
    question: "Do I need a lot of capital to start?",
    answer: "Not at all. You can start investing in the CSE with as little as LKR 5,000. We teach you how to grow small accounts safely."
  },
  {
    question: "How long does it take to complete the course?",
    answer: "The course contains over 18 hours of video content. Most students complete it in 2-3 weeks, but you have lifetime access to learn at your own pace."
  },
  {
    question: "Is there ongoing support after the course?",
    answer: "Absolutely. You get lifetime access to our private student community where Renzo and senior students answer questions daily."
  },
  {
    question: "What is the refund policy?",
    answer: "We offer a 30-day money-back guarantee. If you complete the course and don't feel you've gained value, we'll refund your investment, no questions asked."
  }
];

export const PRICING_DATA = {
  originalPrice: 75000,
  currentPrice: 29999,
  discount: 60
};