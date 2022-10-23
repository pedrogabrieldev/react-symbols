import IconListFill0Wght100Grad0Opsz48 from '../components/ListFill0Wght100Grad0Opsz48'
import IconListFill0Wght200Grad0Opsz48 from '../components/ListFill0Wght200Grad0Opsz48'
import IconListFill0Wght300Grad0Opsz48 from '../components/ListFill0Wght300Grad0Opsz48'
import IconListFill0Wght400Grad0Opsz48 from '../components/ListFill0Wght400Grad0Opsz48'
import IconListFill0Wght500Grad0Opsz48 from '../components/ListFill0Wght500Grad0Opsz48'
import IconListFill0Wght600Grad0Opsz48 from '../components/ListFill0Wght600Grad0Opsz48'
import IconListFill0Wght700Grad0Opsz48 from '../components/ListFill0Wght700Grad0Opsz48'
import IconListFill1Wght100Grad0Opsz48 from '../components/ListFill1Wght100Grad0Opsz48'
import IconListFill1Wght200Grad0Opsz48 from '../components/ListFill1Wght200Grad0Opsz48'
import IconListFill1Wght300Grad0Opsz48 from '../components/ListFill1Wght300Grad0Opsz48'
import IconListFill1Wght400Grad0Opsz48 from '../components/ListFill1Wght400Grad0Opsz48'
import IconListFill1Wght500Grad0Opsz48 from '../components/ListFill1Wght500Grad0Opsz48'
import IconListFill1Wght600Grad0Opsz48 from '../components/ListFill1Wght600Grad0Opsz48'
import IconListFill1Wght700Grad0Opsz48 from '../components/ListFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconList = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconListFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconListFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconListFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconListFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconListFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconListFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconListFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconListFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconListFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconListFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconListFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconListFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconListFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconListFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
