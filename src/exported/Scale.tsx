import IconScaleFill0Wght100Grad0Opsz48 from '../components/ScaleFill0Wght100Grad0Opsz48'
import IconScaleFill0Wght200Grad0Opsz48 from '../components/ScaleFill0Wght200Grad0Opsz48'
import IconScaleFill0Wght300Grad0Opsz48 from '../components/ScaleFill0Wght300Grad0Opsz48'
import IconScaleFill0Wght400Grad0Opsz48 from '../components/ScaleFill0Wght400Grad0Opsz48'
import IconScaleFill0Wght500Grad0Opsz48 from '../components/ScaleFill0Wght500Grad0Opsz48'
import IconScaleFill0Wght600Grad0Opsz48 from '../components/ScaleFill0Wght600Grad0Opsz48'
import IconScaleFill0Wght700Grad0Opsz48 from '../components/ScaleFill0Wght700Grad0Opsz48'
import IconScaleFill1Wght100Grad0Opsz48 from '../components/ScaleFill1Wght100Grad0Opsz48'
import IconScaleFill1Wght200Grad0Opsz48 from '../components/ScaleFill1Wght200Grad0Opsz48'
import IconScaleFill1Wght300Grad0Opsz48 from '../components/ScaleFill1Wght300Grad0Opsz48'
import IconScaleFill1Wght400Grad0Opsz48 from '../components/ScaleFill1Wght400Grad0Opsz48'
import IconScaleFill1Wght500Grad0Opsz48 from '../components/ScaleFill1Wght500Grad0Opsz48'
import IconScaleFill1Wght600Grad0Opsz48 from '../components/ScaleFill1Wght600Grad0Opsz48'
import IconScaleFill1Wght700Grad0Opsz48 from '../components/ScaleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScale = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScaleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScaleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScaleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScaleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScaleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScaleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScaleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScaleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScaleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScaleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScaleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScaleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScaleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScaleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
