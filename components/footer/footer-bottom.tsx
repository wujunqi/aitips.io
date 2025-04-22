import { clsx } from 'clsx'
import { Link } from '~/components/ui/link'
import { SITE_METADATA } from '~/data/site-metadata'

export function FooterBottom() {
  return (
    <div
      className={clsx([
        'py-4 md:my-2',
        'flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-16',
        'border-t border-gray-200 dark:border-gray-700',
        'rounded-b-lg bg-gradient-to-r from-indigo-50 to-blue-50 shadow-lg dark:from-gray-800 dark:to-gray-900',
        'px-6 text-sm text-gray-700 dark:text-gray-400',
      ])}
    >
      <div className="text-center md:text-left">
        © {new Date().getFullYear()} 技术沉思录. 保留所有权利.
      </div>
      <div className="flex items-center space-x-4">
        <Link
          href="/privacy"
          className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          隐私政策
        </Link>
        <Link
          href="/terms"
          className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          服务条款
        </Link>
        <Link
          href="/sitemap.xml"
          className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          站点地图
        </Link>
      </div>
    </div>
  )
}
