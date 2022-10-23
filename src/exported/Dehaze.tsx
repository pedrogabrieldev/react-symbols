import IconDehazeFill0Wght100Grad0Opsz48 from '../components/DehazeFill0Wght100Grad0Opsz48'
import IconDehazeFill0Wght200Grad0Opsz48 from '../components/DehazeFill0Wght200Grad0Opsz48'
import IconDehazeFill0Wght300Grad0Opsz48 from '../components/DehazeFill0Wght300Grad0Opsz48'
import IconDehazeFill0Wght400Grad0Opsz48 from '../components/DehazeFill0Wght400Grad0Opsz48'
import IconDehazeFill0Wght500Grad0Opsz48 from '../components/DehazeFill0Wght500Grad0Opsz48'
import IconDehazeFill0Wght600Grad0Opsz48 from '../components/DehazeFill0Wght600Grad0Opsz48'
import IconDehazeFill0Wght700Grad0Opsz48 from '../components/DehazeFill0Wght700Grad0Opsz48'
import IconDehazeFill1Wght100Grad0Opsz48 from '../components/DehazeFill1Wght100Grad0Opsz48'
import IconDehazeFill1Wght200Grad0Opsz48 from '../components/DehazeFill1Wght200Grad0Opsz48'
import IconDehazeFill1Wght300Grad0Opsz48 from '../components/DehazeFill1Wght300Grad0Opsz48'
import IconDehazeFill1Wght400Grad0Opsz48 from '../components/DehazeFill1Wght400Grad0Opsz48'
import IconDehazeFill1Wght500Grad0Opsz48 from '../components/DehazeFill1Wght500Grad0Opsz48'
import IconDehazeFill1Wght600Grad0Opsz48 from '../components/DehazeFill1Wght600Grad0Opsz48'
import IconDehazeFill1Wght700Grad0Opsz48 from '../components/DehazeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDehaze = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDehazeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDehazeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDehazeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDehazeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDehazeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDehazeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDehazeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDehazeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDehazeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDehazeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDehazeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDehazeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDehazeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDehazeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
