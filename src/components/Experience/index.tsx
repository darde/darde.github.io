import { useEffect, useState } from "react"
import { onCLS, onFID, onLCP } from "web-vitals"
import { roles, yearsOfExperience } from "../../utils/data"
import Role from "./Role"
import StackWidget from "./StackWidget"

type StacksProps = {
  label: string
  years: number
  color: string
}
export default function Experience() {
  const [stacks, setStacks] = useState<StacksProps[]>([])

  useEffect(() => {
    setStacks(yearsOfExperience.slice())
  }, [])

  onCLS(console.log)
  onFID(console.log)
  onLCP(console.log)
  return (
    <article>
      <h1>Experience</h1>
      <p className="mb-[50px]">
        I've been working as software engineer for 15 years. During my carreer I learned a lot of different disciplines
        and stacks working with different developers at distinct companies. Check below my experience working with
        different stacks and roles.
      </p>
      <div className="flex flex-col items-center md:flex-row justify-start md:items-start">
        <article className="w-full md:w-[45%] md:pr-[70px]">
          <h1 className="text-[36px]">Stacks</h1>
          {stacks.map((stack) => (
            <StackWidget key={stack.label} label={stack.label} years={stack.years} color={stack.color} />
          ))}
        </article>
        <article className="w-full">
          <h1 className="text-[36px] mt-[30px] md:mt-0">Roles</h1>
          <p>During my carreer I worked with different roles performing different tasks.</p>
          {roles.map((role) => (
            <Role key={role.company.name} title={role.title} company={role.company} />
          ))}
        </article>
      </div>
    </article>
  )
}
