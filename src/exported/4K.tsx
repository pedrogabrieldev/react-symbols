import Icon4KFill0Wght100Grad0Opsz48 from '../components/4KFill0Wght100Grad0Opsz48'
import Icon4KFill0Wght200Grad0Opsz48 from '../components/4KFill0Wght200Grad0Opsz48'
import Icon4KFill0Wght300Grad0Opsz48 from '../components/4KFill0Wght300Grad0Opsz48'
import Icon4KFill0Wght400Grad0Opsz48 from '../components/4KFill0Wght400Grad0Opsz48'
import Icon4KFill0Wght500Grad0Opsz48 from '../components/4KFill0Wght500Grad0Opsz48'
import Icon4KFill0Wght600Grad0Opsz48 from '../components/4KFill0Wght600Grad0Opsz48'
import Icon4KFill0Wght700Grad0Opsz48 from '../components/4KFill0Wght700Grad0Opsz48'
import Icon4KFill1Wght100Grad0Opsz48 from '../components/4KFill1Wght100Grad0Opsz48'
import Icon4KFill1Wght200Grad0Opsz48 from '../components/4KFill1Wght200Grad0Opsz48'
import Icon4KFill1Wght300Grad0Opsz48 from '../components/4KFill1Wght300Grad0Opsz48'
import Icon4KFill1Wght400Grad0Opsz48 from '../components/4KFill1Wght400Grad0Opsz48'
import Icon4KFill1Wght500Grad0Opsz48 from '../components/4KFill1Wght500Grad0Opsz48'
import Icon4KFill1Wght600Grad0Opsz48 from '../components/4KFill1Wght600Grad0Opsz48'
import Icon4KFill1Wght700Grad0Opsz48 from '../components/4KFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon4K = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon4KFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon4KFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon4KFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon4KFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon4KFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon4KFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon4KFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon4KFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon4KFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon4KFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon4KFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon4KFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon4KFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon4KFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
