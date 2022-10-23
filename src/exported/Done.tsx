import IconDoneFill0Wght100Grad0Opsz48 from '../components/DoneFill0Wght100Grad0Opsz48'
import IconDoneFill0Wght200Grad0Opsz48 from '../components/DoneFill0Wght200Grad0Opsz48'
import IconDoneFill0Wght300Grad0Opsz48 from '../components/DoneFill0Wght300Grad0Opsz48'
import IconDoneFill0Wght400Grad0Opsz48 from '../components/DoneFill0Wght400Grad0Opsz48'
import IconDoneFill0Wght500Grad0Opsz48 from '../components/DoneFill0Wght500Grad0Opsz48'
import IconDoneFill0Wght600Grad0Opsz48 from '../components/DoneFill0Wght600Grad0Opsz48'
import IconDoneFill0Wght700Grad0Opsz48 from '../components/DoneFill0Wght700Grad0Opsz48'
import IconDoneFill1Wght100Grad0Opsz48 from '../components/DoneFill1Wght100Grad0Opsz48'
import IconDoneFill1Wght200Grad0Opsz48 from '../components/DoneFill1Wght200Grad0Opsz48'
import IconDoneFill1Wght300Grad0Opsz48 from '../components/DoneFill1Wght300Grad0Opsz48'
import IconDoneFill1Wght400Grad0Opsz48 from '../components/DoneFill1Wght400Grad0Opsz48'
import IconDoneFill1Wght500Grad0Opsz48 from '../components/DoneFill1Wght500Grad0Opsz48'
import IconDoneFill1Wght600Grad0Opsz48 from '../components/DoneFill1Wght600Grad0Opsz48'
import IconDoneFill1Wght700Grad0Opsz48 from '../components/DoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
