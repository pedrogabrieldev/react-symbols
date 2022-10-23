import IconForward5Fill0Wght100Grad0Opsz48 from '../components/Forward5Fill0Wght100Grad0Opsz48'
import IconForward5Fill0Wght200Grad0Opsz48 from '../components/Forward5Fill0Wght200Grad0Opsz48'
import IconForward5Fill0Wght300Grad0Opsz48 from '../components/Forward5Fill0Wght300Grad0Opsz48'
import IconForward5Fill0Wght400Grad0Opsz48 from '../components/Forward5Fill0Wght400Grad0Opsz48'
import IconForward5Fill0Wght500Grad0Opsz48 from '../components/Forward5Fill0Wght500Grad0Opsz48'
import IconForward5Fill0Wght600Grad0Opsz48 from '../components/Forward5Fill0Wght600Grad0Opsz48'
import IconForward5Fill0Wght700Grad0Opsz48 from '../components/Forward5Fill0Wght700Grad0Opsz48'
import IconForward5Fill1Wght100Grad0Opsz48 from '../components/Forward5Fill1Wght100Grad0Opsz48'
import IconForward5Fill1Wght200Grad0Opsz48 from '../components/Forward5Fill1Wght200Grad0Opsz48'
import IconForward5Fill1Wght300Grad0Opsz48 from '../components/Forward5Fill1Wght300Grad0Opsz48'
import IconForward5Fill1Wght400Grad0Opsz48 from '../components/Forward5Fill1Wght400Grad0Opsz48'
import IconForward5Fill1Wght500Grad0Opsz48 from '../components/Forward5Fill1Wght500Grad0Opsz48'
import IconForward5Fill1Wght600Grad0Opsz48 from '../components/Forward5Fill1Wght600Grad0Opsz48'
import IconForward5Fill1Wght700Grad0Opsz48 from '../components/Forward5Fill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconForward5 = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconForward5Fill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconForward5Fill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconForward5Fill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconForward5Fill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconForward5Fill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconForward5Fill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconForward5Fill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconForward5Fill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconForward5Fill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconForward5Fill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconForward5Fill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconForward5Fill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconForward5Fill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconForward5Fill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
