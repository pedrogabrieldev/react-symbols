import IconReadMoreFill0Wght100Grad0Opsz48 from '../components/ReadMoreFill0Wght100Grad0Opsz48'
import IconReadMoreFill0Wght200Grad0Opsz48 from '../components/ReadMoreFill0Wght200Grad0Opsz48'
import IconReadMoreFill0Wght300Grad0Opsz48 from '../components/ReadMoreFill0Wght300Grad0Opsz48'
import IconReadMoreFill0Wght400Grad0Opsz48 from '../components/ReadMoreFill0Wght400Grad0Opsz48'
import IconReadMoreFill0Wght500Grad0Opsz48 from '../components/ReadMoreFill0Wght500Grad0Opsz48'
import IconReadMoreFill0Wght600Grad0Opsz48 from '../components/ReadMoreFill0Wght600Grad0Opsz48'
import IconReadMoreFill0Wght700Grad0Opsz48 from '../components/ReadMoreFill0Wght700Grad0Opsz48'
import IconReadMoreFill1Wght100Grad0Opsz48 from '../components/ReadMoreFill1Wght100Grad0Opsz48'
import IconReadMoreFill1Wght200Grad0Opsz48 from '../components/ReadMoreFill1Wght200Grad0Opsz48'
import IconReadMoreFill1Wght300Grad0Opsz48 from '../components/ReadMoreFill1Wght300Grad0Opsz48'
import IconReadMoreFill1Wght400Grad0Opsz48 from '../components/ReadMoreFill1Wght400Grad0Opsz48'
import IconReadMoreFill1Wght500Grad0Opsz48 from '../components/ReadMoreFill1Wght500Grad0Opsz48'
import IconReadMoreFill1Wght600Grad0Opsz48 from '../components/ReadMoreFill1Wght600Grad0Opsz48'
import IconReadMoreFill1Wght700Grad0Opsz48 from '../components/ReadMoreFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconReadMore = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconReadMoreFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconReadMoreFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconReadMoreFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconReadMoreFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconReadMoreFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconReadMoreFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconReadMoreFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconReadMoreFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconReadMoreFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconReadMoreFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconReadMoreFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconReadMoreFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconReadMoreFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconReadMoreFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
