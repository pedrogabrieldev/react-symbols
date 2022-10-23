import IconEventUpcomingFill0Wght100Grad0Opsz48 from '../components/EventUpcomingFill0Wght100Grad0Opsz48'
import IconEventUpcomingFill0Wght200Grad0Opsz48 from '../components/EventUpcomingFill0Wght200Grad0Opsz48'
import IconEventUpcomingFill0Wght300Grad0Opsz48 from '../components/EventUpcomingFill0Wght300Grad0Opsz48'
import IconEventUpcomingFill0Wght400Grad0Opsz48 from '../components/EventUpcomingFill0Wght400Grad0Opsz48'
import IconEventUpcomingFill0Wght500Grad0Opsz48 from '../components/EventUpcomingFill0Wght500Grad0Opsz48'
import IconEventUpcomingFill0Wght600Grad0Opsz48 from '../components/EventUpcomingFill0Wght600Grad0Opsz48'
import IconEventUpcomingFill0Wght700Grad0Opsz48 from '../components/EventUpcomingFill0Wght700Grad0Opsz48'
import IconEventUpcomingFill1Wght100Grad0Opsz48 from '../components/EventUpcomingFill1Wght100Grad0Opsz48'
import IconEventUpcomingFill1Wght200Grad0Opsz48 from '../components/EventUpcomingFill1Wght200Grad0Opsz48'
import IconEventUpcomingFill1Wght300Grad0Opsz48 from '../components/EventUpcomingFill1Wght300Grad0Opsz48'
import IconEventUpcomingFill1Wght400Grad0Opsz48 from '../components/EventUpcomingFill1Wght400Grad0Opsz48'
import IconEventUpcomingFill1Wght500Grad0Opsz48 from '../components/EventUpcomingFill1Wght500Grad0Opsz48'
import IconEventUpcomingFill1Wght600Grad0Opsz48 from '../components/EventUpcomingFill1Wght600Grad0Opsz48'
import IconEventUpcomingFill1Wght700Grad0Opsz48 from '../components/EventUpcomingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEventUpcoming = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEventUpcomingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEventUpcomingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEventUpcomingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEventUpcomingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEventUpcomingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEventUpcomingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEventUpcomingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEventUpcomingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEventUpcomingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEventUpcomingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEventUpcomingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEventUpcomingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEventUpcomingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEventUpcomingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
