import IconRsvpFill0Wght100Grad0Opsz48 from '../components/RsvpFill0Wght100Grad0Opsz48'
import IconRsvpFill0Wght200Grad0Opsz48 from '../components/RsvpFill0Wght200Grad0Opsz48'
import IconRsvpFill0Wght300Grad0Opsz48 from '../components/RsvpFill0Wght300Grad0Opsz48'
import IconRsvpFill0Wght400Grad0Opsz48 from '../components/RsvpFill0Wght400Grad0Opsz48'
import IconRsvpFill0Wght500Grad0Opsz48 from '../components/RsvpFill0Wght500Grad0Opsz48'
import IconRsvpFill0Wght600Grad0Opsz48 from '../components/RsvpFill0Wght600Grad0Opsz48'
import IconRsvpFill0Wght700Grad0Opsz48 from '../components/RsvpFill0Wght700Grad0Opsz48'
import IconRsvpFill1Wght100Grad0Opsz48 from '../components/RsvpFill1Wght100Grad0Opsz48'
import IconRsvpFill1Wght200Grad0Opsz48 from '../components/RsvpFill1Wght200Grad0Opsz48'
import IconRsvpFill1Wght300Grad0Opsz48 from '../components/RsvpFill1Wght300Grad0Opsz48'
import IconRsvpFill1Wght400Grad0Opsz48 from '../components/RsvpFill1Wght400Grad0Opsz48'
import IconRsvpFill1Wght500Grad0Opsz48 from '../components/RsvpFill1Wght500Grad0Opsz48'
import IconRsvpFill1Wght600Grad0Opsz48 from '../components/RsvpFill1Wght600Grad0Opsz48'
import IconRsvpFill1Wght700Grad0Opsz48 from '../components/RsvpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRsvp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRsvpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRsvpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRsvpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRsvpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRsvpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRsvpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRsvpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRsvpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRsvpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRsvpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRsvpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRsvpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRsvpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRsvpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
