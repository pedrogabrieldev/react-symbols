import IconPersonAddDisabledFill0Wght100Grad0Opsz48 from '../components/PersonAddDisabledFill0Wght100Grad0Opsz48'
import IconPersonAddDisabledFill0Wght200Grad0Opsz48 from '../components/PersonAddDisabledFill0Wght200Grad0Opsz48'
import IconPersonAddDisabledFill0Wght300Grad0Opsz48 from '../components/PersonAddDisabledFill0Wght300Grad0Opsz48'
import IconPersonAddDisabledFill0Wght400Grad0Opsz48 from '../components/PersonAddDisabledFill0Wght400Grad0Opsz48'
import IconPersonAddDisabledFill0Wght500Grad0Opsz48 from '../components/PersonAddDisabledFill0Wght500Grad0Opsz48'
import IconPersonAddDisabledFill0Wght600Grad0Opsz48 from '../components/PersonAddDisabledFill0Wght600Grad0Opsz48'
import IconPersonAddDisabledFill0Wght700Grad0Opsz48 from '../components/PersonAddDisabledFill0Wght700Grad0Opsz48'
import IconPersonAddDisabledFill1Wght100Grad0Opsz48 from '../components/PersonAddDisabledFill1Wght100Grad0Opsz48'
import IconPersonAddDisabledFill1Wght200Grad0Opsz48 from '../components/PersonAddDisabledFill1Wght200Grad0Opsz48'
import IconPersonAddDisabledFill1Wght300Grad0Opsz48 from '../components/PersonAddDisabledFill1Wght300Grad0Opsz48'
import IconPersonAddDisabledFill1Wght400Grad0Opsz48 from '../components/PersonAddDisabledFill1Wght400Grad0Opsz48'
import IconPersonAddDisabledFill1Wght500Grad0Opsz48 from '../components/PersonAddDisabledFill1Wght500Grad0Opsz48'
import IconPersonAddDisabledFill1Wght600Grad0Opsz48 from '../components/PersonAddDisabledFill1Wght600Grad0Opsz48'
import IconPersonAddDisabledFill1Wght700Grad0Opsz48 from '../components/PersonAddDisabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPersonAddDisabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPersonAddDisabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPersonAddDisabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPersonAddDisabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPersonAddDisabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPersonAddDisabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPersonAddDisabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPersonAddDisabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPersonAddDisabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPersonAddDisabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPersonAddDisabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPersonAddDisabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPersonAddDisabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPersonAddDisabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPersonAddDisabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
