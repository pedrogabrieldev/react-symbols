import IconLocalDiningFill0Wght100Grad0Opsz48 from '../components/LocalDiningFill0Wght100Grad0Opsz48'
import IconLocalDiningFill0Wght200Grad0Opsz48 from '../components/LocalDiningFill0Wght200Grad0Opsz48'
import IconLocalDiningFill0Wght300Grad0Opsz48 from '../components/LocalDiningFill0Wght300Grad0Opsz48'
import IconLocalDiningFill0Wght400Grad0Opsz48 from '../components/LocalDiningFill0Wght400Grad0Opsz48'
import IconLocalDiningFill0Wght500Grad0Opsz48 from '../components/LocalDiningFill0Wght500Grad0Opsz48'
import IconLocalDiningFill0Wght600Grad0Opsz48 from '../components/LocalDiningFill0Wght600Grad0Opsz48'
import IconLocalDiningFill0Wght700Grad0Opsz48 from '../components/LocalDiningFill0Wght700Grad0Opsz48'
import IconLocalDiningFill1Wght100Grad0Opsz48 from '../components/LocalDiningFill1Wght100Grad0Opsz48'
import IconLocalDiningFill1Wght200Grad0Opsz48 from '../components/LocalDiningFill1Wght200Grad0Opsz48'
import IconLocalDiningFill1Wght300Grad0Opsz48 from '../components/LocalDiningFill1Wght300Grad0Opsz48'
import IconLocalDiningFill1Wght400Grad0Opsz48 from '../components/LocalDiningFill1Wght400Grad0Opsz48'
import IconLocalDiningFill1Wght500Grad0Opsz48 from '../components/LocalDiningFill1Wght500Grad0Opsz48'
import IconLocalDiningFill1Wght600Grad0Opsz48 from '../components/LocalDiningFill1Wght600Grad0Opsz48'
import IconLocalDiningFill1Wght700Grad0Opsz48 from '../components/LocalDiningFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalDining = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalDiningFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalDiningFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalDiningFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalDiningFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalDiningFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalDiningFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalDiningFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalDiningFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalDiningFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalDiningFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalDiningFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalDiningFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalDiningFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalDiningFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
