import Icon4GPlusMobiledataFill0Wght100Grad0Opsz48 from '../components/4GPlusMobiledataFill0Wght100Grad0Opsz48'
import Icon4GPlusMobiledataFill0Wght200Grad0Opsz48 from '../components/4GPlusMobiledataFill0Wght200Grad0Opsz48'
import Icon4GPlusMobiledataFill0Wght300Grad0Opsz48 from '../components/4GPlusMobiledataFill0Wght300Grad0Opsz48'
import Icon4GPlusMobiledataFill0Wght400Grad0Opsz48 from '../components/4GPlusMobiledataFill0Wght400Grad0Opsz48'
import Icon4GPlusMobiledataFill0Wght500Grad0Opsz48 from '../components/4GPlusMobiledataFill0Wght500Grad0Opsz48'
import Icon4GPlusMobiledataFill0Wght600Grad0Opsz48 from '../components/4GPlusMobiledataFill0Wght600Grad0Opsz48'
import Icon4GPlusMobiledataFill0Wght700Grad0Opsz48 from '../components/4GPlusMobiledataFill0Wght700Grad0Opsz48'
import Icon4GPlusMobiledataFill1Wght100Grad0Opsz48 from '../components/4GPlusMobiledataFill1Wght100Grad0Opsz48'
import Icon4GPlusMobiledataFill1Wght200Grad0Opsz48 from '../components/4GPlusMobiledataFill1Wght200Grad0Opsz48'
import Icon4GPlusMobiledataFill1Wght300Grad0Opsz48 from '../components/4GPlusMobiledataFill1Wght300Grad0Opsz48'
import Icon4GPlusMobiledataFill1Wght400Grad0Opsz48 from '../components/4GPlusMobiledataFill1Wght400Grad0Opsz48'
import Icon4GPlusMobiledataFill1Wght500Grad0Opsz48 from '../components/4GPlusMobiledataFill1Wght500Grad0Opsz48'
import Icon4GPlusMobiledataFill1Wght600Grad0Opsz48 from '../components/4GPlusMobiledataFill1Wght600Grad0Opsz48'
import Icon4GPlusMobiledataFill1Wght700Grad0Opsz48 from '../components/4GPlusMobiledataFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon4GPlusMobiledata = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon4GPlusMobiledataFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon4GPlusMobiledataFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon4GPlusMobiledataFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon4GPlusMobiledataFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon4GPlusMobiledataFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon4GPlusMobiledataFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon4GPlusMobiledataFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon4GPlusMobiledataFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon4GPlusMobiledataFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon4GPlusMobiledataFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon4GPlusMobiledataFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon4GPlusMobiledataFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon4GPlusMobiledataFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon4GPlusMobiledataFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
