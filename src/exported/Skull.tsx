import IconSkullFill0Wght100Grad0Opsz48 from '../components/SkullFill0Wght100Grad0Opsz48'
import IconSkullFill0Wght200Grad0Opsz48 from '../components/SkullFill0Wght200Grad0Opsz48'
import IconSkullFill0Wght300Grad0Opsz48 from '../components/SkullFill0Wght300Grad0Opsz48'
import IconSkullFill0Wght400Grad0Opsz48 from '../components/SkullFill0Wght400Grad0Opsz48'
import IconSkullFill0Wght500Grad0Opsz48 from '../components/SkullFill0Wght500Grad0Opsz48'
import IconSkullFill0Wght600Grad0Opsz48 from '../components/SkullFill0Wght600Grad0Opsz48'
import IconSkullFill0Wght700Grad0Opsz48 from '../components/SkullFill0Wght700Grad0Opsz48'
import IconSkullFill1Wght100Grad0Opsz48 from '../components/SkullFill1Wght100Grad0Opsz48'
import IconSkullFill1Wght200Grad0Opsz48 from '../components/SkullFill1Wght200Grad0Opsz48'
import IconSkullFill1Wght300Grad0Opsz48 from '../components/SkullFill1Wght300Grad0Opsz48'
import IconSkullFill1Wght400Grad0Opsz48 from '../components/SkullFill1Wght400Grad0Opsz48'
import IconSkullFill1Wght500Grad0Opsz48 from '../components/SkullFill1Wght500Grad0Opsz48'
import IconSkullFill1Wght600Grad0Opsz48 from '../components/SkullFill1Wght600Grad0Opsz48'
import IconSkullFill1Wght700Grad0Opsz48 from '../components/SkullFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSkull = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSkullFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSkullFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSkullFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSkullFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSkullFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSkullFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSkullFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSkullFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSkullFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSkullFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSkullFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSkullFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSkullFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSkullFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
