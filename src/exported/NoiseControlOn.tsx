import IconNoiseControlOnFill0Wght100Grad0Opsz48 from '../components/NoiseControlOnFill0Wght100Grad0Opsz48'
import IconNoiseControlOnFill0Wght200Grad0Opsz48 from '../components/NoiseControlOnFill0Wght200Grad0Opsz48'
import IconNoiseControlOnFill0Wght300Grad0Opsz48 from '../components/NoiseControlOnFill0Wght300Grad0Opsz48'
import IconNoiseControlOnFill0Wght400Grad0Opsz48 from '../components/NoiseControlOnFill0Wght400Grad0Opsz48'
import IconNoiseControlOnFill0Wght500Grad0Opsz48 from '../components/NoiseControlOnFill0Wght500Grad0Opsz48'
import IconNoiseControlOnFill0Wght600Grad0Opsz48 from '../components/NoiseControlOnFill0Wght600Grad0Opsz48'
import IconNoiseControlOnFill0Wght700Grad0Opsz48 from '../components/NoiseControlOnFill0Wght700Grad0Opsz48'
import IconNoiseControlOnFill1Wght100Grad0Opsz48 from '../components/NoiseControlOnFill1Wght100Grad0Opsz48'
import IconNoiseControlOnFill1Wght200Grad0Opsz48 from '../components/NoiseControlOnFill1Wght200Grad0Opsz48'
import IconNoiseControlOnFill1Wght300Grad0Opsz48 from '../components/NoiseControlOnFill1Wght300Grad0Opsz48'
import IconNoiseControlOnFill1Wght400Grad0Opsz48 from '../components/NoiseControlOnFill1Wght400Grad0Opsz48'
import IconNoiseControlOnFill1Wght500Grad0Opsz48 from '../components/NoiseControlOnFill1Wght500Grad0Opsz48'
import IconNoiseControlOnFill1Wght600Grad0Opsz48 from '../components/NoiseControlOnFill1Wght600Grad0Opsz48'
import IconNoiseControlOnFill1Wght700Grad0Opsz48 from '../components/NoiseControlOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoiseControlOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoiseControlOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoiseControlOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoiseControlOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoiseControlOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoiseControlOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoiseControlOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoiseControlOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoiseControlOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoiseControlOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoiseControlOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoiseControlOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoiseControlOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoiseControlOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoiseControlOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
