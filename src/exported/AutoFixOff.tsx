import IconAutoFixOffFill0Wght100Grad0Opsz48 from '../components/AutoFixOffFill0Wght100Grad0Opsz48'
import IconAutoFixOffFill0Wght200Grad0Opsz48 from '../components/AutoFixOffFill0Wght200Grad0Opsz48'
import IconAutoFixOffFill0Wght300Grad0Opsz48 from '../components/AutoFixOffFill0Wght300Grad0Opsz48'
import IconAutoFixOffFill0Wght400Grad0Opsz48 from '../components/AutoFixOffFill0Wght400Grad0Opsz48'
import IconAutoFixOffFill0Wght500Grad0Opsz48 from '../components/AutoFixOffFill0Wght500Grad0Opsz48'
import IconAutoFixOffFill0Wght600Grad0Opsz48 from '../components/AutoFixOffFill0Wght600Grad0Opsz48'
import IconAutoFixOffFill0Wght700Grad0Opsz48 from '../components/AutoFixOffFill0Wght700Grad0Opsz48'
import IconAutoFixOffFill1Wght100Grad0Opsz48 from '../components/AutoFixOffFill1Wght100Grad0Opsz48'
import IconAutoFixOffFill1Wght200Grad0Opsz48 from '../components/AutoFixOffFill1Wght200Grad0Opsz48'
import IconAutoFixOffFill1Wght300Grad0Opsz48 from '../components/AutoFixOffFill1Wght300Grad0Opsz48'
import IconAutoFixOffFill1Wght400Grad0Opsz48 from '../components/AutoFixOffFill1Wght400Grad0Opsz48'
import IconAutoFixOffFill1Wght500Grad0Opsz48 from '../components/AutoFixOffFill1Wght500Grad0Opsz48'
import IconAutoFixOffFill1Wght600Grad0Opsz48 from '../components/AutoFixOffFill1Wght600Grad0Opsz48'
import IconAutoFixOffFill1Wght700Grad0Opsz48 from '../components/AutoFixOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoFixOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoFixOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoFixOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoFixOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoFixOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoFixOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoFixOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoFixOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoFixOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoFixOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoFixOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoFixOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoFixOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoFixOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoFixOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
