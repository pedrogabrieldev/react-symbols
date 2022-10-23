import IconOpenInNewOffFill0Wght100Grad0Opsz48 from '../components/OpenInNewOffFill0Wght100Grad0Opsz48'
import IconOpenInNewOffFill0Wght200Grad0Opsz48 from '../components/OpenInNewOffFill0Wght200Grad0Opsz48'
import IconOpenInNewOffFill0Wght300Grad0Opsz48 from '../components/OpenInNewOffFill0Wght300Grad0Opsz48'
import IconOpenInNewOffFill0Wght400Grad0Opsz48 from '../components/OpenInNewOffFill0Wght400Grad0Opsz48'
import IconOpenInNewOffFill0Wght500Grad0Opsz48 from '../components/OpenInNewOffFill0Wght500Grad0Opsz48'
import IconOpenInNewOffFill0Wght600Grad0Opsz48 from '../components/OpenInNewOffFill0Wght600Grad0Opsz48'
import IconOpenInNewOffFill0Wght700Grad0Opsz48 from '../components/OpenInNewOffFill0Wght700Grad0Opsz48'
import IconOpenInNewOffFill1Wght100Grad0Opsz48 from '../components/OpenInNewOffFill1Wght100Grad0Opsz48'
import IconOpenInNewOffFill1Wght200Grad0Opsz48 from '../components/OpenInNewOffFill1Wght200Grad0Opsz48'
import IconOpenInNewOffFill1Wght300Grad0Opsz48 from '../components/OpenInNewOffFill1Wght300Grad0Opsz48'
import IconOpenInNewOffFill1Wght400Grad0Opsz48 from '../components/OpenInNewOffFill1Wght400Grad0Opsz48'
import IconOpenInNewOffFill1Wght500Grad0Opsz48 from '../components/OpenInNewOffFill1Wght500Grad0Opsz48'
import IconOpenInNewOffFill1Wght600Grad0Opsz48 from '../components/OpenInNewOffFill1Wght600Grad0Opsz48'
import IconOpenInNewOffFill1Wght700Grad0Opsz48 from '../components/OpenInNewOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOpenInNewOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOpenInNewOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOpenInNewOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOpenInNewOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOpenInNewOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOpenInNewOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOpenInNewOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOpenInNewOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOpenInNewOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOpenInNewOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOpenInNewOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOpenInNewOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOpenInNewOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOpenInNewOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOpenInNewOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
