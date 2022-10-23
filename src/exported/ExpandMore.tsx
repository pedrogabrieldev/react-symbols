import IconExpandMoreFill0Wght100Grad0Opsz48 from '../components/ExpandMoreFill0Wght100Grad0Opsz48'
import IconExpandMoreFill0Wght200Grad0Opsz48 from '../components/ExpandMoreFill0Wght200Grad0Opsz48'
import IconExpandMoreFill0Wght300Grad0Opsz48 from '../components/ExpandMoreFill0Wght300Grad0Opsz48'
import IconExpandMoreFill0Wght400Grad0Opsz48 from '../components/ExpandMoreFill0Wght400Grad0Opsz48'
import IconExpandMoreFill0Wght500Grad0Opsz48 from '../components/ExpandMoreFill0Wght500Grad0Opsz48'
import IconExpandMoreFill0Wght600Grad0Opsz48 from '../components/ExpandMoreFill0Wght600Grad0Opsz48'
import IconExpandMoreFill0Wght700Grad0Opsz48 from '../components/ExpandMoreFill0Wght700Grad0Opsz48'
import IconExpandMoreFill1Wght100Grad0Opsz48 from '../components/ExpandMoreFill1Wght100Grad0Opsz48'
import IconExpandMoreFill1Wght200Grad0Opsz48 from '../components/ExpandMoreFill1Wght200Grad0Opsz48'
import IconExpandMoreFill1Wght300Grad0Opsz48 from '../components/ExpandMoreFill1Wght300Grad0Opsz48'
import IconExpandMoreFill1Wght400Grad0Opsz48 from '../components/ExpandMoreFill1Wght400Grad0Opsz48'
import IconExpandMoreFill1Wght500Grad0Opsz48 from '../components/ExpandMoreFill1Wght500Grad0Opsz48'
import IconExpandMoreFill1Wght600Grad0Opsz48 from '../components/ExpandMoreFill1Wght600Grad0Opsz48'
import IconExpandMoreFill1Wght700Grad0Opsz48 from '../components/ExpandMoreFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExpandMore = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExpandMoreFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExpandMoreFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExpandMoreFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExpandMoreFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExpandMoreFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExpandMoreFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExpandMoreFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExpandMoreFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExpandMoreFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExpandMoreFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExpandMoreFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExpandMoreFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExpandMoreFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExpandMoreFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
