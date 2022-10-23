import IconCurtainsClosedFill0Wght100Grad0Opsz48 from '../components/CurtainsClosedFill0Wght100Grad0Opsz48'
import IconCurtainsClosedFill0Wght200Grad0Opsz48 from '../components/CurtainsClosedFill0Wght200Grad0Opsz48'
import IconCurtainsClosedFill0Wght300Grad0Opsz48 from '../components/CurtainsClosedFill0Wght300Grad0Opsz48'
import IconCurtainsClosedFill0Wght400Grad0Opsz48 from '../components/CurtainsClosedFill0Wght400Grad0Opsz48'
import IconCurtainsClosedFill0Wght500Grad0Opsz48 from '../components/CurtainsClosedFill0Wght500Grad0Opsz48'
import IconCurtainsClosedFill0Wght600Grad0Opsz48 from '../components/CurtainsClosedFill0Wght600Grad0Opsz48'
import IconCurtainsClosedFill0Wght700Grad0Opsz48 from '../components/CurtainsClosedFill0Wght700Grad0Opsz48'
import IconCurtainsClosedFill1Wght100Grad0Opsz48 from '../components/CurtainsClosedFill1Wght100Grad0Opsz48'
import IconCurtainsClosedFill1Wght200Grad0Opsz48 from '../components/CurtainsClosedFill1Wght200Grad0Opsz48'
import IconCurtainsClosedFill1Wght300Grad0Opsz48 from '../components/CurtainsClosedFill1Wght300Grad0Opsz48'
import IconCurtainsClosedFill1Wght400Grad0Opsz48 from '../components/CurtainsClosedFill1Wght400Grad0Opsz48'
import IconCurtainsClosedFill1Wght500Grad0Opsz48 from '../components/CurtainsClosedFill1Wght500Grad0Opsz48'
import IconCurtainsClosedFill1Wght600Grad0Opsz48 from '../components/CurtainsClosedFill1Wght600Grad0Opsz48'
import IconCurtainsClosedFill1Wght700Grad0Opsz48 from '../components/CurtainsClosedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCurtainsClosed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCurtainsClosedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCurtainsClosedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCurtainsClosedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCurtainsClosedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCurtainsClosedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCurtainsClosedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCurtainsClosedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCurtainsClosedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCurtainsClosedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCurtainsClosedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCurtainsClosedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCurtainsClosedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCurtainsClosedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCurtainsClosedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
