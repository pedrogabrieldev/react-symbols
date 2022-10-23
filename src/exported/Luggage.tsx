import IconLuggageFill0Wght100Grad0Opsz48 from '../components/LuggageFill0Wght100Grad0Opsz48'
import IconLuggageFill0Wght200Grad0Opsz48 from '../components/LuggageFill0Wght200Grad0Opsz48'
import IconLuggageFill0Wght300Grad0Opsz48 from '../components/LuggageFill0Wght300Grad0Opsz48'
import IconLuggageFill0Wght400Grad0Opsz48 from '../components/LuggageFill0Wght400Grad0Opsz48'
import IconLuggageFill0Wght500Grad0Opsz48 from '../components/LuggageFill0Wght500Grad0Opsz48'
import IconLuggageFill0Wght600Grad0Opsz48 from '../components/LuggageFill0Wght600Grad0Opsz48'
import IconLuggageFill0Wght700Grad0Opsz48 from '../components/LuggageFill0Wght700Grad0Opsz48'
import IconLuggageFill1Wght100Grad0Opsz48 from '../components/LuggageFill1Wght100Grad0Opsz48'
import IconLuggageFill1Wght200Grad0Opsz48 from '../components/LuggageFill1Wght200Grad0Opsz48'
import IconLuggageFill1Wght300Grad0Opsz48 from '../components/LuggageFill1Wght300Grad0Opsz48'
import IconLuggageFill1Wght400Grad0Opsz48 from '../components/LuggageFill1Wght400Grad0Opsz48'
import IconLuggageFill1Wght500Grad0Opsz48 from '../components/LuggageFill1Wght500Grad0Opsz48'
import IconLuggageFill1Wght600Grad0Opsz48 from '../components/LuggageFill1Wght600Grad0Opsz48'
import IconLuggageFill1Wght700Grad0Opsz48 from '../components/LuggageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLuggage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLuggageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLuggageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLuggageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLuggageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLuggageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLuggageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLuggageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLuggageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLuggageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLuggageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLuggageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLuggageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLuggageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLuggageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
