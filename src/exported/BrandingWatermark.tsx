import IconBrandingWatermarkFill0Wght100Grad0Opsz48 from '../components/BrandingWatermarkFill0Wght100Grad0Opsz48'
import IconBrandingWatermarkFill0Wght200Grad0Opsz48 from '../components/BrandingWatermarkFill0Wght200Grad0Opsz48'
import IconBrandingWatermarkFill0Wght300Grad0Opsz48 from '../components/BrandingWatermarkFill0Wght300Grad0Opsz48'
import IconBrandingWatermarkFill0Wght400Grad0Opsz48 from '../components/BrandingWatermarkFill0Wght400Grad0Opsz48'
import IconBrandingWatermarkFill0Wght500Grad0Opsz48 from '../components/BrandingWatermarkFill0Wght500Grad0Opsz48'
import IconBrandingWatermarkFill0Wght600Grad0Opsz48 from '../components/BrandingWatermarkFill0Wght600Grad0Opsz48'
import IconBrandingWatermarkFill0Wght700Grad0Opsz48 from '../components/BrandingWatermarkFill0Wght700Grad0Opsz48'
import IconBrandingWatermarkFill1Wght100Grad0Opsz48 from '../components/BrandingWatermarkFill1Wght100Grad0Opsz48'
import IconBrandingWatermarkFill1Wght200Grad0Opsz48 from '../components/BrandingWatermarkFill1Wght200Grad0Opsz48'
import IconBrandingWatermarkFill1Wght300Grad0Opsz48 from '../components/BrandingWatermarkFill1Wght300Grad0Opsz48'
import IconBrandingWatermarkFill1Wght400Grad0Opsz48 from '../components/BrandingWatermarkFill1Wght400Grad0Opsz48'
import IconBrandingWatermarkFill1Wght500Grad0Opsz48 from '../components/BrandingWatermarkFill1Wght500Grad0Opsz48'
import IconBrandingWatermarkFill1Wght600Grad0Opsz48 from '../components/BrandingWatermarkFill1Wght600Grad0Opsz48'
import IconBrandingWatermarkFill1Wght700Grad0Opsz48 from '../components/BrandingWatermarkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBrandingWatermark = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBrandingWatermarkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBrandingWatermarkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBrandingWatermarkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBrandingWatermarkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBrandingWatermarkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBrandingWatermarkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBrandingWatermarkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBrandingWatermarkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBrandingWatermarkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBrandingWatermarkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBrandingWatermarkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBrandingWatermarkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBrandingWatermarkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBrandingWatermarkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
