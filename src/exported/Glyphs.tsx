import IconGlyphsFill0Wght100Grad0Opsz48 from '../components/GlyphsFill0Wght100Grad0Opsz48'
import IconGlyphsFill0Wght200Grad0Opsz48 from '../components/GlyphsFill0Wght200Grad0Opsz48'
import IconGlyphsFill0Wght300Grad0Opsz48 from '../components/GlyphsFill0Wght300Grad0Opsz48'
import IconGlyphsFill0Wght400Grad0Opsz48 from '../components/GlyphsFill0Wght400Grad0Opsz48'
import IconGlyphsFill0Wght500Grad0Opsz48 from '../components/GlyphsFill0Wght500Grad0Opsz48'
import IconGlyphsFill0Wght600Grad0Opsz48 from '../components/GlyphsFill0Wght600Grad0Opsz48'
import IconGlyphsFill0Wght700Grad0Opsz48 from '../components/GlyphsFill0Wght700Grad0Opsz48'
import IconGlyphsFill1Wght100Grad0Opsz48 from '../components/GlyphsFill1Wght100Grad0Opsz48'
import IconGlyphsFill1Wght200Grad0Opsz48 from '../components/GlyphsFill1Wght200Grad0Opsz48'
import IconGlyphsFill1Wght300Grad0Opsz48 from '../components/GlyphsFill1Wght300Grad0Opsz48'
import IconGlyphsFill1Wght400Grad0Opsz48 from '../components/GlyphsFill1Wght400Grad0Opsz48'
import IconGlyphsFill1Wght500Grad0Opsz48 from '../components/GlyphsFill1Wght500Grad0Opsz48'
import IconGlyphsFill1Wght600Grad0Opsz48 from '../components/GlyphsFill1Wght600Grad0Opsz48'
import IconGlyphsFill1Wght700Grad0Opsz48 from '../components/GlyphsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGlyphs = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGlyphsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGlyphsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGlyphsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGlyphsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGlyphsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGlyphsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGlyphsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGlyphsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGlyphsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGlyphsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGlyphsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGlyphsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGlyphsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGlyphsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
