import IconDepartureBoardFill0Wght100Grad0Opsz48 from '../components/DepartureBoardFill0Wght100Grad0Opsz48'
import IconDepartureBoardFill0Wght200Grad0Opsz48 from '../components/DepartureBoardFill0Wght200Grad0Opsz48'
import IconDepartureBoardFill0Wght300Grad0Opsz48 from '../components/DepartureBoardFill0Wght300Grad0Opsz48'
import IconDepartureBoardFill0Wght400Grad0Opsz48 from '../components/DepartureBoardFill0Wght400Grad0Opsz48'
import IconDepartureBoardFill0Wght500Grad0Opsz48 from '../components/DepartureBoardFill0Wght500Grad0Opsz48'
import IconDepartureBoardFill0Wght600Grad0Opsz48 from '../components/DepartureBoardFill0Wght600Grad0Opsz48'
import IconDepartureBoardFill0Wght700Grad0Opsz48 from '../components/DepartureBoardFill0Wght700Grad0Opsz48'
import IconDepartureBoardFill1Wght100Grad0Opsz48 from '../components/DepartureBoardFill1Wght100Grad0Opsz48'
import IconDepartureBoardFill1Wght200Grad0Opsz48 from '../components/DepartureBoardFill1Wght200Grad0Opsz48'
import IconDepartureBoardFill1Wght300Grad0Opsz48 from '../components/DepartureBoardFill1Wght300Grad0Opsz48'
import IconDepartureBoardFill1Wght400Grad0Opsz48 from '../components/DepartureBoardFill1Wght400Grad0Opsz48'
import IconDepartureBoardFill1Wght500Grad0Opsz48 from '../components/DepartureBoardFill1Wght500Grad0Opsz48'
import IconDepartureBoardFill1Wght600Grad0Opsz48 from '../components/DepartureBoardFill1Wght600Grad0Opsz48'
import IconDepartureBoardFill1Wght700Grad0Opsz48 from '../components/DepartureBoardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDepartureBoard = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDepartureBoardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDepartureBoardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDepartureBoardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDepartureBoardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDepartureBoardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDepartureBoardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDepartureBoardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDepartureBoardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDepartureBoardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDepartureBoardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDepartureBoardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDepartureBoardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDepartureBoardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDepartureBoardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
