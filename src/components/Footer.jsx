import { PropTypes } from 'prop-types'
import { GithubIcon } from './icons/GithubIcon'
import { GmailIcon } from './icons/GmailIcon'
import { LinkedInIcon } from './icons/LinkedinIcon'
import { MediumIcon } from './icons/MediumIcon'
import { StackOverflowIcon } from './icons/StackOverflowIcon'

const Link = ({ children, href = '#' }) => (
  <a href={href} className='grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-200' >
    {children}
  </a>
)

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
}

export default function Footer() {
  return (
    <footer className='flex flex-flow justify-center md:justify-start gap-4 items-center px-[20px] w-full h-[80px] min-h-[80px] bg-sky-950 max-w-[1200px] mt-[50px]'>
      <h1 className='hidden md:flex text-[22px] p-0 m-0 mr-5 text-[yellowgreen]'>Around the web</h1>
      <nav className='flex flex-flow gap-5 justify-start items-center'>
        <Link href={'https://www.linkedin.com/in/pablodarde/'}><LinkedInIcon /></Link>
        <Link href={'https://github.com/darde'}><GithubIcon /></Link>
        <Link href={'https://stackoverflow.com/users/1703696/pablo-darde'}><StackOverflowIcon /></Link>
        <Link href={'https://medium.com/@pablodarde'}><MediumIcon /></Link>
        <Link href={'mailto:pablodarde@gmail.com'}><GmailIcon /></Link>
      </nav>
    </footer>
  )
}