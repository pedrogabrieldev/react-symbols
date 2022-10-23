import IconStoreFill0Wght100Grad0Opsz48 from '../components/StoreFill0Wght100Grad0Opsz48'
import IconStoreFill0Wght200Grad0Opsz48 from '../components/StoreFill0Wght200Grad0Opsz48'
import IconStoreFill0Wght300Grad0Opsz48 from '../components/StoreFill0Wght300Grad0Opsz48'
import IconStoreFill0Wght400Grad0Opsz48 from '../components/StoreFill0Wght400Grad0Opsz48'
import IconStoreFill0Wght500Grad0Opsz48 from '../components/StoreFill0Wght500Grad0Opsz48'
import IconStoreFill0Wght600Grad0Opsz48 from '../components/StoreFill0Wght600Grad0Opsz48'
import IconStoreFill0Wght700Grad0Opsz48 from '../components/StoreFill0Wght700Grad0Opsz48'
import IconStoreFill1Wght100Grad0Opsz48 from '../components/StoreFill1Wght100Grad0Opsz48'
import IconStoreFill1Wght200Grad0Opsz48 from '../components/StoreFill1Wght200Grad0Opsz48'
import IconStoreFill1Wght300Grad0Opsz48 from '../components/StoreFill1Wght300Grad0Opsz48'
import IconStoreFill1Wght400Grad0Opsz48 from '../components/StoreFill1Wght400Grad0Opsz48'
import IconStoreFill1Wght500Grad0Opsz48 from '../components/StoreFill1Wght500Grad0Opsz48'
import IconStoreFill1Wght600Grad0Opsz48 from '../components/StoreFill1Wght600Grad0Opsz48'
import IconStoreFill1Wght700Grad0Opsz48 from '../components/StoreFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStore = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStoreFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStoreFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStoreFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStoreFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStoreFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStoreFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStoreFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStoreFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStoreFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStoreFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStoreFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStoreFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStoreFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStoreFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
