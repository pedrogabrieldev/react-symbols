import IconNestRemoteFill0Wght100Grad0Opsz48 from '../components/NestRemoteFill0Wght100Grad0Opsz48'
import IconNestRemoteFill0Wght200Grad0Opsz48 from '../components/NestRemoteFill0Wght200Grad0Opsz48'
import IconNestRemoteFill0Wght300Grad0Opsz48 from '../components/NestRemoteFill0Wght300Grad0Opsz48'
import IconNestRemoteFill0Wght400Grad0Opsz48 from '../components/NestRemoteFill0Wght400Grad0Opsz48'
import IconNestRemoteFill0Wght500Grad0Opsz48 from '../components/NestRemoteFill0Wght500Grad0Opsz48'
import IconNestRemoteFill0Wght600Grad0Opsz48 from '../components/NestRemoteFill0Wght600Grad0Opsz48'
import IconNestRemoteFill0Wght700Grad0Opsz48 from '../components/NestRemoteFill0Wght700Grad0Opsz48'
import IconNestRemoteFill1Wght100Grad0Opsz48 from '../components/NestRemoteFill1Wght100Grad0Opsz48'
import IconNestRemoteFill1Wght200Grad0Opsz48 from '../components/NestRemoteFill1Wght200Grad0Opsz48'
import IconNestRemoteFill1Wght300Grad0Opsz48 from '../components/NestRemoteFill1Wght300Grad0Opsz48'
import IconNestRemoteFill1Wght400Grad0Opsz48 from '../components/NestRemoteFill1Wght400Grad0Opsz48'
import IconNestRemoteFill1Wght500Grad0Opsz48 from '../components/NestRemoteFill1Wght500Grad0Opsz48'
import IconNestRemoteFill1Wght600Grad0Opsz48 from '../components/NestRemoteFill1Wght600Grad0Opsz48'
import IconNestRemoteFill1Wght700Grad0Opsz48 from '../components/NestRemoteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestRemote = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestRemoteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestRemoteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestRemoteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestRemoteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestRemoteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestRemoteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestRemoteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestRemoteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestRemoteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestRemoteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestRemoteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestRemoteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestRemoteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestRemoteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
