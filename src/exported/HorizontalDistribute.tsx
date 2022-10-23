import IconHorizontalDistributeFill0Wght100Grad0Opsz48 from '../components/HorizontalDistributeFill0Wght100Grad0Opsz48'
import IconHorizontalDistributeFill0Wght200Grad0Opsz48 from '../components/HorizontalDistributeFill0Wght200Grad0Opsz48'
import IconHorizontalDistributeFill0Wght300Grad0Opsz48 from '../components/HorizontalDistributeFill0Wght300Grad0Opsz48'
import IconHorizontalDistributeFill0Wght400Grad0Opsz48 from '../components/HorizontalDistributeFill0Wght400Grad0Opsz48'
import IconHorizontalDistributeFill0Wght500Grad0Opsz48 from '../components/HorizontalDistributeFill0Wght500Grad0Opsz48'
import IconHorizontalDistributeFill0Wght600Grad0Opsz48 from '../components/HorizontalDistributeFill0Wght600Grad0Opsz48'
import IconHorizontalDistributeFill0Wght700Grad0Opsz48 from '../components/HorizontalDistributeFill0Wght700Grad0Opsz48'
import IconHorizontalDistributeFill1Wght100Grad0Opsz48 from '../components/HorizontalDistributeFill1Wght100Grad0Opsz48'
import IconHorizontalDistributeFill1Wght200Grad0Opsz48 from '../components/HorizontalDistributeFill1Wght200Grad0Opsz48'
import IconHorizontalDistributeFill1Wght300Grad0Opsz48 from '../components/HorizontalDistributeFill1Wght300Grad0Opsz48'
import IconHorizontalDistributeFill1Wght400Grad0Opsz48 from '../components/HorizontalDistributeFill1Wght400Grad0Opsz48'
import IconHorizontalDistributeFill1Wght500Grad0Opsz48 from '../components/HorizontalDistributeFill1Wght500Grad0Opsz48'
import IconHorizontalDistributeFill1Wght600Grad0Opsz48 from '../components/HorizontalDistributeFill1Wght600Grad0Opsz48'
import IconHorizontalDistributeFill1Wght700Grad0Opsz48 from '../components/HorizontalDistributeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHorizontalDistribute = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHorizontalDistributeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHorizontalDistributeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHorizontalDistributeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHorizontalDistributeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHorizontalDistributeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHorizontalDistributeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHorizontalDistributeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHorizontalDistributeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHorizontalDistributeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHorizontalDistributeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHorizontalDistributeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHorizontalDistributeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHorizontalDistributeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHorizontalDistributeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
