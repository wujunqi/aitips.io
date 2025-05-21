import { SITE_METADATA } from './site-metadata'

export const HEADER_NAV_LINKS = [
  { href: '/blog', title: '博客', emoji: 'writing-hand' },
  { href: '/tags', title: '标签', emoji: 'label' },
  { href: 'https://mianshizhushou.com', title: 'Offer蛙', emoji: 'label' },
  { href: '/projects', title: '应用', emoji: 'man-technologist' },
]

export const MORE_NAV_LINKS = [
  { href: 'https://playio.io/', title: '小游戏', emoji: 'video-game' },
  { href: 'https://buddhasay.net/', title: '佛说', emoji: 'label' },
]

export const FOOTER_NAV_LINKS = [
  { href: '/blog', title: '博客' },
  { href: '/tags', title: '标签', emoji: 'label' },
  { href: 'https://mianshizhushou.com', title: 'Offer蛙', emoji: 'label' },
  { href: '/projects', title: '应用', emoji: 'man-technologist' },
]

export const FOOTER_PERSONAL_STUFF = [
  { href: '/about', title: '关于' },
  { href: '/static/resume.pdf', title: '简历' },
  { href: '/books', title: '书籍' },
  { href: '/movies', title: '电影' },
  { href: SITE_METADATA.analytics.umamiAnalytics.shareUrl, title: '分析' },
]
