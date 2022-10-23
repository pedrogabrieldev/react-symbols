import IconDeleteFill0Wght100Grad0Opsz48 from '../components/DeleteFill0Wght100Grad0Opsz48'
import IconDeleteFill0Wght200Grad0Opsz48 from '../components/DeleteFill0Wght200Grad0Opsz48'
import IconDeleteFill0Wght300Grad0Opsz48 from '../components/DeleteFill0Wght300Grad0Opsz48'
import IconDeleteFill0Wght400Grad0Opsz48 from '../components/DeleteFill0Wght400Grad0Opsz48'
import IconDeleteFill0Wght500Grad0Opsz48 from '../components/DeleteFill0Wght500Grad0Opsz48'
import IconDeleteFill0Wght600Grad0Opsz48 from '../components/DeleteFill0Wght600Grad0Opsz48'
import IconDeleteFill0Wght700Grad0Opsz48 from '../components/DeleteFill0Wght700Grad0Opsz48'
import IconDeleteFill1Wght100Grad0Opsz48 from '../components/DeleteFill1Wght100Grad0Opsz48'
import IconDeleteFill1Wght200Grad0Opsz48 from '../components/DeleteFill1Wght200Grad0Opsz48'
import IconDeleteFill1Wght300Grad0Opsz48 from '../components/DeleteFill1Wght300Grad0Opsz48'
import IconDeleteFill1Wght400Grad0Opsz48 from '../components/DeleteFill1Wght400Grad0Opsz48'
import IconDeleteFill1Wght500Grad0Opsz48 from '../components/DeleteFill1Wght500Grad0Opsz48'
import IconDeleteFill1Wght600Grad0Opsz48 from '../components/DeleteFill1Wght600Grad0Opsz48'
import IconDeleteFill1Wght700Grad0Opsz48 from '../components/DeleteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDelete = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDeleteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDeleteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDeleteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDeleteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDeleteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDeleteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDeleteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDeleteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDeleteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDeleteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDeleteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDeleteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDeleteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDeleteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
