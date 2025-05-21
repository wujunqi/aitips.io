'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import type { CoreContent, MDXDocument } from '~/types/data'
import { formatDate } from '~/utils/misc'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q') || ''
  const [results, setResults] = useState<CoreContent<MDXDocument>[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSearchResults() {
      try {
        setLoading(true)
        const res = await fetch('/search.json')
        if (!res.ok) {
          throw new Error(`搜索数据获取失败: ${res.status} ${res.statusText}`)
        }

        const allPosts = await res.json()

        // 简单的客户端搜索过滤
        const filteredResults = allPosts.filter((post: CoreContent<MDXDocument>) => {
          const searchContent =
            `${post.title} ${post.summary || ''} ${post.tags?.join(' ') || ''}`.toLowerCase()
          return searchContent.includes(searchQuery.toLowerCase())
        })

        setResults(filteredResults)
        setLoading(false)
      } catch (error) {
        console.error('搜索出错:', error)
        setLoading(false)
      }
    }

    if (searchQuery) {
      fetchSearchResults()
    } else {
      setResults([])
      setLoading(false)
    }
  }, [searchQuery])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">搜索结果: {searchQuery}</h1>

      {loading ? (
        <div className="py-10 text-center">
          <p>正在搜索...</p>
        </div>
      ) : results.length > 0 ? (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {results.map((post) => (
            <li key={post.path} className="py-4">
              <Link
                href={`/${post.path}`}
                className="block rounded p-4 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <h2 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-gray-500">{formatDate(post.date)}</p>
                {post.summary && (
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{post.summary}</p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="py-10 text-center">
          <p>未找到与 "{searchQuery}" 相关的内容</p>
          <p className="mt-4 text-gray-500">请尝试其他搜索词，或浏览我们的内容分类</p>
        </div>
      )}
    </div>
  )
}
