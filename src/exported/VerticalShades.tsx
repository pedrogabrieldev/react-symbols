import IconVerticalShadesFill0Wght100Grad0Opsz48 from '../components/VerticalShadesFill0Wght100Grad0Opsz48'
import IconVerticalShadesFill0Wght200Grad0Opsz48 from '../components/VerticalShadesFill0Wght200Grad0Opsz48'
import IconVerticalShadesFill0Wght300Grad0Opsz48 from '../components/VerticalShadesFill0Wght300Grad0Opsz48'
import IconVerticalShadesFill0Wght400Grad0Opsz48 from '../components/VerticalShadesFill0Wght400Grad0Opsz48'
import IconVerticalShadesFill0Wght500Grad0Opsz48 from '../components/VerticalShadesFill0Wght500Grad0Opsz48'
import IconVerticalShadesFill0Wght600Grad0Opsz48 from '../components/VerticalShadesFill0Wght600Grad0Opsz48'
import IconVerticalShadesFill0Wght700Grad0Opsz48 from '../components/VerticalShadesFill0Wght700Grad0Opsz48'
import IconVerticalShadesFill1Wght100Grad0Opsz48 from '../components/VerticalShadesFill1Wght100Grad0Opsz48'
import IconVerticalShadesFill1Wght200Grad0Opsz48 from '../components/VerticalShadesFill1Wght200Grad0Opsz48'
import IconVerticalShadesFill1Wght300Grad0Opsz48 from '../components/VerticalShadesFill1Wght300Grad0Opsz48'
import IconVerticalShadesFill1Wght400Grad0Opsz48 from '../components/VerticalShadesFill1Wght400Grad0Opsz48'
import IconVerticalShadesFill1Wght500Grad0Opsz48 from '../components/VerticalShadesFill1Wght500Grad0Opsz48'
import IconVerticalShadesFill1Wght600Grad0Opsz48 from '../components/VerticalShadesFill1Wght600Grad0Opsz48'
import IconVerticalShadesFill1Wght700Grad0Opsz48 from '../components/VerticalShadesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVerticalShades = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVerticalShadesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVerticalShadesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVerticalShadesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVerticalShadesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVerticalShadesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVerticalShadesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVerticalShadesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVerticalShadesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVerticalShadesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVerticalShadesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVerticalShadesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVerticalShadesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVerticalShadesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVerticalShadesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
