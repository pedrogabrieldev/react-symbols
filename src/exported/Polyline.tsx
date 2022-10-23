import IconPolylineFill0Wght100Grad0Opsz48 from '../components/PolylineFill0Wght100Grad0Opsz48'
import IconPolylineFill0Wght200Grad0Opsz48 from '../components/PolylineFill0Wght200Grad0Opsz48'
import IconPolylineFill0Wght300Grad0Opsz48 from '../components/PolylineFill0Wght300Grad0Opsz48'
import IconPolylineFill0Wght400Grad0Opsz48 from '../components/PolylineFill0Wght400Grad0Opsz48'
import IconPolylineFill0Wght500Grad0Opsz48 from '../components/PolylineFill0Wght500Grad0Opsz48'
import IconPolylineFill0Wght600Grad0Opsz48 from '../components/PolylineFill0Wght600Grad0Opsz48'
import IconPolylineFill0Wght700Grad0Opsz48 from '../components/PolylineFill0Wght700Grad0Opsz48'
import IconPolylineFill1Wght100Grad0Opsz48 from '../components/PolylineFill1Wght100Grad0Opsz48'
import IconPolylineFill1Wght200Grad0Opsz48 from '../components/PolylineFill1Wght200Grad0Opsz48'
import IconPolylineFill1Wght300Grad0Opsz48 from '../components/PolylineFill1Wght300Grad0Opsz48'
import IconPolylineFill1Wght400Grad0Opsz48 from '../components/PolylineFill1Wght400Grad0Opsz48'
import IconPolylineFill1Wght500Grad0Opsz48 from '../components/PolylineFill1Wght500Grad0Opsz48'
import IconPolylineFill1Wght600Grad0Opsz48 from '../components/PolylineFill1Wght600Grad0Opsz48'
import IconPolylineFill1Wght700Grad0Opsz48 from '../components/PolylineFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPolyline = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPolylineFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPolylineFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPolylineFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPolylineFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPolylineFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPolylineFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPolylineFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPolylineFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPolylineFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPolylineFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPolylineFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPolylineFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPolylineFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPolylineFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
