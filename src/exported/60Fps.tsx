import Icon60FpsFill0Wght100Grad0Opsz48 from '../components/60FpsFill0Wght100Grad0Opsz48'
import Icon60FpsFill0Wght200Grad0Opsz48 from '../components/60FpsFill0Wght200Grad0Opsz48'
import Icon60FpsFill0Wght300Grad0Opsz48 from '../components/60FpsFill0Wght300Grad0Opsz48'
import Icon60FpsFill0Wght400Grad0Opsz48 from '../components/60FpsFill0Wght400Grad0Opsz48'
import Icon60FpsFill0Wght500Grad0Opsz48 from '../components/60FpsFill0Wght500Grad0Opsz48'
import Icon60FpsFill0Wght600Grad0Opsz48 from '../components/60FpsFill0Wght600Grad0Opsz48'
import Icon60FpsFill0Wght700Grad0Opsz48 from '../components/60FpsFill0Wght700Grad0Opsz48'
import Icon60FpsFill1Wght100Grad0Opsz48 from '../components/60FpsFill1Wght100Grad0Opsz48'
import Icon60FpsFill1Wght200Grad0Opsz48 from '../components/60FpsFill1Wght200Grad0Opsz48'
import Icon60FpsFill1Wght300Grad0Opsz48 from '../components/60FpsFill1Wght300Grad0Opsz48'
import Icon60FpsFill1Wght400Grad0Opsz48 from '../components/60FpsFill1Wght400Grad0Opsz48'
import Icon60FpsFill1Wght500Grad0Opsz48 from '../components/60FpsFill1Wght500Grad0Opsz48'
import Icon60FpsFill1Wght600Grad0Opsz48 from '../components/60FpsFill1Wght600Grad0Opsz48'
import Icon60FpsFill1Wght700Grad0Opsz48 from '../components/60FpsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon60Fps = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon60FpsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon60FpsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon60FpsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon60FpsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon60FpsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon60FpsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon60FpsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon60FpsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon60FpsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon60FpsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon60FpsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon60FpsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon60FpsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon60FpsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
