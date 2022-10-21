import { IconProps } from "../Icon.types";
const SvgMenuFilled = ({ size, color, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    role="img"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
  </svg>
);
export default SvgMenuFilled;
