import IconAvTimerFill0Wght100Grad0Opsz48 from '../components/AvTimerFill0Wght100Grad0Opsz48'
import IconAvTimerFill0Wght200Grad0Opsz48 from '../components/AvTimerFill0Wght200Grad0Opsz48'
import IconAvTimerFill0Wght300Grad0Opsz48 from '../components/AvTimerFill0Wght300Grad0Opsz48'
import IconAvTimerFill0Wght400Grad0Opsz48 from '../components/AvTimerFill0Wght400Grad0Opsz48'
import IconAvTimerFill0Wght500Grad0Opsz48 from '../components/AvTimerFill0Wght500Grad0Opsz48'
import IconAvTimerFill0Wght600Grad0Opsz48 from '../components/AvTimerFill0Wght600Grad0Opsz48'
import IconAvTimerFill0Wght700Grad0Opsz48 from '../components/AvTimerFill0Wght700Grad0Opsz48'
import IconAvTimerFill1Wght100Grad0Opsz48 from '../components/AvTimerFill1Wght100Grad0Opsz48'
import IconAvTimerFill1Wght200Grad0Opsz48 from '../components/AvTimerFill1Wght200Grad0Opsz48'
import IconAvTimerFill1Wght300Grad0Opsz48 from '../components/AvTimerFill1Wght300Grad0Opsz48'
import IconAvTimerFill1Wght400Grad0Opsz48 from '../components/AvTimerFill1Wght400Grad0Opsz48'
import IconAvTimerFill1Wght500Grad0Opsz48 from '../components/AvTimerFill1Wght500Grad0Opsz48'
import IconAvTimerFill1Wght600Grad0Opsz48 from '../components/AvTimerFill1Wght600Grad0Opsz48'
import IconAvTimerFill1Wght700Grad0Opsz48 from '../components/AvTimerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAvTimer = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAvTimerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAvTimerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAvTimerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAvTimerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAvTimerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAvTimerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAvTimerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAvTimerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAvTimerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAvTimerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAvTimerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAvTimerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAvTimerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAvTimerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
