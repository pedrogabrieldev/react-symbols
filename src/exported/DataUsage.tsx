import IconDataUsageFill0Wght100Grad0Opsz48 from '../components/DataUsageFill0Wght100Grad0Opsz48'
import IconDataUsageFill0Wght200Grad0Opsz48 from '../components/DataUsageFill0Wght200Grad0Opsz48'
import IconDataUsageFill0Wght300Grad0Opsz48 from '../components/DataUsageFill0Wght300Grad0Opsz48'
import IconDataUsageFill0Wght400Grad0Opsz48 from '../components/DataUsageFill0Wght400Grad0Opsz48'
import IconDataUsageFill0Wght500Grad0Opsz48 from '../components/DataUsageFill0Wght500Grad0Opsz48'
import IconDataUsageFill0Wght600Grad0Opsz48 from '../components/DataUsageFill0Wght600Grad0Opsz48'
import IconDataUsageFill0Wght700Grad0Opsz48 from '../components/DataUsageFill0Wght700Grad0Opsz48'
import IconDataUsageFill1Wght100Grad0Opsz48 from '../components/DataUsageFill1Wght100Grad0Opsz48'
import IconDataUsageFill1Wght200Grad0Opsz48 from '../components/DataUsageFill1Wght200Grad0Opsz48'
import IconDataUsageFill1Wght300Grad0Opsz48 from '../components/DataUsageFill1Wght300Grad0Opsz48'
import IconDataUsageFill1Wght400Grad0Opsz48 from '../components/DataUsageFill1Wght400Grad0Opsz48'
import IconDataUsageFill1Wght500Grad0Opsz48 from '../components/DataUsageFill1Wght500Grad0Opsz48'
import IconDataUsageFill1Wght600Grad0Opsz48 from '../components/DataUsageFill1Wght600Grad0Opsz48'
import IconDataUsageFill1Wght700Grad0Opsz48 from '../components/DataUsageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDataUsage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDataUsageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDataUsageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDataUsageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDataUsageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDataUsageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDataUsageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDataUsageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDataUsageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDataUsageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDataUsageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDataUsageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDataUsageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDataUsageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDataUsageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
