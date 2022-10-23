import IconGroupAddFill0Wght100Grad0Opsz48 from '../components/GroupAddFill0Wght100Grad0Opsz48'
import IconGroupAddFill0Wght200Grad0Opsz48 from '../components/GroupAddFill0Wght200Grad0Opsz48'
import IconGroupAddFill0Wght300Grad0Opsz48 from '../components/GroupAddFill0Wght300Grad0Opsz48'
import IconGroupAddFill0Wght400Grad0Opsz48 from '../components/GroupAddFill0Wght400Grad0Opsz48'
import IconGroupAddFill0Wght500Grad0Opsz48 from '../components/GroupAddFill0Wght500Grad0Opsz48'
import IconGroupAddFill0Wght600Grad0Opsz48 from '../components/GroupAddFill0Wght600Grad0Opsz48'
import IconGroupAddFill0Wght700Grad0Opsz48 from '../components/GroupAddFill0Wght700Grad0Opsz48'
import IconGroupAddFill1Wght100Grad0Opsz48 from '../components/GroupAddFill1Wght100Grad0Opsz48'
import IconGroupAddFill1Wght200Grad0Opsz48 from '../components/GroupAddFill1Wght200Grad0Opsz48'
import IconGroupAddFill1Wght300Grad0Opsz48 from '../components/GroupAddFill1Wght300Grad0Opsz48'
import IconGroupAddFill1Wght400Grad0Opsz48 from '../components/GroupAddFill1Wght400Grad0Opsz48'
import IconGroupAddFill1Wght500Grad0Opsz48 from '../components/GroupAddFill1Wght500Grad0Opsz48'
import IconGroupAddFill1Wght600Grad0Opsz48 from '../components/GroupAddFill1Wght600Grad0Opsz48'
import IconGroupAddFill1Wght700Grad0Opsz48 from '../components/GroupAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGroupAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGroupAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGroupAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGroupAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGroupAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGroupAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGroupAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGroupAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGroupAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGroupAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGroupAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGroupAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGroupAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGroupAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGroupAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
