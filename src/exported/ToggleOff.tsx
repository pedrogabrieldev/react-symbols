import IconToggleOffFill0Wght100Grad0Opsz48 from '../components/ToggleOffFill0Wght100Grad0Opsz48'
import IconToggleOffFill0Wght200Grad0Opsz48 from '../components/ToggleOffFill0Wght200Grad0Opsz48'
import IconToggleOffFill0Wght300Grad0Opsz48 from '../components/ToggleOffFill0Wght300Grad0Opsz48'
import IconToggleOffFill0Wght400Grad0Opsz48 from '../components/ToggleOffFill0Wght400Grad0Opsz48'
import IconToggleOffFill0Wght500Grad0Opsz48 from '../components/ToggleOffFill0Wght500Grad0Opsz48'
import IconToggleOffFill0Wght600Grad0Opsz48 from '../components/ToggleOffFill0Wght600Grad0Opsz48'
import IconToggleOffFill0Wght700Grad0Opsz48 from '../components/ToggleOffFill0Wght700Grad0Opsz48'
import IconToggleOffFill1Wght100Grad0Opsz48 from '../components/ToggleOffFill1Wght100Grad0Opsz48'
import IconToggleOffFill1Wght200Grad0Opsz48 from '../components/ToggleOffFill1Wght200Grad0Opsz48'
import IconToggleOffFill1Wght300Grad0Opsz48 from '../components/ToggleOffFill1Wght300Grad0Opsz48'
import IconToggleOffFill1Wght400Grad0Opsz48 from '../components/ToggleOffFill1Wght400Grad0Opsz48'
import IconToggleOffFill1Wght500Grad0Opsz48 from '../components/ToggleOffFill1Wght500Grad0Opsz48'
import IconToggleOffFill1Wght600Grad0Opsz48 from '../components/ToggleOffFill1Wght600Grad0Opsz48'
import IconToggleOffFill1Wght700Grad0Opsz48 from '../components/ToggleOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToggleOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconToggleOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconToggleOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconToggleOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconToggleOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconToggleOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconToggleOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconToggleOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconToggleOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconToggleOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconToggleOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconToggleOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconToggleOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconToggleOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconToggleOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
