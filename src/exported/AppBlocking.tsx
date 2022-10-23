import IconAppBlockingFill0Wght100Grad0Opsz48 from '../components/AppBlockingFill0Wght100Grad0Opsz48'
import IconAppBlockingFill0Wght200Grad0Opsz48 from '../components/AppBlockingFill0Wght200Grad0Opsz48'
import IconAppBlockingFill0Wght300Grad0Opsz48 from '../components/AppBlockingFill0Wght300Grad0Opsz48'
import IconAppBlockingFill0Wght400Grad0Opsz48 from '../components/AppBlockingFill0Wght400Grad0Opsz48'
import IconAppBlockingFill0Wght500Grad0Opsz48 from '../components/AppBlockingFill0Wght500Grad0Opsz48'
import IconAppBlockingFill0Wght600Grad0Opsz48 from '../components/AppBlockingFill0Wght600Grad0Opsz48'
import IconAppBlockingFill0Wght700Grad0Opsz48 from '../components/AppBlockingFill0Wght700Grad0Opsz48'
import IconAppBlockingFill1Wght100Grad0Opsz48 from '../components/AppBlockingFill1Wght100Grad0Opsz48'
import IconAppBlockingFill1Wght200Grad0Opsz48 from '../components/AppBlockingFill1Wght200Grad0Opsz48'
import IconAppBlockingFill1Wght300Grad0Opsz48 from '../components/AppBlockingFill1Wght300Grad0Opsz48'
import IconAppBlockingFill1Wght400Grad0Opsz48 from '../components/AppBlockingFill1Wght400Grad0Opsz48'
import IconAppBlockingFill1Wght500Grad0Opsz48 from '../components/AppBlockingFill1Wght500Grad0Opsz48'
import IconAppBlockingFill1Wght600Grad0Opsz48 from '../components/AppBlockingFill1Wght600Grad0Opsz48'
import IconAppBlockingFill1Wght700Grad0Opsz48 from '../components/AppBlockingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAppBlocking = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAppBlockingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAppBlockingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAppBlockingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAppBlockingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAppBlockingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAppBlockingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAppBlockingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAppBlockingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAppBlockingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAppBlockingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAppBlockingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAppBlockingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAppBlockingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAppBlockingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
