import IconTabFill0Wght100Grad0Opsz48 from '../components/TabFill0Wght100Grad0Opsz48'
import IconTabFill0Wght200Grad0Opsz48 from '../components/TabFill0Wght200Grad0Opsz48'
import IconTabFill0Wght300Grad0Opsz48 from '../components/TabFill0Wght300Grad0Opsz48'
import IconTabFill0Wght400Grad0Opsz48 from '../components/TabFill0Wght400Grad0Opsz48'
import IconTabFill0Wght500Grad0Opsz48 from '../components/TabFill0Wght500Grad0Opsz48'
import IconTabFill0Wght600Grad0Opsz48 from '../components/TabFill0Wght600Grad0Opsz48'
import IconTabFill0Wght700Grad0Opsz48 from '../components/TabFill0Wght700Grad0Opsz48'
import IconTabFill1Wght100Grad0Opsz48 from '../components/TabFill1Wght100Grad0Opsz48'
import IconTabFill1Wght200Grad0Opsz48 from '../components/TabFill1Wght200Grad0Opsz48'
import IconTabFill1Wght300Grad0Opsz48 from '../components/TabFill1Wght300Grad0Opsz48'
import IconTabFill1Wght400Grad0Opsz48 from '../components/TabFill1Wght400Grad0Opsz48'
import IconTabFill1Wght500Grad0Opsz48 from '../components/TabFill1Wght500Grad0Opsz48'
import IconTabFill1Wght600Grad0Opsz48 from '../components/TabFill1Wght600Grad0Opsz48'
import IconTabFill1Wght700Grad0Opsz48 from '../components/TabFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTab = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTabFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTabFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTabFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTabFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTabFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTabFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTabFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTabFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTabFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTabFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTabFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTabFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTabFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTabFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
