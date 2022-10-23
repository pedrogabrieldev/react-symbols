import IconComputerFill0Wght100Grad0Opsz48 from '../components/ComputerFill0Wght100Grad0Opsz48'
import IconComputerFill0Wght200Grad0Opsz48 from '../components/ComputerFill0Wght200Grad0Opsz48'
import IconComputerFill0Wght300Grad0Opsz48 from '../components/ComputerFill0Wght300Grad0Opsz48'
import IconComputerFill0Wght400Grad0Opsz48 from '../components/ComputerFill0Wght400Grad0Opsz48'
import IconComputerFill0Wght500Grad0Opsz48 from '../components/ComputerFill0Wght500Grad0Opsz48'
import IconComputerFill0Wght600Grad0Opsz48 from '../components/ComputerFill0Wght600Grad0Opsz48'
import IconComputerFill0Wght700Grad0Opsz48 from '../components/ComputerFill0Wght700Grad0Opsz48'
import IconComputerFill1Wght100Grad0Opsz48 from '../components/ComputerFill1Wght100Grad0Opsz48'
import IconComputerFill1Wght200Grad0Opsz48 from '../components/ComputerFill1Wght200Grad0Opsz48'
import IconComputerFill1Wght300Grad0Opsz48 from '../components/ComputerFill1Wght300Grad0Opsz48'
import IconComputerFill1Wght400Grad0Opsz48 from '../components/ComputerFill1Wght400Grad0Opsz48'
import IconComputerFill1Wght500Grad0Opsz48 from '../components/ComputerFill1Wght500Grad0Opsz48'
import IconComputerFill1Wght600Grad0Opsz48 from '../components/ComputerFill1Wght600Grad0Opsz48'
import IconComputerFill1Wght700Grad0Opsz48 from '../components/ComputerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconComputer = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconComputerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconComputerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconComputerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconComputerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconComputerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconComputerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconComputerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconComputerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconComputerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconComputerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconComputerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconComputerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconComputerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconComputerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
