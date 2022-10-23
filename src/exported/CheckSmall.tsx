import IconCheckSmallFill0Wght100Grad0Opsz48 from '../components/CheckSmallFill0Wght100Grad0Opsz48'
import IconCheckSmallFill0Wght200Grad0Opsz48 from '../components/CheckSmallFill0Wght200Grad0Opsz48'
import IconCheckSmallFill0Wght300Grad0Opsz48 from '../components/CheckSmallFill0Wght300Grad0Opsz48'
import IconCheckSmallFill0Wght400Grad0Opsz48 from '../components/CheckSmallFill0Wght400Grad0Opsz48'
import IconCheckSmallFill0Wght500Grad0Opsz48 from '../components/CheckSmallFill0Wght500Grad0Opsz48'
import IconCheckSmallFill0Wght600Grad0Opsz48 from '../components/CheckSmallFill0Wght600Grad0Opsz48'
import IconCheckSmallFill0Wght700Grad0Opsz48 from '../components/CheckSmallFill0Wght700Grad0Opsz48'
import IconCheckSmallFill1Wght100Grad0Opsz48 from '../components/CheckSmallFill1Wght100Grad0Opsz48'
import IconCheckSmallFill1Wght200Grad0Opsz48 from '../components/CheckSmallFill1Wght200Grad0Opsz48'
import IconCheckSmallFill1Wght300Grad0Opsz48 from '../components/CheckSmallFill1Wght300Grad0Opsz48'
import IconCheckSmallFill1Wght400Grad0Opsz48 from '../components/CheckSmallFill1Wght400Grad0Opsz48'
import IconCheckSmallFill1Wght500Grad0Opsz48 from '../components/CheckSmallFill1Wght500Grad0Opsz48'
import IconCheckSmallFill1Wght600Grad0Opsz48 from '../components/CheckSmallFill1Wght600Grad0Opsz48'
import IconCheckSmallFill1Wght700Grad0Opsz48 from '../components/CheckSmallFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCheckSmall = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCheckSmallFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCheckSmallFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCheckSmallFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCheckSmallFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCheckSmallFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCheckSmallFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCheckSmallFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCheckSmallFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCheckSmallFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCheckSmallFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCheckSmallFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCheckSmallFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCheckSmallFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCheckSmallFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
