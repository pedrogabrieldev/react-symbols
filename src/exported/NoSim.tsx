import IconNoSimFill0Wght100Grad0Opsz48 from '../components/NoSimFill0Wght100Grad0Opsz48'
import IconNoSimFill0Wght200Grad0Opsz48 from '../components/NoSimFill0Wght200Grad0Opsz48'
import IconNoSimFill0Wght300Grad0Opsz48 from '../components/NoSimFill0Wght300Grad0Opsz48'
import IconNoSimFill0Wght400Grad0Opsz48 from '../components/NoSimFill0Wght400Grad0Opsz48'
import IconNoSimFill0Wght500Grad0Opsz48 from '../components/NoSimFill0Wght500Grad0Opsz48'
import IconNoSimFill0Wght600Grad0Opsz48 from '../components/NoSimFill0Wght600Grad0Opsz48'
import IconNoSimFill0Wght700Grad0Opsz48 from '../components/NoSimFill0Wght700Grad0Opsz48'
import IconNoSimFill1Wght100Grad0Opsz48 from '../components/NoSimFill1Wght100Grad0Opsz48'
import IconNoSimFill1Wght200Grad0Opsz48 from '../components/NoSimFill1Wght200Grad0Opsz48'
import IconNoSimFill1Wght300Grad0Opsz48 from '../components/NoSimFill1Wght300Grad0Opsz48'
import IconNoSimFill1Wght400Grad0Opsz48 from '../components/NoSimFill1Wght400Grad0Opsz48'
import IconNoSimFill1Wght500Grad0Opsz48 from '../components/NoSimFill1Wght500Grad0Opsz48'
import IconNoSimFill1Wght600Grad0Opsz48 from '../components/NoSimFill1Wght600Grad0Opsz48'
import IconNoSimFill1Wght700Grad0Opsz48 from '../components/NoSimFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoSim = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoSimFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoSimFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoSimFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoSimFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoSimFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoSimFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoSimFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoSimFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoSimFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoSimFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoSimFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoSimFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoSimFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoSimFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
