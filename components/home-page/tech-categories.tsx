'use client'

import Link from 'next/link'
import { GrowingUnderline } from '~/components/ui/growing-underline'

// 定义类别类型
type CategoryItem = {
  title: string
  icon: string
  description: string
  path: string
  items: { title: string; path: string }[]
}

// 所有技术分类数据
const categories: CategoryItem[] = [
  {
    title: '编程语言',
    icon: '🔍',
    description: '深入探讨编程语言特性',
    path: '/tags/编程语言',
    items: [
      { title: '算法面试题集', path: '/tags/算法' },
      { title: '系统设计实战案例', path: '/tags/系统设计' },
      { title: '行为面试题解析', path: '/tags/行为面试' },
    ],
  },
  {
    title: '系统架构',
    icon: '📊',
    description: '分析式系统与架构设计实践',
    path: '/tags/系统架构',
    items: [
      { title: '产品经理面试必考方向', path: '/tags/产品经理' },
      { title: '用户体验方法论', path: '/tags/用户体验' },
      { title: '数据分析与策略', path: '/tags/数据分析' },
    ],
  },
  {
    title: '算法与数据结构',
    icon: '👥',
    description: '算法设计与性能优化',
    path: '/tags/算法',
    items: [
      { title: '技术特殊面试技巧', path: '/tags/面试技巧' },
      { title: '高效引用数据结构', path: '/tags/数据结构' },
      { title: '设计模式应用艺术', path: '/tags/设计模式' },
    ],
  },
  {
    title: '后端-架构专区',
    icon: '⚙️',
    description: '后端开发与系统架构深度解析',
    path: '/tags/后端',
    items: [
      { title: '缓存策略与实践', path: '/tags/缓存' },
      { title: '高并发系统设计', path: '/tags/高并发' },
      { title: '数据库优化技巧', path: '/tags/数据库' },
    ],
  },
  {
    title: '计算机基础专区',
    icon: '💻',
    description: '计算机科学核心知识体系',
    path: '/tags/计算机基础',
    items: [
      { title: '数据结构与算法', path: '/tags/算法' },
      { title: '操作系统原理', path: '/tags/操作系统' },
      { title: '计算机网络基础', path: '/tags/网络' },
    ],
  },
  {
    title: '前端-移动专区',
    icon: '📱',
    description: '前端开发与移动应用技术',
    path: '/tags/前端',
    items: [
      { title: 'React 高级技巧', path: '/tags/react' },
      { title: 'Flutter 实战指南', path: '/tags/flutter' },
      { title: '性能优化实践', path: '/tags/性能优化' },
    ],
  },
  {
    title: '运维-测试专区',
    icon: '🔧',
    description: 'DevOps 与测试保障体系',
    path: '/tags/运维',
    items: [
      { title: 'CI/CD 实践指南', path: '/tags/ci-cd' },
      { title: '自动化测试研究', path: '/tags/自动化测试' },
      { title: '云原生技术栈', path: '/tags/云原生' },
    ],
  },
  {
    title: 'AI-大数据专区',
    icon: '🧠',
    description: '人工智能与大数据技术前沿',
    path: '/tags/ai',
    items: [
      { title: '机器学习进阶篇', path: '/tags/机器学习' },
      { title: '深度学习实战', path: '/tags/深度学习' },
      { title: '大数据处理架构', path: '/tags/大数据' },
    ],
  },
]

export function TechCategories() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex text-2xl font-bold sm:text-2xl sm:leading-10 md:text-4xl">
          <span className="mr-2 text-indigo-600 dark:text-indigo-400 md:mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="mr-2 md:mr-3">技术分类</span>
        </div>
        <div className="flex items-center justify-end text-base font-medium leading-6">
          <Link
            href="/tags"
            className="text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            aria-label="所有分类"
          >
            <GrowingUnderline data-umami-event="all-categories">
              所有分类 <span className="ml-1">→</span>
            </GrowingUnderline>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  )
}

function CategoryCard({ category }: { category: CategoryItem }) {
  return (
    <div className="group h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all hover:border-indigo-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-indigo-900/40">
      <div className="p-6">
        <div className="mb-4 flex items-center text-xl font-semibold">
          <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-xl text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300">
            {category.icon}
          </span>
          <Link
            href={category.path}
            className="transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
          >
            {category.title}
          </Link>
        </div>
        <p className="mb-5 text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
        <ul className="space-y-2.5 text-sm">
          {category.items.map((item, idx) => (
            <li key={idx} className="flex items-center">
              <span className="mr-2 text-indigo-500 dark:text-indigo-400">•</span>
              <Link
                href={item.path}
                className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <GrowingUnderline>{item.title}</GrowingUnderline>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-5 text-right">
          <Link
            href={category.path}
            className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-800/40"
          >
            进入专区
            <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
