import IconAspectRatioFill0Wght100Grad0Opsz48 from '../components/AspectRatioFill0Wght100Grad0Opsz48'
import IconAspectRatioFill0Wght200Grad0Opsz48 from '../components/AspectRatioFill0Wght200Grad0Opsz48'
import IconAspectRatioFill0Wght300Grad0Opsz48 from '../components/AspectRatioFill0Wght300Grad0Opsz48'
import IconAspectRatioFill0Wght400Grad0Opsz48 from '../components/AspectRatioFill0Wght400Grad0Opsz48'
import IconAspectRatioFill0Wght500Grad0Opsz48 from '../components/AspectRatioFill0Wght500Grad0Opsz48'
import IconAspectRatioFill0Wght600Grad0Opsz48 from '../components/AspectRatioFill0Wght600Grad0Opsz48'
import IconAspectRatioFill0Wght700Grad0Opsz48 from '../components/AspectRatioFill0Wght700Grad0Opsz48'
import IconAspectRatioFill1Wght100Grad0Opsz48 from '../components/AspectRatioFill1Wght100Grad0Opsz48'
import IconAspectRatioFill1Wght200Grad0Opsz48 from '../components/AspectRatioFill1Wght200Grad0Opsz48'
import IconAspectRatioFill1Wght300Grad0Opsz48 from '../components/AspectRatioFill1Wght300Grad0Opsz48'
import IconAspectRatioFill1Wght400Grad0Opsz48 from '../components/AspectRatioFill1Wght400Grad0Opsz48'
import IconAspectRatioFill1Wght500Grad0Opsz48 from '../components/AspectRatioFill1Wght500Grad0Opsz48'
import IconAspectRatioFill1Wght600Grad0Opsz48 from '../components/AspectRatioFill1Wght600Grad0Opsz48'
import IconAspectRatioFill1Wght700Grad0Opsz48 from '../components/AspectRatioFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAspectRatio = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAspectRatioFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAspectRatioFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAspectRatioFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAspectRatioFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAspectRatioFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAspectRatioFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAspectRatioFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAspectRatioFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAspectRatioFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAspectRatioFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAspectRatioFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAspectRatioFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAspectRatioFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAspectRatioFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
