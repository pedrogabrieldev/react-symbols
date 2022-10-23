import IconPreviewFill0Wght100Grad0Opsz48 from '../components/PreviewFill0Wght100Grad0Opsz48'
import IconPreviewFill0Wght200Grad0Opsz48 from '../components/PreviewFill0Wght200Grad0Opsz48'
import IconPreviewFill0Wght300Grad0Opsz48 from '../components/PreviewFill0Wght300Grad0Opsz48'
import IconPreviewFill0Wght400Grad0Opsz48 from '../components/PreviewFill0Wght400Grad0Opsz48'
import IconPreviewFill0Wght500Grad0Opsz48 from '../components/PreviewFill0Wght500Grad0Opsz48'
import IconPreviewFill0Wght600Grad0Opsz48 from '../components/PreviewFill0Wght600Grad0Opsz48'
import IconPreviewFill0Wght700Grad0Opsz48 from '../components/PreviewFill0Wght700Grad0Opsz48'
import IconPreviewFill1Wght100Grad0Opsz48 from '../components/PreviewFill1Wght100Grad0Opsz48'
import IconPreviewFill1Wght200Grad0Opsz48 from '../components/PreviewFill1Wght200Grad0Opsz48'
import IconPreviewFill1Wght300Grad0Opsz48 from '../components/PreviewFill1Wght300Grad0Opsz48'
import IconPreviewFill1Wght400Grad0Opsz48 from '../components/PreviewFill1Wght400Grad0Opsz48'
import IconPreviewFill1Wght500Grad0Opsz48 from '../components/PreviewFill1Wght500Grad0Opsz48'
import IconPreviewFill1Wght600Grad0Opsz48 from '../components/PreviewFill1Wght600Grad0Opsz48'
import IconPreviewFill1Wght700Grad0Opsz48 from '../components/PreviewFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPreview = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPreviewFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPreviewFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPreviewFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPreviewFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPreviewFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPreviewFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPreviewFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPreviewFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPreviewFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPreviewFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPreviewFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPreviewFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPreviewFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPreviewFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
