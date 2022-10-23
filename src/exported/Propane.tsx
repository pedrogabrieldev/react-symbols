import IconPropaneFill0Wght100Grad0Opsz48 from '../components/PropaneFill0Wght100Grad0Opsz48'
import IconPropaneFill0Wght200Grad0Opsz48 from '../components/PropaneFill0Wght200Grad0Opsz48'
import IconPropaneFill0Wght300Grad0Opsz48 from '../components/PropaneFill0Wght300Grad0Opsz48'
import IconPropaneFill0Wght400Grad0Opsz48 from '../components/PropaneFill0Wght400Grad0Opsz48'
import IconPropaneFill0Wght500Grad0Opsz48 from '../components/PropaneFill0Wght500Grad0Opsz48'
import IconPropaneFill0Wght600Grad0Opsz48 from '../components/PropaneFill0Wght600Grad0Opsz48'
import IconPropaneFill0Wght700Grad0Opsz48 from '../components/PropaneFill0Wght700Grad0Opsz48'
import IconPropaneFill1Wght100Grad0Opsz48 from '../components/PropaneFill1Wght100Grad0Opsz48'
import IconPropaneFill1Wght200Grad0Opsz48 from '../components/PropaneFill1Wght200Grad0Opsz48'
import IconPropaneFill1Wght300Grad0Opsz48 from '../components/PropaneFill1Wght300Grad0Opsz48'
import IconPropaneFill1Wght400Grad0Opsz48 from '../components/PropaneFill1Wght400Grad0Opsz48'
import IconPropaneFill1Wght500Grad0Opsz48 from '../components/PropaneFill1Wght500Grad0Opsz48'
import IconPropaneFill1Wght600Grad0Opsz48 from '../components/PropaneFill1Wght600Grad0Opsz48'
import IconPropaneFill1Wght700Grad0Opsz48 from '../components/PropaneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPropane = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPropaneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPropaneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPropaneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPropaneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPropaneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPropaneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPropaneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPropaneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPropaneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPropaneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPropaneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPropaneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPropaneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPropaneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
