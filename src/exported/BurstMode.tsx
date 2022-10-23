import IconBurstModeFill0Wght100Grad0Opsz48 from '../components/BurstModeFill0Wght100Grad0Opsz48'
import IconBurstModeFill0Wght200Grad0Opsz48 from '../components/BurstModeFill0Wght200Grad0Opsz48'
import IconBurstModeFill0Wght300Grad0Opsz48 from '../components/BurstModeFill0Wght300Grad0Opsz48'
import IconBurstModeFill0Wght400Grad0Opsz48 from '../components/BurstModeFill0Wght400Grad0Opsz48'
import IconBurstModeFill0Wght500Grad0Opsz48 from '../components/BurstModeFill0Wght500Grad0Opsz48'
import IconBurstModeFill0Wght600Grad0Opsz48 from '../components/BurstModeFill0Wght600Grad0Opsz48'
import IconBurstModeFill0Wght700Grad0Opsz48 from '../components/BurstModeFill0Wght700Grad0Opsz48'
import IconBurstModeFill1Wght100Grad0Opsz48 from '../components/BurstModeFill1Wght100Grad0Opsz48'
import IconBurstModeFill1Wght200Grad0Opsz48 from '../components/BurstModeFill1Wght200Grad0Opsz48'
import IconBurstModeFill1Wght300Grad0Opsz48 from '../components/BurstModeFill1Wght300Grad0Opsz48'
import IconBurstModeFill1Wght400Grad0Opsz48 from '../components/BurstModeFill1Wght400Grad0Opsz48'
import IconBurstModeFill1Wght500Grad0Opsz48 from '../components/BurstModeFill1Wght500Grad0Opsz48'
import IconBurstModeFill1Wght600Grad0Opsz48 from '../components/BurstModeFill1Wght600Grad0Opsz48'
import IconBurstModeFill1Wght700Grad0Opsz48 from '../components/BurstModeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBurstMode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBurstModeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBurstModeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBurstModeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBurstModeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBurstModeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBurstModeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBurstModeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBurstModeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBurstModeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBurstModeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBurstModeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBurstModeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBurstModeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBurstModeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
