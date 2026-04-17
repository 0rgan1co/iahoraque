import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import WhatIs from '@/components/sections/WhatIs'
import Learnings from '@/components/sections/Learnings'
import Process from '@/components/sections/Process'
import Metrics from '@/components/sections/Metrics'
import LeadForm from '@/components/sections/LeadForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhatIs />
      <Learnings />
      <Process />
      <Metrics />
      <LeadForm />
    </main>
  )
}
