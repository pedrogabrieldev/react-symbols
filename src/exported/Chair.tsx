import IconChairFill0Wght100Grad0Opsz48 from '../components/ChairFill0Wght100Grad0Opsz48'
import IconChairFill0Wght200Grad0Opsz48 from '../components/ChairFill0Wght200Grad0Opsz48'
import IconChairFill0Wght300Grad0Opsz48 from '../components/ChairFill0Wght300Grad0Opsz48'
import IconChairFill0Wght400Grad0Opsz48 from '../components/ChairFill0Wght400Grad0Opsz48'
import IconChairFill0Wght500Grad0Opsz48 from '../components/ChairFill0Wght500Grad0Opsz48'
import IconChairFill0Wght600Grad0Opsz48 from '../components/ChairFill0Wght600Grad0Opsz48'
import IconChairFill0Wght700Grad0Opsz48 from '../components/ChairFill0Wght700Grad0Opsz48'
import IconChairFill1Wght100Grad0Opsz48 from '../components/ChairFill1Wght100Grad0Opsz48'
import IconChairFill1Wght200Grad0Opsz48 from '../components/ChairFill1Wght200Grad0Opsz48'
import IconChairFill1Wght300Grad0Opsz48 from '../components/ChairFill1Wght300Grad0Opsz48'
import IconChairFill1Wght400Grad0Opsz48 from '../components/ChairFill1Wght400Grad0Opsz48'
import IconChairFill1Wght500Grad0Opsz48 from '../components/ChairFill1Wght500Grad0Opsz48'
import IconChairFill1Wght600Grad0Opsz48 from '../components/ChairFill1Wght600Grad0Opsz48'
import IconChairFill1Wght700Grad0Opsz48 from '../components/ChairFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChair = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChairFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChairFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChairFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChairFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChairFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChairFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChairFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChairFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChairFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChairFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChairFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChairFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChairFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChairFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
