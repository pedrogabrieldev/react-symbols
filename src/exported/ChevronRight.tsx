import IconChevronRightFill0Wght100Grad0Opsz48 from '../components/ChevronRightFill0Wght100Grad0Opsz48'
import IconChevronRightFill0Wght200Grad0Opsz48 from '../components/ChevronRightFill0Wght200Grad0Opsz48'
import IconChevronRightFill0Wght300Grad0Opsz48 from '../components/ChevronRightFill0Wght300Grad0Opsz48'
import IconChevronRightFill0Wght400Grad0Opsz48 from '../components/ChevronRightFill0Wght400Grad0Opsz48'
import IconChevronRightFill0Wght500Grad0Opsz48 from '../components/ChevronRightFill0Wght500Grad0Opsz48'
import IconChevronRightFill0Wght600Grad0Opsz48 from '../components/ChevronRightFill0Wght600Grad0Opsz48'
import IconChevronRightFill0Wght700Grad0Opsz48 from '../components/ChevronRightFill0Wght700Grad0Opsz48'
import IconChevronRightFill1Wght100Grad0Opsz48 from '../components/ChevronRightFill1Wght100Grad0Opsz48'
import IconChevronRightFill1Wght200Grad0Opsz48 from '../components/ChevronRightFill1Wght200Grad0Opsz48'
import IconChevronRightFill1Wght300Grad0Opsz48 from '../components/ChevronRightFill1Wght300Grad0Opsz48'
import IconChevronRightFill1Wght400Grad0Opsz48 from '../components/ChevronRightFill1Wght400Grad0Opsz48'
import IconChevronRightFill1Wght500Grad0Opsz48 from '../components/ChevronRightFill1Wght500Grad0Opsz48'
import IconChevronRightFill1Wght600Grad0Opsz48 from '../components/ChevronRightFill1Wght600Grad0Opsz48'
import IconChevronRightFill1Wght700Grad0Opsz48 from '../components/ChevronRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChevronRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChevronRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChevronRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChevronRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChevronRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChevronRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChevronRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChevronRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChevronRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChevronRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChevronRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChevronRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChevronRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChevronRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChevronRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
