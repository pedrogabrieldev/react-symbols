import IconRecyclingFill0Wght100Grad0Opsz48 from '../components/RecyclingFill0Wght100Grad0Opsz48'
import IconRecyclingFill0Wght200Grad0Opsz48 from '../components/RecyclingFill0Wght200Grad0Opsz48'
import IconRecyclingFill0Wght300Grad0Opsz48 from '../components/RecyclingFill0Wght300Grad0Opsz48'
import IconRecyclingFill0Wght400Grad0Opsz48 from '../components/RecyclingFill0Wght400Grad0Opsz48'
import IconRecyclingFill0Wght500Grad0Opsz48 from '../components/RecyclingFill0Wght500Grad0Opsz48'
import IconRecyclingFill0Wght600Grad0Opsz48 from '../components/RecyclingFill0Wght600Grad0Opsz48'
import IconRecyclingFill0Wght700Grad0Opsz48 from '../components/RecyclingFill0Wght700Grad0Opsz48'
import IconRecyclingFill1Wght100Grad0Opsz48 from '../components/RecyclingFill1Wght100Grad0Opsz48'
import IconRecyclingFill1Wght200Grad0Opsz48 from '../components/RecyclingFill1Wght200Grad0Opsz48'
import IconRecyclingFill1Wght300Grad0Opsz48 from '../components/RecyclingFill1Wght300Grad0Opsz48'
import IconRecyclingFill1Wght400Grad0Opsz48 from '../components/RecyclingFill1Wght400Grad0Opsz48'
import IconRecyclingFill1Wght500Grad0Opsz48 from '../components/RecyclingFill1Wght500Grad0Opsz48'
import IconRecyclingFill1Wght600Grad0Opsz48 from '../components/RecyclingFill1Wght600Grad0Opsz48'
import IconRecyclingFill1Wght700Grad0Opsz48 from '../components/RecyclingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRecycling = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRecyclingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRecyclingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRecyclingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRecyclingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRecyclingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRecyclingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRecyclingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRecyclingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRecyclingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRecyclingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRecyclingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRecyclingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRecyclingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRecyclingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
