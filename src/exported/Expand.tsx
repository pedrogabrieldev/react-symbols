import IconExpandFill0Wght100Grad0Opsz48 from '../components/ExpandFill0Wght100Grad0Opsz48'
import IconExpandFill0Wght200Grad0Opsz48 from '../components/ExpandFill0Wght200Grad0Opsz48'
import IconExpandFill0Wght300Grad0Opsz48 from '../components/ExpandFill0Wght300Grad0Opsz48'
import IconExpandFill0Wght400Grad0Opsz48 from '../components/ExpandFill0Wght400Grad0Opsz48'
import IconExpandFill0Wght500Grad0Opsz48 from '../components/ExpandFill0Wght500Grad0Opsz48'
import IconExpandFill0Wght600Grad0Opsz48 from '../components/ExpandFill0Wght600Grad0Opsz48'
import IconExpandFill0Wght700Grad0Opsz48 from '../components/ExpandFill0Wght700Grad0Opsz48'
import IconExpandFill1Wght100Grad0Opsz48 from '../components/ExpandFill1Wght100Grad0Opsz48'
import IconExpandFill1Wght200Grad0Opsz48 from '../components/ExpandFill1Wght200Grad0Opsz48'
import IconExpandFill1Wght300Grad0Opsz48 from '../components/ExpandFill1Wght300Grad0Opsz48'
import IconExpandFill1Wght400Grad0Opsz48 from '../components/ExpandFill1Wght400Grad0Opsz48'
import IconExpandFill1Wght500Grad0Opsz48 from '../components/ExpandFill1Wght500Grad0Opsz48'
import IconExpandFill1Wght600Grad0Opsz48 from '../components/ExpandFill1Wght600Grad0Opsz48'
import IconExpandFill1Wght700Grad0Opsz48 from '../components/ExpandFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExpand = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExpandFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExpandFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExpandFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExpandFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExpandFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExpandFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExpandFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExpandFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExpandFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExpandFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExpandFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExpandFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExpandFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExpandFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
