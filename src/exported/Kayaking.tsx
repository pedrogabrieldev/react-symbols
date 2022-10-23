import IconKayakingFill0Wght100Grad0Opsz48 from '../components/KayakingFill0Wght100Grad0Opsz48'
import IconKayakingFill0Wght200Grad0Opsz48 from '../components/KayakingFill0Wght200Grad0Opsz48'
import IconKayakingFill0Wght300Grad0Opsz48 from '../components/KayakingFill0Wght300Grad0Opsz48'
import IconKayakingFill0Wght400Grad0Opsz48 from '../components/KayakingFill0Wght400Grad0Opsz48'
import IconKayakingFill0Wght500Grad0Opsz48 from '../components/KayakingFill0Wght500Grad0Opsz48'
import IconKayakingFill0Wght600Grad0Opsz48 from '../components/KayakingFill0Wght600Grad0Opsz48'
import IconKayakingFill0Wght700Grad0Opsz48 from '../components/KayakingFill0Wght700Grad0Opsz48'
import IconKayakingFill1Wght100Grad0Opsz48 from '../components/KayakingFill1Wght100Grad0Opsz48'
import IconKayakingFill1Wght200Grad0Opsz48 from '../components/KayakingFill1Wght200Grad0Opsz48'
import IconKayakingFill1Wght300Grad0Opsz48 from '../components/KayakingFill1Wght300Grad0Opsz48'
import IconKayakingFill1Wght400Grad0Opsz48 from '../components/KayakingFill1Wght400Grad0Opsz48'
import IconKayakingFill1Wght500Grad0Opsz48 from '../components/KayakingFill1Wght500Grad0Opsz48'
import IconKayakingFill1Wght600Grad0Opsz48 from '../components/KayakingFill1Wght600Grad0Opsz48'
import IconKayakingFill1Wght700Grad0Opsz48 from '../components/KayakingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKayaking = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKayakingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKayakingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKayakingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKayakingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKayakingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKayakingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKayakingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKayakingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKayakingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKayakingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKayakingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKayakingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKayakingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKayakingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
