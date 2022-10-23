import IconGooglePlusReshareFill0Wght100Grad0Opsz48 from '../components/GooglePlusReshareFill0Wght100Grad0Opsz48'
import IconGooglePlusReshareFill0Wght200Grad0Opsz48 from '../components/GooglePlusReshareFill0Wght200Grad0Opsz48'
import IconGooglePlusReshareFill0Wght300Grad0Opsz48 from '../components/GooglePlusReshareFill0Wght300Grad0Opsz48'
import IconGooglePlusReshareFill0Wght400Grad0Opsz48 from '../components/GooglePlusReshareFill0Wght400Grad0Opsz48'
import IconGooglePlusReshareFill0Wght500Grad0Opsz48 from '../components/GooglePlusReshareFill0Wght500Grad0Opsz48'
import IconGooglePlusReshareFill0Wght600Grad0Opsz48 from '../components/GooglePlusReshareFill0Wght600Grad0Opsz48'
import IconGooglePlusReshareFill0Wght700Grad0Opsz48 from '../components/GooglePlusReshareFill0Wght700Grad0Opsz48'
import IconGooglePlusReshareFill1Wght100Grad0Opsz48 from '../components/GooglePlusReshareFill1Wght100Grad0Opsz48'
import IconGooglePlusReshareFill1Wght200Grad0Opsz48 from '../components/GooglePlusReshareFill1Wght200Grad0Opsz48'
import IconGooglePlusReshareFill1Wght300Grad0Opsz48 from '../components/GooglePlusReshareFill1Wght300Grad0Opsz48'
import IconGooglePlusReshareFill1Wght400Grad0Opsz48 from '../components/GooglePlusReshareFill1Wght400Grad0Opsz48'
import IconGooglePlusReshareFill1Wght500Grad0Opsz48 from '../components/GooglePlusReshareFill1Wght500Grad0Opsz48'
import IconGooglePlusReshareFill1Wght600Grad0Opsz48 from '../components/GooglePlusReshareFill1Wght600Grad0Opsz48'
import IconGooglePlusReshareFill1Wght700Grad0Opsz48 from '../components/GooglePlusReshareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGooglePlusReshare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGooglePlusReshareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGooglePlusReshareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGooglePlusReshareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGooglePlusReshareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGooglePlusReshareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGooglePlusReshareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGooglePlusReshareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGooglePlusReshareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGooglePlusReshareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGooglePlusReshareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGooglePlusReshareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGooglePlusReshareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGooglePlusReshareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGooglePlusReshareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
