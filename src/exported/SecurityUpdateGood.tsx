import IconSecurityUpdateGoodFill0Wght100Grad0Opsz48 from '../components/SecurityUpdateGoodFill0Wght100Grad0Opsz48'
import IconSecurityUpdateGoodFill0Wght200Grad0Opsz48 from '../components/SecurityUpdateGoodFill0Wght200Grad0Opsz48'
import IconSecurityUpdateGoodFill0Wght300Grad0Opsz48 from '../components/SecurityUpdateGoodFill0Wght300Grad0Opsz48'
import IconSecurityUpdateGoodFill0Wght400Grad0Opsz48 from '../components/SecurityUpdateGoodFill0Wght400Grad0Opsz48'
import IconSecurityUpdateGoodFill0Wght500Grad0Opsz48 from '../components/SecurityUpdateGoodFill0Wght500Grad0Opsz48'
import IconSecurityUpdateGoodFill0Wght600Grad0Opsz48 from '../components/SecurityUpdateGoodFill0Wght600Grad0Opsz48'
import IconSecurityUpdateGoodFill0Wght700Grad0Opsz48 from '../components/SecurityUpdateGoodFill0Wght700Grad0Opsz48'
import IconSecurityUpdateGoodFill1Wght100Grad0Opsz48 from '../components/SecurityUpdateGoodFill1Wght100Grad0Opsz48'
import IconSecurityUpdateGoodFill1Wght200Grad0Opsz48 from '../components/SecurityUpdateGoodFill1Wght200Grad0Opsz48'
import IconSecurityUpdateGoodFill1Wght300Grad0Opsz48 from '../components/SecurityUpdateGoodFill1Wght300Grad0Opsz48'
import IconSecurityUpdateGoodFill1Wght400Grad0Opsz48 from '../components/SecurityUpdateGoodFill1Wght400Grad0Opsz48'
import IconSecurityUpdateGoodFill1Wght500Grad0Opsz48 from '../components/SecurityUpdateGoodFill1Wght500Grad0Opsz48'
import IconSecurityUpdateGoodFill1Wght600Grad0Opsz48 from '../components/SecurityUpdateGoodFill1Wght600Grad0Opsz48'
import IconSecurityUpdateGoodFill1Wght700Grad0Opsz48 from '../components/SecurityUpdateGoodFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSecurityUpdateGood = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSecurityUpdateGoodFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSecurityUpdateGoodFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSecurityUpdateGoodFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSecurityUpdateGoodFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSecurityUpdateGoodFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSecurityUpdateGoodFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSecurityUpdateGoodFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSecurityUpdateGoodFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSecurityUpdateGoodFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSecurityUpdateGoodFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSecurityUpdateGoodFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSecurityUpdateGoodFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSecurityUpdateGoodFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSecurityUpdateGoodFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
