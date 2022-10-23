import IconArrowBackIosFill0Wght100Grad0Opsz48 from '../components/ArrowBackIosFill0Wght100Grad0Opsz48'
import IconArrowBackIosFill0Wght200Grad0Opsz48 from '../components/ArrowBackIosFill0Wght200Grad0Opsz48'
import IconArrowBackIosFill0Wght300Grad0Opsz48 from '../components/ArrowBackIosFill0Wght300Grad0Opsz48'
import IconArrowBackIosFill0Wght400Grad0Opsz48 from '../components/ArrowBackIosFill0Wght400Grad0Opsz48'
import IconArrowBackIosFill0Wght500Grad0Opsz48 from '../components/ArrowBackIosFill0Wght500Grad0Opsz48'
import IconArrowBackIosFill0Wght600Grad0Opsz48 from '../components/ArrowBackIosFill0Wght600Grad0Opsz48'
import IconArrowBackIosFill0Wght700Grad0Opsz48 from '../components/ArrowBackIosFill0Wght700Grad0Opsz48'
import IconArrowBackIosFill1Wght100Grad0Opsz48 from '../components/ArrowBackIosFill1Wght100Grad0Opsz48'
import IconArrowBackIosFill1Wght200Grad0Opsz48 from '../components/ArrowBackIosFill1Wght200Grad0Opsz48'
import IconArrowBackIosFill1Wght300Grad0Opsz48 from '../components/ArrowBackIosFill1Wght300Grad0Opsz48'
import IconArrowBackIosFill1Wght400Grad0Opsz48 from '../components/ArrowBackIosFill1Wght400Grad0Opsz48'
import IconArrowBackIosFill1Wght500Grad0Opsz48 from '../components/ArrowBackIosFill1Wght500Grad0Opsz48'
import IconArrowBackIosFill1Wght600Grad0Opsz48 from '../components/ArrowBackIosFill1Wght600Grad0Opsz48'
import IconArrowBackIosFill1Wght700Grad0Opsz48 from '../components/ArrowBackIosFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowBackIos = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowBackIosFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowBackIosFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowBackIosFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowBackIosFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowBackIosFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowBackIosFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowBackIosFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowBackIosFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowBackIosFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowBackIosFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowBackIosFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowBackIosFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowBackIosFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowBackIosFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
