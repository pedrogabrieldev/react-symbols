import IconDrawFill0Wght100Grad0Opsz48 from '../components/DrawFill0Wght100Grad0Opsz48'
import IconDrawFill0Wght200Grad0Opsz48 from '../components/DrawFill0Wght200Grad0Opsz48'
import IconDrawFill0Wght300Grad0Opsz48 from '../components/DrawFill0Wght300Grad0Opsz48'
import IconDrawFill0Wght400Grad0Opsz48 from '../components/DrawFill0Wght400Grad0Opsz48'
import IconDrawFill0Wght500Grad0Opsz48 from '../components/DrawFill0Wght500Grad0Opsz48'
import IconDrawFill0Wght600Grad0Opsz48 from '../components/DrawFill0Wght600Grad0Opsz48'
import IconDrawFill0Wght700Grad0Opsz48 from '../components/DrawFill0Wght700Grad0Opsz48'
import IconDrawFill1Wght100Grad0Opsz48 from '../components/DrawFill1Wght100Grad0Opsz48'
import IconDrawFill1Wght200Grad0Opsz48 from '../components/DrawFill1Wght200Grad0Opsz48'
import IconDrawFill1Wght300Grad0Opsz48 from '../components/DrawFill1Wght300Grad0Opsz48'
import IconDrawFill1Wght400Grad0Opsz48 from '../components/DrawFill1Wght400Grad0Opsz48'
import IconDrawFill1Wght500Grad0Opsz48 from '../components/DrawFill1Wght500Grad0Opsz48'
import IconDrawFill1Wght600Grad0Opsz48 from '../components/DrawFill1Wght600Grad0Opsz48'
import IconDrawFill1Wght700Grad0Opsz48 from '../components/DrawFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDraw = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDrawFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDrawFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDrawFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDrawFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDrawFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDrawFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDrawFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDrawFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDrawFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDrawFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDrawFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDrawFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDrawFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDrawFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
