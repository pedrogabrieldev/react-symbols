import IconGoogleWifiFill0Wght100Grad0Opsz48 from '../components/GoogleWifiFill0Wght100Grad0Opsz48'
import IconGoogleWifiFill0Wght200Grad0Opsz48 from '../components/GoogleWifiFill0Wght200Grad0Opsz48'
import IconGoogleWifiFill0Wght300Grad0Opsz48 from '../components/GoogleWifiFill0Wght300Grad0Opsz48'
import IconGoogleWifiFill0Wght400Grad0Opsz48 from '../components/GoogleWifiFill0Wght400Grad0Opsz48'
import IconGoogleWifiFill0Wght500Grad0Opsz48 from '../components/GoogleWifiFill0Wght500Grad0Opsz48'
import IconGoogleWifiFill0Wght600Grad0Opsz48 from '../components/GoogleWifiFill0Wght600Grad0Opsz48'
import IconGoogleWifiFill0Wght700Grad0Opsz48 from '../components/GoogleWifiFill0Wght700Grad0Opsz48'
import IconGoogleWifiFill1Wght100Grad0Opsz48 from '../components/GoogleWifiFill1Wght100Grad0Opsz48'
import IconGoogleWifiFill1Wght200Grad0Opsz48 from '../components/GoogleWifiFill1Wght200Grad0Opsz48'
import IconGoogleWifiFill1Wght300Grad0Opsz48 from '../components/GoogleWifiFill1Wght300Grad0Opsz48'
import IconGoogleWifiFill1Wght400Grad0Opsz48 from '../components/GoogleWifiFill1Wght400Grad0Opsz48'
import IconGoogleWifiFill1Wght500Grad0Opsz48 from '../components/GoogleWifiFill1Wght500Grad0Opsz48'
import IconGoogleWifiFill1Wght600Grad0Opsz48 from '../components/GoogleWifiFill1Wght600Grad0Opsz48'
import IconGoogleWifiFill1Wght700Grad0Opsz48 from '../components/GoogleWifiFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGoogleWifi = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGoogleWifiFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGoogleWifiFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGoogleWifiFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGoogleWifiFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGoogleWifiFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGoogleWifiFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGoogleWifiFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGoogleWifiFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGoogleWifiFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGoogleWifiFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGoogleWifiFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGoogleWifiFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGoogleWifiFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGoogleWifiFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
