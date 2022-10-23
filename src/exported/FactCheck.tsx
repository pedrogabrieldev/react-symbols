import IconFactCheckFill0Wght100Grad0Opsz48 from '../components/FactCheckFill0Wght100Grad0Opsz48'
import IconFactCheckFill0Wght200Grad0Opsz48 from '../components/FactCheckFill0Wght200Grad0Opsz48'
import IconFactCheckFill0Wght300Grad0Opsz48 from '../components/FactCheckFill0Wght300Grad0Opsz48'
import IconFactCheckFill0Wght400Grad0Opsz48 from '../components/FactCheckFill0Wght400Grad0Opsz48'
import IconFactCheckFill0Wght500Grad0Opsz48 from '../components/FactCheckFill0Wght500Grad0Opsz48'
import IconFactCheckFill0Wght600Grad0Opsz48 from '../components/FactCheckFill0Wght600Grad0Opsz48'
import IconFactCheckFill0Wght700Grad0Opsz48 from '../components/FactCheckFill0Wght700Grad0Opsz48'
import IconFactCheckFill1Wght100Grad0Opsz48 from '../components/FactCheckFill1Wght100Grad0Opsz48'
import IconFactCheckFill1Wght200Grad0Opsz48 from '../components/FactCheckFill1Wght200Grad0Opsz48'
import IconFactCheckFill1Wght300Grad0Opsz48 from '../components/FactCheckFill1Wght300Grad0Opsz48'
import IconFactCheckFill1Wght400Grad0Opsz48 from '../components/FactCheckFill1Wght400Grad0Opsz48'
import IconFactCheckFill1Wght500Grad0Opsz48 from '../components/FactCheckFill1Wght500Grad0Opsz48'
import IconFactCheckFill1Wght600Grad0Opsz48 from '../components/FactCheckFill1Wght600Grad0Opsz48'
import IconFactCheckFill1Wght700Grad0Opsz48 from '../components/FactCheckFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFactCheck = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFactCheckFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFactCheckFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFactCheckFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFactCheckFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFactCheckFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFactCheckFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFactCheckFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFactCheckFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFactCheckFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFactCheckFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFactCheckFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFactCheckFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFactCheckFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFactCheckFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
