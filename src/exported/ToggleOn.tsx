import IconToggleOnFill0Wght100Grad0Opsz48 from '../components/ToggleOnFill0Wght100Grad0Opsz48'
import IconToggleOnFill0Wght200Grad0Opsz48 from '../components/ToggleOnFill0Wght200Grad0Opsz48'
import IconToggleOnFill0Wght300Grad0Opsz48 from '../components/ToggleOnFill0Wght300Grad0Opsz48'
import IconToggleOnFill0Wght400Grad0Opsz48 from '../components/ToggleOnFill0Wght400Grad0Opsz48'
import IconToggleOnFill0Wght500Grad0Opsz48 from '../components/ToggleOnFill0Wght500Grad0Opsz48'
import IconToggleOnFill0Wght600Grad0Opsz48 from '../components/ToggleOnFill0Wght600Grad0Opsz48'
import IconToggleOnFill0Wght700Grad0Opsz48 from '../components/ToggleOnFill0Wght700Grad0Opsz48'
import IconToggleOnFill1Wght100Grad0Opsz48 from '../components/ToggleOnFill1Wght100Grad0Opsz48'
import IconToggleOnFill1Wght200Grad0Opsz48 from '../components/ToggleOnFill1Wght200Grad0Opsz48'
import IconToggleOnFill1Wght300Grad0Opsz48 from '../components/ToggleOnFill1Wght300Grad0Opsz48'
import IconToggleOnFill1Wght400Grad0Opsz48 from '../components/ToggleOnFill1Wght400Grad0Opsz48'
import IconToggleOnFill1Wght500Grad0Opsz48 from '../components/ToggleOnFill1Wght500Grad0Opsz48'
import IconToggleOnFill1Wght600Grad0Opsz48 from '../components/ToggleOnFill1Wght600Grad0Opsz48'
import IconToggleOnFill1Wght700Grad0Opsz48 from '../components/ToggleOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToggleOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconToggleOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconToggleOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconToggleOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconToggleOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconToggleOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconToggleOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconToggleOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconToggleOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconToggleOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconToggleOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconToggleOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconToggleOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconToggleOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconToggleOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
