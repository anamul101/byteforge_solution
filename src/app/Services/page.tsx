import { ServicesCards } from '@/components/Services/ServicesCards'
import { ServicesSection } from '@/components/Services/ServicesSection'
import { ServicesTittel } from '@/components/Services/ServicesTittel'
import React from 'react'

export default function services() {
  return (
    <>
        <ServicesSection/>
        <ServicesTittel/>
        <ServicesCards/>
    </>
  )
}
