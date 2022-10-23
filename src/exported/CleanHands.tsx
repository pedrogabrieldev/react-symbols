import IconCleanHandsFill0Wght100Grad0Opsz48 from '../components/CleanHandsFill0Wght100Grad0Opsz48'
import IconCleanHandsFill0Wght200Grad0Opsz48 from '../components/CleanHandsFill0Wght200Grad0Opsz48'
import IconCleanHandsFill0Wght300Grad0Opsz48 from '../components/CleanHandsFill0Wght300Grad0Opsz48'
import IconCleanHandsFill0Wght400Grad0Opsz48 from '../components/CleanHandsFill0Wght400Grad0Opsz48'
import IconCleanHandsFill0Wght500Grad0Opsz48 from '../components/CleanHandsFill0Wght500Grad0Opsz48'
import IconCleanHandsFill0Wght600Grad0Opsz48 from '../components/CleanHandsFill0Wght600Grad0Opsz48'
import IconCleanHandsFill0Wght700Grad0Opsz48 from '../components/CleanHandsFill0Wght700Grad0Opsz48'
import IconCleanHandsFill1Wght100Grad0Opsz48 from '../components/CleanHandsFill1Wght100Grad0Opsz48'
import IconCleanHandsFill1Wght200Grad0Opsz48 from '../components/CleanHandsFill1Wght200Grad0Opsz48'
import IconCleanHandsFill1Wght300Grad0Opsz48 from '../components/CleanHandsFill1Wght300Grad0Opsz48'
import IconCleanHandsFill1Wght400Grad0Opsz48 from '../components/CleanHandsFill1Wght400Grad0Opsz48'
import IconCleanHandsFill1Wght500Grad0Opsz48 from '../components/CleanHandsFill1Wght500Grad0Opsz48'
import IconCleanHandsFill1Wght600Grad0Opsz48 from '../components/CleanHandsFill1Wght600Grad0Opsz48'
import IconCleanHandsFill1Wght700Grad0Opsz48 from '../components/CleanHandsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCleanHands = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCleanHandsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCleanHandsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCleanHandsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCleanHandsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCleanHandsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCleanHandsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCleanHandsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCleanHandsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCleanHandsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCleanHandsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCleanHandsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCleanHandsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCleanHandsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCleanHandsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
