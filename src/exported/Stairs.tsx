import IconStairsFill0Wght100Grad0Opsz48 from '../components/StairsFill0Wght100Grad0Opsz48'
import IconStairsFill0Wght200Grad0Opsz48 from '../components/StairsFill0Wght200Grad0Opsz48'
import IconStairsFill0Wght300Grad0Opsz48 from '../components/StairsFill0Wght300Grad0Opsz48'
import IconStairsFill0Wght400Grad0Opsz48 from '../components/StairsFill0Wght400Grad0Opsz48'
import IconStairsFill0Wght500Grad0Opsz48 from '../components/StairsFill0Wght500Grad0Opsz48'
import IconStairsFill0Wght600Grad0Opsz48 from '../components/StairsFill0Wght600Grad0Opsz48'
import IconStairsFill0Wght700Grad0Opsz48 from '../components/StairsFill0Wght700Grad0Opsz48'
import IconStairsFill1Wght100Grad0Opsz48 from '../components/StairsFill1Wght100Grad0Opsz48'
import IconStairsFill1Wght200Grad0Opsz48 from '../components/StairsFill1Wght200Grad0Opsz48'
import IconStairsFill1Wght300Grad0Opsz48 from '../components/StairsFill1Wght300Grad0Opsz48'
import IconStairsFill1Wght400Grad0Opsz48 from '../components/StairsFill1Wght400Grad0Opsz48'
import IconStairsFill1Wght500Grad0Opsz48 from '../components/StairsFill1Wght500Grad0Opsz48'
import IconStairsFill1Wght600Grad0Opsz48 from '../components/StairsFill1Wght600Grad0Opsz48'
import IconStairsFill1Wght700Grad0Opsz48 from '../components/StairsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStairs = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStairsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStairsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStairsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStairsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStairsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStairsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStairsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStairsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStairsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStairsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStairsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStairsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStairsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStairsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
