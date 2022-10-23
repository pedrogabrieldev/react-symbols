import IconCycleFill0Wght100Grad0Opsz48 from '../components/CycleFill0Wght100Grad0Opsz48'
import IconCycleFill0Wght200Grad0Opsz48 from '../components/CycleFill0Wght200Grad0Opsz48'
import IconCycleFill0Wght300Grad0Opsz48 from '../components/CycleFill0Wght300Grad0Opsz48'
import IconCycleFill0Wght400Grad0Opsz48 from '../components/CycleFill0Wght400Grad0Opsz48'
import IconCycleFill0Wght500Grad0Opsz48 from '../components/CycleFill0Wght500Grad0Opsz48'
import IconCycleFill0Wght600Grad0Opsz48 from '../components/CycleFill0Wght600Grad0Opsz48'
import IconCycleFill0Wght700Grad0Opsz48 from '../components/CycleFill0Wght700Grad0Opsz48'
import IconCycleFill1Wght100Grad0Opsz48 from '../components/CycleFill1Wght100Grad0Opsz48'
import IconCycleFill1Wght200Grad0Opsz48 from '../components/CycleFill1Wght200Grad0Opsz48'
import IconCycleFill1Wght300Grad0Opsz48 from '../components/CycleFill1Wght300Grad0Opsz48'
import IconCycleFill1Wght400Grad0Opsz48 from '../components/CycleFill1Wght400Grad0Opsz48'
import IconCycleFill1Wght500Grad0Opsz48 from '../components/CycleFill1Wght500Grad0Opsz48'
import IconCycleFill1Wght600Grad0Opsz48 from '../components/CycleFill1Wght600Grad0Opsz48'
import IconCycleFill1Wght700Grad0Opsz48 from '../components/CycleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCycle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCycleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCycleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCycleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCycleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCycleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCycleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCycleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCycleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCycleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCycleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCycleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCycleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCycleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCycleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
