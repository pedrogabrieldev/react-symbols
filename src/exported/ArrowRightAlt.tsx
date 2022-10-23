import IconArrowRightAltFill0Wght100Grad0Opsz48 from '../components/ArrowRightAltFill0Wght100Grad0Opsz48'
import IconArrowRightAltFill0Wght200Grad0Opsz48 from '../components/ArrowRightAltFill0Wght200Grad0Opsz48'
import IconArrowRightAltFill0Wght300Grad0Opsz48 from '../components/ArrowRightAltFill0Wght300Grad0Opsz48'
import IconArrowRightAltFill0Wght400Grad0Opsz48 from '../components/ArrowRightAltFill0Wght400Grad0Opsz48'
import IconArrowRightAltFill0Wght500Grad0Opsz48 from '../components/ArrowRightAltFill0Wght500Grad0Opsz48'
import IconArrowRightAltFill0Wght600Grad0Opsz48 from '../components/ArrowRightAltFill0Wght600Grad0Opsz48'
import IconArrowRightAltFill0Wght700Grad0Opsz48 from '../components/ArrowRightAltFill0Wght700Grad0Opsz48'
import IconArrowRightAltFill1Wght100Grad0Opsz48 from '../components/ArrowRightAltFill1Wght100Grad0Opsz48'
import IconArrowRightAltFill1Wght200Grad0Opsz48 from '../components/ArrowRightAltFill1Wght200Grad0Opsz48'
import IconArrowRightAltFill1Wght300Grad0Opsz48 from '../components/ArrowRightAltFill1Wght300Grad0Opsz48'
import IconArrowRightAltFill1Wght400Grad0Opsz48 from '../components/ArrowRightAltFill1Wght400Grad0Opsz48'
import IconArrowRightAltFill1Wght500Grad0Opsz48 from '../components/ArrowRightAltFill1Wght500Grad0Opsz48'
import IconArrowRightAltFill1Wght600Grad0Opsz48 from '../components/ArrowRightAltFill1Wght600Grad0Opsz48'
import IconArrowRightAltFill1Wght700Grad0Opsz48 from '../components/ArrowRightAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowRightAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowRightAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowRightAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowRightAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowRightAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowRightAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowRightAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowRightAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowRightAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowRightAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowRightAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowRightAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowRightAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowRightAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowRightAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
