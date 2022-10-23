import IconMulticookerFill0Wght100Grad0Opsz48 from '../components/MulticookerFill0Wght100Grad0Opsz48'
import IconMulticookerFill0Wght200Grad0Opsz48 from '../components/MulticookerFill0Wght200Grad0Opsz48'
import IconMulticookerFill0Wght300Grad0Opsz48 from '../components/MulticookerFill0Wght300Grad0Opsz48'
import IconMulticookerFill0Wght400Grad0Opsz48 from '../components/MulticookerFill0Wght400Grad0Opsz48'
import IconMulticookerFill0Wght500Grad0Opsz48 from '../components/MulticookerFill0Wght500Grad0Opsz48'
import IconMulticookerFill0Wght600Grad0Opsz48 from '../components/MulticookerFill0Wght600Grad0Opsz48'
import IconMulticookerFill0Wght700Grad0Opsz48 from '../components/MulticookerFill0Wght700Grad0Opsz48'
import IconMulticookerFill1Wght100Grad0Opsz48 from '../components/MulticookerFill1Wght100Grad0Opsz48'
import IconMulticookerFill1Wght200Grad0Opsz48 from '../components/MulticookerFill1Wght200Grad0Opsz48'
import IconMulticookerFill1Wght300Grad0Opsz48 from '../components/MulticookerFill1Wght300Grad0Opsz48'
import IconMulticookerFill1Wght400Grad0Opsz48 from '../components/MulticookerFill1Wght400Grad0Opsz48'
import IconMulticookerFill1Wght500Grad0Opsz48 from '../components/MulticookerFill1Wght500Grad0Opsz48'
import IconMulticookerFill1Wght600Grad0Opsz48 from '../components/MulticookerFill1Wght600Grad0Opsz48'
import IconMulticookerFill1Wght700Grad0Opsz48 from '../components/MulticookerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMulticooker = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMulticookerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMulticookerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMulticookerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMulticookerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMulticookerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMulticookerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMulticookerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMulticookerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMulticookerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMulticookerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMulticookerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMulticookerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMulticookerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMulticookerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
