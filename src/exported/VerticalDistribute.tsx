import IconVerticalDistributeFill0Wght100Grad0Opsz48 from '../components/VerticalDistributeFill0Wght100Grad0Opsz48'
import IconVerticalDistributeFill0Wght200Grad0Opsz48 from '../components/VerticalDistributeFill0Wght200Grad0Opsz48'
import IconVerticalDistributeFill0Wght300Grad0Opsz48 from '../components/VerticalDistributeFill0Wght300Grad0Opsz48'
import IconVerticalDistributeFill0Wght400Grad0Opsz48 from '../components/VerticalDistributeFill0Wght400Grad0Opsz48'
import IconVerticalDistributeFill0Wght500Grad0Opsz48 from '../components/VerticalDistributeFill0Wght500Grad0Opsz48'
import IconVerticalDistributeFill0Wght600Grad0Opsz48 from '../components/VerticalDistributeFill0Wght600Grad0Opsz48'
import IconVerticalDistributeFill0Wght700Grad0Opsz48 from '../components/VerticalDistributeFill0Wght700Grad0Opsz48'
import IconVerticalDistributeFill1Wght100Grad0Opsz48 from '../components/VerticalDistributeFill1Wght100Grad0Opsz48'
import IconVerticalDistributeFill1Wght200Grad0Opsz48 from '../components/VerticalDistributeFill1Wght200Grad0Opsz48'
import IconVerticalDistributeFill1Wght300Grad0Opsz48 from '../components/VerticalDistributeFill1Wght300Grad0Opsz48'
import IconVerticalDistributeFill1Wght400Grad0Opsz48 from '../components/VerticalDistributeFill1Wght400Grad0Opsz48'
import IconVerticalDistributeFill1Wght500Grad0Opsz48 from '../components/VerticalDistributeFill1Wght500Grad0Opsz48'
import IconVerticalDistributeFill1Wght600Grad0Opsz48 from '../components/VerticalDistributeFill1Wght600Grad0Opsz48'
import IconVerticalDistributeFill1Wght700Grad0Opsz48 from '../components/VerticalDistributeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVerticalDistribute = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVerticalDistributeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVerticalDistributeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVerticalDistributeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVerticalDistributeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVerticalDistributeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVerticalDistributeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVerticalDistributeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVerticalDistributeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVerticalDistributeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVerticalDistributeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVerticalDistributeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVerticalDistributeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVerticalDistributeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVerticalDistributeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
