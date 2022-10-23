import IconRememberMeFill0Wght100Grad0Opsz48 from '../components/RememberMeFill0Wght100Grad0Opsz48'
import IconRememberMeFill0Wght200Grad0Opsz48 from '../components/RememberMeFill0Wght200Grad0Opsz48'
import IconRememberMeFill0Wght300Grad0Opsz48 from '../components/RememberMeFill0Wght300Grad0Opsz48'
import IconRememberMeFill0Wght400Grad0Opsz48 from '../components/RememberMeFill0Wght400Grad0Opsz48'
import IconRememberMeFill0Wght500Grad0Opsz48 from '../components/RememberMeFill0Wght500Grad0Opsz48'
import IconRememberMeFill0Wght600Grad0Opsz48 from '../components/RememberMeFill0Wght600Grad0Opsz48'
import IconRememberMeFill0Wght700Grad0Opsz48 from '../components/RememberMeFill0Wght700Grad0Opsz48'
import IconRememberMeFill1Wght100Grad0Opsz48 from '../components/RememberMeFill1Wght100Grad0Opsz48'
import IconRememberMeFill1Wght200Grad0Opsz48 from '../components/RememberMeFill1Wght200Grad0Opsz48'
import IconRememberMeFill1Wght300Grad0Opsz48 from '../components/RememberMeFill1Wght300Grad0Opsz48'
import IconRememberMeFill1Wght400Grad0Opsz48 from '../components/RememberMeFill1Wght400Grad0Opsz48'
import IconRememberMeFill1Wght500Grad0Opsz48 from '../components/RememberMeFill1Wght500Grad0Opsz48'
import IconRememberMeFill1Wght600Grad0Opsz48 from '../components/RememberMeFill1Wght600Grad0Opsz48'
import IconRememberMeFill1Wght700Grad0Opsz48 from '../components/RememberMeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRememberMe = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRememberMeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRememberMeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRememberMeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRememberMeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRememberMeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRememberMeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRememberMeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRememberMeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRememberMeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRememberMeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRememberMeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRememberMeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRememberMeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRememberMeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
