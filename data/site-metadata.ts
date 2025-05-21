export const SITE_METADATA = {
  title: `技术领航站 | AI、编程与面试全栈资源平台`,
  author: '是不是很酷',
  headerTitle: `技术领航站`,
  description:
    '一站式技术学习平台，深度解析编程语言、算法数据结构、前后端开发、系统架构、AI大数据及产品运营。提供权威面试指南，实用编程教程和前沿技术动态，助力开发者提升技能，顺利通过技术面试。',
  keywords:
    'AI技术, 编程教程, 面试技巧, 算法与数据结构, 后端架构, 前端开发, 产品运营, 计算机基础, 运维技术, 大数据分析, Python, JavaScript, Java, 系统设计, LeetCode, 技术博客, 职业发展, 人工智能, 机器学习, 深度学习, 云计算, DevOps, 微服务, 数据库优化, 前端框架, React, Vue, 全栈开发',
  language: 'zh-cn',
  theme: 'system', // system, dark or light
  siteUrl: 'https://aitips.io',
  siteRepo: 'https://github.com/wujunqi/aitips.io',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.svg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
  email: 'aisosool2025@gmail.com',
  github: 'https://github.com/wujunqi',
  // x: 'https://x.com/hta218_',
  // facebook: 'https://facebook.com/hta218',
  // youtube: 'https://www.youtube.com/@hta218_',
  // linkedin: 'https://www.linkedin.com/in/hta218',
  // threads: 'https://www.threads.net/hta218_',
  // instagram: 'https://www.instagram.com/hta218_',
  locale: 'zh-CN',
  stickyNav: true,
  // goodreadsBookshelfUrl: 'https://www.goodreads.com/review/list/179720035-leo-huynh',
  // goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/179720035',
  // imdbRatingsList: 'https://www.imdb.com/user/ur154483197/ratings/?view=grid',
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: 'https://analytics.leohuynh.dev/share/c9ErglxqzY5CQJ8g/leohuynh.dev',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'zh-cn',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: '/search.json',
    },
  },
  support: {
    buyMeACoffee: 'https://www.buymeacoffee.com/leohuynh.dev',
    paypal: 'https://paypal.me/hta218?country.x=VN&locale.x=en_US',
    kofi: 'https://ko-fi.com/hta218',
  },
}
