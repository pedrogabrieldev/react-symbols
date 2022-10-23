import IconCarRentalFill0Wght100Grad0Opsz48 from '../components/CarRentalFill0Wght100Grad0Opsz48'
import IconCarRentalFill0Wght200Grad0Opsz48 from '../components/CarRentalFill0Wght200Grad0Opsz48'
import IconCarRentalFill0Wght300Grad0Opsz48 from '../components/CarRentalFill0Wght300Grad0Opsz48'
import IconCarRentalFill0Wght400Grad0Opsz48 from '../components/CarRentalFill0Wght400Grad0Opsz48'
import IconCarRentalFill0Wght500Grad0Opsz48 from '../components/CarRentalFill0Wght500Grad0Opsz48'
import IconCarRentalFill0Wght600Grad0Opsz48 from '../components/CarRentalFill0Wght600Grad0Opsz48'
import IconCarRentalFill0Wght700Grad0Opsz48 from '../components/CarRentalFill0Wght700Grad0Opsz48'
import IconCarRentalFill1Wght100Grad0Opsz48 from '../components/CarRentalFill1Wght100Grad0Opsz48'
import IconCarRentalFill1Wght200Grad0Opsz48 from '../components/CarRentalFill1Wght200Grad0Opsz48'
import IconCarRentalFill1Wght300Grad0Opsz48 from '../components/CarRentalFill1Wght300Grad0Opsz48'
import IconCarRentalFill1Wght400Grad0Opsz48 from '../components/CarRentalFill1Wght400Grad0Opsz48'
import IconCarRentalFill1Wght500Grad0Opsz48 from '../components/CarRentalFill1Wght500Grad0Opsz48'
import IconCarRentalFill1Wght600Grad0Opsz48 from '../components/CarRentalFill1Wght600Grad0Opsz48'
import IconCarRentalFill1Wght700Grad0Opsz48 from '../components/CarRentalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCarRental = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCarRentalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCarRentalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCarRentalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCarRentalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCarRentalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCarRentalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCarRentalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCarRentalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCarRentalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCarRentalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCarRentalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCarRentalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCarRentalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCarRentalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
