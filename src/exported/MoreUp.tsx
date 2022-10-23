import IconMoreUpFill0Wght100Grad0Opsz48 from '../components/MoreUpFill0Wght100Grad0Opsz48'
import IconMoreUpFill0Wght200Grad0Opsz48 from '../components/MoreUpFill0Wght200Grad0Opsz48'
import IconMoreUpFill0Wght300Grad0Opsz48 from '../components/MoreUpFill0Wght300Grad0Opsz48'
import IconMoreUpFill0Wght400Grad0Opsz48 from '../components/MoreUpFill0Wght400Grad0Opsz48'
import IconMoreUpFill0Wght500Grad0Opsz48 from '../components/MoreUpFill0Wght500Grad0Opsz48'
import IconMoreUpFill0Wght600Grad0Opsz48 from '../components/MoreUpFill0Wght600Grad0Opsz48'
import IconMoreUpFill0Wght700Grad0Opsz48 from '../components/MoreUpFill0Wght700Grad0Opsz48'
import IconMoreUpFill1Wght100Grad0Opsz48 from '../components/MoreUpFill1Wght100Grad0Opsz48'
import IconMoreUpFill1Wght200Grad0Opsz48 from '../components/MoreUpFill1Wght200Grad0Opsz48'
import IconMoreUpFill1Wght300Grad0Opsz48 from '../components/MoreUpFill1Wght300Grad0Opsz48'
import IconMoreUpFill1Wght400Grad0Opsz48 from '../components/MoreUpFill1Wght400Grad0Opsz48'
import IconMoreUpFill1Wght500Grad0Opsz48 from '../components/MoreUpFill1Wght500Grad0Opsz48'
import IconMoreUpFill1Wght600Grad0Opsz48 from '../components/MoreUpFill1Wght600Grad0Opsz48'
import IconMoreUpFill1Wght700Grad0Opsz48 from '../components/MoreUpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMoreUp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMoreUpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMoreUpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMoreUpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMoreUpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMoreUpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMoreUpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMoreUpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMoreUpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMoreUpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMoreUpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMoreUpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMoreUpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMoreUpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMoreUpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
