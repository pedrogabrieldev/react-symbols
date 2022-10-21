import { IconProps } from "../Icon.types";
const SvgHomeFilled = ({ size, color, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    role="img"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M8 42V18L24.1 6 40 18v24H28.3V27.75h-8.65V42Z" />
  </svg>
);
export default SvgHomeFilled;
