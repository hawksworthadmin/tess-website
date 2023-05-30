import Layout from '@/components/layout/Layout'
import Blog from '@/components/pages/Blog/Blog'
import { useRouter } from 'next/router'
import React from 'react'

export default function TheType() {
    const router = useRouter();
    const {type} = router.query;
  return (
    <Layout>
        <Blog heading={String(type).toUpperCase().replace('-',' ')} />
    </Layout>
  )
}
