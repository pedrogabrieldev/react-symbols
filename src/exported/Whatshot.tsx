import IconWhatshotFill0Wght100Grad0Opsz48 from '../components/WhatshotFill0Wght100Grad0Opsz48'
import IconWhatshotFill0Wght200Grad0Opsz48 from '../components/WhatshotFill0Wght200Grad0Opsz48'
import IconWhatshotFill0Wght300Grad0Opsz48 from '../components/WhatshotFill0Wght300Grad0Opsz48'
import IconWhatshotFill0Wght400Grad0Opsz48 from '../components/WhatshotFill0Wght400Grad0Opsz48'
import IconWhatshotFill0Wght500Grad0Opsz48 from '../components/WhatshotFill0Wght500Grad0Opsz48'
import IconWhatshotFill0Wght600Grad0Opsz48 from '../components/WhatshotFill0Wght600Grad0Opsz48'
import IconWhatshotFill0Wght700Grad0Opsz48 from '../components/WhatshotFill0Wght700Grad0Opsz48'
import IconWhatshotFill1Wght100Grad0Opsz48 from '../components/WhatshotFill1Wght100Grad0Opsz48'
import IconWhatshotFill1Wght200Grad0Opsz48 from '../components/WhatshotFill1Wght200Grad0Opsz48'
import IconWhatshotFill1Wght300Grad0Opsz48 from '../components/WhatshotFill1Wght300Grad0Opsz48'
import IconWhatshotFill1Wght400Grad0Opsz48 from '../components/WhatshotFill1Wght400Grad0Opsz48'
import IconWhatshotFill1Wght500Grad0Opsz48 from '../components/WhatshotFill1Wght500Grad0Opsz48'
import IconWhatshotFill1Wght600Grad0Opsz48 from '../components/WhatshotFill1Wght600Grad0Opsz48'
import IconWhatshotFill1Wght700Grad0Opsz48 from '../components/WhatshotFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWhatshot = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWhatshotFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWhatshotFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWhatshotFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWhatshotFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWhatshotFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWhatshotFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWhatshotFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWhatshotFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWhatshotFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWhatshotFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWhatshotFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWhatshotFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWhatshotFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWhatshotFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
