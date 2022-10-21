import { IconProps } from "../Icon.types";
const SvgCloseOutlined = ({ size, color, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    role="img"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
  </svg>
);
export default SvgCloseOutlined;
