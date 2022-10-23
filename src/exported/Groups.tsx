import IconGroupsFill0Wght100Grad0Opsz48 from '../components/GroupsFill0Wght100Grad0Opsz48'
import IconGroupsFill0Wght200Grad0Opsz48 from '../components/GroupsFill0Wght200Grad0Opsz48'
import IconGroupsFill0Wght300Grad0Opsz48 from '../components/GroupsFill0Wght300Grad0Opsz48'
import IconGroupsFill0Wght400Grad0Opsz48 from '../components/GroupsFill0Wght400Grad0Opsz48'
import IconGroupsFill0Wght500Grad0Opsz48 from '../components/GroupsFill0Wght500Grad0Opsz48'
import IconGroupsFill0Wght600Grad0Opsz48 from '../components/GroupsFill0Wght600Grad0Opsz48'
import IconGroupsFill0Wght700Grad0Opsz48 from '../components/GroupsFill0Wght700Grad0Opsz48'
import IconGroupsFill1Wght100Grad0Opsz48 from '../components/GroupsFill1Wght100Grad0Opsz48'
import IconGroupsFill1Wght200Grad0Opsz48 from '../components/GroupsFill1Wght200Grad0Opsz48'
import IconGroupsFill1Wght300Grad0Opsz48 from '../components/GroupsFill1Wght300Grad0Opsz48'
import IconGroupsFill1Wght400Grad0Opsz48 from '../components/GroupsFill1Wght400Grad0Opsz48'
import IconGroupsFill1Wght500Grad0Opsz48 from '../components/GroupsFill1Wght500Grad0Opsz48'
import IconGroupsFill1Wght600Grad0Opsz48 from '../components/GroupsFill1Wght600Grad0Opsz48'
import IconGroupsFill1Wght700Grad0Opsz48 from '../components/GroupsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGroups = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGroupsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGroupsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGroupsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGroupsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGroupsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGroupsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGroupsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGroupsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGroupsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGroupsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGroupsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGroupsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGroupsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGroupsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
