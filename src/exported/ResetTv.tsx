import IconResetTvFill0Wght100Grad0Opsz48 from '../components/ResetTvFill0Wght100Grad0Opsz48'
import IconResetTvFill0Wght200Grad0Opsz48 from '../components/ResetTvFill0Wght200Grad0Opsz48'
import IconResetTvFill0Wght300Grad0Opsz48 from '../components/ResetTvFill0Wght300Grad0Opsz48'
import IconResetTvFill0Wght400Grad0Opsz48 from '../components/ResetTvFill0Wght400Grad0Opsz48'
import IconResetTvFill0Wght500Grad0Opsz48 from '../components/ResetTvFill0Wght500Grad0Opsz48'
import IconResetTvFill0Wght600Grad0Opsz48 from '../components/ResetTvFill0Wght600Grad0Opsz48'
import IconResetTvFill0Wght700Grad0Opsz48 from '../components/ResetTvFill0Wght700Grad0Opsz48'
import IconResetTvFill1Wght100Grad0Opsz48 from '../components/ResetTvFill1Wght100Grad0Opsz48'
import IconResetTvFill1Wght200Grad0Opsz48 from '../components/ResetTvFill1Wght200Grad0Opsz48'
import IconResetTvFill1Wght300Grad0Opsz48 from '../components/ResetTvFill1Wght300Grad0Opsz48'
import IconResetTvFill1Wght400Grad0Opsz48 from '../components/ResetTvFill1Wght400Grad0Opsz48'
import IconResetTvFill1Wght500Grad0Opsz48 from '../components/ResetTvFill1Wght500Grad0Opsz48'
import IconResetTvFill1Wght600Grad0Opsz48 from '../components/ResetTvFill1Wght600Grad0Opsz48'
import IconResetTvFill1Wght700Grad0Opsz48 from '../components/ResetTvFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconResetTv = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconResetTvFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconResetTvFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconResetTvFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconResetTvFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconResetTvFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconResetTvFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconResetTvFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconResetTvFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconResetTvFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconResetTvFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconResetTvFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconResetTvFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconResetTvFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconResetTvFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
