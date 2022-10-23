import IconFreeCancellationFill0Wght100Grad0Opsz48 from '../components/FreeCancellationFill0Wght100Grad0Opsz48'
import IconFreeCancellationFill0Wght200Grad0Opsz48 from '../components/FreeCancellationFill0Wght200Grad0Opsz48'
import IconFreeCancellationFill0Wght300Grad0Opsz48 from '../components/FreeCancellationFill0Wght300Grad0Opsz48'
import IconFreeCancellationFill0Wght400Grad0Opsz48 from '../components/FreeCancellationFill0Wght400Grad0Opsz48'
import IconFreeCancellationFill0Wght500Grad0Opsz48 from '../components/FreeCancellationFill0Wght500Grad0Opsz48'
import IconFreeCancellationFill0Wght600Grad0Opsz48 from '../components/FreeCancellationFill0Wght600Grad0Opsz48'
import IconFreeCancellationFill0Wght700Grad0Opsz48 from '../components/FreeCancellationFill0Wght700Grad0Opsz48'
import IconFreeCancellationFill1Wght100Grad0Opsz48 from '../components/FreeCancellationFill1Wght100Grad0Opsz48'
import IconFreeCancellationFill1Wght200Grad0Opsz48 from '../components/FreeCancellationFill1Wght200Grad0Opsz48'
import IconFreeCancellationFill1Wght300Grad0Opsz48 from '../components/FreeCancellationFill1Wght300Grad0Opsz48'
import IconFreeCancellationFill1Wght400Grad0Opsz48 from '../components/FreeCancellationFill1Wght400Grad0Opsz48'
import IconFreeCancellationFill1Wght500Grad0Opsz48 from '../components/FreeCancellationFill1Wght500Grad0Opsz48'
import IconFreeCancellationFill1Wght600Grad0Opsz48 from '../components/FreeCancellationFill1Wght600Grad0Opsz48'
import IconFreeCancellationFill1Wght700Grad0Opsz48 from '../components/FreeCancellationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFreeCancellation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFreeCancellationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFreeCancellationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFreeCancellationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFreeCancellationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFreeCancellationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFreeCancellationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFreeCancellationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFreeCancellationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFreeCancellationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFreeCancellationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFreeCancellationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFreeCancellationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFreeCancellationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFreeCancellationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
