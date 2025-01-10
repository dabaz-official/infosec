import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  title: 'InfoSec Docs by DabAZ'
}

const IndexPage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen py-2">
      <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-extrabold mb-4">
        信息系统安全
      </h1>
      <a href='/docs' className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-600 dark:text-blue-500 underline hover:no-underline transition-opacity duration-300">
        开始学习 ↗
      </a>
    </div>
  )
}

export default IndexPage
