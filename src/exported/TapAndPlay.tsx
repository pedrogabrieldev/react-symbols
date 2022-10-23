import IconTapAndPlayFill0Wght100Grad0Opsz48 from '../components/TapAndPlayFill0Wght100Grad0Opsz48'
import IconTapAndPlayFill0Wght200Grad0Opsz48 from '../components/TapAndPlayFill0Wght200Grad0Opsz48'
import IconTapAndPlayFill0Wght300Grad0Opsz48 from '../components/TapAndPlayFill0Wght300Grad0Opsz48'
import IconTapAndPlayFill0Wght400Grad0Opsz48 from '../components/TapAndPlayFill0Wght400Grad0Opsz48'
import IconTapAndPlayFill0Wght500Grad0Opsz48 from '../components/TapAndPlayFill0Wght500Grad0Opsz48'
import IconTapAndPlayFill0Wght600Grad0Opsz48 from '../components/TapAndPlayFill0Wght600Grad0Opsz48'
import IconTapAndPlayFill0Wght700Grad0Opsz48 from '../components/TapAndPlayFill0Wght700Grad0Opsz48'
import IconTapAndPlayFill1Wght100Grad0Opsz48 from '../components/TapAndPlayFill1Wght100Grad0Opsz48'
import IconTapAndPlayFill1Wght200Grad0Opsz48 from '../components/TapAndPlayFill1Wght200Grad0Opsz48'
import IconTapAndPlayFill1Wght300Grad0Opsz48 from '../components/TapAndPlayFill1Wght300Grad0Opsz48'
import IconTapAndPlayFill1Wght400Grad0Opsz48 from '../components/TapAndPlayFill1Wght400Grad0Opsz48'
import IconTapAndPlayFill1Wght500Grad0Opsz48 from '../components/TapAndPlayFill1Wght500Grad0Opsz48'
import IconTapAndPlayFill1Wght600Grad0Opsz48 from '../components/TapAndPlayFill1Wght600Grad0Opsz48'
import IconTapAndPlayFill1Wght700Grad0Opsz48 from '../components/TapAndPlayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTapAndPlay = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTapAndPlayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTapAndPlayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTapAndPlayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTapAndPlayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTapAndPlayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTapAndPlayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTapAndPlayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTapAndPlayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTapAndPlayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTapAndPlayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTapAndPlayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTapAndPlayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTapAndPlayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTapAndPlayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
