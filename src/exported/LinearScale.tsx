import IconLinearScaleFill0Wght100Grad0Opsz48 from '../components/LinearScaleFill0Wght100Grad0Opsz48'
import IconLinearScaleFill0Wght200Grad0Opsz48 from '../components/LinearScaleFill0Wght200Grad0Opsz48'
import IconLinearScaleFill0Wght300Grad0Opsz48 from '../components/LinearScaleFill0Wght300Grad0Opsz48'
import IconLinearScaleFill0Wght400Grad0Opsz48 from '../components/LinearScaleFill0Wght400Grad0Opsz48'
import IconLinearScaleFill0Wght500Grad0Opsz48 from '../components/LinearScaleFill0Wght500Grad0Opsz48'
import IconLinearScaleFill0Wght600Grad0Opsz48 from '../components/LinearScaleFill0Wght600Grad0Opsz48'
import IconLinearScaleFill0Wght700Grad0Opsz48 from '../components/LinearScaleFill0Wght700Grad0Opsz48'
import IconLinearScaleFill1Wght100Grad0Opsz48 from '../components/LinearScaleFill1Wght100Grad0Opsz48'
import IconLinearScaleFill1Wght200Grad0Opsz48 from '../components/LinearScaleFill1Wght200Grad0Opsz48'
import IconLinearScaleFill1Wght300Grad0Opsz48 from '../components/LinearScaleFill1Wght300Grad0Opsz48'
import IconLinearScaleFill1Wght400Grad0Opsz48 from '../components/LinearScaleFill1Wght400Grad0Opsz48'
import IconLinearScaleFill1Wght500Grad0Opsz48 from '../components/LinearScaleFill1Wght500Grad0Opsz48'
import IconLinearScaleFill1Wght600Grad0Opsz48 from '../components/LinearScaleFill1Wght600Grad0Opsz48'
import IconLinearScaleFill1Wght700Grad0Opsz48 from '../components/LinearScaleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLinearScale = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLinearScaleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLinearScaleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLinearScaleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLinearScaleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLinearScaleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLinearScaleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLinearScaleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLinearScaleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLinearScaleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLinearScaleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLinearScaleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLinearScaleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLinearScaleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLinearScaleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
