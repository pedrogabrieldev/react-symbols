import IconExpandLessFill0Wght100Grad0Opsz48 from '../components/ExpandLessFill0Wght100Grad0Opsz48'
import IconExpandLessFill0Wght200Grad0Opsz48 from '../components/ExpandLessFill0Wght200Grad0Opsz48'
import IconExpandLessFill0Wght300Grad0Opsz48 from '../components/ExpandLessFill0Wght300Grad0Opsz48'
import IconExpandLessFill0Wght400Grad0Opsz48 from '../components/ExpandLessFill0Wght400Grad0Opsz48'
import IconExpandLessFill0Wght500Grad0Opsz48 from '../components/ExpandLessFill0Wght500Grad0Opsz48'
import IconExpandLessFill0Wght600Grad0Opsz48 from '../components/ExpandLessFill0Wght600Grad0Opsz48'
import IconExpandLessFill0Wght700Grad0Opsz48 from '../components/ExpandLessFill0Wght700Grad0Opsz48'
import IconExpandLessFill1Wght100Grad0Opsz48 from '../components/ExpandLessFill1Wght100Grad0Opsz48'
import IconExpandLessFill1Wght200Grad0Opsz48 from '../components/ExpandLessFill1Wght200Grad0Opsz48'
import IconExpandLessFill1Wght300Grad0Opsz48 from '../components/ExpandLessFill1Wght300Grad0Opsz48'
import IconExpandLessFill1Wght400Grad0Opsz48 from '../components/ExpandLessFill1Wght400Grad0Opsz48'
import IconExpandLessFill1Wght500Grad0Opsz48 from '../components/ExpandLessFill1Wght500Grad0Opsz48'
import IconExpandLessFill1Wght600Grad0Opsz48 from '../components/ExpandLessFill1Wght600Grad0Opsz48'
import IconExpandLessFill1Wght700Grad0Opsz48 from '../components/ExpandLessFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExpandLess = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExpandLessFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExpandLessFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExpandLessFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExpandLessFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExpandLessFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExpandLessFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExpandLessFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExpandLessFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExpandLessFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExpandLessFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExpandLessFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExpandLessFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExpandLessFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExpandLessFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
