import IconAccountBoxFill0Wght100Grad0Opsz48 from '../components/AccountBoxFill0Wght100Grad0Opsz48'
import IconAccountBoxFill0Wght200Grad0Opsz48 from '../components/AccountBoxFill0Wght200Grad0Opsz48'
import IconAccountBoxFill0Wght300Grad0Opsz48 from '../components/AccountBoxFill0Wght300Grad0Opsz48'
import IconAccountBoxFill0Wght400Grad0Opsz48 from '../components/AccountBoxFill0Wght400Grad0Opsz48'
import IconAccountBoxFill0Wght500Grad0Opsz48 from '../components/AccountBoxFill0Wght500Grad0Opsz48'
import IconAccountBoxFill0Wght600Grad0Opsz48 from '../components/AccountBoxFill0Wght600Grad0Opsz48'
import IconAccountBoxFill0Wght700Grad0Opsz48 from '../components/AccountBoxFill0Wght700Grad0Opsz48'
import IconAccountBoxFill1Wght100Grad0Opsz48 from '../components/AccountBoxFill1Wght100Grad0Opsz48'
import IconAccountBoxFill1Wght200Grad0Opsz48 from '../components/AccountBoxFill1Wght200Grad0Opsz48'
import IconAccountBoxFill1Wght300Grad0Opsz48 from '../components/AccountBoxFill1Wght300Grad0Opsz48'
import IconAccountBoxFill1Wght400Grad0Opsz48 from '../components/AccountBoxFill1Wght400Grad0Opsz48'
import IconAccountBoxFill1Wght500Grad0Opsz48 from '../components/AccountBoxFill1Wght500Grad0Opsz48'
import IconAccountBoxFill1Wght600Grad0Opsz48 from '../components/AccountBoxFill1Wght600Grad0Opsz48'
import IconAccountBoxFill1Wght700Grad0Opsz48 from '../components/AccountBoxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAccountBox = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAccountBoxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAccountBoxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAccountBoxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAccountBoxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAccountBoxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAccountBoxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAccountBoxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAccountBoxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAccountBoxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAccountBoxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAccountBoxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAccountBoxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAccountBoxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAccountBoxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
