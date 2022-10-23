import IconMenuBookFill0Wght100Grad0Opsz48 from '../components/MenuBookFill0Wght100Grad0Opsz48'
import IconMenuBookFill0Wght200Grad0Opsz48 from '../components/MenuBookFill0Wght200Grad0Opsz48'
import IconMenuBookFill0Wght300Grad0Opsz48 from '../components/MenuBookFill0Wght300Grad0Opsz48'
import IconMenuBookFill0Wght400Grad0Opsz48 from '../components/MenuBookFill0Wght400Grad0Opsz48'
import IconMenuBookFill0Wght500Grad0Opsz48 from '../components/MenuBookFill0Wght500Grad0Opsz48'
import IconMenuBookFill0Wght600Grad0Opsz48 from '../components/MenuBookFill0Wght600Grad0Opsz48'
import IconMenuBookFill0Wght700Grad0Opsz48 from '../components/MenuBookFill0Wght700Grad0Opsz48'
import IconMenuBookFill1Wght100Grad0Opsz48 from '../components/MenuBookFill1Wght100Grad0Opsz48'
import IconMenuBookFill1Wght200Grad0Opsz48 from '../components/MenuBookFill1Wght200Grad0Opsz48'
import IconMenuBookFill1Wght300Grad0Opsz48 from '../components/MenuBookFill1Wght300Grad0Opsz48'
import IconMenuBookFill1Wght400Grad0Opsz48 from '../components/MenuBookFill1Wght400Grad0Opsz48'
import IconMenuBookFill1Wght500Grad0Opsz48 from '../components/MenuBookFill1Wght500Grad0Opsz48'
import IconMenuBookFill1Wght600Grad0Opsz48 from '../components/MenuBookFill1Wght600Grad0Opsz48'
import IconMenuBookFill1Wght700Grad0Opsz48 from '../components/MenuBookFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMenuBook = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMenuBookFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMenuBookFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMenuBookFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMenuBookFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMenuBookFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMenuBookFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMenuBookFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMenuBookFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMenuBookFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMenuBookFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMenuBookFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMenuBookFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMenuBookFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMenuBookFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
