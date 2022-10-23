import IconArrowLeftFill0Wght100Grad0Opsz48 from '../components/ArrowLeftFill0Wght100Grad0Opsz48'
import IconArrowLeftFill0Wght200Grad0Opsz48 from '../components/ArrowLeftFill0Wght200Grad0Opsz48'
import IconArrowLeftFill0Wght300Grad0Opsz48 from '../components/ArrowLeftFill0Wght300Grad0Opsz48'
import IconArrowLeftFill0Wght400Grad0Opsz48 from '../components/ArrowLeftFill0Wght400Grad0Opsz48'
import IconArrowLeftFill0Wght500Grad0Opsz48 from '../components/ArrowLeftFill0Wght500Grad0Opsz48'
import IconArrowLeftFill0Wght600Grad0Opsz48 from '../components/ArrowLeftFill0Wght600Grad0Opsz48'
import IconArrowLeftFill0Wght700Grad0Opsz48 from '../components/ArrowLeftFill0Wght700Grad0Opsz48'
import IconArrowLeftFill1Wght100Grad0Opsz48 from '../components/ArrowLeftFill1Wght100Grad0Opsz48'
import IconArrowLeftFill1Wght200Grad0Opsz48 from '../components/ArrowLeftFill1Wght200Grad0Opsz48'
import IconArrowLeftFill1Wght300Grad0Opsz48 from '../components/ArrowLeftFill1Wght300Grad0Opsz48'
import IconArrowLeftFill1Wght400Grad0Opsz48 from '../components/ArrowLeftFill1Wght400Grad0Opsz48'
import IconArrowLeftFill1Wght500Grad0Opsz48 from '../components/ArrowLeftFill1Wght500Grad0Opsz48'
import IconArrowLeftFill1Wght600Grad0Opsz48 from '../components/ArrowLeftFill1Wght600Grad0Opsz48'
import IconArrowLeftFill1Wght700Grad0Opsz48 from '../components/ArrowLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
