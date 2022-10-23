import IconCableFill0Wght100Grad0Opsz48 from '../components/CableFill0Wght100Grad0Opsz48'
import IconCableFill0Wght200Grad0Opsz48 from '../components/CableFill0Wght200Grad0Opsz48'
import IconCableFill0Wght300Grad0Opsz48 from '../components/CableFill0Wght300Grad0Opsz48'
import IconCableFill0Wght400Grad0Opsz48 from '../components/CableFill0Wght400Grad0Opsz48'
import IconCableFill0Wght500Grad0Opsz48 from '../components/CableFill0Wght500Grad0Opsz48'
import IconCableFill0Wght600Grad0Opsz48 from '../components/CableFill0Wght600Grad0Opsz48'
import IconCableFill0Wght700Grad0Opsz48 from '../components/CableFill0Wght700Grad0Opsz48'
import IconCableFill1Wght100Grad0Opsz48 from '../components/CableFill1Wght100Grad0Opsz48'
import IconCableFill1Wght200Grad0Opsz48 from '../components/CableFill1Wght200Grad0Opsz48'
import IconCableFill1Wght300Grad0Opsz48 from '../components/CableFill1Wght300Grad0Opsz48'
import IconCableFill1Wght400Grad0Opsz48 from '../components/CableFill1Wght400Grad0Opsz48'
import IconCableFill1Wght500Grad0Opsz48 from '../components/CableFill1Wght500Grad0Opsz48'
import IconCableFill1Wght600Grad0Opsz48 from '../components/CableFill1Wght600Grad0Opsz48'
import IconCableFill1Wght700Grad0Opsz48 from '../components/CableFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCable = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCableFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCableFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCableFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCableFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCableFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCableFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCableFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCableFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCableFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCableFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCableFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCableFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCableFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCableFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
