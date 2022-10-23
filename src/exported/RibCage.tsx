import IconRibCageFill0Wght100Grad0Opsz48 from '../components/RibCageFill0Wght100Grad0Opsz48'
import IconRibCageFill0Wght200Grad0Opsz48 from '../components/RibCageFill0Wght200Grad0Opsz48'
import IconRibCageFill0Wght300Grad0Opsz48 from '../components/RibCageFill0Wght300Grad0Opsz48'
import IconRibCageFill0Wght400Grad0Opsz48 from '../components/RibCageFill0Wght400Grad0Opsz48'
import IconRibCageFill0Wght500Grad0Opsz48 from '../components/RibCageFill0Wght500Grad0Opsz48'
import IconRibCageFill0Wght600Grad0Opsz48 from '../components/RibCageFill0Wght600Grad0Opsz48'
import IconRibCageFill0Wght700Grad0Opsz48 from '../components/RibCageFill0Wght700Grad0Opsz48'
import IconRibCageFill1Wght100Grad0Opsz48 from '../components/RibCageFill1Wght100Grad0Opsz48'
import IconRibCageFill1Wght200Grad0Opsz48 from '../components/RibCageFill1Wght200Grad0Opsz48'
import IconRibCageFill1Wght300Grad0Opsz48 from '../components/RibCageFill1Wght300Grad0Opsz48'
import IconRibCageFill1Wght400Grad0Opsz48 from '../components/RibCageFill1Wght400Grad0Opsz48'
import IconRibCageFill1Wght500Grad0Opsz48 from '../components/RibCageFill1Wght500Grad0Opsz48'
import IconRibCageFill1Wght600Grad0Opsz48 from '../components/RibCageFill1Wght600Grad0Opsz48'
import IconRibCageFill1Wght700Grad0Opsz48 from '../components/RibCageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRibCage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRibCageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRibCageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRibCageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRibCageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRibCageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRibCageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRibCageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRibCageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRibCageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRibCageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRibCageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRibCageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRibCageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRibCageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
