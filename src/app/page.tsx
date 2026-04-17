import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import WhatIs from '@/components/sections/WhatIs'
import Learnings from '@/components/sections/Learnings'
import Process from '@/components/sections/Process'
import Journey from '@/components/sections/Journey'
import Movements from '@/components/sections/Movements'
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
      <Journey />
      <Movements />
      <Metrics />
      <LeadForm />
    </main>
  )
}
