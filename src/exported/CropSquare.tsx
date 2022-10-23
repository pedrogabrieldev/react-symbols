import IconCropSquareFill0Wght100Grad0Opsz48 from '../components/CropSquareFill0Wght100Grad0Opsz48'
import IconCropSquareFill0Wght200Grad0Opsz48 from '../components/CropSquareFill0Wght200Grad0Opsz48'
import IconCropSquareFill0Wght300Grad0Opsz48 from '../components/CropSquareFill0Wght300Grad0Opsz48'
import IconCropSquareFill0Wght400Grad0Opsz48 from '../components/CropSquareFill0Wght400Grad0Opsz48'
import IconCropSquareFill0Wght500Grad0Opsz48 from '../components/CropSquareFill0Wght500Grad0Opsz48'
import IconCropSquareFill0Wght600Grad0Opsz48 from '../components/CropSquareFill0Wght600Grad0Opsz48'
import IconCropSquareFill0Wght700Grad0Opsz48 from '../components/CropSquareFill0Wght700Grad0Opsz48'
import IconCropSquareFill1Wght100Grad0Opsz48 from '../components/CropSquareFill1Wght100Grad0Opsz48'
import IconCropSquareFill1Wght200Grad0Opsz48 from '../components/CropSquareFill1Wght200Grad0Opsz48'
import IconCropSquareFill1Wght300Grad0Opsz48 from '../components/CropSquareFill1Wght300Grad0Opsz48'
import IconCropSquareFill1Wght400Grad0Opsz48 from '../components/CropSquareFill1Wght400Grad0Opsz48'
import IconCropSquareFill1Wght500Grad0Opsz48 from '../components/CropSquareFill1Wght500Grad0Opsz48'
import IconCropSquareFill1Wght600Grad0Opsz48 from '../components/CropSquareFill1Wght600Grad0Opsz48'
import IconCropSquareFill1Wght700Grad0Opsz48 from '../components/CropSquareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCropSquare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCropSquareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCropSquareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCropSquareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCropSquareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCropSquareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCropSquareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCropSquareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCropSquareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCropSquareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCropSquareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCropSquareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCropSquareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCropSquareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCropSquareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
