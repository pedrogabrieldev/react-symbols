import IconStreamFill0Wght100Grad0Opsz48 from '../components/StreamFill0Wght100Grad0Opsz48'
import IconStreamFill0Wght200Grad0Opsz48 from '../components/StreamFill0Wght200Grad0Opsz48'
import IconStreamFill0Wght300Grad0Opsz48 from '../components/StreamFill0Wght300Grad0Opsz48'
import IconStreamFill0Wght400Grad0Opsz48 from '../components/StreamFill0Wght400Grad0Opsz48'
import IconStreamFill0Wght500Grad0Opsz48 from '../components/StreamFill0Wght500Grad0Opsz48'
import IconStreamFill0Wght600Grad0Opsz48 from '../components/StreamFill0Wght600Grad0Opsz48'
import IconStreamFill0Wght700Grad0Opsz48 from '../components/StreamFill0Wght700Grad0Opsz48'
import IconStreamFill1Wght100Grad0Opsz48 from '../components/StreamFill1Wght100Grad0Opsz48'
import IconStreamFill1Wght200Grad0Opsz48 from '../components/StreamFill1Wght200Grad0Opsz48'
import IconStreamFill1Wght300Grad0Opsz48 from '../components/StreamFill1Wght300Grad0Opsz48'
import IconStreamFill1Wght400Grad0Opsz48 from '../components/StreamFill1Wght400Grad0Opsz48'
import IconStreamFill1Wght500Grad0Opsz48 from '../components/StreamFill1Wght500Grad0Opsz48'
import IconStreamFill1Wght600Grad0Opsz48 from '../components/StreamFill1Wght600Grad0Opsz48'
import IconStreamFill1Wght700Grad0Opsz48 from '../components/StreamFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStream = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStreamFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStreamFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStreamFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStreamFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStreamFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStreamFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStreamFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStreamFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStreamFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStreamFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStreamFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStreamFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStreamFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStreamFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
