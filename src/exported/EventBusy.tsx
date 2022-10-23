import IconEventBusyFill0Wght100Grad0Opsz48 from '../components/EventBusyFill0Wght100Grad0Opsz48'
import IconEventBusyFill0Wght200Grad0Opsz48 from '../components/EventBusyFill0Wght200Grad0Opsz48'
import IconEventBusyFill0Wght300Grad0Opsz48 from '../components/EventBusyFill0Wght300Grad0Opsz48'
import IconEventBusyFill0Wght400Grad0Opsz48 from '../components/EventBusyFill0Wght400Grad0Opsz48'
import IconEventBusyFill0Wght500Grad0Opsz48 from '../components/EventBusyFill0Wght500Grad0Opsz48'
import IconEventBusyFill0Wght600Grad0Opsz48 from '../components/EventBusyFill0Wght600Grad0Opsz48'
import IconEventBusyFill0Wght700Grad0Opsz48 from '../components/EventBusyFill0Wght700Grad0Opsz48'
import IconEventBusyFill1Wght100Grad0Opsz48 from '../components/EventBusyFill1Wght100Grad0Opsz48'
import IconEventBusyFill1Wght200Grad0Opsz48 from '../components/EventBusyFill1Wght200Grad0Opsz48'
import IconEventBusyFill1Wght300Grad0Opsz48 from '../components/EventBusyFill1Wght300Grad0Opsz48'
import IconEventBusyFill1Wght400Grad0Opsz48 from '../components/EventBusyFill1Wght400Grad0Opsz48'
import IconEventBusyFill1Wght500Grad0Opsz48 from '../components/EventBusyFill1Wght500Grad0Opsz48'
import IconEventBusyFill1Wght600Grad0Opsz48 from '../components/EventBusyFill1Wght600Grad0Opsz48'
import IconEventBusyFill1Wght700Grad0Opsz48 from '../components/EventBusyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEventBusy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEventBusyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEventBusyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEventBusyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEventBusyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEventBusyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEventBusyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEventBusyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEventBusyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEventBusyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEventBusyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEventBusyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEventBusyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEventBusyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEventBusyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
