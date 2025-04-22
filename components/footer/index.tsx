import { clsx } from 'clsx'
import { Container } from '~/components/ui/container'
import { Link } from '~/components/ui/link'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { FOOTER_NAV_LINKS, FOOTER_PERSONAL_STUFF } from '~/data/navigation'
import { FooterBottom } from './footer-bottom'

export function Footer() {
  return (
    <Container as="footer" className="mb-4 mt-8 md:mt-16">
      <div
        className={clsx([
          'grid grid-cols-1 gap-x-8 gap-y-8 py-8 md:grid-cols-2 lg:grid-cols-4',
          'border-t border-gray-200 dark:border-gray-700',
          'rounded-t-lg bg-gradient-to-r from-indigo-50 to-blue-50 shadow-lg dark:from-gray-800 dark:to-gray-900',
          'p-6 text-gray-700 dark:text-gray-300',
        ])}
      >
        {/* 技术沉思录 */}
        <div className="col-span-1 space-y-4">
          <div className="text-lg font-bold text-indigo-800 dark:text-indigo-400">技术沉思录</div>
          <div className="text-sm">一个专注于技术深度与思考的程序员博客。</div>
          <div className="flex space-x-4 pt-2">
            <Link
              href="#"
              aria-label="微信"
              data-umami-event="social-wechat"
              className="text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.328.328 0 0 0 .186-.059l2.114-1.225a.636.636 0 0 1 .327-.095c.062 0 .124.01.186.03.943.272 1.952.414 2.995.414 0-.015-.014-1.3-.014-1.3-.049-4.077 3.847-7.347 8.65-7.347.324 0 .644.019.962.05v-1.2c-.35-.034-.696-.051-1.05-.051-3.826 0-7.136 2.321-8.537 5.625-.49-.088-1.075-.137-1.673-.137-2.745 0-4.982 1.321-4.982 2.936 0 1.615 2.236 2.936 4.982 2.936.267 0 .54-.013.814-.04.016 0 .032.002.05.002 0 .165.133.3.296.3.076 0 .143-.3.2-.075l1.425-.826c.148-.085.173-.295.087-.44"
                  transform="translate(0 2)"
                />
                <path
                  d="M23.728 16.4a.589.589 0 0 0 .197-.652l-.372-1.489c-.02-.069-.043-.139-.043-.209 0-.163.13-.295.289-.295.070 0 .134.023.186.058l2.113 1.225c.051.03.106.06.162.06.159 0 .291-.133.291-.296 0-.07-.027-.14-.046-.209-.372-1.357.070.279-.325-1.25.069-.023.138-.046.207-.069 2.113-1.036 3.517-2.836 3.517-4.892 0-3.215-3.23-5.83-7.203-5.83-3.974 0-7.203 2.614-7.203 5.83s3.23 5.83 7.203 5.83c.604 0 1.208-.07 1.788-.21a.3.3 0 0 1 .093-.015.299.299 0 0 1 .143.037l1.29.698z"
                  transform="translate(0 2)"
                />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="微博"
              data-umami-event="social-weibo"
              className="text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.098 20c-4.038 0-7.098-1.95-7.098-5.23 0-2.568 2.617-5.491 5.698-5.491.694 0 1.39.089 2.062.23.95-.911 1.86-1.766 2.598-2.491 0 .012-.019 1.897-.019 1.897s1.302-.512 2.31-.909c0 0-.446 1.39-1.539 2.39.984-.24 1.778-.557 2.434-.928-.567.873-1.39 1.614-2.31 2.322 0 4.24-4.098 8.21-10.136 8.21z" />
                <path d="M19.888 9.385c.107-.177.296-.906.296-1.822 0-1.952-1.543-3.563-3.296-3.563h-.154c-.167 0-.296.135-.296.302 0 .167.13.303.296.303h.154c1.317 0 2.701 1.364 2.701 2.958 0 .635-.084 1.249-.213 1.645-.06.146.016.303.166.35.154.052.32-.42.346-.173zM18.959 7.46c.06-.104.154-.49.154-.958 0-1.025-.808-1.822-1.712-1.822h-.082c-.167 0-.296.135-.296.302 0 .167.13.303.296.303h.082c.45 0 1.116.416 1.116 1.217 0 .261-.047.532-.107.688-.059.146.036.291.166.333.142.042.296-.042.383-.063zM16.42 8.729c-3.19-1.603-6.648.177-6.648.177-.178.105-.296.188-.296.188-.178.105-.226.315-.107.49.119.177.367.24.546.136 0 0 .06-.042.154-.084 0 0 2.629-1.327 5.068-.094 0 0 .844.344 1.299 1.124.238.4.38.855.38 1.332 0 .052-.005.101-.007.152.084-.21.136-.441.136-.683 0-1.045-.749-1.907-1.855-2.364-.82-.333-.546-.427.33-.375z" />
                <path d="M15.18 13.35c-.071-.176-.261-.25-.428-.176-.166.073-.237.281-.166.458.071.176.071.458.071.634 0 1.603-1.485 2.953-3.318 2.953-1.834 0-3.319-1.35-3.319-2.953 0-.176 0-.387.071-.634.071-.176 0-.385-.166-.458-.167-.073-.357 0-.428.176-.071.177-.143.458-.143.705 0 2.062 1.786 3.729 3.985 3.729 2.199 0 3.986-1.667 3.986-3.729 0-.247-.071-.528-.143-.705z" />
                <path d="M11.438 16.304c-1.239 0-2.246-1.006-2.246-2.246 0-1.241 1.007-2.247 2.246-2.247 1.24 0 2.247 1.006 2.247 2.247 0 1.24-1.007 2.246-2.247 2.246zm0-3.774c-.845 0-1.527.683-1.527 1.528 0 .844.682 1.527 1.527 1.527.845 0 1.527-.683 1.527-1.527 0-.845-.682-1.528-1.527-1.528z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="GitHub"
              data-umami-event="social-github"
              className="text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              data-umami-event="social-linkedin"
              className="text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* 快速链接 */}
        <div className="col-span-1 space-y-4">
          <div className="text-lg font-bold text-indigo-800 dark:text-indigo-400">快速链接</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <GrowingUnderline>首页</GrowingUnderline>
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <GrowingUnderline>文章专区</GrowingUnderline>
              </Link>
            </li>
            <li>
              <Link
                href="/snippets"
                className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <GrowingUnderline>面试经验</GrowingUnderline>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <GrowingUnderline>关于我们</GrowingUnderline>
              </Link>
            </li>
            <li>
              <Link
                href="/tags"
                className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <GrowingUnderline>投稿指南</GrowingUnderline>
              </Link>
            </li>
          </ul>
        </div>

        {/* 热门专区 */}
        <div className="col-span-1 space-y-4">
          <div className="text-lg font-bold text-indigo-800 dark:text-indigo-400">热门专区</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/blog/category/interview"
                className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <GrowingUnderline>面试题专区</GrowingUnderline>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/category/backend"
                className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <GrowingUnderline>后端架构专区</GrowingUnderline>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/category/frontend"
                className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <GrowingUnderline>前端移动专区</GrowingUnderline>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/category/ai"
                className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <GrowingUnderline>AI-大数据专区</GrowingUnderline>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/category/product"
                className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <GrowingUnderline>产品运营专区</GrowingUnderline>
              </Link>
            </li>
          </ul>
        </div>

        {/* 联系我们 */}
        <div className="col-span-1 space-y-4">
          <div className="text-lg font-bold text-indigo-800 dark:text-indigo-400">联系我们</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>contact@mianshijyz.com</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>400-888-8888</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>北京市海淀区中关村软件园</span>
            </li>
          </ul>
          <div className="pt-4">
            <form className="flex">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="w-full rounded-l-md border-0 bg-white px-3 py-1.5 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              />
              <button
                type="submit"
                className="flex-none rounded-r-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                订阅
              </button>
            </form>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
              每周精选技术文章直接发送到您的邮箱
            </p>
          </div>
        </div>
      </div>
      <FooterBottom />
    </Container>
  )
}
