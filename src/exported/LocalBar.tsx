import IconLocalBarFill0Wght100Grad0Opsz48 from '../components/LocalBarFill0Wght100Grad0Opsz48'
import IconLocalBarFill0Wght200Grad0Opsz48 from '../components/LocalBarFill0Wght200Grad0Opsz48'
import IconLocalBarFill0Wght300Grad0Opsz48 from '../components/LocalBarFill0Wght300Grad0Opsz48'
import IconLocalBarFill0Wght400Grad0Opsz48 from '../components/LocalBarFill0Wght400Grad0Opsz48'
import IconLocalBarFill0Wght500Grad0Opsz48 from '../components/LocalBarFill0Wght500Grad0Opsz48'
import IconLocalBarFill0Wght600Grad0Opsz48 from '../components/LocalBarFill0Wght600Grad0Opsz48'
import IconLocalBarFill0Wght700Grad0Opsz48 from '../components/LocalBarFill0Wght700Grad0Opsz48'
import IconLocalBarFill1Wght100Grad0Opsz48 from '../components/LocalBarFill1Wght100Grad0Opsz48'
import IconLocalBarFill1Wght200Grad0Opsz48 from '../components/LocalBarFill1Wght200Grad0Opsz48'
import IconLocalBarFill1Wght300Grad0Opsz48 from '../components/LocalBarFill1Wght300Grad0Opsz48'
import IconLocalBarFill1Wght400Grad0Opsz48 from '../components/LocalBarFill1Wght400Grad0Opsz48'
import IconLocalBarFill1Wght500Grad0Opsz48 from '../components/LocalBarFill1Wght500Grad0Opsz48'
import IconLocalBarFill1Wght600Grad0Opsz48 from '../components/LocalBarFill1Wght600Grad0Opsz48'
import IconLocalBarFill1Wght700Grad0Opsz48 from '../components/LocalBarFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalBar = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalBarFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalBarFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalBarFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalBarFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalBarFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalBarFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalBarFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalBarFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalBarFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalBarFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalBarFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalBarFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalBarFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalBarFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
