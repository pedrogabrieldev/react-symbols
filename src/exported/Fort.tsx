import IconFortFill0Wght100Grad0Opsz48 from '../components/FortFill0Wght100Grad0Opsz48'
import IconFortFill0Wght200Grad0Opsz48 from '../components/FortFill0Wght200Grad0Opsz48'
import IconFortFill0Wght300Grad0Opsz48 from '../components/FortFill0Wght300Grad0Opsz48'
import IconFortFill0Wght400Grad0Opsz48 from '../components/FortFill0Wght400Grad0Opsz48'
import IconFortFill0Wght500Grad0Opsz48 from '../components/FortFill0Wght500Grad0Opsz48'
import IconFortFill0Wght600Grad0Opsz48 from '../components/FortFill0Wght600Grad0Opsz48'
import IconFortFill0Wght700Grad0Opsz48 from '../components/FortFill0Wght700Grad0Opsz48'
import IconFortFill1Wght100Grad0Opsz48 from '../components/FortFill1Wght100Grad0Opsz48'
import IconFortFill1Wght200Grad0Opsz48 from '../components/FortFill1Wght200Grad0Opsz48'
import IconFortFill1Wght300Grad0Opsz48 from '../components/FortFill1Wght300Grad0Opsz48'
import IconFortFill1Wght400Grad0Opsz48 from '../components/FortFill1Wght400Grad0Opsz48'
import IconFortFill1Wght500Grad0Opsz48 from '../components/FortFill1Wght500Grad0Opsz48'
import IconFortFill1Wght600Grad0Opsz48 from '../components/FortFill1Wght600Grad0Opsz48'
import IconFortFill1Wght700Grad0Opsz48 from '../components/FortFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFort = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFortFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFortFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFortFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFortFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFortFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFortFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFortFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFortFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFortFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFortFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFortFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFortFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFortFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFortFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
