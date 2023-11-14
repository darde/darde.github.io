import { useEffect, useState } from "react"
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

  return (
    <article>
      <h1>Experience</h1>
      <p className="mb-[50px]">
        I've been working as software engineer for 15 years. During my carreer I learned a lot of different disciplines
        and stacks working with different developers in distinct companies. Check below my experience working with
        different stacks.
      </p>
      <div className="flex flex-col gap-10 md:flex-row justify-start items-start md:gap-5 md:gap-[20px]">
        <article>
          <h1>Stacks</h1>
          {stacks.map((stack) => (
            <StackWidget key={stack.label} label={stack.label} years={stack.years} color={stack.color} />
          ))}
        </article>
        <article>
          <h1>Roles</h1>
          <p>During my carreer I worked with different roles performing different tasks.</p>
          {roles.map((role) => (
            <Role title={role.title} company={role.company} />
          ))}
        </article>
      </div>
    </article>
  )
}
