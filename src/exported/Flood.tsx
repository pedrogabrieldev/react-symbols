import IconFloodFill0Wght100Grad0Opsz48 from '../components/FloodFill0Wght100Grad0Opsz48'
import IconFloodFill0Wght200Grad0Opsz48 from '../components/FloodFill0Wght200Grad0Opsz48'
import IconFloodFill0Wght300Grad0Opsz48 from '../components/FloodFill0Wght300Grad0Opsz48'
import IconFloodFill0Wght400Grad0Opsz48 from '../components/FloodFill0Wght400Grad0Opsz48'
import IconFloodFill0Wght500Grad0Opsz48 from '../components/FloodFill0Wght500Grad0Opsz48'
import IconFloodFill0Wght600Grad0Opsz48 from '../components/FloodFill0Wght600Grad0Opsz48'
import IconFloodFill0Wght700Grad0Opsz48 from '../components/FloodFill0Wght700Grad0Opsz48'
import IconFloodFill1Wght100Grad0Opsz48 from '../components/FloodFill1Wght100Grad0Opsz48'
import IconFloodFill1Wght200Grad0Opsz48 from '../components/FloodFill1Wght200Grad0Opsz48'
import IconFloodFill1Wght300Grad0Opsz48 from '../components/FloodFill1Wght300Grad0Opsz48'
import IconFloodFill1Wght400Grad0Opsz48 from '../components/FloodFill1Wght400Grad0Opsz48'
import IconFloodFill1Wght500Grad0Opsz48 from '../components/FloodFill1Wght500Grad0Opsz48'
import IconFloodFill1Wght600Grad0Opsz48 from '../components/FloodFill1Wght600Grad0Opsz48'
import IconFloodFill1Wght700Grad0Opsz48 from '../components/FloodFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlood = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFloodFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFloodFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFloodFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFloodFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFloodFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFloodFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFloodFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFloodFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFloodFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFloodFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFloodFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFloodFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFloodFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFloodFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
