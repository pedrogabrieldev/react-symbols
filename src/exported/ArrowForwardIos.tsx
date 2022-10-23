import IconArrowForwardIosFill0Wght100Grad0Opsz48 from '../components/ArrowForwardIosFill0Wght100Grad0Opsz48'
import IconArrowForwardIosFill0Wght200Grad0Opsz48 from '../components/ArrowForwardIosFill0Wght200Grad0Opsz48'
import IconArrowForwardIosFill0Wght300Grad0Opsz48 from '../components/ArrowForwardIosFill0Wght300Grad0Opsz48'
import IconArrowForwardIosFill0Wght400Grad0Opsz48 from '../components/ArrowForwardIosFill0Wght400Grad0Opsz48'
import IconArrowForwardIosFill0Wght500Grad0Opsz48 from '../components/ArrowForwardIosFill0Wght500Grad0Opsz48'
import IconArrowForwardIosFill0Wght600Grad0Opsz48 from '../components/ArrowForwardIosFill0Wght600Grad0Opsz48'
import IconArrowForwardIosFill0Wght700Grad0Opsz48 from '../components/ArrowForwardIosFill0Wght700Grad0Opsz48'
import IconArrowForwardIosFill1Wght100Grad0Opsz48 from '../components/ArrowForwardIosFill1Wght100Grad0Opsz48'
import IconArrowForwardIosFill1Wght200Grad0Opsz48 from '../components/ArrowForwardIosFill1Wght200Grad0Opsz48'
import IconArrowForwardIosFill1Wght300Grad0Opsz48 from '../components/ArrowForwardIosFill1Wght300Grad0Opsz48'
import IconArrowForwardIosFill1Wght400Grad0Opsz48 from '../components/ArrowForwardIosFill1Wght400Grad0Opsz48'
import IconArrowForwardIosFill1Wght500Grad0Opsz48 from '../components/ArrowForwardIosFill1Wght500Grad0Opsz48'
import IconArrowForwardIosFill1Wght600Grad0Opsz48 from '../components/ArrowForwardIosFill1Wght600Grad0Opsz48'
import IconArrowForwardIosFill1Wght700Grad0Opsz48 from '../components/ArrowForwardIosFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowForwardIos = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowForwardIosFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowForwardIosFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowForwardIosFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowForwardIosFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowForwardIosFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowForwardIosFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowForwardIosFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowForwardIosFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowForwardIosFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowForwardIosFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowForwardIosFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowForwardIosFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowForwardIosFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowForwardIosFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
