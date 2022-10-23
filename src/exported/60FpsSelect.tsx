import Icon60FpsSelectFill0Wght100Grad0Opsz48 from '../components/60FpsSelectFill0Wght100Grad0Opsz48'
import Icon60FpsSelectFill0Wght200Grad0Opsz48 from '../components/60FpsSelectFill0Wght200Grad0Opsz48'
import Icon60FpsSelectFill0Wght300Grad0Opsz48 from '../components/60FpsSelectFill0Wght300Grad0Opsz48'
import Icon60FpsSelectFill0Wght400Grad0Opsz48 from '../components/60FpsSelectFill0Wght400Grad0Opsz48'
import Icon60FpsSelectFill0Wght500Grad0Opsz48 from '../components/60FpsSelectFill0Wght500Grad0Opsz48'
import Icon60FpsSelectFill0Wght600Grad0Opsz48 from '../components/60FpsSelectFill0Wght600Grad0Opsz48'
import Icon60FpsSelectFill0Wght700Grad0Opsz48 from '../components/60FpsSelectFill0Wght700Grad0Opsz48'
import Icon60FpsSelectFill1Wght100Grad0Opsz48 from '../components/60FpsSelectFill1Wght100Grad0Opsz48'
import Icon60FpsSelectFill1Wght200Grad0Opsz48 from '../components/60FpsSelectFill1Wght200Grad0Opsz48'
import Icon60FpsSelectFill1Wght300Grad0Opsz48 from '../components/60FpsSelectFill1Wght300Grad0Opsz48'
import Icon60FpsSelectFill1Wght400Grad0Opsz48 from '../components/60FpsSelectFill1Wght400Grad0Opsz48'
import Icon60FpsSelectFill1Wght500Grad0Opsz48 from '../components/60FpsSelectFill1Wght500Grad0Opsz48'
import Icon60FpsSelectFill1Wght600Grad0Opsz48 from '../components/60FpsSelectFill1Wght600Grad0Opsz48'
import Icon60FpsSelectFill1Wght700Grad0Opsz48 from '../components/60FpsSelectFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon60FpsSelect = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon60FpsSelectFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon60FpsSelectFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon60FpsSelectFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon60FpsSelectFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon60FpsSelectFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon60FpsSelectFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon60FpsSelectFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon60FpsSelectFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon60FpsSelectFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon60FpsSelectFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon60FpsSelectFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon60FpsSelectFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon60FpsSelectFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon60FpsSelectFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
