import IconNavigateNextFill0Wght100Grad0Opsz48 from '../components/NavigateNextFill0Wght100Grad0Opsz48'
import IconNavigateNextFill0Wght200Grad0Opsz48 from '../components/NavigateNextFill0Wght200Grad0Opsz48'
import IconNavigateNextFill0Wght300Grad0Opsz48 from '../components/NavigateNextFill0Wght300Grad0Opsz48'
import IconNavigateNextFill0Wght400Grad0Opsz48 from '../components/NavigateNextFill0Wght400Grad0Opsz48'
import IconNavigateNextFill0Wght500Grad0Opsz48 from '../components/NavigateNextFill0Wght500Grad0Opsz48'
import IconNavigateNextFill0Wght600Grad0Opsz48 from '../components/NavigateNextFill0Wght600Grad0Opsz48'
import IconNavigateNextFill0Wght700Grad0Opsz48 from '../components/NavigateNextFill0Wght700Grad0Opsz48'
import IconNavigateNextFill1Wght100Grad0Opsz48 from '../components/NavigateNextFill1Wght100Grad0Opsz48'
import IconNavigateNextFill1Wght200Grad0Opsz48 from '../components/NavigateNextFill1Wght200Grad0Opsz48'
import IconNavigateNextFill1Wght300Grad0Opsz48 from '../components/NavigateNextFill1Wght300Grad0Opsz48'
import IconNavigateNextFill1Wght400Grad0Opsz48 from '../components/NavigateNextFill1Wght400Grad0Opsz48'
import IconNavigateNextFill1Wght500Grad0Opsz48 from '../components/NavigateNextFill1Wght500Grad0Opsz48'
import IconNavigateNextFill1Wght600Grad0Opsz48 from '../components/NavigateNextFill1Wght600Grad0Opsz48'
import IconNavigateNextFill1Wght700Grad0Opsz48 from '../components/NavigateNextFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNavigateNext = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNavigateNextFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNavigateNextFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNavigateNextFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNavigateNextFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNavigateNextFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNavigateNextFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNavigateNextFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNavigateNextFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNavigateNextFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNavigateNextFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNavigateNextFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNavigateNextFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNavigateNextFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNavigateNextFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
