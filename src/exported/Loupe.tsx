import IconLoupeFill0Wght100Grad0Opsz48 from '../components/LoupeFill0Wght100Grad0Opsz48'
import IconLoupeFill0Wght200Grad0Opsz48 from '../components/LoupeFill0Wght200Grad0Opsz48'
import IconLoupeFill0Wght300Grad0Opsz48 from '../components/LoupeFill0Wght300Grad0Opsz48'
import IconLoupeFill0Wght400Grad0Opsz48 from '../components/LoupeFill0Wght400Grad0Opsz48'
import IconLoupeFill0Wght500Grad0Opsz48 from '../components/LoupeFill0Wght500Grad0Opsz48'
import IconLoupeFill0Wght600Grad0Opsz48 from '../components/LoupeFill0Wght600Grad0Opsz48'
import IconLoupeFill0Wght700Grad0Opsz48 from '../components/LoupeFill0Wght700Grad0Opsz48'
import IconLoupeFill1Wght100Grad0Opsz48 from '../components/LoupeFill1Wght100Grad0Opsz48'
import IconLoupeFill1Wght200Grad0Opsz48 from '../components/LoupeFill1Wght200Grad0Opsz48'
import IconLoupeFill1Wght300Grad0Opsz48 from '../components/LoupeFill1Wght300Grad0Opsz48'
import IconLoupeFill1Wght400Grad0Opsz48 from '../components/LoupeFill1Wght400Grad0Opsz48'
import IconLoupeFill1Wght500Grad0Opsz48 from '../components/LoupeFill1Wght500Grad0Opsz48'
import IconLoupeFill1Wght600Grad0Opsz48 from '../components/LoupeFill1Wght600Grad0Opsz48'
import IconLoupeFill1Wght700Grad0Opsz48 from '../components/LoupeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLoupe = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLoupeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLoupeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLoupeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLoupeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLoupeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLoupeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLoupeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLoupeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLoupeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLoupeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLoupeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLoupeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLoupeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLoupeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
