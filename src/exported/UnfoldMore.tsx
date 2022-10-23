import IconUnfoldMoreFill0Wght100Grad0Opsz48 from '../components/UnfoldMoreFill0Wght100Grad0Opsz48'
import IconUnfoldMoreFill0Wght200Grad0Opsz48 from '../components/UnfoldMoreFill0Wght200Grad0Opsz48'
import IconUnfoldMoreFill0Wght300Grad0Opsz48 from '../components/UnfoldMoreFill0Wght300Grad0Opsz48'
import IconUnfoldMoreFill0Wght400Grad0Opsz48 from '../components/UnfoldMoreFill0Wght400Grad0Opsz48'
import IconUnfoldMoreFill0Wght500Grad0Opsz48 from '../components/UnfoldMoreFill0Wght500Grad0Opsz48'
import IconUnfoldMoreFill0Wght600Grad0Opsz48 from '../components/UnfoldMoreFill0Wght600Grad0Opsz48'
import IconUnfoldMoreFill0Wght700Grad0Opsz48 from '../components/UnfoldMoreFill0Wght700Grad0Opsz48'
import IconUnfoldMoreFill1Wght100Grad0Opsz48 from '../components/UnfoldMoreFill1Wght100Grad0Opsz48'
import IconUnfoldMoreFill1Wght200Grad0Opsz48 from '../components/UnfoldMoreFill1Wght200Grad0Opsz48'
import IconUnfoldMoreFill1Wght300Grad0Opsz48 from '../components/UnfoldMoreFill1Wght300Grad0Opsz48'
import IconUnfoldMoreFill1Wght400Grad0Opsz48 from '../components/UnfoldMoreFill1Wght400Grad0Opsz48'
import IconUnfoldMoreFill1Wght500Grad0Opsz48 from '../components/UnfoldMoreFill1Wght500Grad0Opsz48'
import IconUnfoldMoreFill1Wght600Grad0Opsz48 from '../components/UnfoldMoreFill1Wght600Grad0Opsz48'
import IconUnfoldMoreFill1Wght700Grad0Opsz48 from '../components/UnfoldMoreFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUnfoldMore = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUnfoldMoreFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUnfoldMoreFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUnfoldMoreFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUnfoldMoreFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUnfoldMoreFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUnfoldMoreFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUnfoldMoreFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUnfoldMoreFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUnfoldMoreFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUnfoldMoreFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUnfoldMoreFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUnfoldMoreFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUnfoldMoreFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUnfoldMoreFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
