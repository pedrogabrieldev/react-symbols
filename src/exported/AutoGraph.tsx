import IconAutoGraphFill0Wght100Grad0Opsz48 from '../components/AutoGraphFill0Wght100Grad0Opsz48'
import IconAutoGraphFill0Wght200Grad0Opsz48 from '../components/AutoGraphFill0Wght200Grad0Opsz48'
import IconAutoGraphFill0Wght300Grad0Opsz48 from '../components/AutoGraphFill0Wght300Grad0Opsz48'
import IconAutoGraphFill0Wght400Grad0Opsz48 from '../components/AutoGraphFill0Wght400Grad0Opsz48'
import IconAutoGraphFill0Wght500Grad0Opsz48 from '../components/AutoGraphFill0Wght500Grad0Opsz48'
import IconAutoGraphFill0Wght600Grad0Opsz48 from '../components/AutoGraphFill0Wght600Grad0Opsz48'
import IconAutoGraphFill0Wght700Grad0Opsz48 from '../components/AutoGraphFill0Wght700Grad0Opsz48'
import IconAutoGraphFill1Wght100Grad0Opsz48 from '../components/AutoGraphFill1Wght100Grad0Opsz48'
import IconAutoGraphFill1Wght200Grad0Opsz48 from '../components/AutoGraphFill1Wght200Grad0Opsz48'
import IconAutoGraphFill1Wght300Grad0Opsz48 from '../components/AutoGraphFill1Wght300Grad0Opsz48'
import IconAutoGraphFill1Wght400Grad0Opsz48 from '../components/AutoGraphFill1Wght400Grad0Opsz48'
import IconAutoGraphFill1Wght500Grad0Opsz48 from '../components/AutoGraphFill1Wght500Grad0Opsz48'
import IconAutoGraphFill1Wght600Grad0Opsz48 from '../components/AutoGraphFill1Wght600Grad0Opsz48'
import IconAutoGraphFill1Wght700Grad0Opsz48 from '../components/AutoGraphFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoGraph = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoGraphFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoGraphFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoGraphFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoGraphFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoGraphFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoGraphFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoGraphFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoGraphFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoGraphFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoGraphFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoGraphFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoGraphFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoGraphFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoGraphFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
