import IconGroupOffFill0Wght100Grad0Opsz48 from '../components/GroupOffFill0Wght100Grad0Opsz48'
import IconGroupOffFill0Wght200Grad0Opsz48 from '../components/GroupOffFill0Wght200Grad0Opsz48'
import IconGroupOffFill0Wght300Grad0Opsz48 from '../components/GroupOffFill0Wght300Grad0Opsz48'
import IconGroupOffFill0Wght400Grad0Opsz48 from '../components/GroupOffFill0Wght400Grad0Opsz48'
import IconGroupOffFill0Wght500Grad0Opsz48 from '../components/GroupOffFill0Wght500Grad0Opsz48'
import IconGroupOffFill0Wght600Grad0Opsz48 from '../components/GroupOffFill0Wght600Grad0Opsz48'
import IconGroupOffFill0Wght700Grad0Opsz48 from '../components/GroupOffFill0Wght700Grad0Opsz48'
import IconGroupOffFill1Wght100Grad0Opsz48 from '../components/GroupOffFill1Wght100Grad0Opsz48'
import IconGroupOffFill1Wght200Grad0Opsz48 from '../components/GroupOffFill1Wght200Grad0Opsz48'
import IconGroupOffFill1Wght300Grad0Opsz48 from '../components/GroupOffFill1Wght300Grad0Opsz48'
import IconGroupOffFill1Wght400Grad0Opsz48 from '../components/GroupOffFill1Wght400Grad0Opsz48'
import IconGroupOffFill1Wght500Grad0Opsz48 from '../components/GroupOffFill1Wght500Grad0Opsz48'
import IconGroupOffFill1Wght600Grad0Opsz48 from '../components/GroupOffFill1Wght600Grad0Opsz48'
import IconGroupOffFill1Wght700Grad0Opsz48 from '../components/GroupOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGroupOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGroupOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGroupOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGroupOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGroupOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGroupOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGroupOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGroupOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGroupOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGroupOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGroupOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGroupOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGroupOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGroupOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGroupOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
