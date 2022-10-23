import IconPersonAddFill0Wght100Grad0Opsz48 from '../components/PersonAddFill0Wght100Grad0Opsz48'
import IconPersonAddFill0Wght200Grad0Opsz48 from '../components/PersonAddFill0Wght200Grad0Opsz48'
import IconPersonAddFill0Wght300Grad0Opsz48 from '../components/PersonAddFill0Wght300Grad0Opsz48'
import IconPersonAddFill0Wght400Grad0Opsz48 from '../components/PersonAddFill0Wght400Grad0Opsz48'
import IconPersonAddFill0Wght500Grad0Opsz48 from '../components/PersonAddFill0Wght500Grad0Opsz48'
import IconPersonAddFill0Wght600Grad0Opsz48 from '../components/PersonAddFill0Wght600Grad0Opsz48'
import IconPersonAddFill0Wght700Grad0Opsz48 from '../components/PersonAddFill0Wght700Grad0Opsz48'
import IconPersonAddFill1Wght100Grad0Opsz48 from '../components/PersonAddFill1Wght100Grad0Opsz48'
import IconPersonAddFill1Wght200Grad0Opsz48 from '../components/PersonAddFill1Wght200Grad0Opsz48'
import IconPersonAddFill1Wght300Grad0Opsz48 from '../components/PersonAddFill1Wght300Grad0Opsz48'
import IconPersonAddFill1Wght400Grad0Opsz48 from '../components/PersonAddFill1Wght400Grad0Opsz48'
import IconPersonAddFill1Wght500Grad0Opsz48 from '../components/PersonAddFill1Wght500Grad0Opsz48'
import IconPersonAddFill1Wght600Grad0Opsz48 from '../components/PersonAddFill1Wght600Grad0Opsz48'
import IconPersonAddFill1Wght700Grad0Opsz48 from '../components/PersonAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPersonAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPersonAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPersonAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPersonAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPersonAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPersonAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPersonAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPersonAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPersonAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPersonAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPersonAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPersonAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPersonAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPersonAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPersonAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
