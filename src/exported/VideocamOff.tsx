import IconVideocamOffFill0Wght100Grad0Opsz48 from '../components/VideocamOffFill0Wght100Grad0Opsz48'
import IconVideocamOffFill0Wght200Grad0Opsz48 from '../components/VideocamOffFill0Wght200Grad0Opsz48'
import IconVideocamOffFill0Wght300Grad0Opsz48 from '../components/VideocamOffFill0Wght300Grad0Opsz48'
import IconVideocamOffFill0Wght400Grad0Opsz48 from '../components/VideocamOffFill0Wght400Grad0Opsz48'
import IconVideocamOffFill0Wght500Grad0Opsz48 from '../components/VideocamOffFill0Wght500Grad0Opsz48'
import IconVideocamOffFill0Wght600Grad0Opsz48 from '../components/VideocamOffFill0Wght600Grad0Opsz48'
import IconVideocamOffFill0Wght700Grad0Opsz48 from '../components/VideocamOffFill0Wght700Grad0Opsz48'
import IconVideocamOffFill1Wght100Grad0Opsz48 from '../components/VideocamOffFill1Wght100Grad0Opsz48'
import IconVideocamOffFill1Wght200Grad0Opsz48 from '../components/VideocamOffFill1Wght200Grad0Opsz48'
import IconVideocamOffFill1Wght300Grad0Opsz48 from '../components/VideocamOffFill1Wght300Grad0Opsz48'
import IconVideocamOffFill1Wght400Grad0Opsz48 from '../components/VideocamOffFill1Wght400Grad0Opsz48'
import IconVideocamOffFill1Wght500Grad0Opsz48 from '../components/VideocamOffFill1Wght500Grad0Opsz48'
import IconVideocamOffFill1Wght600Grad0Opsz48 from '../components/VideocamOffFill1Wght600Grad0Opsz48'
import IconVideocamOffFill1Wght700Grad0Opsz48 from '../components/VideocamOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVideocamOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVideocamOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVideocamOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVideocamOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVideocamOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVideocamOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVideocamOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVideocamOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVideocamOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVideocamOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVideocamOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVideocamOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVideocamOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVideocamOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVideocamOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
