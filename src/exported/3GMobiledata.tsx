import Icon3GMobiledataFill0Wght100Grad0Opsz48 from '../components/3GMobiledataFill0Wght100Grad0Opsz48'
import Icon3GMobiledataFill0Wght200Grad0Opsz48 from '../components/3GMobiledataFill0Wght200Grad0Opsz48'
import Icon3GMobiledataFill0Wght300Grad0Opsz48 from '../components/3GMobiledataFill0Wght300Grad0Opsz48'
import Icon3GMobiledataFill0Wght400Grad0Opsz48 from '../components/3GMobiledataFill0Wght400Grad0Opsz48'
import Icon3GMobiledataFill0Wght500Grad0Opsz48 from '../components/3GMobiledataFill0Wght500Grad0Opsz48'
import Icon3GMobiledataFill0Wght600Grad0Opsz48 from '../components/3GMobiledataFill0Wght600Grad0Opsz48'
import Icon3GMobiledataFill0Wght700Grad0Opsz48 from '../components/3GMobiledataFill0Wght700Grad0Opsz48'
import Icon3GMobiledataFill1Wght100Grad0Opsz48 from '../components/3GMobiledataFill1Wght100Grad0Opsz48'
import Icon3GMobiledataFill1Wght200Grad0Opsz48 from '../components/3GMobiledataFill1Wght200Grad0Opsz48'
import Icon3GMobiledataFill1Wght300Grad0Opsz48 from '../components/3GMobiledataFill1Wght300Grad0Opsz48'
import Icon3GMobiledataFill1Wght400Grad0Opsz48 from '../components/3GMobiledataFill1Wght400Grad0Opsz48'
import Icon3GMobiledataFill1Wght500Grad0Opsz48 from '../components/3GMobiledataFill1Wght500Grad0Opsz48'
import Icon3GMobiledataFill1Wght600Grad0Opsz48 from '../components/3GMobiledataFill1Wght600Grad0Opsz48'
import Icon3GMobiledataFill1Wght700Grad0Opsz48 from '../components/3GMobiledataFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon3GMobiledata = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon3GMobiledataFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon3GMobiledataFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon3GMobiledataFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon3GMobiledataFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon3GMobiledataFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon3GMobiledataFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon3GMobiledataFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon3GMobiledataFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon3GMobiledataFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon3GMobiledataFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon3GMobiledataFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon3GMobiledataFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon3GMobiledataFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon3GMobiledataFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
