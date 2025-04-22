'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { Blog, Snippet } from '~/.contentlayer/generated'
import { PostCardListView } from '~/components/blog/post-card-list-view'
import { SnippetCard } from '~/components/cards/snippet'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import type { CoreContent } from '~/types/data'
import { formatDate } from '~/utils/misc'
import { SITE_METADATA } from '~/data/site-metadata'

export function LatestPosts({
  posts,
  snippets,
}: {
  posts: CoreContent<Blog>[]
  snippets: CoreContent<Snippet>[]
}) {
  let [view, setView] = useState<'posts' | 'snippets'>('posts')
  return (
    <div className="space-y-6 divide-y divide-gray-200 dark:divide-gray-700 md:space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex text-2xl font-bold sm:text-2xl sm:leading-10 md:text-4xl">
          <span className="mr-2 text-blue-500 md:mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.5,16 L13,16 L13,22 L19,22 L19,20.5 L14.5,20.5 L14.5,16 Z M8.5,2 L10,2 L10,7.5 L14.5,7.5 L14.5,2 L16,2 L16,9 L8.5,9 L8.5,2 Z M18.5,9 L18.5,14.5 L23,14.5 L23,16 L17,16 L17,9 L18.5,9 Z M4.5,14.5 L4.5,9 L6,9 L6,16 L0,16 L0,14.5 L4.5,14.5 Z"></path>
            </svg>
          </span>
          <span className="mr-2 md:mr-3">最新技术文章</span>
        </div>
        <div className="flex items-center justify-end text-base font-medium leading-6">
          <Link href="/blog" className="text-blue-500 hover:text-blue-600" aria-label="All posts">
            <GrowingUnderline data-umami-event="all-posts">
              查看全部 <span className="ml-1">→</span>
            </GrowingUnderline>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.slice(0, 4).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

function PostCard({ post }: { post: CoreContent<Blog> }) {
  const defaultImage = `${SITE_METADATA.siteUrl}/static/images/default-post-image.jpg`

  return (
    <div className="group h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
      <div className="relative h-48 w-full overflow-hidden">
        {post.images?.[0] ? (
          <Link href={`/blog/${post.slug}`}>
            <Image
              src={post.images[0]}
              alt={post.title}
              width={400}
              height={200}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        ) : (
          <div className="h-full w-full bg-gray-200 dark:bg-gray-800" />
        )}
      </div>
      <div className="flex h-[calc(100%-12rem)] flex-col justify-between p-5">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              {post.tags?.[0] || '未分类'}
            </span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
          </div>
          <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-blue-500">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
            {post.summary}
          </p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gray-500">
              <svg viewBox="0 0 16 14" fill="currentColor" className="h-4 w-4">
                <path
                  d="M15.985 7.00012C15.9688 7.39162 15.6156 8.10824 15.2906 8.71918C14.4219 10.3636 12.4469 12.5342 8.76878 12.9224C5.32816 13.2836 2.01566 11.5555 0.453526 7.00012C2.01566 2.44387 5.32816 0.716496 8.76878 1.07699C12.4469 1.46512 14.4219 3.63637 15.2906 5.28043C15.6156 5.892 15.9688 6.60887 15.985 7.00012Z"
                  stroke="currentColor"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10.5 7C10.5 8.38071 9.38071 9.5 8 9.5C6.61929 9.5 5.5 8.38071 5.5 7C5.5 5.61929 6.61929 4.5 8 4.5C9.38071 4.5 10.5 5.61929 10.5 7Z"
                  stroke="currentColor"
                  strokeLinejoin="round"
                ></path>
              </svg>
              {post.readingTime?.text || '3 min read'}
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              <svg viewBox="0 0 16 14" fill="none" stroke="currentColor" className="h-4 w-4">
                <path
                  d="M8.00027 1.33334C9.0667 0.158302 11.4493 -0.341364 13.4826 1.12C15.5159 2.58137 15.9159 5.55478 13.8159 7.50001L11.3493 9.8667C10.0159 11.0834 7.9493 11.0834 6.61595 9.8667L4.14931 7.50001C2.05061 5.55478 2.45061 2.58137 4.48394 1.12C6.51727 -0.341364 8.82596 0.158302 10.0006 1.33334"
                  strokeLinejoin="round"
                ></path>
              </svg>
              86
            </span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 transition-colors hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-800/40"
          >
            阅读全文
          </Link>
        </div>
      </div>
    </div>
  )
}
