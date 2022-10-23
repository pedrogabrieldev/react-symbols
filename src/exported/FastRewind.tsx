import IconFastRewindFill0Wght100Grad0Opsz48 from '../components/FastRewindFill0Wght100Grad0Opsz48'
import IconFastRewindFill0Wght200Grad0Opsz48 from '../components/FastRewindFill0Wght200Grad0Opsz48'
import IconFastRewindFill0Wght300Grad0Opsz48 from '../components/FastRewindFill0Wght300Grad0Opsz48'
import IconFastRewindFill0Wght400Grad0Opsz48 from '../components/FastRewindFill0Wght400Grad0Opsz48'
import IconFastRewindFill0Wght500Grad0Opsz48 from '../components/FastRewindFill0Wght500Grad0Opsz48'
import IconFastRewindFill0Wght600Grad0Opsz48 from '../components/FastRewindFill0Wght600Grad0Opsz48'
import IconFastRewindFill0Wght700Grad0Opsz48 from '../components/FastRewindFill0Wght700Grad0Opsz48'
import IconFastRewindFill1Wght100Grad0Opsz48 from '../components/FastRewindFill1Wght100Grad0Opsz48'
import IconFastRewindFill1Wght200Grad0Opsz48 from '../components/FastRewindFill1Wght200Grad0Opsz48'
import IconFastRewindFill1Wght300Grad0Opsz48 from '../components/FastRewindFill1Wght300Grad0Opsz48'
import IconFastRewindFill1Wght400Grad0Opsz48 from '../components/FastRewindFill1Wght400Grad0Opsz48'
import IconFastRewindFill1Wght500Grad0Opsz48 from '../components/FastRewindFill1Wght500Grad0Opsz48'
import IconFastRewindFill1Wght600Grad0Opsz48 from '../components/FastRewindFill1Wght600Grad0Opsz48'
import IconFastRewindFill1Wght700Grad0Opsz48 from '../components/FastRewindFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFastRewind = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFastRewindFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFastRewindFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFastRewindFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFastRewindFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFastRewindFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFastRewindFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFastRewindFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFastRewindFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFastRewindFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFastRewindFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFastRewindFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFastRewindFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFastRewindFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFastRewindFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
