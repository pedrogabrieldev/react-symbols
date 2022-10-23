import IconChevronLeftFill0Wght100Grad0Opsz48 from '../components/ChevronLeftFill0Wght100Grad0Opsz48'
import IconChevronLeftFill0Wght200Grad0Opsz48 from '../components/ChevronLeftFill0Wght200Grad0Opsz48'
import IconChevronLeftFill0Wght300Grad0Opsz48 from '../components/ChevronLeftFill0Wght300Grad0Opsz48'
import IconChevronLeftFill0Wght400Grad0Opsz48 from '../components/ChevronLeftFill0Wght400Grad0Opsz48'
import IconChevronLeftFill0Wght500Grad0Opsz48 from '../components/ChevronLeftFill0Wght500Grad0Opsz48'
import IconChevronLeftFill0Wght600Grad0Opsz48 from '../components/ChevronLeftFill0Wght600Grad0Opsz48'
import IconChevronLeftFill0Wght700Grad0Opsz48 from '../components/ChevronLeftFill0Wght700Grad0Opsz48'
import IconChevronLeftFill1Wght100Grad0Opsz48 from '../components/ChevronLeftFill1Wght100Grad0Opsz48'
import IconChevronLeftFill1Wght200Grad0Opsz48 from '../components/ChevronLeftFill1Wght200Grad0Opsz48'
import IconChevronLeftFill1Wght300Grad0Opsz48 from '../components/ChevronLeftFill1Wght300Grad0Opsz48'
import IconChevronLeftFill1Wght400Grad0Opsz48 from '../components/ChevronLeftFill1Wght400Grad0Opsz48'
import IconChevronLeftFill1Wght500Grad0Opsz48 from '../components/ChevronLeftFill1Wght500Grad0Opsz48'
import IconChevronLeftFill1Wght600Grad0Opsz48 from '../components/ChevronLeftFill1Wght600Grad0Opsz48'
import IconChevronLeftFill1Wght700Grad0Opsz48 from '../components/ChevronLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChevronLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChevronLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChevronLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChevronLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChevronLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChevronLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChevronLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChevronLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChevronLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChevronLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChevronLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChevronLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChevronLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChevronLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChevronLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
