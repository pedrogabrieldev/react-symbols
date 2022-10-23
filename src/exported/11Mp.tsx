import Icon11MpFill0Wght100Grad0Opsz48 from '../components/11MpFill0Wght100Grad0Opsz48'
import Icon11MpFill0Wght200Grad0Opsz48 from '../components/11MpFill0Wght200Grad0Opsz48'
import Icon11MpFill0Wght300Grad0Opsz48 from '../components/11MpFill0Wght300Grad0Opsz48'
import Icon11MpFill0Wght400Grad0Opsz48 from '../components/11MpFill0Wght400Grad0Opsz48'
import Icon11MpFill0Wght500Grad0Opsz48 from '../components/11MpFill0Wght500Grad0Opsz48'
import Icon11MpFill0Wght600Grad0Opsz48 from '../components/11MpFill0Wght600Grad0Opsz48'
import Icon11MpFill0Wght700Grad0Opsz48 from '../components/11MpFill0Wght700Grad0Opsz48'
import Icon11MpFill1Wght100Grad0Opsz48 from '../components/11MpFill1Wght100Grad0Opsz48'
import Icon11MpFill1Wght200Grad0Opsz48 from '../components/11MpFill1Wght200Grad0Opsz48'
import Icon11MpFill1Wght300Grad0Opsz48 from '../components/11MpFill1Wght300Grad0Opsz48'
import Icon11MpFill1Wght400Grad0Opsz48 from '../components/11MpFill1Wght400Grad0Opsz48'
import Icon11MpFill1Wght500Grad0Opsz48 from '../components/11MpFill1Wght500Grad0Opsz48'
import Icon11MpFill1Wght600Grad0Opsz48 from '../components/11MpFill1Wght600Grad0Opsz48'
import Icon11MpFill1Wght700Grad0Opsz48 from '../components/11MpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon11Mp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon11MpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon11MpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon11MpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon11MpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon11MpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon11MpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon11MpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon11MpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon11MpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon11MpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon11MpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon11MpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon11MpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon11MpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
