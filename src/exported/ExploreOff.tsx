import IconExploreOffFill0Wght100Grad0Opsz48 from '../components/ExploreOffFill0Wght100Grad0Opsz48'
import IconExploreOffFill0Wght200Grad0Opsz48 from '../components/ExploreOffFill0Wght200Grad0Opsz48'
import IconExploreOffFill0Wght300Grad0Opsz48 from '../components/ExploreOffFill0Wght300Grad0Opsz48'
import IconExploreOffFill0Wght400Grad0Opsz48 from '../components/ExploreOffFill0Wght400Grad0Opsz48'
import IconExploreOffFill0Wght500Grad0Opsz48 from '../components/ExploreOffFill0Wght500Grad0Opsz48'
import IconExploreOffFill0Wght600Grad0Opsz48 from '../components/ExploreOffFill0Wght600Grad0Opsz48'
import IconExploreOffFill0Wght700Grad0Opsz48 from '../components/ExploreOffFill0Wght700Grad0Opsz48'
import IconExploreOffFill1Wght100Grad0Opsz48 from '../components/ExploreOffFill1Wght100Grad0Opsz48'
import IconExploreOffFill1Wght200Grad0Opsz48 from '../components/ExploreOffFill1Wght200Grad0Opsz48'
import IconExploreOffFill1Wght300Grad0Opsz48 from '../components/ExploreOffFill1Wght300Grad0Opsz48'
import IconExploreOffFill1Wght400Grad0Opsz48 from '../components/ExploreOffFill1Wght400Grad0Opsz48'
import IconExploreOffFill1Wght500Grad0Opsz48 from '../components/ExploreOffFill1Wght500Grad0Opsz48'
import IconExploreOffFill1Wght600Grad0Opsz48 from '../components/ExploreOffFill1Wght600Grad0Opsz48'
import IconExploreOffFill1Wght700Grad0Opsz48 from '../components/ExploreOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExploreOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExploreOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExploreOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExploreOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExploreOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExploreOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExploreOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExploreOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExploreOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExploreOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExploreOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExploreOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExploreOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExploreOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExploreOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
