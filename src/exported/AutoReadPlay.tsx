import IconAutoReadPlayFill0Wght100Grad0Opsz48 from '../components/AutoReadPlayFill0Wght100Grad0Opsz48'
import IconAutoReadPlayFill0Wght200Grad0Opsz48 from '../components/AutoReadPlayFill0Wght200Grad0Opsz48'
import IconAutoReadPlayFill0Wght300Grad0Opsz48 from '../components/AutoReadPlayFill0Wght300Grad0Opsz48'
import IconAutoReadPlayFill0Wght400Grad0Opsz48 from '../components/AutoReadPlayFill0Wght400Grad0Opsz48'
import IconAutoReadPlayFill0Wght500Grad0Opsz48 from '../components/AutoReadPlayFill0Wght500Grad0Opsz48'
import IconAutoReadPlayFill0Wght600Grad0Opsz48 from '../components/AutoReadPlayFill0Wght600Grad0Opsz48'
import IconAutoReadPlayFill0Wght700Grad0Opsz48 from '../components/AutoReadPlayFill0Wght700Grad0Opsz48'
import IconAutoReadPlayFill1Wght100Grad0Opsz48 from '../components/AutoReadPlayFill1Wght100Grad0Opsz48'
import IconAutoReadPlayFill1Wght200Grad0Opsz48 from '../components/AutoReadPlayFill1Wght200Grad0Opsz48'
import IconAutoReadPlayFill1Wght300Grad0Opsz48 from '../components/AutoReadPlayFill1Wght300Grad0Opsz48'
import IconAutoReadPlayFill1Wght400Grad0Opsz48 from '../components/AutoReadPlayFill1Wght400Grad0Opsz48'
import IconAutoReadPlayFill1Wght500Grad0Opsz48 from '../components/AutoReadPlayFill1Wght500Grad0Opsz48'
import IconAutoReadPlayFill1Wght600Grad0Opsz48 from '../components/AutoReadPlayFill1Wght600Grad0Opsz48'
import IconAutoReadPlayFill1Wght700Grad0Opsz48 from '../components/AutoReadPlayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoReadPlay = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoReadPlayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoReadPlayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoReadPlayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoReadPlayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoReadPlayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoReadPlayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoReadPlayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoReadPlayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoReadPlayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoReadPlayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoReadPlayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoReadPlayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoReadPlayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoReadPlayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
