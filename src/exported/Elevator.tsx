import IconElevatorFill0Wght100Grad0Opsz48 from '../components/ElevatorFill0Wght100Grad0Opsz48'
import IconElevatorFill0Wght200Grad0Opsz48 from '../components/ElevatorFill0Wght200Grad0Opsz48'
import IconElevatorFill0Wght300Grad0Opsz48 from '../components/ElevatorFill0Wght300Grad0Opsz48'
import IconElevatorFill0Wght400Grad0Opsz48 from '../components/ElevatorFill0Wght400Grad0Opsz48'
import IconElevatorFill0Wght500Grad0Opsz48 from '../components/ElevatorFill0Wght500Grad0Opsz48'
import IconElevatorFill0Wght600Grad0Opsz48 from '../components/ElevatorFill0Wght600Grad0Opsz48'
import IconElevatorFill0Wght700Grad0Opsz48 from '../components/ElevatorFill0Wght700Grad0Opsz48'
import IconElevatorFill1Wght100Grad0Opsz48 from '../components/ElevatorFill1Wght100Grad0Opsz48'
import IconElevatorFill1Wght200Grad0Opsz48 from '../components/ElevatorFill1Wght200Grad0Opsz48'
import IconElevatorFill1Wght300Grad0Opsz48 from '../components/ElevatorFill1Wght300Grad0Opsz48'
import IconElevatorFill1Wght400Grad0Opsz48 from '../components/ElevatorFill1Wght400Grad0Opsz48'
import IconElevatorFill1Wght500Grad0Opsz48 from '../components/ElevatorFill1Wght500Grad0Opsz48'
import IconElevatorFill1Wght600Grad0Opsz48 from '../components/ElevatorFill1Wght600Grad0Opsz48'
import IconElevatorFill1Wght700Grad0Opsz48 from '../components/ElevatorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconElevator = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconElevatorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconElevatorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconElevatorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconElevatorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconElevatorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconElevatorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconElevatorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconElevatorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconElevatorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconElevatorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconElevatorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconElevatorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconElevatorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconElevatorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
