import Icon1KPlusFill0Wght100Grad0Opsz48 from '../components/1KPlusFill0Wght100Grad0Opsz48'
import Icon1KPlusFill0Wght200Grad0Opsz48 from '../components/1KPlusFill0Wght200Grad0Opsz48'
import Icon1KPlusFill0Wght300Grad0Opsz48 from '../components/1KPlusFill0Wght300Grad0Opsz48'
import Icon1KPlusFill0Wght400Grad0Opsz48 from '../components/1KPlusFill0Wght400Grad0Opsz48'
import Icon1KPlusFill0Wght500Grad0Opsz48 from '../components/1KPlusFill0Wght500Grad0Opsz48'
import Icon1KPlusFill0Wght600Grad0Opsz48 from '../components/1KPlusFill0Wght600Grad0Opsz48'
import Icon1KPlusFill0Wght700Grad0Opsz48 from '../components/1KPlusFill0Wght700Grad0Opsz48'
import Icon1KPlusFill1Wght100Grad0Opsz48 from '../components/1KPlusFill1Wght100Grad0Opsz48'
import Icon1KPlusFill1Wght200Grad0Opsz48 from '../components/1KPlusFill1Wght200Grad0Opsz48'
import Icon1KPlusFill1Wght300Grad0Opsz48 from '../components/1KPlusFill1Wght300Grad0Opsz48'
import Icon1KPlusFill1Wght400Grad0Opsz48 from '../components/1KPlusFill1Wght400Grad0Opsz48'
import Icon1KPlusFill1Wght500Grad0Opsz48 from '../components/1KPlusFill1Wght500Grad0Opsz48'
import Icon1KPlusFill1Wght600Grad0Opsz48 from '../components/1KPlusFill1Wght600Grad0Opsz48'
import Icon1KPlusFill1Wght700Grad0Opsz48 from '../components/1KPlusFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon1KPlus = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon1KPlusFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon1KPlusFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon1KPlusFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon1KPlusFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon1KPlusFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon1KPlusFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon1KPlusFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon1KPlusFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon1KPlusFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon1KPlusFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon1KPlusFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon1KPlusFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon1KPlusFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon1KPlusFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
