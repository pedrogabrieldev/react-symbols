import IconArrowDropDownCircleFill0Wght100Grad0Opsz48 from '../components/ArrowDropDownCircleFill0Wght100Grad0Opsz48'
import IconArrowDropDownCircleFill0Wght200Grad0Opsz48 from '../components/ArrowDropDownCircleFill0Wght200Grad0Opsz48'
import IconArrowDropDownCircleFill0Wght300Grad0Opsz48 from '../components/ArrowDropDownCircleFill0Wght300Grad0Opsz48'
import IconArrowDropDownCircleFill0Wght400Grad0Opsz48 from '../components/ArrowDropDownCircleFill0Wght400Grad0Opsz48'
import IconArrowDropDownCircleFill0Wght500Grad0Opsz48 from '../components/ArrowDropDownCircleFill0Wght500Grad0Opsz48'
import IconArrowDropDownCircleFill0Wght600Grad0Opsz48 from '../components/ArrowDropDownCircleFill0Wght600Grad0Opsz48'
import IconArrowDropDownCircleFill0Wght700Grad0Opsz48 from '../components/ArrowDropDownCircleFill0Wght700Grad0Opsz48'
import IconArrowDropDownCircleFill1Wght100Grad0Opsz48 from '../components/ArrowDropDownCircleFill1Wght100Grad0Opsz48'
import IconArrowDropDownCircleFill1Wght200Grad0Opsz48 from '../components/ArrowDropDownCircleFill1Wght200Grad0Opsz48'
import IconArrowDropDownCircleFill1Wght300Grad0Opsz48 from '../components/ArrowDropDownCircleFill1Wght300Grad0Opsz48'
import IconArrowDropDownCircleFill1Wght400Grad0Opsz48 from '../components/ArrowDropDownCircleFill1Wght400Grad0Opsz48'
import IconArrowDropDownCircleFill1Wght500Grad0Opsz48 from '../components/ArrowDropDownCircleFill1Wght500Grad0Opsz48'
import IconArrowDropDownCircleFill1Wght600Grad0Opsz48 from '../components/ArrowDropDownCircleFill1Wght600Grad0Opsz48'
import IconArrowDropDownCircleFill1Wght700Grad0Opsz48 from '../components/ArrowDropDownCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowDropDownCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowDropDownCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowDropDownCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowDropDownCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowDropDownCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowDropDownCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowDropDownCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowDropDownCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowDropDownCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowDropDownCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowDropDownCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowDropDownCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowDropDownCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowDropDownCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowDropDownCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
