import IconApartmentFill0Wght100Grad0Opsz48 from '../components/ApartmentFill0Wght100Grad0Opsz48'
import IconApartmentFill0Wght200Grad0Opsz48 from '../components/ApartmentFill0Wght200Grad0Opsz48'
import IconApartmentFill0Wght300Grad0Opsz48 from '../components/ApartmentFill0Wght300Grad0Opsz48'
import IconApartmentFill0Wght400Grad0Opsz48 from '../components/ApartmentFill0Wght400Grad0Opsz48'
import IconApartmentFill0Wght500Grad0Opsz48 from '../components/ApartmentFill0Wght500Grad0Opsz48'
import IconApartmentFill0Wght600Grad0Opsz48 from '../components/ApartmentFill0Wght600Grad0Opsz48'
import IconApartmentFill0Wght700Grad0Opsz48 from '../components/ApartmentFill0Wght700Grad0Opsz48'
import IconApartmentFill1Wght100Grad0Opsz48 from '../components/ApartmentFill1Wght100Grad0Opsz48'
import IconApartmentFill1Wght200Grad0Opsz48 from '../components/ApartmentFill1Wght200Grad0Opsz48'
import IconApartmentFill1Wght300Grad0Opsz48 from '../components/ApartmentFill1Wght300Grad0Opsz48'
import IconApartmentFill1Wght400Grad0Opsz48 from '../components/ApartmentFill1Wght400Grad0Opsz48'
import IconApartmentFill1Wght500Grad0Opsz48 from '../components/ApartmentFill1Wght500Grad0Opsz48'
import IconApartmentFill1Wght600Grad0Opsz48 from '../components/ApartmentFill1Wght600Grad0Opsz48'
import IconApartmentFill1Wght700Grad0Opsz48 from '../components/ApartmentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconApartment = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconApartmentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconApartmentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconApartmentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconApartmentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconApartmentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconApartmentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconApartmentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconApartmentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconApartmentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconApartmentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconApartmentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconApartmentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconApartmentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconApartmentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
