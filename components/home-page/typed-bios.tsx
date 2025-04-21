'use client'

import { clsx } from 'clsx'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Twemoji } from '~/components/ui/twemoji'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedBios() {
  let el = useRef(null)
  let typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      typed.current?.destroy()
      typed.current = createTypedInstance(el.current)
    }
  }, [])

  return (
    <div
      className={clsx([
        'flex min-h-8 items-center gap-0.5',
        [
          '[&_.typed-cursor]:inline-block',
          '[&_.typed-cursor]:w-2',
          '[&_.typed-cursor]:h-5.5',
          '[&_.typed-cursor]:text-transparent',
          '[&_.typed-cursor]:bg-slate-800',
          'dark:[&_.typed-cursor]:bg-slate-100',
        ],
      ])}
    >
      <ul id="bios" className="hidden">
        <li>
          在工作中，我的别名是 <span className="font-medium">Leo</span>。
        </li>
        <li>我是一个学习者、建造者和自由追求者。</li>
        <li>我住在越南河内。</li>
        <li>我出生在美丽的莫榭高原。</li>
        <li>我学习的第一门编程语言是Pascal。</li>
        <li>我热爱网页开发。</li>
        <li>我专注于构建电子商务软件。</li>
        <li>我主要使用JS/TS技术工作。</li>
        <li>我是Tu Le的丈夫。</li>
        <li>
          我是爱狗人士。
          <Twemoji emoji="dog" />
        </li>
        <li>
          我是个运动爱好者。我喜欢
          <span className="ml-1">
            <Twemoji emoji="soccer-ball" />,
            <Twemoji emoji="man-swimming" />,
            <Twemoji emoji="ping-pong" />,
            <Twemoji emoji="volleyball" />
          </span>
        </li>
        <li>我喜欢看足球比赛。</li>
        <li>
          我喜欢弹钢琴和吉他。
          <Twemoji emoji="musical-keyboard" /> & <Twemoji emoji="guitar" />
        </li>
        <li>我喜欢摇滚音乐。</li>
        <li>
          我喜欢下象棋。
          <Twemoji emoji="chess-pawn" />
        </li>
        <li>
          我喜欢玩电子游戏，PES是我最喜欢的。
          <Twemoji emoji="video-game" />
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
