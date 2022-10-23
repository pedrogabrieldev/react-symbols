import IconAgenderFill0Wght100Grad0Opsz48 from '../components/AgenderFill0Wght100Grad0Opsz48'
import IconAgenderFill0Wght200Grad0Opsz48 from '../components/AgenderFill0Wght200Grad0Opsz48'
import IconAgenderFill0Wght300Grad0Opsz48 from '../components/AgenderFill0Wght300Grad0Opsz48'
import IconAgenderFill0Wght400Grad0Opsz48 from '../components/AgenderFill0Wght400Grad0Opsz48'
import IconAgenderFill0Wght500Grad0Opsz48 from '../components/AgenderFill0Wght500Grad0Opsz48'
import IconAgenderFill0Wght600Grad0Opsz48 from '../components/AgenderFill0Wght600Grad0Opsz48'
import IconAgenderFill0Wght700Grad0Opsz48 from '../components/AgenderFill0Wght700Grad0Opsz48'
import IconAgenderFill1Wght100Grad0Opsz48 from '../components/AgenderFill1Wght100Grad0Opsz48'
import IconAgenderFill1Wght200Grad0Opsz48 from '../components/AgenderFill1Wght200Grad0Opsz48'
import IconAgenderFill1Wght300Grad0Opsz48 from '../components/AgenderFill1Wght300Grad0Opsz48'
import IconAgenderFill1Wght400Grad0Opsz48 from '../components/AgenderFill1Wght400Grad0Opsz48'
import IconAgenderFill1Wght500Grad0Opsz48 from '../components/AgenderFill1Wght500Grad0Opsz48'
import IconAgenderFill1Wght600Grad0Opsz48 from '../components/AgenderFill1Wght600Grad0Opsz48'
import IconAgenderFill1Wght700Grad0Opsz48 from '../components/AgenderFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAgender = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAgenderFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAgenderFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAgenderFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAgenderFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAgenderFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAgenderFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAgenderFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAgenderFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAgenderFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAgenderFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAgenderFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAgenderFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAgenderFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAgenderFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
