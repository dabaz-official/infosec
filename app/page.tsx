import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'InfoSec Docs by DabAZ'
}

export default function Home() {
  return (
    <div className='items-center justify-items-center p-6 xl:p-12'>
      InfoSec
    </div>
  );
}
