import IconCropFreeFill0Wght100Grad0Opsz48 from '../components/CropFreeFill0Wght100Grad0Opsz48'
import IconCropFreeFill0Wght200Grad0Opsz48 from '../components/CropFreeFill0Wght200Grad0Opsz48'
import IconCropFreeFill0Wght300Grad0Opsz48 from '../components/CropFreeFill0Wght300Grad0Opsz48'
import IconCropFreeFill0Wght400Grad0Opsz48 from '../components/CropFreeFill0Wght400Grad0Opsz48'
import IconCropFreeFill0Wght500Grad0Opsz48 from '../components/CropFreeFill0Wght500Grad0Opsz48'
import IconCropFreeFill0Wght600Grad0Opsz48 from '../components/CropFreeFill0Wght600Grad0Opsz48'
import IconCropFreeFill0Wght700Grad0Opsz48 from '../components/CropFreeFill0Wght700Grad0Opsz48'
import IconCropFreeFill1Wght100Grad0Opsz48 from '../components/CropFreeFill1Wght100Grad0Opsz48'
import IconCropFreeFill1Wght200Grad0Opsz48 from '../components/CropFreeFill1Wght200Grad0Opsz48'
import IconCropFreeFill1Wght300Grad0Opsz48 from '../components/CropFreeFill1Wght300Grad0Opsz48'
import IconCropFreeFill1Wght400Grad0Opsz48 from '../components/CropFreeFill1Wght400Grad0Opsz48'
import IconCropFreeFill1Wght500Grad0Opsz48 from '../components/CropFreeFill1Wght500Grad0Opsz48'
import IconCropFreeFill1Wght600Grad0Opsz48 from '../components/CropFreeFill1Wght600Grad0Opsz48'
import IconCropFreeFill1Wght700Grad0Opsz48 from '../components/CropFreeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCropFree = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCropFreeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCropFreeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCropFreeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCropFreeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCropFreeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCropFreeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCropFreeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCropFreeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCropFreeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCropFreeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCropFreeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCropFreeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCropFreeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCropFreeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
