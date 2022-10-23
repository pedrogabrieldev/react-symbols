import IconMoreFill0Wght100Grad0Opsz48 from '../components/MoreFill0Wght100Grad0Opsz48'
import IconMoreFill0Wght200Grad0Opsz48 from '../components/MoreFill0Wght200Grad0Opsz48'
import IconMoreFill0Wght300Grad0Opsz48 from '../components/MoreFill0Wght300Grad0Opsz48'
import IconMoreFill0Wght400Grad0Opsz48 from '../components/MoreFill0Wght400Grad0Opsz48'
import IconMoreFill0Wght500Grad0Opsz48 from '../components/MoreFill0Wght500Grad0Opsz48'
import IconMoreFill0Wght600Grad0Opsz48 from '../components/MoreFill0Wght600Grad0Opsz48'
import IconMoreFill0Wght700Grad0Opsz48 from '../components/MoreFill0Wght700Grad0Opsz48'
import IconMoreFill1Wght100Grad0Opsz48 from '../components/MoreFill1Wght100Grad0Opsz48'
import IconMoreFill1Wght200Grad0Opsz48 from '../components/MoreFill1Wght200Grad0Opsz48'
import IconMoreFill1Wght300Grad0Opsz48 from '../components/MoreFill1Wght300Grad0Opsz48'
import IconMoreFill1Wght400Grad0Opsz48 from '../components/MoreFill1Wght400Grad0Opsz48'
import IconMoreFill1Wght500Grad0Opsz48 from '../components/MoreFill1Wght500Grad0Opsz48'
import IconMoreFill1Wght600Grad0Opsz48 from '../components/MoreFill1Wght600Grad0Opsz48'
import IconMoreFill1Wght700Grad0Opsz48 from '../components/MoreFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMore = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMoreFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMoreFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMoreFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMoreFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMoreFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMoreFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMoreFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMoreFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMoreFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMoreFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMoreFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMoreFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMoreFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMoreFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
