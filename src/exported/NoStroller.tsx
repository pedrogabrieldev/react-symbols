import IconNoStrollerFill0Wght100Grad0Opsz48 from '../components/NoStrollerFill0Wght100Grad0Opsz48'
import IconNoStrollerFill0Wght200Grad0Opsz48 from '../components/NoStrollerFill0Wght200Grad0Opsz48'
import IconNoStrollerFill0Wght300Grad0Opsz48 from '../components/NoStrollerFill0Wght300Grad0Opsz48'
import IconNoStrollerFill0Wght400Grad0Opsz48 from '../components/NoStrollerFill0Wght400Grad0Opsz48'
import IconNoStrollerFill0Wght500Grad0Opsz48 from '../components/NoStrollerFill0Wght500Grad0Opsz48'
import IconNoStrollerFill0Wght600Grad0Opsz48 from '../components/NoStrollerFill0Wght600Grad0Opsz48'
import IconNoStrollerFill0Wght700Grad0Opsz48 from '../components/NoStrollerFill0Wght700Grad0Opsz48'
import IconNoStrollerFill1Wght100Grad0Opsz48 from '../components/NoStrollerFill1Wght100Grad0Opsz48'
import IconNoStrollerFill1Wght200Grad0Opsz48 from '../components/NoStrollerFill1Wght200Grad0Opsz48'
import IconNoStrollerFill1Wght300Grad0Opsz48 from '../components/NoStrollerFill1Wght300Grad0Opsz48'
import IconNoStrollerFill1Wght400Grad0Opsz48 from '../components/NoStrollerFill1Wght400Grad0Opsz48'
import IconNoStrollerFill1Wght500Grad0Opsz48 from '../components/NoStrollerFill1Wght500Grad0Opsz48'
import IconNoStrollerFill1Wght600Grad0Opsz48 from '../components/NoStrollerFill1Wght600Grad0Opsz48'
import IconNoStrollerFill1Wght700Grad0Opsz48 from '../components/NoStrollerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoStroller = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoStrollerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoStrollerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoStrollerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoStrollerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoStrollerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoStrollerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoStrollerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoStrollerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoStrollerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoStrollerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoStrollerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoStrollerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoStrollerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoStrollerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
