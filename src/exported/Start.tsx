import IconStartFill0Wght100Grad0Opsz48 from '../components/StartFill0Wght100Grad0Opsz48'
import IconStartFill0Wght200Grad0Opsz48 from '../components/StartFill0Wght200Grad0Opsz48'
import IconStartFill0Wght300Grad0Opsz48 from '../components/StartFill0Wght300Grad0Opsz48'
import IconStartFill0Wght400Grad0Opsz48 from '../components/StartFill0Wght400Grad0Opsz48'
import IconStartFill0Wght500Grad0Opsz48 from '../components/StartFill0Wght500Grad0Opsz48'
import IconStartFill0Wght600Grad0Opsz48 from '../components/StartFill0Wght600Grad0Opsz48'
import IconStartFill0Wght700Grad0Opsz48 from '../components/StartFill0Wght700Grad0Opsz48'
import IconStartFill1Wght100Grad0Opsz48 from '../components/StartFill1Wght100Grad0Opsz48'
import IconStartFill1Wght200Grad0Opsz48 from '../components/StartFill1Wght200Grad0Opsz48'
import IconStartFill1Wght300Grad0Opsz48 from '../components/StartFill1Wght300Grad0Opsz48'
import IconStartFill1Wght400Grad0Opsz48 from '../components/StartFill1Wght400Grad0Opsz48'
import IconStartFill1Wght500Grad0Opsz48 from '../components/StartFill1Wght500Grad0Opsz48'
import IconStartFill1Wght600Grad0Opsz48 from '../components/StartFill1Wght600Grad0Opsz48'
import IconStartFill1Wght700Grad0Opsz48 from '../components/StartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
