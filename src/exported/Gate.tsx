import IconGateFill0Wght100Grad0Opsz48 from '../components/GateFill0Wght100Grad0Opsz48'
import IconGateFill0Wght200Grad0Opsz48 from '../components/GateFill0Wght200Grad0Opsz48'
import IconGateFill0Wght300Grad0Opsz48 from '../components/GateFill0Wght300Grad0Opsz48'
import IconGateFill0Wght400Grad0Opsz48 from '../components/GateFill0Wght400Grad0Opsz48'
import IconGateFill0Wght500Grad0Opsz48 from '../components/GateFill0Wght500Grad0Opsz48'
import IconGateFill0Wght600Grad0Opsz48 from '../components/GateFill0Wght600Grad0Opsz48'
import IconGateFill0Wght700Grad0Opsz48 from '../components/GateFill0Wght700Grad0Opsz48'
import IconGateFill1Wght100Grad0Opsz48 from '../components/GateFill1Wght100Grad0Opsz48'
import IconGateFill1Wght200Grad0Opsz48 from '../components/GateFill1Wght200Grad0Opsz48'
import IconGateFill1Wght300Grad0Opsz48 from '../components/GateFill1Wght300Grad0Opsz48'
import IconGateFill1Wght400Grad0Opsz48 from '../components/GateFill1Wght400Grad0Opsz48'
import IconGateFill1Wght500Grad0Opsz48 from '../components/GateFill1Wght500Grad0Opsz48'
import IconGateFill1Wght600Grad0Opsz48 from '../components/GateFill1Wght600Grad0Opsz48'
import IconGateFill1Wght700Grad0Opsz48 from '../components/GateFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGate = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGateFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGateFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGateFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGateFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGateFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGateFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGateFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGateFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGateFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGateFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGateFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGateFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGateFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGateFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
