import IconMopFill0Wght100Grad0Opsz48 from '../components/MopFill0Wght100Grad0Opsz48'
import IconMopFill0Wght200Grad0Opsz48 from '../components/MopFill0Wght200Grad0Opsz48'
import IconMopFill0Wght300Grad0Opsz48 from '../components/MopFill0Wght300Grad0Opsz48'
import IconMopFill0Wght400Grad0Opsz48 from '../components/MopFill0Wght400Grad0Opsz48'
import IconMopFill0Wght500Grad0Opsz48 from '../components/MopFill0Wght500Grad0Opsz48'
import IconMopFill0Wght600Grad0Opsz48 from '../components/MopFill0Wght600Grad0Opsz48'
import IconMopFill0Wght700Grad0Opsz48 from '../components/MopFill0Wght700Grad0Opsz48'
import IconMopFill1Wght100Grad0Opsz48 from '../components/MopFill1Wght100Grad0Opsz48'
import IconMopFill1Wght200Grad0Opsz48 from '../components/MopFill1Wght200Grad0Opsz48'
import IconMopFill1Wght300Grad0Opsz48 from '../components/MopFill1Wght300Grad0Opsz48'
import IconMopFill1Wght400Grad0Opsz48 from '../components/MopFill1Wght400Grad0Opsz48'
import IconMopFill1Wght500Grad0Opsz48 from '../components/MopFill1Wght500Grad0Opsz48'
import IconMopFill1Wght600Grad0Opsz48 from '../components/MopFill1Wght600Grad0Opsz48'
import IconMopFill1Wght700Grad0Opsz48 from '../components/MopFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMop = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMopFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMopFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMopFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMopFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMopFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMopFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMopFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMopFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMopFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMopFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMopFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMopFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMopFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMopFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
