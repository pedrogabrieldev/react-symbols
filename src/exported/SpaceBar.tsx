import IconSpaceBarFill0Wght100Grad0Opsz48 from '../components/SpaceBarFill0Wght100Grad0Opsz48'
import IconSpaceBarFill0Wght200Grad0Opsz48 from '../components/SpaceBarFill0Wght200Grad0Opsz48'
import IconSpaceBarFill0Wght300Grad0Opsz48 from '../components/SpaceBarFill0Wght300Grad0Opsz48'
import IconSpaceBarFill0Wght400Grad0Opsz48 from '../components/SpaceBarFill0Wght400Grad0Opsz48'
import IconSpaceBarFill0Wght500Grad0Opsz48 from '../components/SpaceBarFill0Wght500Grad0Opsz48'
import IconSpaceBarFill0Wght600Grad0Opsz48 from '../components/SpaceBarFill0Wght600Grad0Opsz48'
import IconSpaceBarFill0Wght700Grad0Opsz48 from '../components/SpaceBarFill0Wght700Grad0Opsz48'
import IconSpaceBarFill1Wght100Grad0Opsz48 from '../components/SpaceBarFill1Wght100Grad0Opsz48'
import IconSpaceBarFill1Wght200Grad0Opsz48 from '../components/SpaceBarFill1Wght200Grad0Opsz48'
import IconSpaceBarFill1Wght300Grad0Opsz48 from '../components/SpaceBarFill1Wght300Grad0Opsz48'
import IconSpaceBarFill1Wght400Grad0Opsz48 from '../components/SpaceBarFill1Wght400Grad0Opsz48'
import IconSpaceBarFill1Wght500Grad0Opsz48 from '../components/SpaceBarFill1Wght500Grad0Opsz48'
import IconSpaceBarFill1Wght600Grad0Opsz48 from '../components/SpaceBarFill1Wght600Grad0Opsz48'
import IconSpaceBarFill1Wght700Grad0Opsz48 from '../components/SpaceBarFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpaceBar = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpaceBarFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpaceBarFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpaceBarFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpaceBarFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpaceBarFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpaceBarFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpaceBarFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpaceBarFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpaceBarFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpaceBarFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpaceBarFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpaceBarFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpaceBarFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpaceBarFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
