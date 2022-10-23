import IconModeCoolOffFill0Wght100Grad0Opsz48 from '../components/ModeCoolOffFill0Wght100Grad0Opsz48'
import IconModeCoolOffFill0Wght200Grad0Opsz48 from '../components/ModeCoolOffFill0Wght200Grad0Opsz48'
import IconModeCoolOffFill0Wght300Grad0Opsz48 from '../components/ModeCoolOffFill0Wght300Grad0Opsz48'
import IconModeCoolOffFill0Wght400Grad0Opsz48 from '../components/ModeCoolOffFill0Wght400Grad0Opsz48'
import IconModeCoolOffFill0Wght500Grad0Opsz48 from '../components/ModeCoolOffFill0Wght500Grad0Opsz48'
import IconModeCoolOffFill0Wght600Grad0Opsz48 from '../components/ModeCoolOffFill0Wght600Grad0Opsz48'
import IconModeCoolOffFill0Wght700Grad0Opsz48 from '../components/ModeCoolOffFill0Wght700Grad0Opsz48'
import IconModeCoolOffFill1Wght100Grad0Opsz48 from '../components/ModeCoolOffFill1Wght100Grad0Opsz48'
import IconModeCoolOffFill1Wght200Grad0Opsz48 from '../components/ModeCoolOffFill1Wght200Grad0Opsz48'
import IconModeCoolOffFill1Wght300Grad0Opsz48 from '../components/ModeCoolOffFill1Wght300Grad0Opsz48'
import IconModeCoolOffFill1Wght400Grad0Opsz48 from '../components/ModeCoolOffFill1Wght400Grad0Opsz48'
import IconModeCoolOffFill1Wght500Grad0Opsz48 from '../components/ModeCoolOffFill1Wght500Grad0Opsz48'
import IconModeCoolOffFill1Wght600Grad0Opsz48 from '../components/ModeCoolOffFill1Wght600Grad0Opsz48'
import IconModeCoolOffFill1Wght700Grad0Opsz48 from '../components/ModeCoolOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconModeCoolOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconModeCoolOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconModeCoolOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconModeCoolOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconModeCoolOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconModeCoolOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconModeCoolOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconModeCoolOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconModeCoolOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconModeCoolOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconModeCoolOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconModeCoolOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconModeCoolOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconModeCoolOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconModeCoolOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
