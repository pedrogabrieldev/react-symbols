import IconAddFill0Wght100Grad0Opsz48 from '../components/AddFill0Wght100Grad0Opsz48'
import IconAddFill0Wght200Grad0Opsz48 from '../components/AddFill0Wght200Grad0Opsz48'
import IconAddFill0Wght300Grad0Opsz48 from '../components/AddFill0Wght300Grad0Opsz48'
import IconAddFill0Wght400Grad0Opsz48 from '../components/AddFill0Wght400Grad0Opsz48'
import IconAddFill0Wght500Grad0Opsz48 from '../components/AddFill0Wght500Grad0Opsz48'
import IconAddFill0Wght600Grad0Opsz48 from '../components/AddFill0Wght600Grad0Opsz48'
import IconAddFill0Wght700Grad0Opsz48 from '../components/AddFill0Wght700Grad0Opsz48'
import IconAddFill1Wght100Grad0Opsz48 from '../components/AddFill1Wght100Grad0Opsz48'
import IconAddFill1Wght200Grad0Opsz48 from '../components/AddFill1Wght200Grad0Opsz48'
import IconAddFill1Wght300Grad0Opsz48 from '../components/AddFill1Wght300Grad0Opsz48'
import IconAddFill1Wght400Grad0Opsz48 from '../components/AddFill1Wght400Grad0Opsz48'
import IconAddFill1Wght500Grad0Opsz48 from '../components/AddFill1Wght500Grad0Opsz48'
import IconAddFill1Wght600Grad0Opsz48 from '../components/AddFill1Wght600Grad0Opsz48'
import IconAddFill1Wght700Grad0Opsz48 from '../components/AddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
