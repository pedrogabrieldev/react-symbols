import { IconProps } from "../Icon.types";
const SvgStarFilled = ({ size, color, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    role="img"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="m11.65 44 3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55Z" />
  </svg>
);
export default SvgStarFilled;
