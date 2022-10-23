import IconToysFanFill0Wght100Grad0Opsz48 from '../components/ToysFanFill0Wght100Grad0Opsz48'
import IconToysFanFill0Wght200Grad0Opsz48 from '../components/ToysFanFill0Wght200Grad0Opsz48'
import IconToysFanFill0Wght300Grad0Opsz48 from '../components/ToysFanFill0Wght300Grad0Opsz48'
import IconToysFanFill0Wght400Grad0Opsz48 from '../components/ToysFanFill0Wght400Grad0Opsz48'
import IconToysFanFill0Wght500Grad0Opsz48 from '../components/ToysFanFill0Wght500Grad0Opsz48'
import IconToysFanFill0Wght600Grad0Opsz48 from '../components/ToysFanFill0Wght600Grad0Opsz48'
import IconToysFanFill0Wght700Grad0Opsz48 from '../components/ToysFanFill0Wght700Grad0Opsz48'
import IconToysFanFill1Wght100Grad0Opsz48 from '../components/ToysFanFill1Wght100Grad0Opsz48'
import IconToysFanFill1Wght200Grad0Opsz48 from '../components/ToysFanFill1Wght200Grad0Opsz48'
import IconToysFanFill1Wght300Grad0Opsz48 from '../components/ToysFanFill1Wght300Grad0Opsz48'
import IconToysFanFill1Wght400Grad0Opsz48 from '../components/ToysFanFill1Wght400Grad0Opsz48'
import IconToysFanFill1Wght500Grad0Opsz48 from '../components/ToysFanFill1Wght500Grad0Opsz48'
import IconToysFanFill1Wght600Grad0Opsz48 from '../components/ToysFanFill1Wght600Grad0Opsz48'
import IconToysFanFill1Wght700Grad0Opsz48 from '../components/ToysFanFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToysFan = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconToysFanFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconToysFanFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconToysFanFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconToysFanFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconToysFanFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconToysFanFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconToysFanFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconToysFanFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconToysFanFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconToysFanFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconToysFanFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconToysFanFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconToysFanFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconToysFanFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
