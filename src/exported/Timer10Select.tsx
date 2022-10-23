import IconTimer10SelectFill0Wght100Grad0Opsz48 from '../components/Timer10SelectFill0Wght100Grad0Opsz48'
import IconTimer10SelectFill0Wght200Grad0Opsz48 from '../components/Timer10SelectFill0Wght200Grad0Opsz48'
import IconTimer10SelectFill0Wght300Grad0Opsz48 from '../components/Timer10SelectFill0Wght300Grad0Opsz48'
import IconTimer10SelectFill0Wght400Grad0Opsz48 from '../components/Timer10SelectFill0Wght400Grad0Opsz48'
import IconTimer10SelectFill0Wght500Grad0Opsz48 from '../components/Timer10SelectFill0Wght500Grad0Opsz48'
import IconTimer10SelectFill0Wght600Grad0Opsz48 from '../components/Timer10SelectFill0Wght600Grad0Opsz48'
import IconTimer10SelectFill0Wght700Grad0Opsz48 from '../components/Timer10SelectFill0Wght700Grad0Opsz48'
import IconTimer10SelectFill1Wght100Grad0Opsz48 from '../components/Timer10SelectFill1Wght100Grad0Opsz48'
import IconTimer10SelectFill1Wght200Grad0Opsz48 from '../components/Timer10SelectFill1Wght200Grad0Opsz48'
import IconTimer10SelectFill1Wght300Grad0Opsz48 from '../components/Timer10SelectFill1Wght300Grad0Opsz48'
import IconTimer10SelectFill1Wght400Grad0Opsz48 from '../components/Timer10SelectFill1Wght400Grad0Opsz48'
import IconTimer10SelectFill1Wght500Grad0Opsz48 from '../components/Timer10SelectFill1Wght500Grad0Opsz48'
import IconTimer10SelectFill1Wght600Grad0Opsz48 from '../components/Timer10SelectFill1Wght600Grad0Opsz48'
import IconTimer10SelectFill1Wght700Grad0Opsz48 from '../components/Timer10SelectFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTimer10Select = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTimer10SelectFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTimer10SelectFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTimer10SelectFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTimer10SelectFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTimer10SelectFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTimer10SelectFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTimer10SelectFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTimer10SelectFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTimer10SelectFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTimer10SelectFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTimer10SelectFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTimer10SelectFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTimer10SelectFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTimer10SelectFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
