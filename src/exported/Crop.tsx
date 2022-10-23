import IconCropFill0Wght100Grad0Opsz48 from '../components/CropFill0Wght100Grad0Opsz48'
import IconCropFill0Wght200Grad0Opsz48 from '../components/CropFill0Wght200Grad0Opsz48'
import IconCropFill0Wght300Grad0Opsz48 from '../components/CropFill0Wght300Grad0Opsz48'
import IconCropFill0Wght400Grad0Opsz48 from '../components/CropFill0Wght400Grad0Opsz48'
import IconCropFill0Wght500Grad0Opsz48 from '../components/CropFill0Wght500Grad0Opsz48'
import IconCropFill0Wght600Grad0Opsz48 from '../components/CropFill0Wght600Grad0Opsz48'
import IconCropFill0Wght700Grad0Opsz48 from '../components/CropFill0Wght700Grad0Opsz48'
import IconCropFill1Wght100Grad0Opsz48 from '../components/CropFill1Wght100Grad0Opsz48'
import IconCropFill1Wght200Grad0Opsz48 from '../components/CropFill1Wght200Grad0Opsz48'
import IconCropFill1Wght300Grad0Opsz48 from '../components/CropFill1Wght300Grad0Opsz48'
import IconCropFill1Wght400Grad0Opsz48 from '../components/CropFill1Wght400Grad0Opsz48'
import IconCropFill1Wght500Grad0Opsz48 from '../components/CropFill1Wght500Grad0Opsz48'
import IconCropFill1Wght600Grad0Opsz48 from '../components/CropFill1Wght600Grad0Opsz48'
import IconCropFill1Wght700Grad0Opsz48 from '../components/CropFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCrop = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCropFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCropFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCropFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCropFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCropFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCropFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCropFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCropFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCropFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCropFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCropFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCropFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCropFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCropFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
