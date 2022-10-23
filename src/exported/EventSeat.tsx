import IconEventSeatFill0Wght100Grad0Opsz48 from '../components/EventSeatFill0Wght100Grad0Opsz48'
import IconEventSeatFill0Wght200Grad0Opsz48 from '../components/EventSeatFill0Wght200Grad0Opsz48'
import IconEventSeatFill0Wght300Grad0Opsz48 from '../components/EventSeatFill0Wght300Grad0Opsz48'
import IconEventSeatFill0Wght400Grad0Opsz48 from '../components/EventSeatFill0Wght400Grad0Opsz48'
import IconEventSeatFill0Wght500Grad0Opsz48 from '../components/EventSeatFill0Wght500Grad0Opsz48'
import IconEventSeatFill0Wght600Grad0Opsz48 from '../components/EventSeatFill0Wght600Grad0Opsz48'
import IconEventSeatFill0Wght700Grad0Opsz48 from '../components/EventSeatFill0Wght700Grad0Opsz48'
import IconEventSeatFill1Wght100Grad0Opsz48 from '../components/EventSeatFill1Wght100Grad0Opsz48'
import IconEventSeatFill1Wght200Grad0Opsz48 from '../components/EventSeatFill1Wght200Grad0Opsz48'
import IconEventSeatFill1Wght300Grad0Opsz48 from '../components/EventSeatFill1Wght300Grad0Opsz48'
import IconEventSeatFill1Wght400Grad0Opsz48 from '../components/EventSeatFill1Wght400Grad0Opsz48'
import IconEventSeatFill1Wght500Grad0Opsz48 from '../components/EventSeatFill1Wght500Grad0Opsz48'
import IconEventSeatFill1Wght600Grad0Opsz48 from '../components/EventSeatFill1Wght600Grad0Opsz48'
import IconEventSeatFill1Wght700Grad0Opsz48 from '../components/EventSeatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEventSeat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEventSeatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEventSeatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEventSeatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEventSeatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEventSeatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEventSeatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEventSeatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEventSeatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEventSeatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEventSeatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEventSeatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEventSeatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEventSeatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEventSeatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
