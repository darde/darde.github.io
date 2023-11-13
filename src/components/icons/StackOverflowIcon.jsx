import { PropTypes } from 'prop-types'

export const StackOverflowIcon = ({ width = 32, height = 32 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 512 512" width={width} height={height} fill="#000000">
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
    <g id="SVGRepo_iconCarrier">
      <rect width="512" height="512" rx="15%" fill="#f58025" />
      <path stroke="#ffffff" strokeWidth="30" fill="none" d="M293 89l90 120zm-53 50l115 97zm-41 65l136 64zm-23 69l148 31zm-6 68h150zm-45-44v105h241V297" />
    </g>
  </svg>
)

StackOverflowIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}