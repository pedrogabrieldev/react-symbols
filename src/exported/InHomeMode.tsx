import IconInHomeModeFill0Wght100Grad0Opsz48 from '../components/InHomeModeFill0Wght100Grad0Opsz48'
import IconInHomeModeFill0Wght200Grad0Opsz48 from '../components/InHomeModeFill0Wght200Grad0Opsz48'
import IconInHomeModeFill0Wght300Grad0Opsz48 from '../components/InHomeModeFill0Wght300Grad0Opsz48'
import IconInHomeModeFill0Wght400Grad0Opsz48 from '../components/InHomeModeFill0Wght400Grad0Opsz48'
import IconInHomeModeFill0Wght500Grad0Opsz48 from '../components/InHomeModeFill0Wght500Grad0Opsz48'
import IconInHomeModeFill0Wght600Grad0Opsz48 from '../components/InHomeModeFill0Wght600Grad0Opsz48'
import IconInHomeModeFill0Wght700Grad0Opsz48 from '../components/InHomeModeFill0Wght700Grad0Opsz48'
import IconInHomeModeFill1Wght100Grad0Opsz48 from '../components/InHomeModeFill1Wght100Grad0Opsz48'
import IconInHomeModeFill1Wght200Grad0Opsz48 from '../components/InHomeModeFill1Wght200Grad0Opsz48'
import IconInHomeModeFill1Wght300Grad0Opsz48 from '../components/InHomeModeFill1Wght300Grad0Opsz48'
import IconInHomeModeFill1Wght400Grad0Opsz48 from '../components/InHomeModeFill1Wght400Grad0Opsz48'
import IconInHomeModeFill1Wght500Grad0Opsz48 from '../components/InHomeModeFill1Wght500Grad0Opsz48'
import IconInHomeModeFill1Wght600Grad0Opsz48 from '../components/InHomeModeFill1Wght600Grad0Opsz48'
import IconInHomeModeFill1Wght700Grad0Opsz48 from '../components/InHomeModeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInHomeMode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInHomeModeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInHomeModeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInHomeModeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInHomeModeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInHomeModeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInHomeModeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInHomeModeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInHomeModeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInHomeModeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInHomeModeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInHomeModeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInHomeModeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInHomeModeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInHomeModeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
