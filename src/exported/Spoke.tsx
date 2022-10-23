import IconSpokeFill0Wght100Grad0Opsz48 from '../components/SpokeFill0Wght100Grad0Opsz48'
import IconSpokeFill0Wght200Grad0Opsz48 from '../components/SpokeFill0Wght200Grad0Opsz48'
import IconSpokeFill0Wght300Grad0Opsz48 from '../components/SpokeFill0Wght300Grad0Opsz48'
import IconSpokeFill0Wght400Grad0Opsz48 from '../components/SpokeFill0Wght400Grad0Opsz48'
import IconSpokeFill0Wght500Grad0Opsz48 from '../components/SpokeFill0Wght500Grad0Opsz48'
import IconSpokeFill0Wght600Grad0Opsz48 from '../components/SpokeFill0Wght600Grad0Opsz48'
import IconSpokeFill0Wght700Grad0Opsz48 from '../components/SpokeFill0Wght700Grad0Opsz48'
import IconSpokeFill1Wght100Grad0Opsz48 from '../components/SpokeFill1Wght100Grad0Opsz48'
import IconSpokeFill1Wght200Grad0Opsz48 from '../components/SpokeFill1Wght200Grad0Opsz48'
import IconSpokeFill1Wght300Grad0Opsz48 from '../components/SpokeFill1Wght300Grad0Opsz48'
import IconSpokeFill1Wght400Grad0Opsz48 from '../components/SpokeFill1Wght400Grad0Opsz48'
import IconSpokeFill1Wght500Grad0Opsz48 from '../components/SpokeFill1Wght500Grad0Opsz48'
import IconSpokeFill1Wght600Grad0Opsz48 from '../components/SpokeFill1Wght600Grad0Opsz48'
import IconSpokeFill1Wght700Grad0Opsz48 from '../components/SpokeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpoke = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpokeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpokeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpokeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpokeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpokeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpokeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpokeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpokeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpokeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpokeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpokeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpokeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpokeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpokeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
