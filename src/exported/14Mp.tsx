import Icon14MpFill0Wght100Grad0Opsz48 from '../components/14MpFill0Wght100Grad0Opsz48'
import Icon14MpFill0Wght200Grad0Opsz48 from '../components/14MpFill0Wght200Grad0Opsz48'
import Icon14MpFill0Wght300Grad0Opsz48 from '../components/14MpFill0Wght300Grad0Opsz48'
import Icon14MpFill0Wght400Grad0Opsz48 from '../components/14MpFill0Wght400Grad0Opsz48'
import Icon14MpFill0Wght500Grad0Opsz48 from '../components/14MpFill0Wght500Grad0Opsz48'
import Icon14MpFill0Wght600Grad0Opsz48 from '../components/14MpFill0Wght600Grad0Opsz48'
import Icon14MpFill0Wght700Grad0Opsz48 from '../components/14MpFill0Wght700Grad0Opsz48'
import Icon14MpFill1Wght100Grad0Opsz48 from '../components/14MpFill1Wght100Grad0Opsz48'
import Icon14MpFill1Wght200Grad0Opsz48 from '../components/14MpFill1Wght200Grad0Opsz48'
import Icon14MpFill1Wght300Grad0Opsz48 from '../components/14MpFill1Wght300Grad0Opsz48'
import Icon14MpFill1Wght400Grad0Opsz48 from '../components/14MpFill1Wght400Grad0Opsz48'
import Icon14MpFill1Wght500Grad0Opsz48 from '../components/14MpFill1Wght500Grad0Opsz48'
import Icon14MpFill1Wght600Grad0Opsz48 from '../components/14MpFill1Wght600Grad0Opsz48'
import Icon14MpFill1Wght700Grad0Opsz48 from '../components/14MpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon14Mp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon14MpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon14MpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon14MpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon14MpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon14MpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon14MpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon14MpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon14MpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon14MpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon14MpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon14MpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon14MpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon14MpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon14MpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
