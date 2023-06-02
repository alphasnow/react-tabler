'use client';

import MainHeader from '@/components/MainHeader'
import MainFooter from '@/components/MainFooter'

export default function MainLayout({
  children
}) {

  return (
    <div className="page">
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  )
}
