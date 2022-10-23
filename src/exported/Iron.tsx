import IconIronFill0Wght100Grad0Opsz48 from '../components/IronFill0Wght100Grad0Opsz48'
import IconIronFill0Wght200Grad0Opsz48 from '../components/IronFill0Wght200Grad0Opsz48'
import IconIronFill0Wght300Grad0Opsz48 from '../components/IronFill0Wght300Grad0Opsz48'
import IconIronFill0Wght400Grad0Opsz48 from '../components/IronFill0Wght400Grad0Opsz48'
import IconIronFill0Wght500Grad0Opsz48 from '../components/IronFill0Wght500Grad0Opsz48'
import IconIronFill0Wght600Grad0Opsz48 from '../components/IronFill0Wght600Grad0Opsz48'
import IconIronFill0Wght700Grad0Opsz48 from '../components/IronFill0Wght700Grad0Opsz48'
import IconIronFill1Wght100Grad0Opsz48 from '../components/IronFill1Wght100Grad0Opsz48'
import IconIronFill1Wght200Grad0Opsz48 from '../components/IronFill1Wght200Grad0Opsz48'
import IconIronFill1Wght300Grad0Opsz48 from '../components/IronFill1Wght300Grad0Opsz48'
import IconIronFill1Wght400Grad0Opsz48 from '../components/IronFill1Wght400Grad0Opsz48'
import IconIronFill1Wght500Grad0Opsz48 from '../components/IronFill1Wght500Grad0Opsz48'
import IconIronFill1Wght600Grad0Opsz48 from '../components/IronFill1Wght600Grad0Opsz48'
import IconIronFill1Wght700Grad0Opsz48 from '../components/IronFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconIron = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconIronFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconIronFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconIronFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconIronFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconIronFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconIronFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconIronFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconIronFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconIronFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconIronFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconIronFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconIronFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconIronFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconIronFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
