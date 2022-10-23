import IconMarkEmailReadFill0Wght100Grad0Opsz48 from '../components/MarkEmailReadFill0Wght100Grad0Opsz48'
import IconMarkEmailReadFill0Wght200Grad0Opsz48 from '../components/MarkEmailReadFill0Wght200Grad0Opsz48'
import IconMarkEmailReadFill0Wght300Grad0Opsz48 from '../components/MarkEmailReadFill0Wght300Grad0Opsz48'
import IconMarkEmailReadFill0Wght400Grad0Opsz48 from '../components/MarkEmailReadFill0Wght400Grad0Opsz48'
import IconMarkEmailReadFill0Wght500Grad0Opsz48 from '../components/MarkEmailReadFill0Wght500Grad0Opsz48'
import IconMarkEmailReadFill0Wght600Grad0Opsz48 from '../components/MarkEmailReadFill0Wght600Grad0Opsz48'
import IconMarkEmailReadFill0Wght700Grad0Opsz48 from '../components/MarkEmailReadFill0Wght700Grad0Opsz48'
import IconMarkEmailReadFill1Wght100Grad0Opsz48 from '../components/MarkEmailReadFill1Wght100Grad0Opsz48'
import IconMarkEmailReadFill1Wght200Grad0Opsz48 from '../components/MarkEmailReadFill1Wght200Grad0Opsz48'
import IconMarkEmailReadFill1Wght300Grad0Opsz48 from '../components/MarkEmailReadFill1Wght300Grad0Opsz48'
import IconMarkEmailReadFill1Wght400Grad0Opsz48 from '../components/MarkEmailReadFill1Wght400Grad0Opsz48'
import IconMarkEmailReadFill1Wght500Grad0Opsz48 from '../components/MarkEmailReadFill1Wght500Grad0Opsz48'
import IconMarkEmailReadFill1Wght600Grad0Opsz48 from '../components/MarkEmailReadFill1Wght600Grad0Opsz48'
import IconMarkEmailReadFill1Wght700Grad0Opsz48 from '../components/MarkEmailReadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMarkEmailRead = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMarkEmailReadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMarkEmailReadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMarkEmailReadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMarkEmailReadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMarkEmailReadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMarkEmailReadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMarkEmailReadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMarkEmailReadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMarkEmailReadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMarkEmailReadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMarkEmailReadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMarkEmailReadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMarkEmailReadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMarkEmailReadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
