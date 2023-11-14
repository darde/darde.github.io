const styles = {
  container: {
    borderTopWidth: "1px",
    borderColor: "white",
    borderRadius: "8px",
    boxShadow: "1px 0px 3px rgba(0,0,0,0.4)",
    marginBottom: "30px",
    padding: "12px 10px",
    background: "rgba(255,255,255,0.1)",
    display: "flex",
    justifyContent: "space-between",
  },
  roles: {
    title: {
      fontSize: "24px",
      margin: "0",
    },
    company: {
      fontSize: "20px",
      display: "inline-flex",
    },
    year: {
      fontSize: "14px",
      fontStyle: "italic",
      marginLeft: "10px",
      display: "block",
      textAlign: "right",
    },
  },
}

type RolesProps = {
  title: string
  company: {
    name: string
    href: string
    year: {
      from: string
      to: string
    }
  }
}
const Role = ({ title, company }: RolesProps) => (
  <div style={styles.container}>
    <div>
      <h2 style={styles.roles.title}>{title}</h2>
      <a href={company.href} target="blank">
        <h3 style={styles.roles.company}>{company.name}</h3>
      </a>
    </div>
    <div>
      <label style={styles.roles.year}>{`${company.year.from} to ${company.year.to}`}</label>
    </div>
  </div>
)

export default Role
