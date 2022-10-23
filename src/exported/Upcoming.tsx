import IconUpcomingFill0Wght100Grad0Opsz48 from '../components/UpcomingFill0Wght100Grad0Opsz48'
import IconUpcomingFill0Wght200Grad0Opsz48 from '../components/UpcomingFill0Wght200Grad0Opsz48'
import IconUpcomingFill0Wght300Grad0Opsz48 from '../components/UpcomingFill0Wght300Grad0Opsz48'
import IconUpcomingFill0Wght400Grad0Opsz48 from '../components/UpcomingFill0Wght400Grad0Opsz48'
import IconUpcomingFill0Wght500Grad0Opsz48 from '../components/UpcomingFill0Wght500Grad0Opsz48'
import IconUpcomingFill0Wght600Grad0Opsz48 from '../components/UpcomingFill0Wght600Grad0Opsz48'
import IconUpcomingFill0Wght700Grad0Opsz48 from '../components/UpcomingFill0Wght700Grad0Opsz48'
import IconUpcomingFill1Wght100Grad0Opsz48 from '../components/UpcomingFill1Wght100Grad0Opsz48'
import IconUpcomingFill1Wght200Grad0Opsz48 from '../components/UpcomingFill1Wght200Grad0Opsz48'
import IconUpcomingFill1Wght300Grad0Opsz48 from '../components/UpcomingFill1Wght300Grad0Opsz48'
import IconUpcomingFill1Wght400Grad0Opsz48 from '../components/UpcomingFill1Wght400Grad0Opsz48'
import IconUpcomingFill1Wght500Grad0Opsz48 from '../components/UpcomingFill1Wght500Grad0Opsz48'
import IconUpcomingFill1Wght600Grad0Opsz48 from '../components/UpcomingFill1Wght600Grad0Opsz48'
import IconUpcomingFill1Wght700Grad0Opsz48 from '../components/UpcomingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUpcoming = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUpcomingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUpcomingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUpcomingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUpcomingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUpcomingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUpcomingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUpcomingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUpcomingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUpcomingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUpcomingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUpcomingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUpcomingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUpcomingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUpcomingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
