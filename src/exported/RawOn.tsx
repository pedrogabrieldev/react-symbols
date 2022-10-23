import IconRawOnFill0Wght100Grad0Opsz48 from '../components/RawOnFill0Wght100Grad0Opsz48'
import IconRawOnFill0Wght200Grad0Opsz48 from '../components/RawOnFill0Wght200Grad0Opsz48'
import IconRawOnFill0Wght300Grad0Opsz48 from '../components/RawOnFill0Wght300Grad0Opsz48'
import IconRawOnFill0Wght400Grad0Opsz48 from '../components/RawOnFill0Wght400Grad0Opsz48'
import IconRawOnFill0Wght500Grad0Opsz48 from '../components/RawOnFill0Wght500Grad0Opsz48'
import IconRawOnFill0Wght600Grad0Opsz48 from '../components/RawOnFill0Wght600Grad0Opsz48'
import IconRawOnFill0Wght700Grad0Opsz48 from '../components/RawOnFill0Wght700Grad0Opsz48'
import IconRawOnFill1Wght100Grad0Opsz48 from '../components/RawOnFill1Wght100Grad0Opsz48'
import IconRawOnFill1Wght200Grad0Opsz48 from '../components/RawOnFill1Wght200Grad0Opsz48'
import IconRawOnFill1Wght300Grad0Opsz48 from '../components/RawOnFill1Wght300Grad0Opsz48'
import IconRawOnFill1Wght400Grad0Opsz48 from '../components/RawOnFill1Wght400Grad0Opsz48'
import IconRawOnFill1Wght500Grad0Opsz48 from '../components/RawOnFill1Wght500Grad0Opsz48'
import IconRawOnFill1Wght600Grad0Opsz48 from '../components/RawOnFill1Wght600Grad0Opsz48'
import IconRawOnFill1Wght700Grad0Opsz48 from '../components/RawOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRawOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRawOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRawOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRawOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRawOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRawOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRawOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRawOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRawOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRawOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRawOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRawOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRawOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRawOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRawOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
