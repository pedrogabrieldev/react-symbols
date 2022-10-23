import IconModeFanOffFill0Wght100Grad0Opsz48 from '../components/ModeFanOffFill0Wght100Grad0Opsz48'
import IconModeFanOffFill0Wght200Grad0Opsz48 from '../components/ModeFanOffFill0Wght200Grad0Opsz48'
import IconModeFanOffFill0Wght300Grad0Opsz48 from '../components/ModeFanOffFill0Wght300Grad0Opsz48'
import IconModeFanOffFill0Wght400Grad0Opsz48 from '../components/ModeFanOffFill0Wght400Grad0Opsz48'
import IconModeFanOffFill0Wght500Grad0Opsz48 from '../components/ModeFanOffFill0Wght500Grad0Opsz48'
import IconModeFanOffFill0Wght600Grad0Opsz48 from '../components/ModeFanOffFill0Wght600Grad0Opsz48'
import IconModeFanOffFill0Wght700Grad0Opsz48 from '../components/ModeFanOffFill0Wght700Grad0Opsz48'
import IconModeFanOffFill1Wght100Grad0Opsz48 from '../components/ModeFanOffFill1Wght100Grad0Opsz48'
import IconModeFanOffFill1Wght200Grad0Opsz48 from '../components/ModeFanOffFill1Wght200Grad0Opsz48'
import IconModeFanOffFill1Wght300Grad0Opsz48 from '../components/ModeFanOffFill1Wght300Grad0Opsz48'
import IconModeFanOffFill1Wght400Grad0Opsz48 from '../components/ModeFanOffFill1Wght400Grad0Opsz48'
import IconModeFanOffFill1Wght500Grad0Opsz48 from '../components/ModeFanOffFill1Wght500Grad0Opsz48'
import IconModeFanOffFill1Wght600Grad0Opsz48 from '../components/ModeFanOffFill1Wght600Grad0Opsz48'
import IconModeFanOffFill1Wght700Grad0Opsz48 from '../components/ModeFanOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconModeFanOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconModeFanOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconModeFanOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconModeFanOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconModeFanOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconModeFanOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconModeFanOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconModeFanOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconModeFanOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconModeFanOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconModeFanOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconModeFanOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconModeFanOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconModeFanOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconModeFanOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
