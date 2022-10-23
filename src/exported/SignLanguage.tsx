import IconSignLanguageFill0Wght100Grad0Opsz48 from '../components/SignLanguageFill0Wght100Grad0Opsz48'
import IconSignLanguageFill0Wght200Grad0Opsz48 from '../components/SignLanguageFill0Wght200Grad0Opsz48'
import IconSignLanguageFill0Wght300Grad0Opsz48 from '../components/SignLanguageFill0Wght300Grad0Opsz48'
import IconSignLanguageFill0Wght400Grad0Opsz48 from '../components/SignLanguageFill0Wght400Grad0Opsz48'
import IconSignLanguageFill0Wght500Grad0Opsz48 from '../components/SignLanguageFill0Wght500Grad0Opsz48'
import IconSignLanguageFill0Wght600Grad0Opsz48 from '../components/SignLanguageFill0Wght600Grad0Opsz48'
import IconSignLanguageFill0Wght700Grad0Opsz48 from '../components/SignLanguageFill0Wght700Grad0Opsz48'
import IconSignLanguageFill1Wght100Grad0Opsz48 from '../components/SignLanguageFill1Wght100Grad0Opsz48'
import IconSignLanguageFill1Wght200Grad0Opsz48 from '../components/SignLanguageFill1Wght200Grad0Opsz48'
import IconSignLanguageFill1Wght300Grad0Opsz48 from '../components/SignLanguageFill1Wght300Grad0Opsz48'
import IconSignLanguageFill1Wght400Grad0Opsz48 from '../components/SignLanguageFill1Wght400Grad0Opsz48'
import IconSignLanguageFill1Wght500Grad0Opsz48 from '../components/SignLanguageFill1Wght500Grad0Opsz48'
import IconSignLanguageFill1Wght600Grad0Opsz48 from '../components/SignLanguageFill1Wght600Grad0Opsz48'
import IconSignLanguageFill1Wght700Grad0Opsz48 from '../components/SignLanguageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSignLanguage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSignLanguageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSignLanguageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSignLanguageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSignLanguageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSignLanguageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSignLanguageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSignLanguageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSignLanguageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSignLanguageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSignLanguageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSignLanguageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSignLanguageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSignLanguageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSignLanguageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
