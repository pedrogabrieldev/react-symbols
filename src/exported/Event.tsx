import IconEventFill0Wght100Grad0Opsz48 from '../components/EventFill0Wght100Grad0Opsz48'
import IconEventFill0Wght200Grad0Opsz48 from '../components/EventFill0Wght200Grad0Opsz48'
import IconEventFill0Wght300Grad0Opsz48 from '../components/EventFill0Wght300Grad0Opsz48'
import IconEventFill0Wght400Grad0Opsz48 from '../components/EventFill0Wght400Grad0Opsz48'
import IconEventFill0Wght500Grad0Opsz48 from '../components/EventFill0Wght500Grad0Opsz48'
import IconEventFill0Wght600Grad0Opsz48 from '../components/EventFill0Wght600Grad0Opsz48'
import IconEventFill0Wght700Grad0Opsz48 from '../components/EventFill0Wght700Grad0Opsz48'
import IconEventFill1Wght100Grad0Opsz48 from '../components/EventFill1Wght100Grad0Opsz48'
import IconEventFill1Wght200Grad0Opsz48 from '../components/EventFill1Wght200Grad0Opsz48'
import IconEventFill1Wght300Grad0Opsz48 from '../components/EventFill1Wght300Grad0Opsz48'
import IconEventFill1Wght400Grad0Opsz48 from '../components/EventFill1Wght400Grad0Opsz48'
import IconEventFill1Wght500Grad0Opsz48 from '../components/EventFill1Wght500Grad0Opsz48'
import IconEventFill1Wght600Grad0Opsz48 from '../components/EventFill1Wght600Grad0Opsz48'
import IconEventFill1Wght700Grad0Opsz48 from '../components/EventFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEvent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEventFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEventFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEventFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEventFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEventFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEventFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEventFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEventFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEventFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEventFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEventFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEventFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEventFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEventFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
