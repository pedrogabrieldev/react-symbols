import Icon30FpsSelectFill0Wght100Grad0Opsz48 from '../components/30FpsSelectFill0Wght100Grad0Opsz48'
import Icon30FpsSelectFill0Wght200Grad0Opsz48 from '../components/30FpsSelectFill0Wght200Grad0Opsz48'
import Icon30FpsSelectFill0Wght300Grad0Opsz48 from '../components/30FpsSelectFill0Wght300Grad0Opsz48'
import Icon30FpsSelectFill0Wght400Grad0Opsz48 from '../components/30FpsSelectFill0Wght400Grad0Opsz48'
import Icon30FpsSelectFill0Wght500Grad0Opsz48 from '../components/30FpsSelectFill0Wght500Grad0Opsz48'
import Icon30FpsSelectFill0Wght600Grad0Opsz48 from '../components/30FpsSelectFill0Wght600Grad0Opsz48'
import Icon30FpsSelectFill0Wght700Grad0Opsz48 from '../components/30FpsSelectFill0Wght700Grad0Opsz48'
import Icon30FpsSelectFill1Wght100Grad0Opsz48 from '../components/30FpsSelectFill1Wght100Grad0Opsz48'
import Icon30FpsSelectFill1Wght200Grad0Opsz48 from '../components/30FpsSelectFill1Wght200Grad0Opsz48'
import Icon30FpsSelectFill1Wght300Grad0Opsz48 from '../components/30FpsSelectFill1Wght300Grad0Opsz48'
import Icon30FpsSelectFill1Wght400Grad0Opsz48 from '../components/30FpsSelectFill1Wght400Grad0Opsz48'
import Icon30FpsSelectFill1Wght500Grad0Opsz48 from '../components/30FpsSelectFill1Wght500Grad0Opsz48'
import Icon30FpsSelectFill1Wght600Grad0Opsz48 from '../components/30FpsSelectFill1Wght600Grad0Opsz48'
import Icon30FpsSelectFill1Wght700Grad0Opsz48 from '../components/30FpsSelectFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon30FpsSelect = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon30FpsSelectFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon30FpsSelectFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon30FpsSelectFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon30FpsSelectFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon30FpsSelectFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon30FpsSelectFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon30FpsSelectFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon30FpsSelectFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon30FpsSelectFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon30FpsSelectFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon30FpsSelectFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon30FpsSelectFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon30FpsSelectFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon30FpsSelectFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
