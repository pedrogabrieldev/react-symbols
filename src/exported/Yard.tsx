import IconYardFill0Wght100Grad0Opsz48 from '../components/YardFill0Wght100Grad0Opsz48'
import IconYardFill0Wght200Grad0Opsz48 from '../components/YardFill0Wght200Grad0Opsz48'
import IconYardFill0Wght300Grad0Opsz48 from '../components/YardFill0Wght300Grad0Opsz48'
import IconYardFill0Wght400Grad0Opsz48 from '../components/YardFill0Wght400Grad0Opsz48'
import IconYardFill0Wght500Grad0Opsz48 from '../components/YardFill0Wght500Grad0Opsz48'
import IconYardFill0Wght600Grad0Opsz48 from '../components/YardFill0Wght600Grad0Opsz48'
import IconYardFill0Wght700Grad0Opsz48 from '../components/YardFill0Wght700Grad0Opsz48'
import IconYardFill1Wght100Grad0Opsz48 from '../components/YardFill1Wght100Grad0Opsz48'
import IconYardFill1Wght200Grad0Opsz48 from '../components/YardFill1Wght200Grad0Opsz48'
import IconYardFill1Wght300Grad0Opsz48 from '../components/YardFill1Wght300Grad0Opsz48'
import IconYardFill1Wght400Grad0Opsz48 from '../components/YardFill1Wght400Grad0Opsz48'
import IconYardFill1Wght500Grad0Opsz48 from '../components/YardFill1Wght500Grad0Opsz48'
import IconYardFill1Wght600Grad0Opsz48 from '../components/YardFill1Wght600Grad0Opsz48'
import IconYardFill1Wght700Grad0Opsz48 from '../components/YardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconYard = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconYardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconYardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconYardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconYardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconYardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconYardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconYardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconYardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconYardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconYardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconYardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconYardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconYardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconYardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
