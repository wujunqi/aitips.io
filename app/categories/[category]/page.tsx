import { genPageMetadata } from 'app/seo'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import { ListLayout } from '~/layouts/list-layout'
import { POSTS_PER_PAGE } from '~/utils/const'
import { allCoreContent } from '~/utils/contentlayer'
import { sortPosts } from '~/utils/misc'

export async function generateStaticParams() {
  const categories = new Set<string>()

  allBlogs.forEach((post) => {
    if (post.categories) {
      categories.add(post.categories.toLowerCase())
    }
  })

  return Array.from(categories).map((category) => ({
    category: category,
  }))
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  // 分类首字母大写显示
  const formattedCategory = params.category.charAt(0).toUpperCase() + params.category.slice(1)
  return genPageMetadata({ title: `${formattedCategory} - 文章分类` })
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category.toLowerCase()

  // 筛选该分类下的所有文章
  const filteredPosts = allBlogs.filter(
    (post) => post.categories && post.categories.toLowerCase() === category
  )

  // 如果没有找到该分类或该分类下没有文章，返回404页面
  if (filteredPosts.length === 0) {
    return notFound()
  }

  // 对文章进行排序
  const posts = allCoreContent(sortPosts(filteredPosts))
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  // 分类首字母大写显示
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={`${formattedCategory}分类文章`}
    />
  )
}
