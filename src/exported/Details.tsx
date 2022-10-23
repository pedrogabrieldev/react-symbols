import IconDetailsFill0Wght100Grad0Opsz48 from '../components/DetailsFill0Wght100Grad0Opsz48'
import IconDetailsFill0Wght200Grad0Opsz48 from '../components/DetailsFill0Wght200Grad0Opsz48'
import IconDetailsFill0Wght300Grad0Opsz48 from '../components/DetailsFill0Wght300Grad0Opsz48'
import IconDetailsFill0Wght400Grad0Opsz48 from '../components/DetailsFill0Wght400Grad0Opsz48'
import IconDetailsFill0Wght500Grad0Opsz48 from '../components/DetailsFill0Wght500Grad0Opsz48'
import IconDetailsFill0Wght600Grad0Opsz48 from '../components/DetailsFill0Wght600Grad0Opsz48'
import IconDetailsFill0Wght700Grad0Opsz48 from '../components/DetailsFill0Wght700Grad0Opsz48'
import IconDetailsFill1Wght100Grad0Opsz48 from '../components/DetailsFill1Wght100Grad0Opsz48'
import IconDetailsFill1Wght200Grad0Opsz48 from '../components/DetailsFill1Wght200Grad0Opsz48'
import IconDetailsFill1Wght300Grad0Opsz48 from '../components/DetailsFill1Wght300Grad0Opsz48'
import IconDetailsFill1Wght400Grad0Opsz48 from '../components/DetailsFill1Wght400Grad0Opsz48'
import IconDetailsFill1Wght500Grad0Opsz48 from '../components/DetailsFill1Wght500Grad0Opsz48'
import IconDetailsFill1Wght600Grad0Opsz48 from '../components/DetailsFill1Wght600Grad0Opsz48'
import IconDetailsFill1Wght700Grad0Opsz48 from '../components/DetailsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDetails = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDetailsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDetailsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDetailsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDetailsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDetailsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDetailsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDetailsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDetailsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDetailsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDetailsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDetailsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDetailsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDetailsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDetailsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
