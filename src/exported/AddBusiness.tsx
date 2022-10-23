import IconAddBusinessFill0Wght100Grad0Opsz48 from '../components/AddBusinessFill0Wght100Grad0Opsz48'
import IconAddBusinessFill0Wght200Grad0Opsz48 from '../components/AddBusinessFill0Wght200Grad0Opsz48'
import IconAddBusinessFill0Wght300Grad0Opsz48 from '../components/AddBusinessFill0Wght300Grad0Opsz48'
import IconAddBusinessFill0Wght400Grad0Opsz48 from '../components/AddBusinessFill0Wght400Grad0Opsz48'
import IconAddBusinessFill0Wght500Grad0Opsz48 from '../components/AddBusinessFill0Wght500Grad0Opsz48'
import IconAddBusinessFill0Wght600Grad0Opsz48 from '../components/AddBusinessFill0Wght600Grad0Opsz48'
import IconAddBusinessFill0Wght700Grad0Opsz48 from '../components/AddBusinessFill0Wght700Grad0Opsz48'
import IconAddBusinessFill1Wght100Grad0Opsz48 from '../components/AddBusinessFill1Wght100Grad0Opsz48'
import IconAddBusinessFill1Wght200Grad0Opsz48 from '../components/AddBusinessFill1Wght200Grad0Opsz48'
import IconAddBusinessFill1Wght300Grad0Opsz48 from '../components/AddBusinessFill1Wght300Grad0Opsz48'
import IconAddBusinessFill1Wght400Grad0Opsz48 from '../components/AddBusinessFill1Wght400Grad0Opsz48'
import IconAddBusinessFill1Wght500Grad0Opsz48 from '../components/AddBusinessFill1Wght500Grad0Opsz48'
import IconAddBusinessFill1Wght600Grad0Opsz48 from '../components/AddBusinessFill1Wght600Grad0Opsz48'
import IconAddBusinessFill1Wght700Grad0Opsz48 from '../components/AddBusinessFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddBusiness = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddBusinessFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddBusinessFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddBusinessFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddBusinessFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddBusinessFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddBusinessFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddBusinessFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddBusinessFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddBusinessFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddBusinessFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddBusinessFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddBusinessFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddBusinessFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddBusinessFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
