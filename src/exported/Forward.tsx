import IconForwardFill0Wght100Grad0Opsz48 from '../components/ForwardFill0Wght100Grad0Opsz48'
import IconForwardFill0Wght200Grad0Opsz48 from '../components/ForwardFill0Wght200Grad0Opsz48'
import IconForwardFill0Wght300Grad0Opsz48 from '../components/ForwardFill0Wght300Grad0Opsz48'
import IconForwardFill0Wght400Grad0Opsz48 from '../components/ForwardFill0Wght400Grad0Opsz48'
import IconForwardFill0Wght500Grad0Opsz48 from '../components/ForwardFill0Wght500Grad0Opsz48'
import IconForwardFill0Wght600Grad0Opsz48 from '../components/ForwardFill0Wght600Grad0Opsz48'
import IconForwardFill0Wght700Grad0Opsz48 from '../components/ForwardFill0Wght700Grad0Opsz48'
import IconForwardFill1Wght100Grad0Opsz48 from '../components/ForwardFill1Wght100Grad0Opsz48'
import IconForwardFill1Wght200Grad0Opsz48 from '../components/ForwardFill1Wght200Grad0Opsz48'
import IconForwardFill1Wght300Grad0Opsz48 from '../components/ForwardFill1Wght300Grad0Opsz48'
import IconForwardFill1Wght400Grad0Opsz48 from '../components/ForwardFill1Wght400Grad0Opsz48'
import IconForwardFill1Wght500Grad0Opsz48 from '../components/ForwardFill1Wght500Grad0Opsz48'
import IconForwardFill1Wght600Grad0Opsz48 from '../components/ForwardFill1Wght600Grad0Opsz48'
import IconForwardFill1Wght700Grad0Opsz48 from '../components/ForwardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconForward = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconForwardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconForwardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconForwardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconForwardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconForwardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconForwardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconForwardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconForwardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconForwardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconForwardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconForwardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconForwardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconForwardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconForwardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
