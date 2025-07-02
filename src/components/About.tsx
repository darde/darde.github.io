import { onCLS, onFID, onLCP } from "web-vitals";

export default function About() {
  onCLS(console.log);
  onFID(console.log);
  onLCP(console.log);
  return (
    <div>
      <h1>About me</h1>
      <p>
        I’m a Software Engineer and technical lead with over 13 years of
        experience building and scaling digital products for global markets. I
        specialize in modern web and mobile architectures using React, NodeJS,
        Python, and cloud services like AWS and GCP. Throughout my career, I’ve
        led distributed teams across Europe, the US, and Latin America, driving
        product-focused engineering decisions that deliver measurable impact —
        from improving system performance and reducing deployment times to
        cutting customer support tickets. I’m passionate about clean
        architecture, mentoring engineers, and turning complex technical
        challenges into great products, user-centered solutions.
      </p>
      <h2>Education</h2>
      <ul>
        <li>Bachelor's degree in Software Engineering</li>
        <li>Information systems technician</li>
      </ul>
      <h2>Contact</h2>
      <a href="mailto:pablodarde@gmail.com">pablodarde@gmail.com</a>
      <h2>Resume</h2>
      <p>
        Download my <a href="/assets/resume.pdf">resume [141KB]</a>.
      </p>
    </div>
  );
}
