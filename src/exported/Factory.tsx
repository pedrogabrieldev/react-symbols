import IconFactoryFill0Wght100Grad0Opsz48 from '../components/FactoryFill0Wght100Grad0Opsz48'
import IconFactoryFill0Wght200Grad0Opsz48 from '../components/FactoryFill0Wght200Grad0Opsz48'
import IconFactoryFill0Wght300Grad0Opsz48 from '../components/FactoryFill0Wght300Grad0Opsz48'
import IconFactoryFill0Wght400Grad0Opsz48 from '../components/FactoryFill0Wght400Grad0Opsz48'
import IconFactoryFill0Wght500Grad0Opsz48 from '../components/FactoryFill0Wght500Grad0Opsz48'
import IconFactoryFill0Wght600Grad0Opsz48 from '../components/FactoryFill0Wght600Grad0Opsz48'
import IconFactoryFill0Wght700Grad0Opsz48 from '../components/FactoryFill0Wght700Grad0Opsz48'
import IconFactoryFill1Wght100Grad0Opsz48 from '../components/FactoryFill1Wght100Grad0Opsz48'
import IconFactoryFill1Wght200Grad0Opsz48 from '../components/FactoryFill1Wght200Grad0Opsz48'
import IconFactoryFill1Wght300Grad0Opsz48 from '../components/FactoryFill1Wght300Grad0Opsz48'
import IconFactoryFill1Wght400Grad0Opsz48 from '../components/FactoryFill1Wght400Grad0Opsz48'
import IconFactoryFill1Wght500Grad0Opsz48 from '../components/FactoryFill1Wght500Grad0Opsz48'
import IconFactoryFill1Wght600Grad0Opsz48 from '../components/FactoryFill1Wght600Grad0Opsz48'
import IconFactoryFill1Wght700Grad0Opsz48 from '../components/FactoryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFactory = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFactoryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFactoryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFactoryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFactoryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFactoryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFactoryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFactoryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFactoryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFactoryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFactoryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFactoryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFactoryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFactoryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFactoryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
