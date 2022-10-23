import IconMinorCrashFill0Wght100Grad0Opsz48 from '../components/MinorCrashFill0Wght100Grad0Opsz48'
import IconMinorCrashFill0Wght200Grad0Opsz48 from '../components/MinorCrashFill0Wght200Grad0Opsz48'
import IconMinorCrashFill0Wght300Grad0Opsz48 from '../components/MinorCrashFill0Wght300Grad0Opsz48'
import IconMinorCrashFill0Wght400Grad0Opsz48 from '../components/MinorCrashFill0Wght400Grad0Opsz48'
import IconMinorCrashFill0Wght500Grad0Opsz48 from '../components/MinorCrashFill0Wght500Grad0Opsz48'
import IconMinorCrashFill0Wght600Grad0Opsz48 from '../components/MinorCrashFill0Wght600Grad0Opsz48'
import IconMinorCrashFill0Wght700Grad0Opsz48 from '../components/MinorCrashFill0Wght700Grad0Opsz48'
import IconMinorCrashFill1Wght100Grad0Opsz48 from '../components/MinorCrashFill1Wght100Grad0Opsz48'
import IconMinorCrashFill1Wght200Grad0Opsz48 from '../components/MinorCrashFill1Wght200Grad0Opsz48'
import IconMinorCrashFill1Wght300Grad0Opsz48 from '../components/MinorCrashFill1Wght300Grad0Opsz48'
import IconMinorCrashFill1Wght400Grad0Opsz48 from '../components/MinorCrashFill1Wght400Grad0Opsz48'
import IconMinorCrashFill1Wght500Grad0Opsz48 from '../components/MinorCrashFill1Wght500Grad0Opsz48'
import IconMinorCrashFill1Wght600Grad0Opsz48 from '../components/MinorCrashFill1Wght600Grad0Opsz48'
import IconMinorCrashFill1Wght700Grad0Opsz48 from '../components/MinorCrashFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMinorCrash = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMinorCrashFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMinorCrashFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMinorCrashFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMinorCrashFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMinorCrashFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMinorCrashFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMinorCrashFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMinorCrashFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMinorCrashFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMinorCrashFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMinorCrashFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMinorCrashFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMinorCrashFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMinorCrashFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
