import IconShareLocationFill0Wght100Grad0Opsz48 from '../components/ShareLocationFill0Wght100Grad0Opsz48'
import IconShareLocationFill0Wght200Grad0Opsz48 from '../components/ShareLocationFill0Wght200Grad0Opsz48'
import IconShareLocationFill0Wght300Grad0Opsz48 from '../components/ShareLocationFill0Wght300Grad0Opsz48'
import IconShareLocationFill0Wght400Grad0Opsz48 from '../components/ShareLocationFill0Wght400Grad0Opsz48'
import IconShareLocationFill0Wght500Grad0Opsz48 from '../components/ShareLocationFill0Wght500Grad0Opsz48'
import IconShareLocationFill0Wght600Grad0Opsz48 from '../components/ShareLocationFill0Wght600Grad0Opsz48'
import IconShareLocationFill0Wght700Grad0Opsz48 from '../components/ShareLocationFill0Wght700Grad0Opsz48'
import IconShareLocationFill1Wght100Grad0Opsz48 from '../components/ShareLocationFill1Wght100Grad0Opsz48'
import IconShareLocationFill1Wght200Grad0Opsz48 from '../components/ShareLocationFill1Wght200Grad0Opsz48'
import IconShareLocationFill1Wght300Grad0Opsz48 from '../components/ShareLocationFill1Wght300Grad0Opsz48'
import IconShareLocationFill1Wght400Grad0Opsz48 from '../components/ShareLocationFill1Wght400Grad0Opsz48'
import IconShareLocationFill1Wght500Grad0Opsz48 from '../components/ShareLocationFill1Wght500Grad0Opsz48'
import IconShareLocationFill1Wght600Grad0Opsz48 from '../components/ShareLocationFill1Wght600Grad0Opsz48'
import IconShareLocationFill1Wght700Grad0Opsz48 from '../components/ShareLocationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShareLocation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShareLocationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShareLocationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShareLocationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShareLocationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShareLocationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShareLocationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShareLocationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShareLocationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShareLocationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShareLocationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShareLocationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShareLocationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShareLocationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShareLocationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
