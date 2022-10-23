import IconBakeryDiningFill0Wght100Grad0Opsz48 from '../components/BakeryDiningFill0Wght100Grad0Opsz48'
import IconBakeryDiningFill0Wght200Grad0Opsz48 from '../components/BakeryDiningFill0Wght200Grad0Opsz48'
import IconBakeryDiningFill0Wght300Grad0Opsz48 from '../components/BakeryDiningFill0Wght300Grad0Opsz48'
import IconBakeryDiningFill0Wght400Grad0Opsz48 from '../components/BakeryDiningFill0Wght400Grad0Opsz48'
import IconBakeryDiningFill0Wght500Grad0Opsz48 from '../components/BakeryDiningFill0Wght500Grad0Opsz48'
import IconBakeryDiningFill0Wght600Grad0Opsz48 from '../components/BakeryDiningFill0Wght600Grad0Opsz48'
import IconBakeryDiningFill0Wght700Grad0Opsz48 from '../components/BakeryDiningFill0Wght700Grad0Opsz48'
import IconBakeryDiningFill1Wght100Grad0Opsz48 from '../components/BakeryDiningFill1Wght100Grad0Opsz48'
import IconBakeryDiningFill1Wght200Grad0Opsz48 from '../components/BakeryDiningFill1Wght200Grad0Opsz48'
import IconBakeryDiningFill1Wght300Grad0Opsz48 from '../components/BakeryDiningFill1Wght300Grad0Opsz48'
import IconBakeryDiningFill1Wght400Grad0Opsz48 from '../components/BakeryDiningFill1Wght400Grad0Opsz48'
import IconBakeryDiningFill1Wght500Grad0Opsz48 from '../components/BakeryDiningFill1Wght500Grad0Opsz48'
import IconBakeryDiningFill1Wght600Grad0Opsz48 from '../components/BakeryDiningFill1Wght600Grad0Opsz48'
import IconBakeryDiningFill1Wght700Grad0Opsz48 from '../components/BakeryDiningFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBakeryDining = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBakeryDiningFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBakeryDiningFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBakeryDiningFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBakeryDiningFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBakeryDiningFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBakeryDiningFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBakeryDiningFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBakeryDiningFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBakeryDiningFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBakeryDiningFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBakeryDiningFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBakeryDiningFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBakeryDiningFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBakeryDiningFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
