import IconGroupWorkFill0Wght100Grad0Opsz48 from '../components/GroupWorkFill0Wght100Grad0Opsz48'
import IconGroupWorkFill0Wght200Grad0Opsz48 from '../components/GroupWorkFill0Wght200Grad0Opsz48'
import IconGroupWorkFill0Wght300Grad0Opsz48 from '../components/GroupWorkFill0Wght300Grad0Opsz48'
import IconGroupWorkFill0Wght400Grad0Opsz48 from '../components/GroupWorkFill0Wght400Grad0Opsz48'
import IconGroupWorkFill0Wght500Grad0Opsz48 from '../components/GroupWorkFill0Wght500Grad0Opsz48'
import IconGroupWorkFill0Wght600Grad0Opsz48 from '../components/GroupWorkFill0Wght600Grad0Opsz48'
import IconGroupWorkFill0Wght700Grad0Opsz48 from '../components/GroupWorkFill0Wght700Grad0Opsz48'
import IconGroupWorkFill1Wght100Grad0Opsz48 from '../components/GroupWorkFill1Wght100Grad0Opsz48'
import IconGroupWorkFill1Wght200Grad0Opsz48 from '../components/GroupWorkFill1Wght200Grad0Opsz48'
import IconGroupWorkFill1Wght300Grad0Opsz48 from '../components/GroupWorkFill1Wght300Grad0Opsz48'
import IconGroupWorkFill1Wght400Grad0Opsz48 from '../components/GroupWorkFill1Wght400Grad0Opsz48'
import IconGroupWorkFill1Wght500Grad0Opsz48 from '../components/GroupWorkFill1Wght500Grad0Opsz48'
import IconGroupWorkFill1Wght600Grad0Opsz48 from '../components/GroupWorkFill1Wght600Grad0Opsz48'
import IconGroupWorkFill1Wght700Grad0Opsz48 from '../components/GroupWorkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGroupWork = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGroupWorkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGroupWorkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGroupWorkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGroupWorkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGroupWorkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGroupWorkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGroupWorkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGroupWorkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGroupWorkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGroupWorkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGroupWorkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGroupWorkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGroupWorkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGroupWorkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
