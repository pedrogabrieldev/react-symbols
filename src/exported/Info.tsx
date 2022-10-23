import IconInfoFill0Wght100Grad0Opsz48 from '../components/InfoFill0Wght100Grad0Opsz48'
import IconInfoFill0Wght200Grad0Opsz48 from '../components/InfoFill0Wght200Grad0Opsz48'
import IconInfoFill0Wght300Grad0Opsz48 from '../components/InfoFill0Wght300Grad0Opsz48'
import IconInfoFill0Wght400Grad0Opsz48 from '../components/InfoFill0Wght400Grad0Opsz48'
import IconInfoFill0Wght500Grad0Opsz48 from '../components/InfoFill0Wght500Grad0Opsz48'
import IconInfoFill0Wght600Grad0Opsz48 from '../components/InfoFill0Wght600Grad0Opsz48'
import IconInfoFill0Wght700Grad0Opsz48 from '../components/InfoFill0Wght700Grad0Opsz48'
import IconInfoFill1Wght100Grad0Opsz48 from '../components/InfoFill1Wght100Grad0Opsz48'
import IconInfoFill1Wght200Grad0Opsz48 from '../components/InfoFill1Wght200Grad0Opsz48'
import IconInfoFill1Wght300Grad0Opsz48 from '../components/InfoFill1Wght300Grad0Opsz48'
import IconInfoFill1Wght400Grad0Opsz48 from '../components/InfoFill1Wght400Grad0Opsz48'
import IconInfoFill1Wght500Grad0Opsz48 from '../components/InfoFill1Wght500Grad0Opsz48'
import IconInfoFill1Wght600Grad0Opsz48 from '../components/InfoFill1Wght600Grad0Opsz48'
import IconInfoFill1Wght700Grad0Opsz48 from '../components/InfoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInfo = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInfoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInfoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInfoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInfoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInfoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInfoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInfoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInfoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInfoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInfoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInfoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInfoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInfoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInfoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
