import IconMoreDownFill0Wght100Grad0Opsz48 from '../components/MoreDownFill0Wght100Grad0Opsz48'
import IconMoreDownFill0Wght200Grad0Opsz48 from '../components/MoreDownFill0Wght200Grad0Opsz48'
import IconMoreDownFill0Wght300Grad0Opsz48 from '../components/MoreDownFill0Wght300Grad0Opsz48'
import IconMoreDownFill0Wght400Grad0Opsz48 from '../components/MoreDownFill0Wght400Grad0Opsz48'
import IconMoreDownFill0Wght500Grad0Opsz48 from '../components/MoreDownFill0Wght500Grad0Opsz48'
import IconMoreDownFill0Wght600Grad0Opsz48 from '../components/MoreDownFill0Wght600Grad0Opsz48'
import IconMoreDownFill0Wght700Grad0Opsz48 from '../components/MoreDownFill0Wght700Grad0Opsz48'
import IconMoreDownFill1Wght100Grad0Opsz48 from '../components/MoreDownFill1Wght100Grad0Opsz48'
import IconMoreDownFill1Wght200Grad0Opsz48 from '../components/MoreDownFill1Wght200Grad0Opsz48'
import IconMoreDownFill1Wght300Grad0Opsz48 from '../components/MoreDownFill1Wght300Grad0Opsz48'
import IconMoreDownFill1Wght400Grad0Opsz48 from '../components/MoreDownFill1Wght400Grad0Opsz48'
import IconMoreDownFill1Wght500Grad0Opsz48 from '../components/MoreDownFill1Wght500Grad0Opsz48'
import IconMoreDownFill1Wght600Grad0Opsz48 from '../components/MoreDownFill1Wght600Grad0Opsz48'
import IconMoreDownFill1Wght700Grad0Opsz48 from '../components/MoreDownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMoreDown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMoreDownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMoreDownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMoreDownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMoreDownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMoreDownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMoreDownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMoreDownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMoreDownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMoreDownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMoreDownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMoreDownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMoreDownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMoreDownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMoreDownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
