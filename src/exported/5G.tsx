import Icon5GFill0Wght100Grad0Opsz48 from '../components/5GFill0Wght100Grad0Opsz48'
import Icon5GFill0Wght200Grad0Opsz48 from '../components/5GFill0Wght200Grad0Opsz48'
import Icon5GFill0Wght300Grad0Opsz48 from '../components/5GFill0Wght300Grad0Opsz48'
import Icon5GFill0Wght400Grad0Opsz48 from '../components/5GFill0Wght400Grad0Opsz48'
import Icon5GFill0Wght500Grad0Opsz48 from '../components/5GFill0Wght500Grad0Opsz48'
import Icon5GFill0Wght600Grad0Opsz48 from '../components/5GFill0Wght600Grad0Opsz48'
import Icon5GFill0Wght700Grad0Opsz48 from '../components/5GFill0Wght700Grad0Opsz48'
import Icon5GFill1Wght100Grad0Opsz48 from '../components/5GFill1Wght100Grad0Opsz48'
import Icon5GFill1Wght200Grad0Opsz48 from '../components/5GFill1Wght200Grad0Opsz48'
import Icon5GFill1Wght300Grad0Opsz48 from '../components/5GFill1Wght300Grad0Opsz48'
import Icon5GFill1Wght400Grad0Opsz48 from '../components/5GFill1Wght400Grad0Opsz48'
import Icon5GFill1Wght500Grad0Opsz48 from '../components/5GFill1Wght500Grad0Opsz48'
import Icon5GFill1Wght600Grad0Opsz48 from '../components/5GFill1Wght600Grad0Opsz48'
import Icon5GFill1Wght700Grad0Opsz48 from '../components/5GFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon5G = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon5GFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon5GFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon5GFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon5GFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon5GFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon5GFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon5GFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon5GFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon5GFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon5GFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon5GFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon5GFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon5GFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon5GFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
