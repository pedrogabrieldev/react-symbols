import Icon4GMobiledataFill0Wght100Grad0Opsz48 from '../components/4GMobiledataFill0Wght100Grad0Opsz48'
import Icon4GMobiledataFill0Wght200Grad0Opsz48 from '../components/4GMobiledataFill0Wght200Grad0Opsz48'
import Icon4GMobiledataFill0Wght300Grad0Opsz48 from '../components/4GMobiledataFill0Wght300Grad0Opsz48'
import Icon4GMobiledataFill0Wght400Grad0Opsz48 from '../components/4GMobiledataFill0Wght400Grad0Opsz48'
import Icon4GMobiledataFill0Wght500Grad0Opsz48 from '../components/4GMobiledataFill0Wght500Grad0Opsz48'
import Icon4GMobiledataFill0Wght600Grad0Opsz48 from '../components/4GMobiledataFill0Wght600Grad0Opsz48'
import Icon4GMobiledataFill0Wght700Grad0Opsz48 from '../components/4GMobiledataFill0Wght700Grad0Opsz48'
import Icon4GMobiledataFill1Wght100Grad0Opsz48 from '../components/4GMobiledataFill1Wght100Grad0Opsz48'
import Icon4GMobiledataFill1Wght200Grad0Opsz48 from '../components/4GMobiledataFill1Wght200Grad0Opsz48'
import Icon4GMobiledataFill1Wght300Grad0Opsz48 from '../components/4GMobiledataFill1Wght300Grad0Opsz48'
import Icon4GMobiledataFill1Wght400Grad0Opsz48 from '../components/4GMobiledataFill1Wght400Grad0Opsz48'
import Icon4GMobiledataFill1Wght500Grad0Opsz48 from '../components/4GMobiledataFill1Wght500Grad0Opsz48'
import Icon4GMobiledataFill1Wght600Grad0Opsz48 from '../components/4GMobiledataFill1Wght600Grad0Opsz48'
import Icon4GMobiledataFill1Wght700Grad0Opsz48 from '../components/4GMobiledataFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon4GMobiledata = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon4GMobiledataFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon4GMobiledataFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon4GMobiledataFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon4GMobiledataFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon4GMobiledataFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon4GMobiledataFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon4GMobiledataFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon4GMobiledataFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon4GMobiledataFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon4GMobiledataFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon4GMobiledataFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon4GMobiledataFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon4GMobiledataFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon4GMobiledataFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
