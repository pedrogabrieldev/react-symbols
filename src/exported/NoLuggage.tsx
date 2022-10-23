import IconNoLuggageFill0Wght100Grad0Opsz48 from '../components/NoLuggageFill0Wght100Grad0Opsz48'
import IconNoLuggageFill0Wght200Grad0Opsz48 from '../components/NoLuggageFill0Wght200Grad0Opsz48'
import IconNoLuggageFill0Wght300Grad0Opsz48 from '../components/NoLuggageFill0Wght300Grad0Opsz48'
import IconNoLuggageFill0Wght400Grad0Opsz48 from '../components/NoLuggageFill0Wght400Grad0Opsz48'
import IconNoLuggageFill0Wght500Grad0Opsz48 from '../components/NoLuggageFill0Wght500Grad0Opsz48'
import IconNoLuggageFill0Wght600Grad0Opsz48 from '../components/NoLuggageFill0Wght600Grad0Opsz48'
import IconNoLuggageFill0Wght700Grad0Opsz48 from '../components/NoLuggageFill0Wght700Grad0Opsz48'
import IconNoLuggageFill1Wght100Grad0Opsz48 from '../components/NoLuggageFill1Wght100Grad0Opsz48'
import IconNoLuggageFill1Wght200Grad0Opsz48 from '../components/NoLuggageFill1Wght200Grad0Opsz48'
import IconNoLuggageFill1Wght300Grad0Opsz48 from '../components/NoLuggageFill1Wght300Grad0Opsz48'
import IconNoLuggageFill1Wght400Grad0Opsz48 from '../components/NoLuggageFill1Wght400Grad0Opsz48'
import IconNoLuggageFill1Wght500Grad0Opsz48 from '../components/NoLuggageFill1Wght500Grad0Opsz48'
import IconNoLuggageFill1Wght600Grad0Opsz48 from '../components/NoLuggageFill1Wght600Grad0Opsz48'
import IconNoLuggageFill1Wght700Grad0Opsz48 from '../components/NoLuggageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoLuggage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoLuggageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoLuggageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoLuggageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoLuggageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoLuggageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoLuggageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoLuggageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoLuggageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoLuggageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoLuggageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoLuggageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoLuggageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoLuggageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoLuggageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
