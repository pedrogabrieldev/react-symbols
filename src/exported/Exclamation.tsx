import IconExclamationFill0Wght100Grad0Opsz48 from '../components/ExclamationFill0Wght100Grad0Opsz48'
import IconExclamationFill0Wght200Grad0Opsz48 from '../components/ExclamationFill0Wght200Grad0Opsz48'
import IconExclamationFill0Wght300Grad0Opsz48 from '../components/ExclamationFill0Wght300Grad0Opsz48'
import IconExclamationFill0Wght400Grad0Opsz48 from '../components/ExclamationFill0Wght400Grad0Opsz48'
import IconExclamationFill0Wght500Grad0Opsz48 from '../components/ExclamationFill0Wght500Grad0Opsz48'
import IconExclamationFill0Wght600Grad0Opsz48 from '../components/ExclamationFill0Wght600Grad0Opsz48'
import IconExclamationFill0Wght700Grad0Opsz48 from '../components/ExclamationFill0Wght700Grad0Opsz48'
import IconExclamationFill1Wght100Grad0Opsz48 from '../components/ExclamationFill1Wght100Grad0Opsz48'
import IconExclamationFill1Wght200Grad0Opsz48 from '../components/ExclamationFill1Wght200Grad0Opsz48'
import IconExclamationFill1Wght300Grad0Opsz48 from '../components/ExclamationFill1Wght300Grad0Opsz48'
import IconExclamationFill1Wght400Grad0Opsz48 from '../components/ExclamationFill1Wght400Grad0Opsz48'
import IconExclamationFill1Wght500Grad0Opsz48 from '../components/ExclamationFill1Wght500Grad0Opsz48'
import IconExclamationFill1Wght600Grad0Opsz48 from '../components/ExclamationFill1Wght600Grad0Opsz48'
import IconExclamationFill1Wght700Grad0Opsz48 from '../components/ExclamationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExclamation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExclamationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExclamationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExclamationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExclamationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExclamationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExclamationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExclamationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExclamationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExclamationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExclamationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExclamationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExclamationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExclamationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExclamationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
