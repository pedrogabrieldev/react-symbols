import IconRawOffFill0Wght100Grad0Opsz48 from '../components/RawOffFill0Wght100Grad0Opsz48'
import IconRawOffFill0Wght200Grad0Opsz48 from '../components/RawOffFill0Wght200Grad0Opsz48'
import IconRawOffFill0Wght300Grad0Opsz48 from '../components/RawOffFill0Wght300Grad0Opsz48'
import IconRawOffFill0Wght400Grad0Opsz48 from '../components/RawOffFill0Wght400Grad0Opsz48'
import IconRawOffFill0Wght500Grad0Opsz48 from '../components/RawOffFill0Wght500Grad0Opsz48'
import IconRawOffFill0Wght600Grad0Opsz48 from '../components/RawOffFill0Wght600Grad0Opsz48'
import IconRawOffFill0Wght700Grad0Opsz48 from '../components/RawOffFill0Wght700Grad0Opsz48'
import IconRawOffFill1Wght100Grad0Opsz48 from '../components/RawOffFill1Wght100Grad0Opsz48'
import IconRawOffFill1Wght200Grad0Opsz48 from '../components/RawOffFill1Wght200Grad0Opsz48'
import IconRawOffFill1Wght300Grad0Opsz48 from '../components/RawOffFill1Wght300Grad0Opsz48'
import IconRawOffFill1Wght400Grad0Opsz48 from '../components/RawOffFill1Wght400Grad0Opsz48'
import IconRawOffFill1Wght500Grad0Opsz48 from '../components/RawOffFill1Wght500Grad0Opsz48'
import IconRawOffFill1Wght600Grad0Opsz48 from '../components/RawOffFill1Wght600Grad0Opsz48'
import IconRawOffFill1Wght700Grad0Opsz48 from '../components/RawOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRawOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRawOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRawOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRawOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRawOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRawOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRawOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRawOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRawOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRawOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRawOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRawOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRawOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRawOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRawOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
