import IconBrokenImageFill0Wght100Grad0Opsz48 from '../components/BrokenImageFill0Wght100Grad0Opsz48'
import IconBrokenImageFill0Wght200Grad0Opsz48 from '../components/BrokenImageFill0Wght200Grad0Opsz48'
import IconBrokenImageFill0Wght300Grad0Opsz48 from '../components/BrokenImageFill0Wght300Grad0Opsz48'
import IconBrokenImageFill0Wght400Grad0Opsz48 from '../components/BrokenImageFill0Wght400Grad0Opsz48'
import IconBrokenImageFill0Wght500Grad0Opsz48 from '../components/BrokenImageFill0Wght500Grad0Opsz48'
import IconBrokenImageFill0Wght600Grad0Opsz48 from '../components/BrokenImageFill0Wght600Grad0Opsz48'
import IconBrokenImageFill0Wght700Grad0Opsz48 from '../components/BrokenImageFill0Wght700Grad0Opsz48'
import IconBrokenImageFill1Wght100Grad0Opsz48 from '../components/BrokenImageFill1Wght100Grad0Opsz48'
import IconBrokenImageFill1Wght200Grad0Opsz48 from '../components/BrokenImageFill1Wght200Grad0Opsz48'
import IconBrokenImageFill1Wght300Grad0Opsz48 from '../components/BrokenImageFill1Wght300Grad0Opsz48'
import IconBrokenImageFill1Wght400Grad0Opsz48 from '../components/BrokenImageFill1Wght400Grad0Opsz48'
import IconBrokenImageFill1Wght500Grad0Opsz48 from '../components/BrokenImageFill1Wght500Grad0Opsz48'
import IconBrokenImageFill1Wght600Grad0Opsz48 from '../components/BrokenImageFill1Wght600Grad0Opsz48'
import IconBrokenImageFill1Wght700Grad0Opsz48 from '../components/BrokenImageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBrokenImage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBrokenImageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBrokenImageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBrokenImageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBrokenImageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBrokenImageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBrokenImageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBrokenImageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBrokenImageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBrokenImageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBrokenImageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBrokenImageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBrokenImageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBrokenImageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBrokenImageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
