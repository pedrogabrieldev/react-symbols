import Icon21MpFill0Wght100Grad0Opsz48 from '../components/21MpFill0Wght100Grad0Opsz48'
import Icon21MpFill0Wght200Grad0Opsz48 from '../components/21MpFill0Wght200Grad0Opsz48'
import Icon21MpFill0Wght300Grad0Opsz48 from '../components/21MpFill0Wght300Grad0Opsz48'
import Icon21MpFill0Wght400Grad0Opsz48 from '../components/21MpFill0Wght400Grad0Opsz48'
import Icon21MpFill0Wght500Grad0Opsz48 from '../components/21MpFill0Wght500Grad0Opsz48'
import Icon21MpFill0Wght600Grad0Opsz48 from '../components/21MpFill0Wght600Grad0Opsz48'
import Icon21MpFill0Wght700Grad0Opsz48 from '../components/21MpFill0Wght700Grad0Opsz48'
import Icon21MpFill1Wght100Grad0Opsz48 from '../components/21MpFill1Wght100Grad0Opsz48'
import Icon21MpFill1Wght200Grad0Opsz48 from '../components/21MpFill1Wght200Grad0Opsz48'
import Icon21MpFill1Wght300Grad0Opsz48 from '../components/21MpFill1Wght300Grad0Opsz48'
import Icon21MpFill1Wght400Grad0Opsz48 from '../components/21MpFill1Wght400Grad0Opsz48'
import Icon21MpFill1Wght500Grad0Opsz48 from '../components/21MpFill1Wght500Grad0Opsz48'
import Icon21MpFill1Wght600Grad0Opsz48 from '../components/21MpFill1Wght600Grad0Opsz48'
import Icon21MpFill1Wght700Grad0Opsz48 from '../components/21MpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon21Mp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon21MpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon21MpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon21MpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon21MpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon21MpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon21MpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon21MpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon21MpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon21MpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon21MpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon21MpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon21MpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon21MpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon21MpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
