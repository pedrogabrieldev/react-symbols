import IconExplicitFill0Wght100Grad0Opsz48 from '../components/ExplicitFill0Wght100Grad0Opsz48'
import IconExplicitFill0Wght200Grad0Opsz48 from '../components/ExplicitFill0Wght200Grad0Opsz48'
import IconExplicitFill0Wght300Grad0Opsz48 from '../components/ExplicitFill0Wght300Grad0Opsz48'
import IconExplicitFill0Wght400Grad0Opsz48 from '../components/ExplicitFill0Wght400Grad0Opsz48'
import IconExplicitFill0Wght500Grad0Opsz48 from '../components/ExplicitFill0Wght500Grad0Opsz48'
import IconExplicitFill0Wght600Grad0Opsz48 from '../components/ExplicitFill0Wght600Grad0Opsz48'
import IconExplicitFill0Wght700Grad0Opsz48 from '../components/ExplicitFill0Wght700Grad0Opsz48'
import IconExplicitFill1Wght100Grad0Opsz48 from '../components/ExplicitFill1Wght100Grad0Opsz48'
import IconExplicitFill1Wght200Grad0Opsz48 from '../components/ExplicitFill1Wght200Grad0Opsz48'
import IconExplicitFill1Wght300Grad0Opsz48 from '../components/ExplicitFill1Wght300Grad0Opsz48'
import IconExplicitFill1Wght400Grad0Opsz48 from '../components/ExplicitFill1Wght400Grad0Opsz48'
import IconExplicitFill1Wght500Grad0Opsz48 from '../components/ExplicitFill1Wght500Grad0Opsz48'
import IconExplicitFill1Wght600Grad0Opsz48 from '../components/ExplicitFill1Wght600Grad0Opsz48'
import IconExplicitFill1Wght700Grad0Opsz48 from '../components/ExplicitFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExplicit = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExplicitFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExplicitFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExplicitFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExplicitFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExplicitFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExplicitFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExplicitFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExplicitFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExplicitFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExplicitFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExplicitFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExplicitFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExplicitFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExplicitFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
