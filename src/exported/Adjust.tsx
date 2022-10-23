import IconAdjustFill0Wght100Grad0Opsz48 from '../components/AdjustFill0Wght100Grad0Opsz48'
import IconAdjustFill0Wght200Grad0Opsz48 from '../components/AdjustFill0Wght200Grad0Opsz48'
import IconAdjustFill0Wght300Grad0Opsz48 from '../components/AdjustFill0Wght300Grad0Opsz48'
import IconAdjustFill0Wght400Grad0Opsz48 from '../components/AdjustFill0Wght400Grad0Opsz48'
import IconAdjustFill0Wght500Grad0Opsz48 from '../components/AdjustFill0Wght500Grad0Opsz48'
import IconAdjustFill0Wght600Grad0Opsz48 from '../components/AdjustFill0Wght600Grad0Opsz48'
import IconAdjustFill0Wght700Grad0Opsz48 from '../components/AdjustFill0Wght700Grad0Opsz48'
import IconAdjustFill1Wght100Grad0Opsz48 from '../components/AdjustFill1Wght100Grad0Opsz48'
import IconAdjustFill1Wght200Grad0Opsz48 from '../components/AdjustFill1Wght200Grad0Opsz48'
import IconAdjustFill1Wght300Grad0Opsz48 from '../components/AdjustFill1Wght300Grad0Opsz48'
import IconAdjustFill1Wght400Grad0Opsz48 from '../components/AdjustFill1Wght400Grad0Opsz48'
import IconAdjustFill1Wght500Grad0Opsz48 from '../components/AdjustFill1Wght500Grad0Opsz48'
import IconAdjustFill1Wght600Grad0Opsz48 from '../components/AdjustFill1Wght600Grad0Opsz48'
import IconAdjustFill1Wght700Grad0Opsz48 from '../components/AdjustFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAdjust = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAdjustFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAdjustFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAdjustFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAdjustFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAdjustFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAdjustFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAdjustFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAdjustFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAdjustFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAdjustFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAdjustFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAdjustFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAdjustFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAdjustFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
