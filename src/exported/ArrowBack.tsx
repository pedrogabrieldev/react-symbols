import IconArrowBackFill0Wght100Grad0Opsz48 from '../components/ArrowBackFill0Wght100Grad0Opsz48'
import IconArrowBackFill0Wght200Grad0Opsz48 from '../components/ArrowBackFill0Wght200Grad0Opsz48'
import IconArrowBackFill0Wght300Grad0Opsz48 from '../components/ArrowBackFill0Wght300Grad0Opsz48'
import IconArrowBackFill0Wght400Grad0Opsz48 from '../components/ArrowBackFill0Wght400Grad0Opsz48'
import IconArrowBackFill0Wght500Grad0Opsz48 from '../components/ArrowBackFill0Wght500Grad0Opsz48'
import IconArrowBackFill0Wght600Grad0Opsz48 from '../components/ArrowBackFill0Wght600Grad0Opsz48'
import IconArrowBackFill0Wght700Grad0Opsz48 from '../components/ArrowBackFill0Wght700Grad0Opsz48'
import IconArrowBackFill1Wght100Grad0Opsz48 from '../components/ArrowBackFill1Wght100Grad0Opsz48'
import IconArrowBackFill1Wght200Grad0Opsz48 from '../components/ArrowBackFill1Wght200Grad0Opsz48'
import IconArrowBackFill1Wght300Grad0Opsz48 from '../components/ArrowBackFill1Wght300Grad0Opsz48'
import IconArrowBackFill1Wght400Grad0Opsz48 from '../components/ArrowBackFill1Wght400Grad0Opsz48'
import IconArrowBackFill1Wght500Grad0Opsz48 from '../components/ArrowBackFill1Wght500Grad0Opsz48'
import IconArrowBackFill1Wght600Grad0Opsz48 from '../components/ArrowBackFill1Wght600Grad0Opsz48'
import IconArrowBackFill1Wght700Grad0Opsz48 from '../components/ArrowBackFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowBack = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowBackFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowBackFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowBackFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowBackFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowBackFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowBackFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowBackFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowBackFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowBackFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowBackFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowBackFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowBackFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowBackFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowBackFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
