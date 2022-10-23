import IconValveFill0Wght100Grad0Opsz48 from '../components/ValveFill0Wght100Grad0Opsz48'
import IconValveFill0Wght200Grad0Opsz48 from '../components/ValveFill0Wght200Grad0Opsz48'
import IconValveFill0Wght300Grad0Opsz48 from '../components/ValveFill0Wght300Grad0Opsz48'
import IconValveFill0Wght400Grad0Opsz48 from '../components/ValveFill0Wght400Grad0Opsz48'
import IconValveFill0Wght500Grad0Opsz48 from '../components/ValveFill0Wght500Grad0Opsz48'
import IconValveFill0Wght600Grad0Opsz48 from '../components/ValveFill0Wght600Grad0Opsz48'
import IconValveFill0Wght700Grad0Opsz48 from '../components/ValveFill0Wght700Grad0Opsz48'
import IconValveFill1Wght100Grad0Opsz48 from '../components/ValveFill1Wght100Grad0Opsz48'
import IconValveFill1Wght200Grad0Opsz48 from '../components/ValveFill1Wght200Grad0Opsz48'
import IconValveFill1Wght300Grad0Opsz48 from '../components/ValveFill1Wght300Grad0Opsz48'
import IconValveFill1Wght400Grad0Opsz48 from '../components/ValveFill1Wght400Grad0Opsz48'
import IconValveFill1Wght500Grad0Opsz48 from '../components/ValveFill1Wght500Grad0Opsz48'
import IconValveFill1Wght600Grad0Opsz48 from '../components/ValveFill1Wght600Grad0Opsz48'
import IconValveFill1Wght700Grad0Opsz48 from '../components/ValveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconValve = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconValveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconValveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconValveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconValveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconValveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconValveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconValveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconValveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconValveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconValveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconValveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconValveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconValveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconValveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
