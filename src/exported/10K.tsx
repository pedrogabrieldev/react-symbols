import Icon10KFill0Wght100Grad0Opsz48 from '../components/10KFill0Wght100Grad0Opsz48'
import Icon10KFill0Wght200Grad0Opsz48 from '../components/10KFill0Wght200Grad0Opsz48'
import Icon10KFill0Wght300Grad0Opsz48 from '../components/10KFill0Wght300Grad0Opsz48'
import Icon10KFill0Wght400Grad0Opsz48 from '../components/10KFill0Wght400Grad0Opsz48'
import Icon10KFill0Wght500Grad0Opsz48 from '../components/10KFill0Wght500Grad0Opsz48'
import Icon10KFill0Wght600Grad0Opsz48 from '../components/10KFill0Wght600Grad0Opsz48'
import Icon10KFill0Wght700Grad0Opsz48 from '../components/10KFill0Wght700Grad0Opsz48'
import Icon10KFill1Wght100Grad0Opsz48 from '../components/10KFill1Wght100Grad0Opsz48'
import Icon10KFill1Wght200Grad0Opsz48 from '../components/10KFill1Wght200Grad0Opsz48'
import Icon10KFill1Wght300Grad0Opsz48 from '../components/10KFill1Wght300Grad0Opsz48'
import Icon10KFill1Wght400Grad0Opsz48 from '../components/10KFill1Wght400Grad0Opsz48'
import Icon10KFill1Wght500Grad0Opsz48 from '../components/10KFill1Wght500Grad0Opsz48'
import Icon10KFill1Wght600Grad0Opsz48 from '../components/10KFill1Wght600Grad0Opsz48'
import Icon10KFill1Wght700Grad0Opsz48 from '../components/10KFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon10K = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon10KFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon10KFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon10KFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon10KFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon10KFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon10KFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon10KFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon10KFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon10KFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon10KFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon10KFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon10KFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon10KFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon10KFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
