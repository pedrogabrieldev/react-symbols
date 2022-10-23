import IconNoiseAwareFill0Wght100Grad0Opsz48 from '../components/NoiseAwareFill0Wght100Grad0Opsz48'
import IconNoiseAwareFill0Wght200Grad0Opsz48 from '../components/NoiseAwareFill0Wght200Grad0Opsz48'
import IconNoiseAwareFill0Wght300Grad0Opsz48 from '../components/NoiseAwareFill0Wght300Grad0Opsz48'
import IconNoiseAwareFill0Wght400Grad0Opsz48 from '../components/NoiseAwareFill0Wght400Grad0Opsz48'
import IconNoiseAwareFill0Wght500Grad0Opsz48 from '../components/NoiseAwareFill0Wght500Grad0Opsz48'
import IconNoiseAwareFill0Wght600Grad0Opsz48 from '../components/NoiseAwareFill0Wght600Grad0Opsz48'
import IconNoiseAwareFill0Wght700Grad0Opsz48 from '../components/NoiseAwareFill0Wght700Grad0Opsz48'
import IconNoiseAwareFill1Wght100Grad0Opsz48 from '../components/NoiseAwareFill1Wght100Grad0Opsz48'
import IconNoiseAwareFill1Wght200Grad0Opsz48 from '../components/NoiseAwareFill1Wght200Grad0Opsz48'
import IconNoiseAwareFill1Wght300Grad0Opsz48 from '../components/NoiseAwareFill1Wght300Grad0Opsz48'
import IconNoiseAwareFill1Wght400Grad0Opsz48 from '../components/NoiseAwareFill1Wght400Grad0Opsz48'
import IconNoiseAwareFill1Wght500Grad0Opsz48 from '../components/NoiseAwareFill1Wght500Grad0Opsz48'
import IconNoiseAwareFill1Wght600Grad0Opsz48 from '../components/NoiseAwareFill1Wght600Grad0Opsz48'
import IconNoiseAwareFill1Wght700Grad0Opsz48 from '../components/NoiseAwareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoiseAware = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoiseAwareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoiseAwareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoiseAwareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoiseAwareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoiseAwareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoiseAwareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoiseAwareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoiseAwareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoiseAwareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoiseAwareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoiseAwareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoiseAwareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoiseAwareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoiseAwareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
