import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  title: 'InfoSec Docs by DabAZ'
}

const IndexPage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">InfoSec Docs by DabAZ</h1>
      <p className="text-lg mb-8">
        This is a collection of information security documentation by DabAZ.
      </p>
    </div>
  )
}

export default IndexPage
