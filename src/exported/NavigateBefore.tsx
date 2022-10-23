import IconNavigateBeforeFill0Wght100Grad0Opsz48 from '../components/NavigateBeforeFill0Wght100Grad0Opsz48'
import IconNavigateBeforeFill0Wght200Grad0Opsz48 from '../components/NavigateBeforeFill0Wght200Grad0Opsz48'
import IconNavigateBeforeFill0Wght300Grad0Opsz48 from '../components/NavigateBeforeFill0Wght300Grad0Opsz48'
import IconNavigateBeforeFill0Wght400Grad0Opsz48 from '../components/NavigateBeforeFill0Wght400Grad0Opsz48'
import IconNavigateBeforeFill0Wght500Grad0Opsz48 from '../components/NavigateBeforeFill0Wght500Grad0Opsz48'
import IconNavigateBeforeFill0Wght600Grad0Opsz48 from '../components/NavigateBeforeFill0Wght600Grad0Opsz48'
import IconNavigateBeforeFill0Wght700Grad0Opsz48 from '../components/NavigateBeforeFill0Wght700Grad0Opsz48'
import IconNavigateBeforeFill1Wght100Grad0Opsz48 from '../components/NavigateBeforeFill1Wght100Grad0Opsz48'
import IconNavigateBeforeFill1Wght200Grad0Opsz48 from '../components/NavigateBeforeFill1Wght200Grad0Opsz48'
import IconNavigateBeforeFill1Wght300Grad0Opsz48 from '../components/NavigateBeforeFill1Wght300Grad0Opsz48'
import IconNavigateBeforeFill1Wght400Grad0Opsz48 from '../components/NavigateBeforeFill1Wght400Grad0Opsz48'
import IconNavigateBeforeFill1Wght500Grad0Opsz48 from '../components/NavigateBeforeFill1Wght500Grad0Opsz48'
import IconNavigateBeforeFill1Wght600Grad0Opsz48 from '../components/NavigateBeforeFill1Wght600Grad0Opsz48'
import IconNavigateBeforeFill1Wght700Grad0Opsz48 from '../components/NavigateBeforeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNavigateBefore = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNavigateBeforeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNavigateBeforeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNavigateBeforeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNavigateBeforeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNavigateBeforeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNavigateBeforeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNavigateBeforeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNavigateBeforeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNavigateBeforeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNavigateBeforeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNavigateBeforeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNavigateBeforeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNavigateBeforeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNavigateBeforeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
