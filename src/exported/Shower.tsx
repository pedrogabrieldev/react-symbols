import IconShowerFill0Wght100Grad0Opsz48 from '../components/ShowerFill0Wght100Grad0Opsz48'
import IconShowerFill0Wght200Grad0Opsz48 from '../components/ShowerFill0Wght200Grad0Opsz48'
import IconShowerFill0Wght300Grad0Opsz48 from '../components/ShowerFill0Wght300Grad0Opsz48'
import IconShowerFill0Wght400Grad0Opsz48 from '../components/ShowerFill0Wght400Grad0Opsz48'
import IconShowerFill0Wght500Grad0Opsz48 from '../components/ShowerFill0Wght500Grad0Opsz48'
import IconShowerFill0Wght600Grad0Opsz48 from '../components/ShowerFill0Wght600Grad0Opsz48'
import IconShowerFill0Wght700Grad0Opsz48 from '../components/ShowerFill0Wght700Grad0Opsz48'
import IconShowerFill1Wght100Grad0Opsz48 from '../components/ShowerFill1Wght100Grad0Opsz48'
import IconShowerFill1Wght200Grad0Opsz48 from '../components/ShowerFill1Wght200Grad0Opsz48'
import IconShowerFill1Wght300Grad0Opsz48 from '../components/ShowerFill1Wght300Grad0Opsz48'
import IconShowerFill1Wght400Grad0Opsz48 from '../components/ShowerFill1Wght400Grad0Opsz48'
import IconShowerFill1Wght500Grad0Opsz48 from '../components/ShowerFill1Wght500Grad0Opsz48'
import IconShowerFill1Wght600Grad0Opsz48 from '../components/ShowerFill1Wght600Grad0Opsz48'
import IconShowerFill1Wght700Grad0Opsz48 from '../components/ShowerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShower = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShowerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShowerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShowerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShowerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShowerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShowerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShowerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShowerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShowerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShowerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShowerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShowerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShowerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShowerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
