import IconBrunchDiningFill0Wght100Grad0Opsz48 from '../components/BrunchDiningFill0Wght100Grad0Opsz48'
import IconBrunchDiningFill0Wght200Grad0Opsz48 from '../components/BrunchDiningFill0Wght200Grad0Opsz48'
import IconBrunchDiningFill0Wght300Grad0Opsz48 from '../components/BrunchDiningFill0Wght300Grad0Opsz48'
import IconBrunchDiningFill0Wght400Grad0Opsz48 from '../components/BrunchDiningFill0Wght400Grad0Opsz48'
import IconBrunchDiningFill0Wght500Grad0Opsz48 from '../components/BrunchDiningFill0Wght500Grad0Opsz48'
import IconBrunchDiningFill0Wght600Grad0Opsz48 from '../components/BrunchDiningFill0Wght600Grad0Opsz48'
import IconBrunchDiningFill0Wght700Grad0Opsz48 from '../components/BrunchDiningFill0Wght700Grad0Opsz48'
import IconBrunchDiningFill1Wght100Grad0Opsz48 from '../components/BrunchDiningFill1Wght100Grad0Opsz48'
import IconBrunchDiningFill1Wght200Grad0Opsz48 from '../components/BrunchDiningFill1Wght200Grad0Opsz48'
import IconBrunchDiningFill1Wght300Grad0Opsz48 from '../components/BrunchDiningFill1Wght300Grad0Opsz48'
import IconBrunchDiningFill1Wght400Grad0Opsz48 from '../components/BrunchDiningFill1Wght400Grad0Opsz48'
import IconBrunchDiningFill1Wght500Grad0Opsz48 from '../components/BrunchDiningFill1Wght500Grad0Opsz48'
import IconBrunchDiningFill1Wght600Grad0Opsz48 from '../components/BrunchDiningFill1Wght600Grad0Opsz48'
import IconBrunchDiningFill1Wght700Grad0Opsz48 from '../components/BrunchDiningFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBrunchDining = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBrunchDiningFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBrunchDiningFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBrunchDiningFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBrunchDiningFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBrunchDiningFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBrunchDiningFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBrunchDiningFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBrunchDiningFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBrunchDiningFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBrunchDiningFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBrunchDiningFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBrunchDiningFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBrunchDiningFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBrunchDiningFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
