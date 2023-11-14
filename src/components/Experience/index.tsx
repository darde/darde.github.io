import { useEffect, useState } from "react"
import { yearsOfExperience } from "../../utils/data"
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

  const styles = {
    roles: {
      title: {
        fontSize: "24px",
      },
      company: {
        fontSize: "20px",
        display: "inline-flex",
      },
    },
  }

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
          <div>
            <h2 style={styles.roles.title}>Senior Software Engineer</h2>
            <a href="https://www.sierra.studio/" target="blank">
              <h3 style={styles.roles.company}>Sierra Studio/Still Life Inc.</h3>
            </a>
          </div>
          <div>
            <h2 style={styles.roles.title}>Principal Engineer</h2>
            <a href="https://www.pipefy.com/pt-br/" target="blank">
              <h3 style={styles.roles.company}>Pipefy</h3>
            </a>
          </div>
        </article>
      </div>
    </article>
  )
}
