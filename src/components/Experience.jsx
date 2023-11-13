
const ExpertiseWidget = ({ label, years }) => (
  <article className="w-[100%] max-w-[500px] border border-red p-[20px]">
    <h1 className="text-[24px] m-0 p-0">JavaScript</h1>
    <div className="w-full h-[20px] bg-green-600 rounded mt-[10px]"></div>
  </article>
)

export default function Experience() {
  return (
      <div>
        <h1>Experience</h1>
        <p>I've been working as software engineer for 15 years. During my carreer I learned a lot of different disciplines and stacks working with different developers in distinct companies. Check below my experience working with different stacks.</p>
        <article className="w-[100%] max-w-[500px] border border-red p-[20px]">
          <h1 className="text-[24px] m-0 p-0">JavaScript</h1>
          <div className="w-full h-[20px] bg-green-600 rounded mt-[10px]"></div>
        </article>
      </div>
    
  )
}
