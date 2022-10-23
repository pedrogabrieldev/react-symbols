import IconViewCozyFill0Wght100Grad0Opsz48 from '../components/ViewCozyFill0Wght100Grad0Opsz48'
import IconViewCozyFill0Wght200Grad0Opsz48 from '../components/ViewCozyFill0Wght200Grad0Opsz48'
import IconViewCozyFill0Wght300Grad0Opsz48 from '../components/ViewCozyFill0Wght300Grad0Opsz48'
import IconViewCozyFill0Wght400Grad0Opsz48 from '../components/ViewCozyFill0Wght400Grad0Opsz48'
import IconViewCozyFill0Wght500Grad0Opsz48 from '../components/ViewCozyFill0Wght500Grad0Opsz48'
import IconViewCozyFill0Wght600Grad0Opsz48 from '../components/ViewCozyFill0Wght600Grad0Opsz48'
import IconViewCozyFill0Wght700Grad0Opsz48 from '../components/ViewCozyFill0Wght700Grad0Opsz48'
import IconViewCozyFill1Wght100Grad0Opsz48 from '../components/ViewCozyFill1Wght100Grad0Opsz48'
import IconViewCozyFill1Wght200Grad0Opsz48 from '../components/ViewCozyFill1Wght200Grad0Opsz48'
import IconViewCozyFill1Wght300Grad0Opsz48 from '../components/ViewCozyFill1Wght300Grad0Opsz48'
import IconViewCozyFill1Wght400Grad0Opsz48 from '../components/ViewCozyFill1Wght400Grad0Opsz48'
import IconViewCozyFill1Wght500Grad0Opsz48 from '../components/ViewCozyFill1Wght500Grad0Opsz48'
import IconViewCozyFill1Wght600Grad0Opsz48 from '../components/ViewCozyFill1Wght600Grad0Opsz48'
import IconViewCozyFill1Wght700Grad0Opsz48 from '../components/ViewCozyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewCozy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewCozyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewCozyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewCozyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewCozyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewCozyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewCozyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewCozyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewCozyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewCozyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewCozyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewCozyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewCozyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewCozyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewCozyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
