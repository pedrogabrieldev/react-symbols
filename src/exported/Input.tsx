import IconInputFill0Wght100Grad0Opsz48 from '../components/InputFill0Wght100Grad0Opsz48'
import IconInputFill0Wght200Grad0Opsz48 from '../components/InputFill0Wght200Grad0Opsz48'
import IconInputFill0Wght300Grad0Opsz48 from '../components/InputFill0Wght300Grad0Opsz48'
import IconInputFill0Wght400Grad0Opsz48 from '../components/InputFill0Wght400Grad0Opsz48'
import IconInputFill0Wght500Grad0Opsz48 from '../components/InputFill0Wght500Grad0Opsz48'
import IconInputFill0Wght600Grad0Opsz48 from '../components/InputFill0Wght600Grad0Opsz48'
import IconInputFill0Wght700Grad0Opsz48 from '../components/InputFill0Wght700Grad0Opsz48'
import IconInputFill1Wght100Grad0Opsz48 from '../components/InputFill1Wght100Grad0Opsz48'
import IconInputFill1Wght200Grad0Opsz48 from '../components/InputFill1Wght200Grad0Opsz48'
import IconInputFill1Wght300Grad0Opsz48 from '../components/InputFill1Wght300Grad0Opsz48'
import IconInputFill1Wght400Grad0Opsz48 from '../components/InputFill1Wght400Grad0Opsz48'
import IconInputFill1Wght500Grad0Opsz48 from '../components/InputFill1Wght500Grad0Opsz48'
import IconInputFill1Wght600Grad0Opsz48 from '../components/InputFill1Wght600Grad0Opsz48'
import IconInputFill1Wght700Grad0Opsz48 from '../components/InputFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInput = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInputFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInputFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInputFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInputFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInputFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInputFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInputFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInputFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInputFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInputFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInputFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInputFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInputFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInputFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
