import IconAnchorFill0Wght100Grad0Opsz48 from '../components/AnchorFill0Wght100Grad0Opsz48'
import IconAnchorFill0Wght200Grad0Opsz48 from '../components/AnchorFill0Wght200Grad0Opsz48'
import IconAnchorFill0Wght300Grad0Opsz48 from '../components/AnchorFill0Wght300Grad0Opsz48'
import IconAnchorFill0Wght400Grad0Opsz48 from '../components/AnchorFill0Wght400Grad0Opsz48'
import IconAnchorFill0Wght500Grad0Opsz48 from '../components/AnchorFill0Wght500Grad0Opsz48'
import IconAnchorFill0Wght600Grad0Opsz48 from '../components/AnchorFill0Wght600Grad0Opsz48'
import IconAnchorFill0Wght700Grad0Opsz48 from '../components/AnchorFill0Wght700Grad0Opsz48'
import IconAnchorFill1Wght100Grad0Opsz48 from '../components/AnchorFill1Wght100Grad0Opsz48'
import IconAnchorFill1Wght200Grad0Opsz48 from '../components/AnchorFill1Wght200Grad0Opsz48'
import IconAnchorFill1Wght300Grad0Opsz48 from '../components/AnchorFill1Wght300Grad0Opsz48'
import IconAnchorFill1Wght400Grad0Opsz48 from '../components/AnchorFill1Wght400Grad0Opsz48'
import IconAnchorFill1Wght500Grad0Opsz48 from '../components/AnchorFill1Wght500Grad0Opsz48'
import IconAnchorFill1Wght600Grad0Opsz48 from '../components/AnchorFill1Wght600Grad0Opsz48'
import IconAnchorFill1Wght700Grad0Opsz48 from '../components/AnchorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAnchor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAnchorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAnchorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAnchorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAnchorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAnchorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAnchorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAnchorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAnchorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAnchorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAnchorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAnchorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAnchorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAnchorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAnchorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
