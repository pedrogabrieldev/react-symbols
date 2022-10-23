import IconNoiseControlOffFill0Wght100Grad0Opsz48 from '../components/NoiseControlOffFill0Wght100Grad0Opsz48'
import IconNoiseControlOffFill0Wght200Grad0Opsz48 from '../components/NoiseControlOffFill0Wght200Grad0Opsz48'
import IconNoiseControlOffFill0Wght300Grad0Opsz48 from '../components/NoiseControlOffFill0Wght300Grad0Opsz48'
import IconNoiseControlOffFill0Wght400Grad0Opsz48 from '../components/NoiseControlOffFill0Wght400Grad0Opsz48'
import IconNoiseControlOffFill0Wght500Grad0Opsz48 from '../components/NoiseControlOffFill0Wght500Grad0Opsz48'
import IconNoiseControlOffFill0Wght600Grad0Opsz48 from '../components/NoiseControlOffFill0Wght600Grad0Opsz48'
import IconNoiseControlOffFill0Wght700Grad0Opsz48 from '../components/NoiseControlOffFill0Wght700Grad0Opsz48'
import IconNoiseControlOffFill1Wght100Grad0Opsz48 from '../components/NoiseControlOffFill1Wght100Grad0Opsz48'
import IconNoiseControlOffFill1Wght200Grad0Opsz48 from '../components/NoiseControlOffFill1Wght200Grad0Opsz48'
import IconNoiseControlOffFill1Wght300Grad0Opsz48 from '../components/NoiseControlOffFill1Wght300Grad0Opsz48'
import IconNoiseControlOffFill1Wght400Grad0Opsz48 from '../components/NoiseControlOffFill1Wght400Grad0Opsz48'
import IconNoiseControlOffFill1Wght500Grad0Opsz48 from '../components/NoiseControlOffFill1Wght500Grad0Opsz48'
import IconNoiseControlOffFill1Wght600Grad0Opsz48 from '../components/NoiseControlOffFill1Wght600Grad0Opsz48'
import IconNoiseControlOffFill1Wght700Grad0Opsz48 from '../components/NoiseControlOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoiseControlOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoiseControlOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoiseControlOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoiseControlOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoiseControlOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoiseControlOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoiseControlOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoiseControlOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoiseControlOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoiseControlOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoiseControlOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoiseControlOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoiseControlOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoiseControlOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoiseControlOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
