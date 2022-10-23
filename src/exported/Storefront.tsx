import IconStorefrontFill0Wght100Grad0Opsz48 from '../components/StorefrontFill0Wght100Grad0Opsz48'
import IconStorefrontFill0Wght200Grad0Opsz48 from '../components/StorefrontFill0Wght200Grad0Opsz48'
import IconStorefrontFill0Wght300Grad0Opsz48 from '../components/StorefrontFill0Wght300Grad0Opsz48'
import IconStorefrontFill0Wght400Grad0Opsz48 from '../components/StorefrontFill0Wght400Grad0Opsz48'
import IconStorefrontFill0Wght500Grad0Opsz48 from '../components/StorefrontFill0Wght500Grad0Opsz48'
import IconStorefrontFill0Wght600Grad0Opsz48 from '../components/StorefrontFill0Wght600Grad0Opsz48'
import IconStorefrontFill0Wght700Grad0Opsz48 from '../components/StorefrontFill0Wght700Grad0Opsz48'
import IconStorefrontFill1Wght100Grad0Opsz48 from '../components/StorefrontFill1Wght100Grad0Opsz48'
import IconStorefrontFill1Wght200Grad0Opsz48 from '../components/StorefrontFill1Wght200Grad0Opsz48'
import IconStorefrontFill1Wght300Grad0Opsz48 from '../components/StorefrontFill1Wght300Grad0Opsz48'
import IconStorefrontFill1Wght400Grad0Opsz48 from '../components/StorefrontFill1Wght400Grad0Opsz48'
import IconStorefrontFill1Wght500Grad0Opsz48 from '../components/StorefrontFill1Wght500Grad0Opsz48'
import IconStorefrontFill1Wght600Grad0Opsz48 from '../components/StorefrontFill1Wght600Grad0Opsz48'
import IconStorefrontFill1Wght700Grad0Opsz48 from '../components/StorefrontFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStorefront = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStorefrontFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStorefrontFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStorefrontFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStorefrontFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStorefrontFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStorefrontFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStorefrontFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStorefrontFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStorefrontFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStorefrontFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStorefrontFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStorefrontFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStorefrontFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStorefrontFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
