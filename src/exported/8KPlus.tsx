import Icon8KPlusFill0Wght100Grad0Opsz48 from '../components/8KPlusFill0Wght100Grad0Opsz48'
import Icon8KPlusFill0Wght200Grad0Opsz48 from '../components/8KPlusFill0Wght200Grad0Opsz48'
import Icon8KPlusFill0Wght300Grad0Opsz48 from '../components/8KPlusFill0Wght300Grad0Opsz48'
import Icon8KPlusFill0Wght400Grad0Opsz48 from '../components/8KPlusFill0Wght400Grad0Opsz48'
import Icon8KPlusFill0Wght500Grad0Opsz48 from '../components/8KPlusFill0Wght500Grad0Opsz48'
import Icon8KPlusFill0Wght600Grad0Opsz48 from '../components/8KPlusFill0Wght600Grad0Opsz48'
import Icon8KPlusFill0Wght700Grad0Opsz48 from '../components/8KPlusFill0Wght700Grad0Opsz48'
import Icon8KPlusFill1Wght100Grad0Opsz48 from '../components/8KPlusFill1Wght100Grad0Opsz48'
import Icon8KPlusFill1Wght200Grad0Opsz48 from '../components/8KPlusFill1Wght200Grad0Opsz48'
import Icon8KPlusFill1Wght300Grad0Opsz48 from '../components/8KPlusFill1Wght300Grad0Opsz48'
import Icon8KPlusFill1Wght400Grad0Opsz48 from '../components/8KPlusFill1Wght400Grad0Opsz48'
import Icon8KPlusFill1Wght500Grad0Opsz48 from '../components/8KPlusFill1Wght500Grad0Opsz48'
import Icon8KPlusFill1Wght600Grad0Opsz48 from '../components/8KPlusFill1Wght600Grad0Opsz48'
import Icon8KPlusFill1Wght700Grad0Opsz48 from '../components/8KPlusFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon8KPlus = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon8KPlusFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon8KPlusFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon8KPlusFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon8KPlusFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon8KPlusFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon8KPlusFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon8KPlusFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon8KPlusFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon8KPlusFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon8KPlusFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon8KPlusFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon8KPlusFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon8KPlusFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon8KPlusFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
