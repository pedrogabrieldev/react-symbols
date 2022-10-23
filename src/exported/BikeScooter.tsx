import IconBikeScooterFill0Wght100Grad0Opsz48 from '../components/BikeScooterFill0Wght100Grad0Opsz48'
import IconBikeScooterFill0Wght200Grad0Opsz48 from '../components/BikeScooterFill0Wght200Grad0Opsz48'
import IconBikeScooterFill0Wght300Grad0Opsz48 from '../components/BikeScooterFill0Wght300Grad0Opsz48'
import IconBikeScooterFill0Wght400Grad0Opsz48 from '../components/BikeScooterFill0Wght400Grad0Opsz48'
import IconBikeScooterFill0Wght500Grad0Opsz48 from '../components/BikeScooterFill0Wght500Grad0Opsz48'
import IconBikeScooterFill0Wght600Grad0Opsz48 from '../components/BikeScooterFill0Wght600Grad0Opsz48'
import IconBikeScooterFill0Wght700Grad0Opsz48 from '../components/BikeScooterFill0Wght700Grad0Opsz48'
import IconBikeScooterFill1Wght100Grad0Opsz48 from '../components/BikeScooterFill1Wght100Grad0Opsz48'
import IconBikeScooterFill1Wght200Grad0Opsz48 from '../components/BikeScooterFill1Wght200Grad0Opsz48'
import IconBikeScooterFill1Wght300Grad0Opsz48 from '../components/BikeScooterFill1Wght300Grad0Opsz48'
import IconBikeScooterFill1Wght400Grad0Opsz48 from '../components/BikeScooterFill1Wght400Grad0Opsz48'
import IconBikeScooterFill1Wght500Grad0Opsz48 from '../components/BikeScooterFill1Wght500Grad0Opsz48'
import IconBikeScooterFill1Wght600Grad0Opsz48 from '../components/BikeScooterFill1Wght600Grad0Opsz48'
import IconBikeScooterFill1Wght700Grad0Opsz48 from '../components/BikeScooterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBikeScooter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBikeScooterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBikeScooterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBikeScooterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBikeScooterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBikeScooterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBikeScooterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBikeScooterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBikeScooterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBikeScooterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBikeScooterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBikeScooterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBikeScooterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBikeScooterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBikeScooterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
