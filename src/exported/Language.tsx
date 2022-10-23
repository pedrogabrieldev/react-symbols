import IconLanguageFill0Wght100Grad0Opsz48 from '../components/LanguageFill0Wght100Grad0Opsz48'
import IconLanguageFill0Wght200Grad0Opsz48 from '../components/LanguageFill0Wght200Grad0Opsz48'
import IconLanguageFill0Wght300Grad0Opsz48 from '../components/LanguageFill0Wght300Grad0Opsz48'
import IconLanguageFill0Wght400Grad0Opsz48 from '../components/LanguageFill0Wght400Grad0Opsz48'
import IconLanguageFill0Wght500Grad0Opsz48 from '../components/LanguageFill0Wght500Grad0Opsz48'
import IconLanguageFill0Wght600Grad0Opsz48 from '../components/LanguageFill0Wght600Grad0Opsz48'
import IconLanguageFill0Wght700Grad0Opsz48 from '../components/LanguageFill0Wght700Grad0Opsz48'
import IconLanguageFill1Wght100Grad0Opsz48 from '../components/LanguageFill1Wght100Grad0Opsz48'
import IconLanguageFill1Wght200Grad0Opsz48 from '../components/LanguageFill1Wght200Grad0Opsz48'
import IconLanguageFill1Wght300Grad0Opsz48 from '../components/LanguageFill1Wght300Grad0Opsz48'
import IconLanguageFill1Wght400Grad0Opsz48 from '../components/LanguageFill1Wght400Grad0Opsz48'
import IconLanguageFill1Wght500Grad0Opsz48 from '../components/LanguageFill1Wght500Grad0Opsz48'
import IconLanguageFill1Wght600Grad0Opsz48 from '../components/LanguageFill1Wght600Grad0Opsz48'
import IconLanguageFill1Wght700Grad0Opsz48 from '../components/LanguageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLanguage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLanguageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLanguageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLanguageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLanguageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLanguageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLanguageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLanguageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLanguageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLanguageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLanguageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLanguageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLanguageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLanguageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLanguageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
