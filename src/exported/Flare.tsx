import IconFlareFill0Wght100Grad0Opsz48 from '../components/FlareFill0Wght100Grad0Opsz48'
import IconFlareFill0Wght200Grad0Opsz48 from '../components/FlareFill0Wght200Grad0Opsz48'
import IconFlareFill0Wght300Grad0Opsz48 from '../components/FlareFill0Wght300Grad0Opsz48'
import IconFlareFill0Wght400Grad0Opsz48 from '../components/FlareFill0Wght400Grad0Opsz48'
import IconFlareFill0Wght500Grad0Opsz48 from '../components/FlareFill0Wght500Grad0Opsz48'
import IconFlareFill0Wght600Grad0Opsz48 from '../components/FlareFill0Wght600Grad0Opsz48'
import IconFlareFill0Wght700Grad0Opsz48 from '../components/FlareFill0Wght700Grad0Opsz48'
import IconFlareFill1Wght100Grad0Opsz48 from '../components/FlareFill1Wght100Grad0Opsz48'
import IconFlareFill1Wght200Grad0Opsz48 from '../components/FlareFill1Wght200Grad0Opsz48'
import IconFlareFill1Wght300Grad0Opsz48 from '../components/FlareFill1Wght300Grad0Opsz48'
import IconFlareFill1Wght400Grad0Opsz48 from '../components/FlareFill1Wght400Grad0Opsz48'
import IconFlareFill1Wght500Grad0Opsz48 from '../components/FlareFill1Wght500Grad0Opsz48'
import IconFlareFill1Wght600Grad0Opsz48 from '../components/FlareFill1Wght600Grad0Opsz48'
import IconFlareFill1Wght700Grad0Opsz48 from '../components/FlareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
