import type { Blog, Snippet } from '~/.contentlayer/generated'
import { Container } from '~/components/ui/container'
import type { CoreContent } from '~/types/data'
import { LatestPosts } from './latest-posts'
import { TechCategories } from './tech-categories'
import { WelcomeSection } from './welcome-section'

export function Home({
  posts,
  snippets,
}: {
  posts: CoreContent<Blog>[]
  snippets: CoreContent<Snippet>[]
}) {
  return (
    <Container as="div" className="pb-8 pt-4 lg:pt-6">
      {/* 欢迎区域 */}
      <div className="mb-16">
        <WelcomeSection />
      </div>

      {/* 最新技术文章部分 */}
      <div className="mb-16">
        <LatestPosts posts={posts} snippets={snippets} />
      </div>

      {/* 技术分类部分 */}
      <div className="mb-16">
        <TechCategories />
      </div>
    </Container>
  )
}
