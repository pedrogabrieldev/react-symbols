import IconChildFriendlyFill0Wght100Grad0Opsz48 from '../components/ChildFriendlyFill0Wght100Grad0Opsz48'
import IconChildFriendlyFill0Wght200Grad0Opsz48 from '../components/ChildFriendlyFill0Wght200Grad0Opsz48'
import IconChildFriendlyFill0Wght300Grad0Opsz48 from '../components/ChildFriendlyFill0Wght300Grad0Opsz48'
import IconChildFriendlyFill0Wght400Grad0Opsz48 from '../components/ChildFriendlyFill0Wght400Grad0Opsz48'
import IconChildFriendlyFill0Wght500Grad0Opsz48 from '../components/ChildFriendlyFill0Wght500Grad0Opsz48'
import IconChildFriendlyFill0Wght600Grad0Opsz48 from '../components/ChildFriendlyFill0Wght600Grad0Opsz48'
import IconChildFriendlyFill0Wght700Grad0Opsz48 from '../components/ChildFriendlyFill0Wght700Grad0Opsz48'
import IconChildFriendlyFill1Wght100Grad0Opsz48 from '../components/ChildFriendlyFill1Wght100Grad0Opsz48'
import IconChildFriendlyFill1Wght200Grad0Opsz48 from '../components/ChildFriendlyFill1Wght200Grad0Opsz48'
import IconChildFriendlyFill1Wght300Grad0Opsz48 from '../components/ChildFriendlyFill1Wght300Grad0Opsz48'
import IconChildFriendlyFill1Wght400Grad0Opsz48 from '../components/ChildFriendlyFill1Wght400Grad0Opsz48'
import IconChildFriendlyFill1Wght500Grad0Opsz48 from '../components/ChildFriendlyFill1Wght500Grad0Opsz48'
import IconChildFriendlyFill1Wght600Grad0Opsz48 from '../components/ChildFriendlyFill1Wght600Grad0Opsz48'
import IconChildFriendlyFill1Wght700Grad0Opsz48 from '../components/ChildFriendlyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChildFriendly = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChildFriendlyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChildFriendlyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChildFriendlyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChildFriendlyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChildFriendlyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChildFriendlyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChildFriendlyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChildFriendlyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChildFriendlyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChildFriendlyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChildFriendlyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChildFriendlyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChildFriendlyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChildFriendlyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
