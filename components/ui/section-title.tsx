import type { ReactNode } from 'react'
import clsx from 'clsx'

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={clsx(
        'flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white',
        className
      )}
    >
      {children}
    </h2>
  )
}
