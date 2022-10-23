import IconOpenInNewFill0Wght100Grad0Opsz48 from '../components/OpenInNewFill0Wght100Grad0Opsz48'
import IconOpenInNewFill0Wght200Grad0Opsz48 from '../components/OpenInNewFill0Wght200Grad0Opsz48'
import IconOpenInNewFill0Wght300Grad0Opsz48 from '../components/OpenInNewFill0Wght300Grad0Opsz48'
import IconOpenInNewFill0Wght400Grad0Opsz48 from '../components/OpenInNewFill0Wght400Grad0Opsz48'
import IconOpenInNewFill0Wght500Grad0Opsz48 from '../components/OpenInNewFill0Wght500Grad0Opsz48'
import IconOpenInNewFill0Wght600Grad0Opsz48 from '../components/OpenInNewFill0Wght600Grad0Opsz48'
import IconOpenInNewFill0Wght700Grad0Opsz48 from '../components/OpenInNewFill0Wght700Grad0Opsz48'
import IconOpenInNewFill1Wght100Grad0Opsz48 from '../components/OpenInNewFill1Wght100Grad0Opsz48'
import IconOpenInNewFill1Wght200Grad0Opsz48 from '../components/OpenInNewFill1Wght200Grad0Opsz48'
import IconOpenInNewFill1Wght300Grad0Opsz48 from '../components/OpenInNewFill1Wght300Grad0Opsz48'
import IconOpenInNewFill1Wght400Grad0Opsz48 from '../components/OpenInNewFill1Wght400Grad0Opsz48'
import IconOpenInNewFill1Wght500Grad0Opsz48 from '../components/OpenInNewFill1Wght500Grad0Opsz48'
import IconOpenInNewFill1Wght600Grad0Opsz48 from '../components/OpenInNewFill1Wght600Grad0Opsz48'
import IconOpenInNewFill1Wght700Grad0Opsz48 from '../components/OpenInNewFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOpenInNew = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOpenInNewFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOpenInNewFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOpenInNewFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOpenInNewFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOpenInNewFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOpenInNewFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOpenInNewFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOpenInNewFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOpenInNewFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOpenInNewFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOpenInNewFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOpenInNewFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOpenInNewFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOpenInNewFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
