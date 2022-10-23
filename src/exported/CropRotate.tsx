import IconCropRotateFill0Wght100Grad0Opsz48 from '../components/CropRotateFill0Wght100Grad0Opsz48'
import IconCropRotateFill0Wght200Grad0Opsz48 from '../components/CropRotateFill0Wght200Grad0Opsz48'
import IconCropRotateFill0Wght300Grad0Opsz48 from '../components/CropRotateFill0Wght300Grad0Opsz48'
import IconCropRotateFill0Wght400Grad0Opsz48 from '../components/CropRotateFill0Wght400Grad0Opsz48'
import IconCropRotateFill0Wght500Grad0Opsz48 from '../components/CropRotateFill0Wght500Grad0Opsz48'
import IconCropRotateFill0Wght600Grad0Opsz48 from '../components/CropRotateFill0Wght600Grad0Opsz48'
import IconCropRotateFill0Wght700Grad0Opsz48 from '../components/CropRotateFill0Wght700Grad0Opsz48'
import IconCropRotateFill1Wght100Grad0Opsz48 from '../components/CropRotateFill1Wght100Grad0Opsz48'
import IconCropRotateFill1Wght200Grad0Opsz48 from '../components/CropRotateFill1Wght200Grad0Opsz48'
import IconCropRotateFill1Wght300Grad0Opsz48 from '../components/CropRotateFill1Wght300Grad0Opsz48'
import IconCropRotateFill1Wght400Grad0Opsz48 from '../components/CropRotateFill1Wght400Grad0Opsz48'
import IconCropRotateFill1Wght500Grad0Opsz48 from '../components/CropRotateFill1Wght500Grad0Opsz48'
import IconCropRotateFill1Wght600Grad0Opsz48 from '../components/CropRotateFill1Wght600Grad0Opsz48'
import IconCropRotateFill1Wght700Grad0Opsz48 from '../components/CropRotateFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCropRotate = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCropRotateFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCropRotateFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCropRotateFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCropRotateFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCropRotateFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCropRotateFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCropRotateFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCropRotateFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCropRotateFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCropRotateFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCropRotateFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCropRotateFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCropRotateFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCropRotateFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
