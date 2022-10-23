import IconAodFill0Wght100Grad0Opsz48 from '../components/AodFill0Wght100Grad0Opsz48'
import IconAodFill0Wght200Grad0Opsz48 from '../components/AodFill0Wght200Grad0Opsz48'
import IconAodFill0Wght300Grad0Opsz48 from '../components/AodFill0Wght300Grad0Opsz48'
import IconAodFill0Wght400Grad0Opsz48 from '../components/AodFill0Wght400Grad0Opsz48'
import IconAodFill0Wght500Grad0Opsz48 from '../components/AodFill0Wght500Grad0Opsz48'
import IconAodFill0Wght600Grad0Opsz48 from '../components/AodFill0Wght600Grad0Opsz48'
import IconAodFill0Wght700Grad0Opsz48 from '../components/AodFill0Wght700Grad0Opsz48'
import IconAodFill1Wght100Grad0Opsz48 from '../components/AodFill1Wght100Grad0Opsz48'
import IconAodFill1Wght200Grad0Opsz48 from '../components/AodFill1Wght200Grad0Opsz48'
import IconAodFill1Wght300Grad0Opsz48 from '../components/AodFill1Wght300Grad0Opsz48'
import IconAodFill1Wght400Grad0Opsz48 from '../components/AodFill1Wght400Grad0Opsz48'
import IconAodFill1Wght500Grad0Opsz48 from '../components/AodFill1Wght500Grad0Opsz48'
import IconAodFill1Wght600Grad0Opsz48 from '../components/AodFill1Wght600Grad0Opsz48'
import IconAodFill1Wght700Grad0Opsz48 from '../components/AodFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAod = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAodFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAodFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAodFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAodFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAodFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAodFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAodFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAodFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAodFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAodFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAodFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAodFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAodFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAodFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
