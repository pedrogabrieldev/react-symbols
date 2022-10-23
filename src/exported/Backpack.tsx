import IconBackpackFill0Wght100Grad0Opsz48 from '../components/BackpackFill0Wght100Grad0Opsz48'
import IconBackpackFill0Wght200Grad0Opsz48 from '../components/BackpackFill0Wght200Grad0Opsz48'
import IconBackpackFill0Wght300Grad0Opsz48 from '../components/BackpackFill0Wght300Grad0Opsz48'
import IconBackpackFill0Wght400Grad0Opsz48 from '../components/BackpackFill0Wght400Grad0Opsz48'
import IconBackpackFill0Wght500Grad0Opsz48 from '../components/BackpackFill0Wght500Grad0Opsz48'
import IconBackpackFill0Wght600Grad0Opsz48 from '../components/BackpackFill0Wght600Grad0Opsz48'
import IconBackpackFill0Wght700Grad0Opsz48 from '../components/BackpackFill0Wght700Grad0Opsz48'
import IconBackpackFill1Wght100Grad0Opsz48 from '../components/BackpackFill1Wght100Grad0Opsz48'
import IconBackpackFill1Wght200Grad0Opsz48 from '../components/BackpackFill1Wght200Grad0Opsz48'
import IconBackpackFill1Wght300Grad0Opsz48 from '../components/BackpackFill1Wght300Grad0Opsz48'
import IconBackpackFill1Wght400Grad0Opsz48 from '../components/BackpackFill1Wght400Grad0Opsz48'
import IconBackpackFill1Wght500Grad0Opsz48 from '../components/BackpackFill1Wght500Grad0Opsz48'
import IconBackpackFill1Wght600Grad0Opsz48 from '../components/BackpackFill1Wght600Grad0Opsz48'
import IconBackpackFill1Wght700Grad0Opsz48 from '../components/BackpackFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBackpack = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBackpackFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBackpackFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBackpackFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBackpackFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBackpackFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBackpackFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBackpackFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBackpackFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBackpackFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBackpackFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBackpackFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBackpackFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBackpackFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBackpackFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
