import { SITE_METADATA } from './site-metadata'

export const HEADER_NAV_LINKS = [
  { href: '/blog', title: '博客', emoji: 'writing-hand' },
  { href: '/snippets', title: '代码片段', emoji: 'dna' },
  { href: '/projects', title: '项目', emoji: 'man-technologist' },
  { href: '/about', title: '关于', emoji: 'billed-cap' },
]

export const MORE_NAV_LINKS = [
  { href: '/books', title: '书籍', emoji: 'books' },
  { href: '/movies', title: '电影', emoji: 'film-frames' },
  { href: '/tags', title: '标签', emoji: 'label' },
]

export const FOOTER_NAV_LINKS = [
  { href: '/blog', title: '博客' },
  { href: '/snippets', title: '代码片段' },
  { href: '/projects', title: '项目' },
  { href: '/tags', title: '标签' },
  { href: '/feed.xml', title: 'RSS 订阅' },
]

export const FOOTER_PERSONAL_STUFF = [
  { href: '/about', title: '关于' },
  { href: '/static/resume.pdf', title: '简历' },
  { href: '/books', title: '书籍' },
  { href: '/movies', title: '电影' },
  { href: SITE_METADATA.analytics.umamiAnalytics.shareUrl, title: '分析' },
]
