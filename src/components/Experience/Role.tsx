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

type RolesProps = {
  title: string
  company: {
    name: string
    href: string
  }
}
const Role = ({ title, company }: RolesProps) => (
  <div>
    <h2 style={styles.roles.title}>{title}</h2>
    <a href={company.href} target="blank">
      <h3 style={styles.roles.company}>{company.name}</h3>
    </a>
  </div>
)

export default Role
