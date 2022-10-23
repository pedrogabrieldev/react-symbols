import IconPlayDisabledFill0Wght100Grad0Opsz48 from '../components/PlayDisabledFill0Wght100Grad0Opsz48'
import IconPlayDisabledFill0Wght200Grad0Opsz48 from '../components/PlayDisabledFill0Wght200Grad0Opsz48'
import IconPlayDisabledFill0Wght300Grad0Opsz48 from '../components/PlayDisabledFill0Wght300Grad0Opsz48'
import IconPlayDisabledFill0Wght400Grad0Opsz48 from '../components/PlayDisabledFill0Wght400Grad0Opsz48'
import IconPlayDisabledFill0Wght500Grad0Opsz48 from '../components/PlayDisabledFill0Wght500Grad0Opsz48'
import IconPlayDisabledFill0Wght600Grad0Opsz48 from '../components/PlayDisabledFill0Wght600Grad0Opsz48'
import IconPlayDisabledFill0Wght700Grad0Opsz48 from '../components/PlayDisabledFill0Wght700Grad0Opsz48'
import IconPlayDisabledFill1Wght100Grad0Opsz48 from '../components/PlayDisabledFill1Wght100Grad0Opsz48'
import IconPlayDisabledFill1Wght200Grad0Opsz48 from '../components/PlayDisabledFill1Wght200Grad0Opsz48'
import IconPlayDisabledFill1Wght300Grad0Opsz48 from '../components/PlayDisabledFill1Wght300Grad0Opsz48'
import IconPlayDisabledFill1Wght400Grad0Opsz48 from '../components/PlayDisabledFill1Wght400Grad0Opsz48'
import IconPlayDisabledFill1Wght500Grad0Opsz48 from '../components/PlayDisabledFill1Wght500Grad0Opsz48'
import IconPlayDisabledFill1Wght600Grad0Opsz48 from '../components/PlayDisabledFill1Wght600Grad0Opsz48'
import IconPlayDisabledFill1Wght700Grad0Opsz48 from '../components/PlayDisabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlayDisabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlayDisabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlayDisabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlayDisabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlayDisabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlayDisabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlayDisabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlayDisabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlayDisabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlayDisabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlayDisabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlayDisabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlayDisabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlayDisabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlayDisabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
