import FutureSection from '@/components/FutureSection'
import ProductCards from '@/components/Products/ProductCards'
import ProductFeatures from '@/components/Products/ProductFeatures'
import ProductsHeroSection from '@/components/Products/ProductsHeroSection'
import VedioSection from '@/components/Products/VedioSection'
import React from 'react'

export default function Products() {
  return (
    <>
      <ProductsHeroSection/>
      <ProductCards/>
      <ProductFeatures/>
      <VedioSection/>
      <FutureSection/>
    </>
  )
}
