import IconNoCrashFill0Wght100Grad0Opsz48 from '../components/NoCrashFill0Wght100Grad0Opsz48'
import IconNoCrashFill0Wght200Grad0Opsz48 from '../components/NoCrashFill0Wght200Grad0Opsz48'
import IconNoCrashFill0Wght300Grad0Opsz48 from '../components/NoCrashFill0Wght300Grad0Opsz48'
import IconNoCrashFill0Wght400Grad0Opsz48 from '../components/NoCrashFill0Wght400Grad0Opsz48'
import IconNoCrashFill0Wght500Grad0Opsz48 from '../components/NoCrashFill0Wght500Grad0Opsz48'
import IconNoCrashFill0Wght600Grad0Opsz48 from '../components/NoCrashFill0Wght600Grad0Opsz48'
import IconNoCrashFill0Wght700Grad0Opsz48 from '../components/NoCrashFill0Wght700Grad0Opsz48'
import IconNoCrashFill1Wght100Grad0Opsz48 from '../components/NoCrashFill1Wght100Grad0Opsz48'
import IconNoCrashFill1Wght200Grad0Opsz48 from '../components/NoCrashFill1Wght200Grad0Opsz48'
import IconNoCrashFill1Wght300Grad0Opsz48 from '../components/NoCrashFill1Wght300Grad0Opsz48'
import IconNoCrashFill1Wght400Grad0Opsz48 from '../components/NoCrashFill1Wght400Grad0Opsz48'
import IconNoCrashFill1Wght500Grad0Opsz48 from '../components/NoCrashFill1Wght500Grad0Opsz48'
import IconNoCrashFill1Wght600Grad0Opsz48 from '../components/NoCrashFill1Wght600Grad0Opsz48'
import IconNoCrashFill1Wght700Grad0Opsz48 from '../components/NoCrashFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoCrash = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoCrashFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoCrashFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoCrashFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoCrashFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoCrashFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoCrashFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoCrashFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoCrashFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoCrashFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoCrashFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoCrashFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoCrashFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoCrashFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoCrashFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
