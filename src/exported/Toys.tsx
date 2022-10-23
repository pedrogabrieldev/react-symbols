import IconToysFill0Wght100Grad0Opsz48 from '../components/ToysFill0Wght100Grad0Opsz48'
import IconToysFill0Wght200Grad0Opsz48 from '../components/ToysFill0Wght200Grad0Opsz48'
import IconToysFill0Wght300Grad0Opsz48 from '../components/ToysFill0Wght300Grad0Opsz48'
import IconToysFill0Wght400Grad0Opsz48 from '../components/ToysFill0Wght400Grad0Opsz48'
import IconToysFill0Wght500Grad0Opsz48 from '../components/ToysFill0Wght500Grad0Opsz48'
import IconToysFill0Wght600Grad0Opsz48 from '../components/ToysFill0Wght600Grad0Opsz48'
import IconToysFill0Wght700Grad0Opsz48 from '../components/ToysFill0Wght700Grad0Opsz48'
import IconToysFill1Wght100Grad0Opsz48 from '../components/ToysFill1Wght100Grad0Opsz48'
import IconToysFill1Wght200Grad0Opsz48 from '../components/ToysFill1Wght200Grad0Opsz48'
import IconToysFill1Wght300Grad0Opsz48 from '../components/ToysFill1Wght300Grad0Opsz48'
import IconToysFill1Wght400Grad0Opsz48 from '../components/ToysFill1Wght400Grad0Opsz48'
import IconToysFill1Wght500Grad0Opsz48 from '../components/ToysFill1Wght500Grad0Opsz48'
import IconToysFill1Wght600Grad0Opsz48 from '../components/ToysFill1Wght600Grad0Opsz48'
import IconToysFill1Wght700Grad0Opsz48 from '../components/ToysFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToys = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconToysFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconToysFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconToysFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconToysFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconToysFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconToysFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconToysFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconToysFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconToysFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconToysFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconToysFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconToysFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconToysFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconToysFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
