import IconSurfingFill0Wght100Grad0Opsz48 from '../components/SurfingFill0Wght100Grad0Opsz48'
import IconSurfingFill0Wght200Grad0Opsz48 from '../components/SurfingFill0Wght200Grad0Opsz48'
import IconSurfingFill0Wght300Grad0Opsz48 from '../components/SurfingFill0Wght300Grad0Opsz48'
import IconSurfingFill0Wght400Grad0Opsz48 from '../components/SurfingFill0Wght400Grad0Opsz48'
import IconSurfingFill0Wght500Grad0Opsz48 from '../components/SurfingFill0Wght500Grad0Opsz48'
import IconSurfingFill0Wght600Grad0Opsz48 from '../components/SurfingFill0Wght600Grad0Opsz48'
import IconSurfingFill0Wght700Grad0Opsz48 from '../components/SurfingFill0Wght700Grad0Opsz48'
import IconSurfingFill1Wght100Grad0Opsz48 from '../components/SurfingFill1Wght100Grad0Opsz48'
import IconSurfingFill1Wght200Grad0Opsz48 from '../components/SurfingFill1Wght200Grad0Opsz48'
import IconSurfingFill1Wght300Grad0Opsz48 from '../components/SurfingFill1Wght300Grad0Opsz48'
import IconSurfingFill1Wght400Grad0Opsz48 from '../components/SurfingFill1Wght400Grad0Opsz48'
import IconSurfingFill1Wght500Grad0Opsz48 from '../components/SurfingFill1Wght500Grad0Opsz48'
import IconSurfingFill1Wght600Grad0Opsz48 from '../components/SurfingFill1Wght600Grad0Opsz48'
import IconSurfingFill1Wght700Grad0Opsz48 from '../components/SurfingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSurfing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSurfingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSurfingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSurfingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSurfingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSurfingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSurfingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSurfingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSurfingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSurfingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSurfingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSurfingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSurfingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSurfingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSurfingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
