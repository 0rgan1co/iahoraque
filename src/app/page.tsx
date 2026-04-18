import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Cost from '@/components/sections/Cost'
import WhatIs from '@/components/sections/WhatIs'
import Learnings from '@/components/sections/Learnings'
import Principle from '@/components/sections/Principle'
import Process from '@/components/sections/Process'
import Agents from '@/components/sections/Agents'
import Metrics from '@/components/sections/Metrics'
import Qualifier from '@/components/sections/Qualifier'
import LeadForm from '@/components/sections/LeadForm'
import Manifesto from '@/components/sections/Manifesto'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Cost />
      <WhatIs />
      <Learnings />
      <Principle />
      <Process />
      <Agents />
      <Metrics />
      <Qualifier />
      <LeadForm />
      <Manifesto />
    </main>
  )
}
