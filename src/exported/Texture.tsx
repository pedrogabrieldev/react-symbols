import IconTextureFill0Wght100Grad0Opsz48 from '../components/TextureFill0Wght100Grad0Opsz48'
import IconTextureFill0Wght200Grad0Opsz48 from '../components/TextureFill0Wght200Grad0Opsz48'
import IconTextureFill0Wght300Grad0Opsz48 from '../components/TextureFill0Wght300Grad0Opsz48'
import IconTextureFill0Wght400Grad0Opsz48 from '../components/TextureFill0Wght400Grad0Opsz48'
import IconTextureFill0Wght500Grad0Opsz48 from '../components/TextureFill0Wght500Grad0Opsz48'
import IconTextureFill0Wght600Grad0Opsz48 from '../components/TextureFill0Wght600Grad0Opsz48'
import IconTextureFill0Wght700Grad0Opsz48 from '../components/TextureFill0Wght700Grad0Opsz48'
import IconTextureFill1Wght100Grad0Opsz48 from '../components/TextureFill1Wght100Grad0Opsz48'
import IconTextureFill1Wght200Grad0Opsz48 from '../components/TextureFill1Wght200Grad0Opsz48'
import IconTextureFill1Wght300Grad0Opsz48 from '../components/TextureFill1Wght300Grad0Opsz48'
import IconTextureFill1Wght400Grad0Opsz48 from '../components/TextureFill1Wght400Grad0Opsz48'
import IconTextureFill1Wght500Grad0Opsz48 from '../components/TextureFill1Wght500Grad0Opsz48'
import IconTextureFill1Wght600Grad0Opsz48 from '../components/TextureFill1Wght600Grad0Opsz48'
import IconTextureFill1Wght700Grad0Opsz48 from '../components/TextureFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTexture = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTextureFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTextureFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTextureFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTextureFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTextureFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTextureFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTextureFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTextureFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTextureFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTextureFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTextureFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTextureFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTextureFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTextureFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
