import IconAtrFill0Wght100Grad0Opsz48 from '../components/AtrFill0Wght100Grad0Opsz48'
import IconAtrFill0Wght200Grad0Opsz48 from '../components/AtrFill0Wght200Grad0Opsz48'
import IconAtrFill0Wght300Grad0Opsz48 from '../components/AtrFill0Wght300Grad0Opsz48'
import IconAtrFill0Wght400Grad0Opsz48 from '../components/AtrFill0Wght400Grad0Opsz48'
import IconAtrFill0Wght500Grad0Opsz48 from '../components/AtrFill0Wght500Grad0Opsz48'
import IconAtrFill0Wght600Grad0Opsz48 from '../components/AtrFill0Wght600Grad0Opsz48'
import IconAtrFill0Wght700Grad0Opsz48 from '../components/AtrFill0Wght700Grad0Opsz48'
import IconAtrFill1Wght100Grad0Opsz48 from '../components/AtrFill1Wght100Grad0Opsz48'
import IconAtrFill1Wght200Grad0Opsz48 from '../components/AtrFill1Wght200Grad0Opsz48'
import IconAtrFill1Wght300Grad0Opsz48 from '../components/AtrFill1Wght300Grad0Opsz48'
import IconAtrFill1Wght400Grad0Opsz48 from '../components/AtrFill1Wght400Grad0Opsz48'
import IconAtrFill1Wght500Grad0Opsz48 from '../components/AtrFill1Wght500Grad0Opsz48'
import IconAtrFill1Wght600Grad0Opsz48 from '../components/AtrFill1Wght600Grad0Opsz48'
import IconAtrFill1Wght700Grad0Opsz48 from '../components/AtrFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAtr = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAtrFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAtrFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAtrFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAtrFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAtrFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAtrFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAtrFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAtrFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAtrFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAtrFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAtrFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAtrFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAtrFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAtrFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
