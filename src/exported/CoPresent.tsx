import IconCoPresentFill0Wght100Grad0Opsz48 from '../components/CoPresentFill0Wght100Grad0Opsz48'
import IconCoPresentFill0Wght200Grad0Opsz48 from '../components/CoPresentFill0Wght200Grad0Opsz48'
import IconCoPresentFill0Wght300Grad0Opsz48 from '../components/CoPresentFill0Wght300Grad0Opsz48'
import IconCoPresentFill0Wght400Grad0Opsz48 from '../components/CoPresentFill0Wght400Grad0Opsz48'
import IconCoPresentFill0Wght500Grad0Opsz48 from '../components/CoPresentFill0Wght500Grad0Opsz48'
import IconCoPresentFill0Wght600Grad0Opsz48 from '../components/CoPresentFill0Wght600Grad0Opsz48'
import IconCoPresentFill0Wght700Grad0Opsz48 from '../components/CoPresentFill0Wght700Grad0Opsz48'
import IconCoPresentFill1Wght100Grad0Opsz48 from '../components/CoPresentFill1Wght100Grad0Opsz48'
import IconCoPresentFill1Wght200Grad0Opsz48 from '../components/CoPresentFill1Wght200Grad0Opsz48'
import IconCoPresentFill1Wght300Grad0Opsz48 from '../components/CoPresentFill1Wght300Grad0Opsz48'
import IconCoPresentFill1Wght400Grad0Opsz48 from '../components/CoPresentFill1Wght400Grad0Opsz48'
import IconCoPresentFill1Wght500Grad0Opsz48 from '../components/CoPresentFill1Wght500Grad0Opsz48'
import IconCoPresentFill1Wght600Grad0Opsz48 from '../components/CoPresentFill1Wght600Grad0Opsz48'
import IconCoPresentFill1Wght700Grad0Opsz48 from '../components/CoPresentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCoPresent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCoPresentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCoPresentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCoPresentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCoPresentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCoPresentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCoPresentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCoPresentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCoPresentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCoPresentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCoPresentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCoPresentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCoPresentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCoPresentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCoPresentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
