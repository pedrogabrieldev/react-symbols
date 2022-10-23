import IconHevcFill0Wght100Grad0Opsz48 from '../components/HevcFill0Wght100Grad0Opsz48'
import IconHevcFill0Wght200Grad0Opsz48 from '../components/HevcFill0Wght200Grad0Opsz48'
import IconHevcFill0Wght300Grad0Opsz48 from '../components/HevcFill0Wght300Grad0Opsz48'
import IconHevcFill0Wght400Grad0Opsz48 from '../components/HevcFill0Wght400Grad0Opsz48'
import IconHevcFill0Wght500Grad0Opsz48 from '../components/HevcFill0Wght500Grad0Opsz48'
import IconHevcFill0Wght600Grad0Opsz48 from '../components/HevcFill0Wght600Grad0Opsz48'
import IconHevcFill0Wght700Grad0Opsz48 from '../components/HevcFill0Wght700Grad0Opsz48'
import IconHevcFill1Wght100Grad0Opsz48 from '../components/HevcFill1Wght100Grad0Opsz48'
import IconHevcFill1Wght200Grad0Opsz48 from '../components/HevcFill1Wght200Grad0Opsz48'
import IconHevcFill1Wght300Grad0Opsz48 from '../components/HevcFill1Wght300Grad0Opsz48'
import IconHevcFill1Wght400Grad0Opsz48 from '../components/HevcFill1Wght400Grad0Opsz48'
import IconHevcFill1Wght500Grad0Opsz48 from '../components/HevcFill1Wght500Grad0Opsz48'
import IconHevcFill1Wght600Grad0Opsz48 from '../components/HevcFill1Wght600Grad0Opsz48'
import IconHevcFill1Wght700Grad0Opsz48 from '../components/HevcFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHevc = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHevcFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHevcFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHevcFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHevcFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHevcFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHevcFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHevcFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHevcFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHevcFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHevcFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHevcFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHevcFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHevcFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHevcFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
