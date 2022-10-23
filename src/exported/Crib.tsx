import IconCribFill0Wght100Grad0Opsz48 from '../components/CribFill0Wght100Grad0Opsz48'
import IconCribFill0Wght200Grad0Opsz48 from '../components/CribFill0Wght200Grad0Opsz48'
import IconCribFill0Wght300Grad0Opsz48 from '../components/CribFill0Wght300Grad0Opsz48'
import IconCribFill0Wght400Grad0Opsz48 from '../components/CribFill0Wght400Grad0Opsz48'
import IconCribFill0Wght500Grad0Opsz48 from '../components/CribFill0Wght500Grad0Opsz48'
import IconCribFill0Wght600Grad0Opsz48 from '../components/CribFill0Wght600Grad0Opsz48'
import IconCribFill0Wght700Grad0Opsz48 from '../components/CribFill0Wght700Grad0Opsz48'
import IconCribFill1Wght100Grad0Opsz48 from '../components/CribFill1Wght100Grad0Opsz48'
import IconCribFill1Wght200Grad0Opsz48 from '../components/CribFill1Wght200Grad0Opsz48'
import IconCribFill1Wght300Grad0Opsz48 from '../components/CribFill1Wght300Grad0Opsz48'
import IconCribFill1Wght400Grad0Opsz48 from '../components/CribFill1Wght400Grad0Opsz48'
import IconCribFill1Wght500Grad0Opsz48 from '../components/CribFill1Wght500Grad0Opsz48'
import IconCribFill1Wght600Grad0Opsz48 from '../components/CribFill1Wght600Grad0Opsz48'
import IconCribFill1Wght700Grad0Opsz48 from '../components/CribFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCrib = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCribFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCribFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCribFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCribFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCribFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCribFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCribFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCribFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCribFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCribFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCribFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCribFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCribFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCribFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
