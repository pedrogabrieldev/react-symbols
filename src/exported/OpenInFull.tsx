import IconOpenInFullFill0Wght100Grad0Opsz48 from '../components/OpenInFullFill0Wght100Grad0Opsz48'
import IconOpenInFullFill0Wght200Grad0Opsz48 from '../components/OpenInFullFill0Wght200Grad0Opsz48'
import IconOpenInFullFill0Wght300Grad0Opsz48 from '../components/OpenInFullFill0Wght300Grad0Opsz48'
import IconOpenInFullFill0Wght400Grad0Opsz48 from '../components/OpenInFullFill0Wght400Grad0Opsz48'
import IconOpenInFullFill0Wght500Grad0Opsz48 from '../components/OpenInFullFill0Wght500Grad0Opsz48'
import IconOpenInFullFill0Wght600Grad0Opsz48 from '../components/OpenInFullFill0Wght600Grad0Opsz48'
import IconOpenInFullFill0Wght700Grad0Opsz48 from '../components/OpenInFullFill0Wght700Grad0Opsz48'
import IconOpenInFullFill1Wght100Grad0Opsz48 from '../components/OpenInFullFill1Wght100Grad0Opsz48'
import IconOpenInFullFill1Wght200Grad0Opsz48 from '../components/OpenInFullFill1Wght200Grad0Opsz48'
import IconOpenInFullFill1Wght300Grad0Opsz48 from '../components/OpenInFullFill1Wght300Grad0Opsz48'
import IconOpenInFullFill1Wght400Grad0Opsz48 from '../components/OpenInFullFill1Wght400Grad0Opsz48'
import IconOpenInFullFill1Wght500Grad0Opsz48 from '../components/OpenInFullFill1Wght500Grad0Opsz48'
import IconOpenInFullFill1Wght600Grad0Opsz48 from '../components/OpenInFullFill1Wght600Grad0Opsz48'
import IconOpenInFullFill1Wght700Grad0Opsz48 from '../components/OpenInFullFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOpenInFull = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOpenInFullFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOpenInFullFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOpenInFullFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOpenInFullFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOpenInFullFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOpenInFullFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOpenInFullFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOpenInFullFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOpenInFullFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOpenInFullFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOpenInFullFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOpenInFullFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOpenInFullFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOpenInFullFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
