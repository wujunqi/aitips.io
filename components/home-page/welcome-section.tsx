'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { Twemoji } from '~/components/ui/twemoji'

const popularTopics = [
  { name: 'React', href: '/tags/react' },
  { name: 'TypeScript', href: '/tags/typescript' },
  { name: 'Next.js', href: '/tags/nextjs' },
  { name: 'JavaScript', href: '/tags/javascript' },
  { name: '人工智能', href: '/tags/ai' },
]

export function WelcomeSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <div className="mb-12 rounded-2xl bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 p-6 p-8 shadow-lg dark:from-gray-800 dark:via-indigo-900/30 dark:to-gray-900">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-bold text-indigo-800 dark:text-indigo-300 md:text-4xl lg:text-5xl">
            AI技术学习与分享
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300 lg:text-xl">
            探索前沿技术，提升编程技能，分享实用经验
          </p>
        </div>

        {/* 搜索框 */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="relative mx-auto max-w-3xl">
            <input
              type="text"
              placeholder="搜索文章、代码片段和教程..."
              className="w-full rounded-full border-0 bg-white/90 px-5 py-4 pr-12 text-gray-700 shadow-md backdrop-blur-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800/60 dark:text-gray-200 dark:focus:bg-gray-800/90"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-4 rounded-full p-1 text-indigo-500 transition-colors hover:bg-indigo-100 hover:text-indigo-600 dark:text-indigo-400 dark:hover:bg-indigo-900/40 dark:hover:text-indigo-300"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>

        {/* 热门话题 */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">热门话题：</span>
            {popularTopics.map((topic) => (
              <Link
                key={topic.name}
                href={topic.href}
                className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm backdrop-blur-sm transition-all hover:bg-indigo-100 hover:text-indigo-800 dark:bg-gray-800/70 dark:text-indigo-300 dark:hover:bg-indigo-900/40 dark:hover:text-indigo-200"
              >
                {topic.name}
              </Link>
            ))}
          </div>
        </div>

        {/* 精选内容 */}
        <div className="overflow-hidden rounded-xl bg-white/90 p-6 shadow-md backdrop-blur-sm transition-all dark:bg-gray-800/70">
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
            <Twemoji emoji="fire" /> 精选推荐
          </h2>
          <div className="mt-4 overflow-hidden rounded-lg border border-indigo-100 bg-indigo-50/80 p-5 transition-all hover:bg-indigo-100/50 dark:border-indigo-900/50 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/40">
            <h3 className="mb-2 font-semibold text-indigo-800 dark:text-indigo-300">
              大语言模型提示工程实用指南
            </h3>
            <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
              学习如何设计高效的提示，让AI工具为您服务，提高工作效率
            </p>
            <Link
              href="/blog/prompt-engineering-guide"
              className="inline-flex items-center text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              立即阅读
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
