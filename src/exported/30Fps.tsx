import Icon30FpsFill0Wght100Grad0Opsz48 from '../components/30FpsFill0Wght100Grad0Opsz48'
import Icon30FpsFill0Wght200Grad0Opsz48 from '../components/30FpsFill0Wght200Grad0Opsz48'
import Icon30FpsFill0Wght300Grad0Opsz48 from '../components/30FpsFill0Wght300Grad0Opsz48'
import Icon30FpsFill0Wght400Grad0Opsz48 from '../components/30FpsFill0Wght400Grad0Opsz48'
import Icon30FpsFill0Wght500Grad0Opsz48 from '../components/30FpsFill0Wght500Grad0Opsz48'
import Icon30FpsFill0Wght600Grad0Opsz48 from '../components/30FpsFill0Wght600Grad0Opsz48'
import Icon30FpsFill0Wght700Grad0Opsz48 from '../components/30FpsFill0Wght700Grad0Opsz48'
import Icon30FpsFill1Wght100Grad0Opsz48 from '../components/30FpsFill1Wght100Grad0Opsz48'
import Icon30FpsFill1Wght200Grad0Opsz48 from '../components/30FpsFill1Wght200Grad0Opsz48'
import Icon30FpsFill1Wght300Grad0Opsz48 from '../components/30FpsFill1Wght300Grad0Opsz48'
import Icon30FpsFill1Wght400Grad0Opsz48 from '../components/30FpsFill1Wght400Grad0Opsz48'
import Icon30FpsFill1Wght500Grad0Opsz48 from '../components/30FpsFill1Wght500Grad0Opsz48'
import Icon30FpsFill1Wght600Grad0Opsz48 from '../components/30FpsFill1Wght600Grad0Opsz48'
import Icon30FpsFill1Wght700Grad0Opsz48 from '../components/30FpsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon30Fps = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon30FpsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon30FpsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon30FpsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon30FpsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon30FpsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon30FpsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon30FpsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon30FpsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon30FpsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon30FpsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon30FpsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon30FpsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon30FpsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon30FpsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
