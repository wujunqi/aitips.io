import { useKBar } from 'kbar'
import { Command } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function KbarSearchTrigger() {
  const { query } = useKBar()
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`)
    }
  }

  return (
    <div className="flex items-center">
      <form onSubmit={handleSearch} className="relative mr-2 hidden sm:block">
        <input
          type="text"
          placeholder="搜索..."
          className="w-40 rounded-md border border-gray-200 bg-white py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="搜索"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>

      <button
        aria-label="搜索"
        className="rounded p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700"
        data-umami-event="search-the-site"
        onClick={() => query.toggle()}
      >
        <Command size={20} strokeWidth={1.5} />
      </button>
    </div>
  )
}
