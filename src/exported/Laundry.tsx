import IconLaundryFill0Wght100Grad0Opsz48 from '../components/LaundryFill0Wght100Grad0Opsz48'
import IconLaundryFill0Wght200Grad0Opsz48 from '../components/LaundryFill0Wght200Grad0Opsz48'
import IconLaundryFill0Wght300Grad0Opsz48 from '../components/LaundryFill0Wght300Grad0Opsz48'
import IconLaundryFill0Wght400Grad0Opsz48 from '../components/LaundryFill0Wght400Grad0Opsz48'
import IconLaundryFill0Wght500Grad0Opsz48 from '../components/LaundryFill0Wght500Grad0Opsz48'
import IconLaundryFill0Wght600Grad0Opsz48 from '../components/LaundryFill0Wght600Grad0Opsz48'
import IconLaundryFill0Wght700Grad0Opsz48 from '../components/LaundryFill0Wght700Grad0Opsz48'
import IconLaundryFill1Wght100Grad0Opsz48 from '../components/LaundryFill1Wght100Grad0Opsz48'
import IconLaundryFill1Wght200Grad0Opsz48 from '../components/LaundryFill1Wght200Grad0Opsz48'
import IconLaundryFill1Wght300Grad0Opsz48 from '../components/LaundryFill1Wght300Grad0Opsz48'
import IconLaundryFill1Wght400Grad0Opsz48 from '../components/LaundryFill1Wght400Grad0Opsz48'
import IconLaundryFill1Wght500Grad0Opsz48 from '../components/LaundryFill1Wght500Grad0Opsz48'
import IconLaundryFill1Wght600Grad0Opsz48 from '../components/LaundryFill1Wght600Grad0Opsz48'
import IconLaundryFill1Wght700Grad0Opsz48 from '../components/LaundryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLaundry = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLaundryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLaundryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLaundryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLaundryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLaundryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLaundryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLaundryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLaundryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLaundryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLaundryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLaundryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLaundryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLaundryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLaundryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
