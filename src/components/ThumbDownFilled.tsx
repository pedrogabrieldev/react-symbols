import { IconProps } from "../Icon.types";
const SvgThumbDownFilled = ({ size, color, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    role="img"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M11.95 6H35.3v25.6L21.4 46l-1.65-1.3q-.55-.4-.725-.9-.175-.5-.175-1.15v-.5L21.1 31.6H5q-1.15 0-2.075-.925Q2 29.75 2 28.6v-4.1q0-.55.125-1.275.125-.725.375-1.275l5.8-13.4q.45-1.05 1.475-1.8Q10.8 6 11.95 6ZM38.3 31.6V6H44v25.6Z" />
  </svg>
);
export default SvgThumbDownFilled;
