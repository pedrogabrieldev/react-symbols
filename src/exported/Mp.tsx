import IconMpFill0Wght100Grad0Opsz48 from '../components/MpFill0Wght100Grad0Opsz48'
import IconMpFill0Wght200Grad0Opsz48 from '../components/MpFill0Wght200Grad0Opsz48'
import IconMpFill0Wght300Grad0Opsz48 from '../components/MpFill0Wght300Grad0Opsz48'
import IconMpFill0Wght400Grad0Opsz48 from '../components/MpFill0Wght400Grad0Opsz48'
import IconMpFill0Wght500Grad0Opsz48 from '../components/MpFill0Wght500Grad0Opsz48'
import IconMpFill0Wght600Grad0Opsz48 from '../components/MpFill0Wght600Grad0Opsz48'
import IconMpFill0Wght700Grad0Opsz48 from '../components/MpFill0Wght700Grad0Opsz48'
import IconMpFill1Wght100Grad0Opsz48 from '../components/MpFill1Wght100Grad0Opsz48'
import IconMpFill1Wght200Grad0Opsz48 from '../components/MpFill1Wght200Grad0Opsz48'
import IconMpFill1Wght300Grad0Opsz48 from '../components/MpFill1Wght300Grad0Opsz48'
import IconMpFill1Wght400Grad0Opsz48 from '../components/MpFill1Wght400Grad0Opsz48'
import IconMpFill1Wght500Grad0Opsz48 from '../components/MpFill1Wght500Grad0Opsz48'
import IconMpFill1Wght600Grad0Opsz48 from '../components/MpFill1Wght600Grad0Opsz48'
import IconMpFill1Wght700Grad0Opsz48 from '../components/MpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
