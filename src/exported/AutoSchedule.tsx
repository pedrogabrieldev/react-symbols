import IconAutoScheduleFill0Wght100Grad0Opsz48 from '../components/AutoScheduleFill0Wght100Grad0Opsz48'
import IconAutoScheduleFill0Wght200Grad0Opsz48 from '../components/AutoScheduleFill0Wght200Grad0Opsz48'
import IconAutoScheduleFill0Wght300Grad0Opsz48 from '../components/AutoScheduleFill0Wght300Grad0Opsz48'
import IconAutoScheduleFill0Wght400Grad0Opsz48 from '../components/AutoScheduleFill0Wght400Grad0Opsz48'
import IconAutoScheduleFill0Wght500Grad0Opsz48 from '../components/AutoScheduleFill0Wght500Grad0Opsz48'
import IconAutoScheduleFill0Wght600Grad0Opsz48 from '../components/AutoScheduleFill0Wght600Grad0Opsz48'
import IconAutoScheduleFill0Wght700Grad0Opsz48 from '../components/AutoScheduleFill0Wght700Grad0Opsz48'
import IconAutoScheduleFill1Wght100Grad0Opsz48 from '../components/AutoScheduleFill1Wght100Grad0Opsz48'
import IconAutoScheduleFill1Wght200Grad0Opsz48 from '../components/AutoScheduleFill1Wght200Grad0Opsz48'
import IconAutoScheduleFill1Wght300Grad0Opsz48 from '../components/AutoScheduleFill1Wght300Grad0Opsz48'
import IconAutoScheduleFill1Wght400Grad0Opsz48 from '../components/AutoScheduleFill1Wght400Grad0Opsz48'
import IconAutoScheduleFill1Wght500Grad0Opsz48 from '../components/AutoScheduleFill1Wght500Grad0Opsz48'
import IconAutoScheduleFill1Wght600Grad0Opsz48 from '../components/AutoScheduleFill1Wght600Grad0Opsz48'
import IconAutoScheduleFill1Wght700Grad0Opsz48 from '../components/AutoScheduleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoSchedule = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoScheduleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoScheduleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoScheduleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoScheduleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoScheduleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoScheduleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoScheduleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoScheduleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoScheduleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoScheduleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoScheduleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoScheduleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoScheduleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoScheduleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
