import IconCarCrashFill0Wght100Grad0Opsz48 from '../components/CarCrashFill0Wght100Grad0Opsz48'
import IconCarCrashFill0Wght200Grad0Opsz48 from '../components/CarCrashFill0Wght200Grad0Opsz48'
import IconCarCrashFill0Wght300Grad0Opsz48 from '../components/CarCrashFill0Wght300Grad0Opsz48'
import IconCarCrashFill0Wght400Grad0Opsz48 from '../components/CarCrashFill0Wght400Grad0Opsz48'
import IconCarCrashFill0Wght500Grad0Opsz48 from '../components/CarCrashFill0Wght500Grad0Opsz48'
import IconCarCrashFill0Wght600Grad0Opsz48 from '../components/CarCrashFill0Wght600Grad0Opsz48'
import IconCarCrashFill0Wght700Grad0Opsz48 from '../components/CarCrashFill0Wght700Grad0Opsz48'
import IconCarCrashFill1Wght100Grad0Opsz48 from '../components/CarCrashFill1Wght100Grad0Opsz48'
import IconCarCrashFill1Wght200Grad0Opsz48 from '../components/CarCrashFill1Wght200Grad0Opsz48'
import IconCarCrashFill1Wght300Grad0Opsz48 from '../components/CarCrashFill1Wght300Grad0Opsz48'
import IconCarCrashFill1Wght400Grad0Opsz48 from '../components/CarCrashFill1Wght400Grad0Opsz48'
import IconCarCrashFill1Wght500Grad0Opsz48 from '../components/CarCrashFill1Wght500Grad0Opsz48'
import IconCarCrashFill1Wght600Grad0Opsz48 from '../components/CarCrashFill1Wght600Grad0Opsz48'
import IconCarCrashFill1Wght700Grad0Opsz48 from '../components/CarCrashFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCarCrash = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCarCrashFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCarCrashFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCarCrashFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCarCrashFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCarCrashFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCarCrashFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCarCrashFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCarCrashFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCarCrashFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCarCrashFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCarCrashFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCarCrashFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCarCrashFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCarCrashFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
