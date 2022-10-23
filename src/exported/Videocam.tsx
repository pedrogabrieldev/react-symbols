import IconVideocamFill0Wght100Grad0Opsz48 from '../components/VideocamFill0Wght100Grad0Opsz48'
import IconVideocamFill0Wght200Grad0Opsz48 from '../components/VideocamFill0Wght200Grad0Opsz48'
import IconVideocamFill0Wght300Grad0Opsz48 from '../components/VideocamFill0Wght300Grad0Opsz48'
import IconVideocamFill0Wght400Grad0Opsz48 from '../components/VideocamFill0Wght400Grad0Opsz48'
import IconVideocamFill0Wght500Grad0Opsz48 from '../components/VideocamFill0Wght500Grad0Opsz48'
import IconVideocamFill0Wght600Grad0Opsz48 from '../components/VideocamFill0Wght600Grad0Opsz48'
import IconVideocamFill0Wght700Grad0Opsz48 from '../components/VideocamFill0Wght700Grad0Opsz48'
import IconVideocamFill1Wght100Grad0Opsz48 from '../components/VideocamFill1Wght100Grad0Opsz48'
import IconVideocamFill1Wght200Grad0Opsz48 from '../components/VideocamFill1Wght200Grad0Opsz48'
import IconVideocamFill1Wght300Grad0Opsz48 from '../components/VideocamFill1Wght300Grad0Opsz48'
import IconVideocamFill1Wght400Grad0Opsz48 from '../components/VideocamFill1Wght400Grad0Opsz48'
import IconVideocamFill1Wght500Grad0Opsz48 from '../components/VideocamFill1Wght500Grad0Opsz48'
import IconVideocamFill1Wght600Grad0Opsz48 from '../components/VideocamFill1Wght600Grad0Opsz48'
import IconVideocamFill1Wght700Grad0Opsz48 from '../components/VideocamFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVideocam = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVideocamFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVideocamFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVideocamFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVideocamFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVideocamFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVideocamFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVideocamFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVideocamFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVideocamFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVideocamFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVideocamFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVideocamFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVideocamFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVideocamFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
