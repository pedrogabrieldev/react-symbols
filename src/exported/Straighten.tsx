import IconStraightenFill0Wght100Grad0Opsz48 from '../components/StraightenFill0Wght100Grad0Opsz48'
import IconStraightenFill0Wght200Grad0Opsz48 from '../components/StraightenFill0Wght200Grad0Opsz48'
import IconStraightenFill0Wght300Grad0Opsz48 from '../components/StraightenFill0Wght300Grad0Opsz48'
import IconStraightenFill0Wght400Grad0Opsz48 from '../components/StraightenFill0Wght400Grad0Opsz48'
import IconStraightenFill0Wght500Grad0Opsz48 from '../components/StraightenFill0Wght500Grad0Opsz48'
import IconStraightenFill0Wght600Grad0Opsz48 from '../components/StraightenFill0Wght600Grad0Opsz48'
import IconStraightenFill0Wght700Grad0Opsz48 from '../components/StraightenFill0Wght700Grad0Opsz48'
import IconStraightenFill1Wght100Grad0Opsz48 from '../components/StraightenFill1Wght100Grad0Opsz48'
import IconStraightenFill1Wght200Grad0Opsz48 from '../components/StraightenFill1Wght200Grad0Opsz48'
import IconStraightenFill1Wght300Grad0Opsz48 from '../components/StraightenFill1Wght300Grad0Opsz48'
import IconStraightenFill1Wght400Grad0Opsz48 from '../components/StraightenFill1Wght400Grad0Opsz48'
import IconStraightenFill1Wght500Grad0Opsz48 from '../components/StraightenFill1Wght500Grad0Opsz48'
import IconStraightenFill1Wght600Grad0Opsz48 from '../components/StraightenFill1Wght600Grad0Opsz48'
import IconStraightenFill1Wght700Grad0Opsz48 from '../components/StraightenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStraighten = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStraightenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStraightenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStraightenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStraightenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStraightenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStraightenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStraightenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStraightenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStraightenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStraightenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStraightenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStraightenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStraightenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStraightenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
