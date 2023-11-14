import { useEffect, useRef } from "react"

type StackWidgetProps = {
  label: string
  years: number
  color?: string
}

const StackWidget = ({ label, years, color = "green" }: StackWidgetProps) => {
  const barRef = useRef<HTMLDivElement>(null)
  const maxYears = 15
  const maxWidth = 300
  const initialBarWidth = 1
  const barWidth = (years * maxWidth) / maxYears

  useEffect(() => {
    setTimeout(() => {
      if (barRef?.current) {
        barRef.current.style.width = `${barWidth}px`
      }
    }, 500)
  }, [])

  const styles = {
    container: {
      borderTopWidth: "1px",
      borderTopColor: "white",
      width: `${maxWidth}px`,
      boxShadow: "1px 1px 3px rgba(0,0,0,0.3)",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      borderRadius: "4px",
      height: "15px",
    },
    label: {
      fontSize: "16px",
      textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
    },
  }
  return (
    <article className="mt-[20px] flex-row sm:flex-col sm:gap-4 justify-start" style={{ width: "100%" }}>
      <h1 className="text-[24px] m-0 p-0" style={styles.label}>
        {`${label} (${years} years)`}
      </h1>
      <div className="flex flex-col md:flex-row md:gap-2 items-start md:items-center w-auto">
        <div style={styles.container} className="my-1 md:m-0">
          <div
            ref={barRef}
            className="h-full transition-all duration-[2s] ease-out rounded"
            style={{ width: `${initialBarWidth}px`, backgroundColor: color }}
          />
        </div>
      </div>
    </article>
  )
}

export default StackWidget
