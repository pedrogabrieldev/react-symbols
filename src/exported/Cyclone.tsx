import IconCycloneFill0Wght100Grad0Opsz48 from '../components/CycloneFill0Wght100Grad0Opsz48'
import IconCycloneFill0Wght200Grad0Opsz48 from '../components/CycloneFill0Wght200Grad0Opsz48'
import IconCycloneFill0Wght300Grad0Opsz48 from '../components/CycloneFill0Wght300Grad0Opsz48'
import IconCycloneFill0Wght400Grad0Opsz48 from '../components/CycloneFill0Wght400Grad0Opsz48'
import IconCycloneFill0Wght500Grad0Opsz48 from '../components/CycloneFill0Wght500Grad0Opsz48'
import IconCycloneFill0Wght600Grad0Opsz48 from '../components/CycloneFill0Wght600Grad0Opsz48'
import IconCycloneFill0Wght700Grad0Opsz48 from '../components/CycloneFill0Wght700Grad0Opsz48'
import IconCycloneFill1Wght100Grad0Opsz48 from '../components/CycloneFill1Wght100Grad0Opsz48'
import IconCycloneFill1Wght200Grad0Opsz48 from '../components/CycloneFill1Wght200Grad0Opsz48'
import IconCycloneFill1Wght300Grad0Opsz48 from '../components/CycloneFill1Wght300Grad0Opsz48'
import IconCycloneFill1Wght400Grad0Opsz48 from '../components/CycloneFill1Wght400Grad0Opsz48'
import IconCycloneFill1Wght500Grad0Opsz48 from '../components/CycloneFill1Wght500Grad0Opsz48'
import IconCycloneFill1Wght600Grad0Opsz48 from '../components/CycloneFill1Wght600Grad0Opsz48'
import IconCycloneFill1Wght700Grad0Opsz48 from '../components/CycloneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCyclone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCycloneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCycloneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCycloneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCycloneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCycloneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCycloneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCycloneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCycloneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCycloneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCycloneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCycloneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCycloneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCycloneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCycloneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
