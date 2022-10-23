import IconModeCoolFill0Wght100Grad0Opsz48 from '../components/ModeCoolFill0Wght100Grad0Opsz48'
import IconModeCoolFill0Wght200Grad0Opsz48 from '../components/ModeCoolFill0Wght200Grad0Opsz48'
import IconModeCoolFill0Wght300Grad0Opsz48 from '../components/ModeCoolFill0Wght300Grad0Opsz48'
import IconModeCoolFill0Wght400Grad0Opsz48 from '../components/ModeCoolFill0Wght400Grad0Opsz48'
import IconModeCoolFill0Wght500Grad0Opsz48 from '../components/ModeCoolFill0Wght500Grad0Opsz48'
import IconModeCoolFill0Wght600Grad0Opsz48 from '../components/ModeCoolFill0Wght600Grad0Opsz48'
import IconModeCoolFill0Wght700Grad0Opsz48 from '../components/ModeCoolFill0Wght700Grad0Opsz48'
import IconModeCoolFill1Wght100Grad0Opsz48 from '../components/ModeCoolFill1Wght100Grad0Opsz48'
import IconModeCoolFill1Wght200Grad0Opsz48 from '../components/ModeCoolFill1Wght200Grad0Opsz48'
import IconModeCoolFill1Wght300Grad0Opsz48 from '../components/ModeCoolFill1Wght300Grad0Opsz48'
import IconModeCoolFill1Wght400Grad0Opsz48 from '../components/ModeCoolFill1Wght400Grad0Opsz48'
import IconModeCoolFill1Wght500Grad0Opsz48 from '../components/ModeCoolFill1Wght500Grad0Opsz48'
import IconModeCoolFill1Wght600Grad0Opsz48 from '../components/ModeCoolFill1Wght600Grad0Opsz48'
import IconModeCoolFill1Wght700Grad0Opsz48 from '../components/ModeCoolFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconModeCool = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconModeCoolFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconModeCoolFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconModeCoolFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconModeCoolFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconModeCoolFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconModeCoolFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconModeCoolFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconModeCoolFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconModeCoolFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconModeCoolFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconModeCoolFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconModeCoolFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconModeCoolFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconModeCoolFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
