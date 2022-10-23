import IconChildCareFill0Wght100Grad0Opsz48 from '../components/ChildCareFill0Wght100Grad0Opsz48'
import IconChildCareFill0Wght200Grad0Opsz48 from '../components/ChildCareFill0Wght200Grad0Opsz48'
import IconChildCareFill0Wght300Grad0Opsz48 from '../components/ChildCareFill0Wght300Grad0Opsz48'
import IconChildCareFill0Wght400Grad0Opsz48 from '../components/ChildCareFill0Wght400Grad0Opsz48'
import IconChildCareFill0Wght500Grad0Opsz48 from '../components/ChildCareFill0Wght500Grad0Opsz48'
import IconChildCareFill0Wght600Grad0Opsz48 from '../components/ChildCareFill0Wght600Grad0Opsz48'
import IconChildCareFill0Wght700Grad0Opsz48 from '../components/ChildCareFill0Wght700Grad0Opsz48'
import IconChildCareFill1Wght100Grad0Opsz48 from '../components/ChildCareFill1Wght100Grad0Opsz48'
import IconChildCareFill1Wght200Grad0Opsz48 from '../components/ChildCareFill1Wght200Grad0Opsz48'
import IconChildCareFill1Wght300Grad0Opsz48 from '../components/ChildCareFill1Wght300Grad0Opsz48'
import IconChildCareFill1Wght400Grad0Opsz48 from '../components/ChildCareFill1Wght400Grad0Opsz48'
import IconChildCareFill1Wght500Grad0Opsz48 from '../components/ChildCareFill1Wght500Grad0Opsz48'
import IconChildCareFill1Wght600Grad0Opsz48 from '../components/ChildCareFill1Wght600Grad0Opsz48'
import IconChildCareFill1Wght700Grad0Opsz48 from '../components/ChildCareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChildCare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChildCareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChildCareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChildCareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChildCareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChildCareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChildCareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChildCareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChildCareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChildCareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChildCareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChildCareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChildCareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChildCareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChildCareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
