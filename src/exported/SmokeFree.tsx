import IconSmokeFreeFill0Wght100Grad0Opsz48 from '../components/SmokeFreeFill0Wght100Grad0Opsz48'
import IconSmokeFreeFill0Wght200Grad0Opsz48 from '../components/SmokeFreeFill0Wght200Grad0Opsz48'
import IconSmokeFreeFill0Wght300Grad0Opsz48 from '../components/SmokeFreeFill0Wght300Grad0Opsz48'
import IconSmokeFreeFill0Wght400Grad0Opsz48 from '../components/SmokeFreeFill0Wght400Grad0Opsz48'
import IconSmokeFreeFill0Wght500Grad0Opsz48 from '../components/SmokeFreeFill0Wght500Grad0Opsz48'
import IconSmokeFreeFill0Wght600Grad0Opsz48 from '../components/SmokeFreeFill0Wght600Grad0Opsz48'
import IconSmokeFreeFill0Wght700Grad0Opsz48 from '../components/SmokeFreeFill0Wght700Grad0Opsz48'
import IconSmokeFreeFill1Wght100Grad0Opsz48 from '../components/SmokeFreeFill1Wght100Grad0Opsz48'
import IconSmokeFreeFill1Wght200Grad0Opsz48 from '../components/SmokeFreeFill1Wght200Grad0Opsz48'
import IconSmokeFreeFill1Wght300Grad0Opsz48 from '../components/SmokeFreeFill1Wght300Grad0Opsz48'
import IconSmokeFreeFill1Wght400Grad0Opsz48 from '../components/SmokeFreeFill1Wght400Grad0Opsz48'
import IconSmokeFreeFill1Wght500Grad0Opsz48 from '../components/SmokeFreeFill1Wght500Grad0Opsz48'
import IconSmokeFreeFill1Wght600Grad0Opsz48 from '../components/SmokeFreeFill1Wght600Grad0Opsz48'
import IconSmokeFreeFill1Wght700Grad0Opsz48 from '../components/SmokeFreeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSmokeFree = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSmokeFreeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSmokeFreeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSmokeFreeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSmokeFreeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSmokeFreeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSmokeFreeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSmokeFreeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSmokeFreeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSmokeFreeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSmokeFreeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSmokeFreeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSmokeFreeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSmokeFreeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSmokeFreeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
