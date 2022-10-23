import IconHideImageFill0Wght100Grad0Opsz48 from '../components/HideImageFill0Wght100Grad0Opsz48'
import IconHideImageFill0Wght200Grad0Opsz48 from '../components/HideImageFill0Wght200Grad0Opsz48'
import IconHideImageFill0Wght300Grad0Opsz48 from '../components/HideImageFill0Wght300Grad0Opsz48'
import IconHideImageFill0Wght400Grad0Opsz48 from '../components/HideImageFill0Wght400Grad0Opsz48'
import IconHideImageFill0Wght500Grad0Opsz48 from '../components/HideImageFill0Wght500Grad0Opsz48'
import IconHideImageFill0Wght600Grad0Opsz48 from '../components/HideImageFill0Wght600Grad0Opsz48'
import IconHideImageFill0Wght700Grad0Opsz48 from '../components/HideImageFill0Wght700Grad0Opsz48'
import IconHideImageFill1Wght100Grad0Opsz48 from '../components/HideImageFill1Wght100Grad0Opsz48'
import IconHideImageFill1Wght200Grad0Opsz48 from '../components/HideImageFill1Wght200Grad0Opsz48'
import IconHideImageFill1Wght300Grad0Opsz48 from '../components/HideImageFill1Wght300Grad0Opsz48'
import IconHideImageFill1Wght400Grad0Opsz48 from '../components/HideImageFill1Wght400Grad0Opsz48'
import IconHideImageFill1Wght500Grad0Opsz48 from '../components/HideImageFill1Wght500Grad0Opsz48'
import IconHideImageFill1Wght600Grad0Opsz48 from '../components/HideImageFill1Wght600Grad0Opsz48'
import IconHideImageFill1Wght700Grad0Opsz48 from '../components/HideImageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHideImage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHideImageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHideImageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHideImageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHideImageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHideImageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHideImageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHideImageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHideImageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHideImageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHideImageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHideImageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHideImageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHideImageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHideImageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
