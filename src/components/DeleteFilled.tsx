import { IconProps } from "../Icon.types";
const SvgDeleteFilled = ({ size, color, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    role="img"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M13.05 42q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm5.3-7.3h3V14.75h-3Zm8.3 0h3V14.75h-3Z" />
  </svg>
);
export default SvgDeleteFilled;