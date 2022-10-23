import IconIosShareFill0Wght100Grad0Opsz48 from '../components/IosShareFill0Wght100Grad0Opsz48'
import IconIosShareFill0Wght200Grad0Opsz48 from '../components/IosShareFill0Wght200Grad0Opsz48'
import IconIosShareFill0Wght300Grad0Opsz48 from '../components/IosShareFill0Wght300Grad0Opsz48'
import IconIosShareFill0Wght400Grad0Opsz48 from '../components/IosShareFill0Wght400Grad0Opsz48'
import IconIosShareFill0Wght500Grad0Opsz48 from '../components/IosShareFill0Wght500Grad0Opsz48'
import IconIosShareFill0Wght600Grad0Opsz48 from '../components/IosShareFill0Wght600Grad0Opsz48'
import IconIosShareFill0Wght700Grad0Opsz48 from '../components/IosShareFill0Wght700Grad0Opsz48'
import IconIosShareFill1Wght100Grad0Opsz48 from '../components/IosShareFill1Wght100Grad0Opsz48'
import IconIosShareFill1Wght200Grad0Opsz48 from '../components/IosShareFill1Wght200Grad0Opsz48'
import IconIosShareFill1Wght300Grad0Opsz48 from '../components/IosShareFill1Wght300Grad0Opsz48'
import IconIosShareFill1Wght400Grad0Opsz48 from '../components/IosShareFill1Wght400Grad0Opsz48'
import IconIosShareFill1Wght500Grad0Opsz48 from '../components/IosShareFill1Wght500Grad0Opsz48'
import IconIosShareFill1Wght600Grad0Opsz48 from '../components/IosShareFill1Wght600Grad0Opsz48'
import IconIosShareFill1Wght700Grad0Opsz48 from '../components/IosShareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconIosShare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconIosShareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconIosShareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconIosShareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconIosShareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconIosShareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconIosShareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconIosShareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconIosShareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconIosShareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconIosShareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconIosShareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconIosShareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconIosShareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconIosShareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
