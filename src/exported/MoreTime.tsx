import IconMoreTimeFill0Wght100Grad0Opsz48 from '../components/MoreTimeFill0Wght100Grad0Opsz48'
import IconMoreTimeFill0Wght200Grad0Opsz48 from '../components/MoreTimeFill0Wght200Grad0Opsz48'
import IconMoreTimeFill0Wght300Grad0Opsz48 from '../components/MoreTimeFill0Wght300Grad0Opsz48'
import IconMoreTimeFill0Wght400Grad0Opsz48 from '../components/MoreTimeFill0Wght400Grad0Opsz48'
import IconMoreTimeFill0Wght500Grad0Opsz48 from '../components/MoreTimeFill0Wght500Grad0Opsz48'
import IconMoreTimeFill0Wght600Grad0Opsz48 from '../components/MoreTimeFill0Wght600Grad0Opsz48'
import IconMoreTimeFill0Wght700Grad0Opsz48 from '../components/MoreTimeFill0Wght700Grad0Opsz48'
import IconMoreTimeFill1Wght100Grad0Opsz48 from '../components/MoreTimeFill1Wght100Grad0Opsz48'
import IconMoreTimeFill1Wght200Grad0Opsz48 from '../components/MoreTimeFill1Wght200Grad0Opsz48'
import IconMoreTimeFill1Wght300Grad0Opsz48 from '../components/MoreTimeFill1Wght300Grad0Opsz48'
import IconMoreTimeFill1Wght400Grad0Opsz48 from '../components/MoreTimeFill1Wght400Grad0Opsz48'
import IconMoreTimeFill1Wght500Grad0Opsz48 from '../components/MoreTimeFill1Wght500Grad0Opsz48'
import IconMoreTimeFill1Wght600Grad0Opsz48 from '../components/MoreTimeFill1Wght600Grad0Opsz48'
import IconMoreTimeFill1Wght700Grad0Opsz48 from '../components/MoreTimeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMoreTime = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMoreTimeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMoreTimeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMoreTimeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMoreTimeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMoreTimeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMoreTimeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMoreTimeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMoreTimeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMoreTimeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMoreTimeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMoreTimeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMoreTimeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMoreTimeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMoreTimeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
