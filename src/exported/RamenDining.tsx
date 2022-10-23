import IconRamenDiningFill0Wght100Grad0Opsz48 from '../components/RamenDiningFill0Wght100Grad0Opsz48'
import IconRamenDiningFill0Wght200Grad0Opsz48 from '../components/RamenDiningFill0Wght200Grad0Opsz48'
import IconRamenDiningFill0Wght300Grad0Opsz48 from '../components/RamenDiningFill0Wght300Grad0Opsz48'
import IconRamenDiningFill0Wght400Grad0Opsz48 from '../components/RamenDiningFill0Wght400Grad0Opsz48'
import IconRamenDiningFill0Wght500Grad0Opsz48 from '../components/RamenDiningFill0Wght500Grad0Opsz48'
import IconRamenDiningFill0Wght600Grad0Opsz48 from '../components/RamenDiningFill0Wght600Grad0Opsz48'
import IconRamenDiningFill0Wght700Grad0Opsz48 from '../components/RamenDiningFill0Wght700Grad0Opsz48'
import IconRamenDiningFill1Wght100Grad0Opsz48 from '../components/RamenDiningFill1Wght100Grad0Opsz48'
import IconRamenDiningFill1Wght200Grad0Opsz48 from '../components/RamenDiningFill1Wght200Grad0Opsz48'
import IconRamenDiningFill1Wght300Grad0Opsz48 from '../components/RamenDiningFill1Wght300Grad0Opsz48'
import IconRamenDiningFill1Wght400Grad0Opsz48 from '../components/RamenDiningFill1Wght400Grad0Opsz48'
import IconRamenDiningFill1Wght500Grad0Opsz48 from '../components/RamenDiningFill1Wght500Grad0Opsz48'
import IconRamenDiningFill1Wght600Grad0Opsz48 from '../components/RamenDiningFill1Wght600Grad0Opsz48'
import IconRamenDiningFill1Wght700Grad0Opsz48 from '../components/RamenDiningFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRamenDining = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRamenDiningFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRamenDiningFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRamenDiningFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRamenDiningFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRamenDiningFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRamenDiningFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRamenDiningFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRamenDiningFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRamenDiningFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRamenDiningFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRamenDiningFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRamenDiningFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRamenDiningFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRamenDiningFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
