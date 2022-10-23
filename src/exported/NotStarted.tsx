import IconNotStartedFill0Wght100Grad0Opsz48 from '../components/NotStartedFill0Wght100Grad0Opsz48'
import IconNotStartedFill0Wght200Grad0Opsz48 from '../components/NotStartedFill0Wght200Grad0Opsz48'
import IconNotStartedFill0Wght300Grad0Opsz48 from '../components/NotStartedFill0Wght300Grad0Opsz48'
import IconNotStartedFill0Wght400Grad0Opsz48 from '../components/NotStartedFill0Wght400Grad0Opsz48'
import IconNotStartedFill0Wght500Grad0Opsz48 from '../components/NotStartedFill0Wght500Grad0Opsz48'
import IconNotStartedFill0Wght600Grad0Opsz48 from '../components/NotStartedFill0Wght600Grad0Opsz48'
import IconNotStartedFill0Wght700Grad0Opsz48 from '../components/NotStartedFill0Wght700Grad0Opsz48'
import IconNotStartedFill1Wght100Grad0Opsz48 from '../components/NotStartedFill1Wght100Grad0Opsz48'
import IconNotStartedFill1Wght200Grad0Opsz48 from '../components/NotStartedFill1Wght200Grad0Opsz48'
import IconNotStartedFill1Wght300Grad0Opsz48 from '../components/NotStartedFill1Wght300Grad0Opsz48'
import IconNotStartedFill1Wght400Grad0Opsz48 from '../components/NotStartedFill1Wght400Grad0Opsz48'
import IconNotStartedFill1Wght500Grad0Opsz48 from '../components/NotStartedFill1Wght500Grad0Opsz48'
import IconNotStartedFill1Wght600Grad0Opsz48 from '../components/NotStartedFill1Wght600Grad0Opsz48'
import IconNotStartedFill1Wght700Grad0Opsz48 from '../components/NotStartedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNotStarted = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNotStartedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNotStartedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNotStartedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNotStartedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNotStartedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNotStartedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNotStartedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNotStartedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNotStartedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNotStartedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNotStartedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNotStartedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNotStartedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNotStartedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
