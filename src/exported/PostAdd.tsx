import IconPostAddFill0Wght100Grad0Opsz48 from '../components/PostAddFill0Wght100Grad0Opsz48'
import IconPostAddFill0Wght200Grad0Opsz48 from '../components/PostAddFill0Wght200Grad0Opsz48'
import IconPostAddFill0Wght300Grad0Opsz48 from '../components/PostAddFill0Wght300Grad0Opsz48'
import IconPostAddFill0Wght400Grad0Opsz48 from '../components/PostAddFill0Wght400Grad0Opsz48'
import IconPostAddFill0Wght500Grad0Opsz48 from '../components/PostAddFill0Wght500Grad0Opsz48'
import IconPostAddFill0Wght600Grad0Opsz48 from '../components/PostAddFill0Wght600Grad0Opsz48'
import IconPostAddFill0Wght700Grad0Opsz48 from '../components/PostAddFill0Wght700Grad0Opsz48'
import IconPostAddFill1Wght100Grad0Opsz48 from '../components/PostAddFill1Wght100Grad0Opsz48'
import IconPostAddFill1Wght200Grad0Opsz48 from '../components/PostAddFill1Wght200Grad0Opsz48'
import IconPostAddFill1Wght300Grad0Opsz48 from '../components/PostAddFill1Wght300Grad0Opsz48'
import IconPostAddFill1Wght400Grad0Opsz48 from '../components/PostAddFill1Wght400Grad0Opsz48'
import IconPostAddFill1Wght500Grad0Opsz48 from '../components/PostAddFill1Wght500Grad0Opsz48'
import IconPostAddFill1Wght600Grad0Opsz48 from '../components/PostAddFill1Wght600Grad0Opsz48'
import IconPostAddFill1Wght700Grad0Opsz48 from '../components/PostAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPostAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPostAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPostAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPostAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPostAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPostAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPostAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPostAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPostAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPostAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPostAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPostAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPostAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPostAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPostAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
