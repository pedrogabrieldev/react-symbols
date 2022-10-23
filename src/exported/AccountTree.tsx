import IconAccountTreeFill0Wght100Grad0Opsz48 from '../components/AccountTreeFill0Wght100Grad0Opsz48'
import IconAccountTreeFill0Wght200Grad0Opsz48 from '../components/AccountTreeFill0Wght200Grad0Opsz48'
import IconAccountTreeFill0Wght300Grad0Opsz48 from '../components/AccountTreeFill0Wght300Grad0Opsz48'
import IconAccountTreeFill0Wght400Grad0Opsz48 from '../components/AccountTreeFill0Wght400Grad0Opsz48'
import IconAccountTreeFill0Wght500Grad0Opsz48 from '../components/AccountTreeFill0Wght500Grad0Opsz48'
import IconAccountTreeFill0Wght600Grad0Opsz48 from '../components/AccountTreeFill0Wght600Grad0Opsz48'
import IconAccountTreeFill0Wght700Grad0Opsz48 from '../components/AccountTreeFill0Wght700Grad0Opsz48'
import IconAccountTreeFill1Wght100Grad0Opsz48 from '../components/AccountTreeFill1Wght100Grad0Opsz48'
import IconAccountTreeFill1Wght200Grad0Opsz48 from '../components/AccountTreeFill1Wght200Grad0Opsz48'
import IconAccountTreeFill1Wght300Grad0Opsz48 from '../components/AccountTreeFill1Wght300Grad0Opsz48'
import IconAccountTreeFill1Wght400Grad0Opsz48 from '../components/AccountTreeFill1Wght400Grad0Opsz48'
import IconAccountTreeFill1Wght500Grad0Opsz48 from '../components/AccountTreeFill1Wght500Grad0Opsz48'
import IconAccountTreeFill1Wght600Grad0Opsz48 from '../components/AccountTreeFill1Wght600Grad0Opsz48'
import IconAccountTreeFill1Wght700Grad0Opsz48 from '../components/AccountTreeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAccountTree = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAccountTreeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAccountTreeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAccountTreeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAccountTreeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAccountTreeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAccountTreeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAccountTreeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAccountTreeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAccountTreeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAccountTreeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAccountTreeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAccountTreeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAccountTreeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAccountTreeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
