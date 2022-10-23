import IconDryFill0Wght100Grad0Opsz48 from '../components/DryFill0Wght100Grad0Opsz48'
import IconDryFill0Wght200Grad0Opsz48 from '../components/DryFill0Wght200Grad0Opsz48'
import IconDryFill0Wght300Grad0Opsz48 from '../components/DryFill0Wght300Grad0Opsz48'
import IconDryFill0Wght400Grad0Opsz48 from '../components/DryFill0Wght400Grad0Opsz48'
import IconDryFill0Wght500Grad0Opsz48 from '../components/DryFill0Wght500Grad0Opsz48'
import IconDryFill0Wght600Grad0Opsz48 from '../components/DryFill0Wght600Grad0Opsz48'
import IconDryFill0Wght700Grad0Opsz48 from '../components/DryFill0Wght700Grad0Opsz48'
import IconDryFill1Wght100Grad0Opsz48 from '../components/DryFill1Wght100Grad0Opsz48'
import IconDryFill1Wght200Grad0Opsz48 from '../components/DryFill1Wght200Grad0Opsz48'
import IconDryFill1Wght300Grad0Opsz48 from '../components/DryFill1Wght300Grad0Opsz48'
import IconDryFill1Wght400Grad0Opsz48 from '../components/DryFill1Wght400Grad0Opsz48'
import IconDryFill1Wght500Grad0Opsz48 from '../components/DryFill1Wght500Grad0Opsz48'
import IconDryFill1Wght600Grad0Opsz48 from '../components/DryFill1Wght600Grad0Opsz48'
import IconDryFill1Wght700Grad0Opsz48 from '../components/DryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDry = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
