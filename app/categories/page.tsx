import { genPageMetadata } from 'app/seo'
import { allBlogs } from 'contentlayer/generated'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import Link from 'next/link'
import { GrowingUnderline } from '~/components/ui/growing-underline'

export let metadata = genPageMetadata({ title: '文章分类' })

export default function CategoriesPage() {
  // 获取所有博客文章的分类
  const categoriesSet = new Set<string>()

  allBlogs.forEach((post) => {
    if (post.categories) {
      categoriesSet.add(post.categories)
    }
  })

  const categories = Array.from(categoriesSet).sort()

  // 计算每个分类下的文章数量
  const categoryCounts = {}
  allBlogs.forEach((post) => {
    if (post.categories) {
      if (categoryCounts[post.categories]) {
        categoryCounts[post.categories]++
      } else {
        categoryCounts[post.categories] = 1
      }
    }
  })

  return (
    <Container className="pt-4 lg:pt-8">
      <PageHeader
        title="文章分类"
        description="按照不同的技术领域和主题浏览所有文章"
        className="border-b border-gray-200 dark:border-gray-700"
      />

      <div className="py-10">
        {categories.length === 0 ? (
          <p>暂无分类</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/categories/${category.toLowerCase()}`}
                className="group block rounded-xl border border-gray-200 p-6 transition-all hover:border-indigo-200 hover:shadow-md dark:border-gray-800 dark:hover:border-indigo-900/40"
              >
                <h3 className="mb-2 text-xl font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  <GrowingUnderline>{category}</GrowingUnderline>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {categoryCounts[category]} 篇文章
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Container>
  )
}
