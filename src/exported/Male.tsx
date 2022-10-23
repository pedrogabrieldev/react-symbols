import IconMaleFill0Wght100Grad0Opsz48 from '../components/MaleFill0Wght100Grad0Opsz48'
import IconMaleFill0Wght200Grad0Opsz48 from '../components/MaleFill0Wght200Grad0Opsz48'
import IconMaleFill0Wght300Grad0Opsz48 from '../components/MaleFill0Wght300Grad0Opsz48'
import IconMaleFill0Wght400Grad0Opsz48 from '../components/MaleFill0Wght400Grad0Opsz48'
import IconMaleFill0Wght500Grad0Opsz48 from '../components/MaleFill0Wght500Grad0Opsz48'
import IconMaleFill0Wght600Grad0Opsz48 from '../components/MaleFill0Wght600Grad0Opsz48'
import IconMaleFill0Wght700Grad0Opsz48 from '../components/MaleFill0Wght700Grad0Opsz48'
import IconMaleFill1Wght100Grad0Opsz48 from '../components/MaleFill1Wght100Grad0Opsz48'
import IconMaleFill1Wght200Grad0Opsz48 from '../components/MaleFill1Wght200Grad0Opsz48'
import IconMaleFill1Wght300Grad0Opsz48 from '../components/MaleFill1Wght300Grad0Opsz48'
import IconMaleFill1Wght400Grad0Opsz48 from '../components/MaleFill1Wght400Grad0Opsz48'
import IconMaleFill1Wght500Grad0Opsz48 from '../components/MaleFill1Wght500Grad0Opsz48'
import IconMaleFill1Wght600Grad0Opsz48 from '../components/MaleFill1Wght600Grad0Opsz48'
import IconMaleFill1Wght700Grad0Opsz48 from '../components/MaleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMale = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMaleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMaleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMaleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMaleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMaleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMaleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMaleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMaleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMaleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMaleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMaleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMaleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMaleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMaleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
