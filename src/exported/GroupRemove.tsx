import IconGroupRemoveFill0Wght100Grad0Opsz48 from '../components/GroupRemoveFill0Wght100Grad0Opsz48'
import IconGroupRemoveFill0Wght200Grad0Opsz48 from '../components/GroupRemoveFill0Wght200Grad0Opsz48'
import IconGroupRemoveFill0Wght300Grad0Opsz48 from '../components/GroupRemoveFill0Wght300Grad0Opsz48'
import IconGroupRemoveFill0Wght400Grad0Opsz48 from '../components/GroupRemoveFill0Wght400Grad0Opsz48'
import IconGroupRemoveFill0Wght500Grad0Opsz48 from '../components/GroupRemoveFill0Wght500Grad0Opsz48'
import IconGroupRemoveFill0Wght600Grad0Opsz48 from '../components/GroupRemoveFill0Wght600Grad0Opsz48'
import IconGroupRemoveFill0Wght700Grad0Opsz48 from '../components/GroupRemoveFill0Wght700Grad0Opsz48'
import IconGroupRemoveFill1Wght100Grad0Opsz48 from '../components/GroupRemoveFill1Wght100Grad0Opsz48'
import IconGroupRemoveFill1Wght200Grad0Opsz48 from '../components/GroupRemoveFill1Wght200Grad0Opsz48'
import IconGroupRemoveFill1Wght300Grad0Opsz48 from '../components/GroupRemoveFill1Wght300Grad0Opsz48'
import IconGroupRemoveFill1Wght400Grad0Opsz48 from '../components/GroupRemoveFill1Wght400Grad0Opsz48'
import IconGroupRemoveFill1Wght500Grad0Opsz48 from '../components/GroupRemoveFill1Wght500Grad0Opsz48'
import IconGroupRemoveFill1Wght600Grad0Opsz48 from '../components/GroupRemoveFill1Wght600Grad0Opsz48'
import IconGroupRemoveFill1Wght700Grad0Opsz48 from '../components/GroupRemoveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGroupRemove = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGroupRemoveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGroupRemoveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGroupRemoveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGroupRemoveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGroupRemoveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGroupRemoveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGroupRemoveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGroupRemoveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGroupRemoveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGroupRemoveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGroupRemoveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGroupRemoveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGroupRemoveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGroupRemoveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
