import IconMemoryFill0Wght100Grad0Opsz48 from '../components/MemoryFill0Wght100Grad0Opsz48'
import IconMemoryFill0Wght200Grad0Opsz48 from '../components/MemoryFill0Wght200Grad0Opsz48'
import IconMemoryFill0Wght300Grad0Opsz48 from '../components/MemoryFill0Wght300Grad0Opsz48'
import IconMemoryFill0Wght400Grad0Opsz48 from '../components/MemoryFill0Wght400Grad0Opsz48'
import IconMemoryFill0Wght500Grad0Opsz48 from '../components/MemoryFill0Wght500Grad0Opsz48'
import IconMemoryFill0Wght600Grad0Opsz48 from '../components/MemoryFill0Wght600Grad0Opsz48'
import IconMemoryFill0Wght700Grad0Opsz48 from '../components/MemoryFill0Wght700Grad0Opsz48'
import IconMemoryFill1Wght100Grad0Opsz48 from '../components/MemoryFill1Wght100Grad0Opsz48'
import IconMemoryFill1Wght200Grad0Opsz48 from '../components/MemoryFill1Wght200Grad0Opsz48'
import IconMemoryFill1Wght300Grad0Opsz48 from '../components/MemoryFill1Wght300Grad0Opsz48'
import IconMemoryFill1Wght400Grad0Opsz48 from '../components/MemoryFill1Wght400Grad0Opsz48'
import IconMemoryFill1Wght500Grad0Opsz48 from '../components/MemoryFill1Wght500Grad0Opsz48'
import IconMemoryFill1Wght600Grad0Opsz48 from '../components/MemoryFill1Wght600Grad0Opsz48'
import IconMemoryFill1Wght700Grad0Opsz48 from '../components/MemoryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMemory = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMemoryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMemoryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMemoryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMemoryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMemoryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMemoryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMemoryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMemoryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMemoryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMemoryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMemoryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMemoryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMemoryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMemoryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
