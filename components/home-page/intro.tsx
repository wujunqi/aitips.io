import { Twemoji } from '~/components/ui/twemoji'

export function Intro() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      我是 <span className="font-medium">黄图安（Tuan Anh Huynh）</span> - 一名来自
      <span className="hidden font-medium">越南</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-vietnam" />
      </span>
      的热情软件工程师
    </h1>
  )
}
