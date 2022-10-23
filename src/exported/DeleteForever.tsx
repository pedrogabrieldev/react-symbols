import IconDeleteForeverFill0Wght100Grad0Opsz48 from '../components/DeleteForeverFill0Wght100Grad0Opsz48'
import IconDeleteForeverFill0Wght200Grad0Opsz48 from '../components/DeleteForeverFill0Wght200Grad0Opsz48'
import IconDeleteForeverFill0Wght300Grad0Opsz48 from '../components/DeleteForeverFill0Wght300Grad0Opsz48'
import IconDeleteForeverFill0Wght400Grad0Opsz48 from '../components/DeleteForeverFill0Wght400Grad0Opsz48'
import IconDeleteForeverFill0Wght500Grad0Opsz48 from '../components/DeleteForeverFill0Wght500Grad0Opsz48'
import IconDeleteForeverFill0Wght600Grad0Opsz48 from '../components/DeleteForeverFill0Wght600Grad0Opsz48'
import IconDeleteForeverFill0Wght700Grad0Opsz48 from '../components/DeleteForeverFill0Wght700Grad0Opsz48'
import IconDeleteForeverFill1Wght100Grad0Opsz48 from '../components/DeleteForeverFill1Wght100Grad0Opsz48'
import IconDeleteForeverFill1Wght200Grad0Opsz48 from '../components/DeleteForeverFill1Wght200Grad0Opsz48'
import IconDeleteForeverFill1Wght300Grad0Opsz48 from '../components/DeleteForeverFill1Wght300Grad0Opsz48'
import IconDeleteForeverFill1Wght400Grad0Opsz48 from '../components/DeleteForeverFill1Wght400Grad0Opsz48'
import IconDeleteForeverFill1Wght500Grad0Opsz48 from '../components/DeleteForeverFill1Wght500Grad0Opsz48'
import IconDeleteForeverFill1Wght600Grad0Opsz48 from '../components/DeleteForeverFill1Wght600Grad0Opsz48'
import IconDeleteForeverFill1Wght700Grad0Opsz48 from '../components/DeleteForeverFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDeleteForever = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDeleteForeverFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDeleteForeverFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDeleteForeverFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDeleteForeverFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDeleteForeverFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDeleteForeverFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDeleteForeverFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDeleteForeverFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDeleteForeverFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDeleteForeverFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDeleteForeverFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDeleteForeverFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDeleteForeverFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDeleteForeverFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
