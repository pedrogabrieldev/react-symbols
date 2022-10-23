import IconTourFill0Wght100Grad0Opsz48 from '../components/TourFill0Wght100Grad0Opsz48'
import IconTourFill0Wght200Grad0Opsz48 from '../components/TourFill0Wght200Grad0Opsz48'
import IconTourFill0Wght300Grad0Opsz48 from '../components/TourFill0Wght300Grad0Opsz48'
import IconTourFill0Wght400Grad0Opsz48 from '../components/TourFill0Wght400Grad0Opsz48'
import IconTourFill0Wght500Grad0Opsz48 from '../components/TourFill0Wght500Grad0Opsz48'
import IconTourFill0Wght600Grad0Opsz48 from '../components/TourFill0Wght600Grad0Opsz48'
import IconTourFill0Wght700Grad0Opsz48 from '../components/TourFill0Wght700Grad0Opsz48'
import IconTourFill1Wght100Grad0Opsz48 from '../components/TourFill1Wght100Grad0Opsz48'
import IconTourFill1Wght200Grad0Opsz48 from '../components/TourFill1Wght200Grad0Opsz48'
import IconTourFill1Wght300Grad0Opsz48 from '../components/TourFill1Wght300Grad0Opsz48'
import IconTourFill1Wght400Grad0Opsz48 from '../components/TourFill1Wght400Grad0Opsz48'
import IconTourFill1Wght500Grad0Opsz48 from '../components/TourFill1Wght500Grad0Opsz48'
import IconTourFill1Wght600Grad0Opsz48 from '../components/TourFill1Wght600Grad0Opsz48'
import IconTourFill1Wght700Grad0Opsz48 from '../components/TourFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTour = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTourFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTourFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTourFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTourFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTourFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTourFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTourFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTourFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTourFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTourFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTourFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTourFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTourFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTourFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
