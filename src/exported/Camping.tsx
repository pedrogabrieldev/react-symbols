import IconCampingFill0Wght100Grad0Opsz48 from '../components/CampingFill0Wght100Grad0Opsz48'
import IconCampingFill0Wght200Grad0Opsz48 from '../components/CampingFill0Wght200Grad0Opsz48'
import IconCampingFill0Wght300Grad0Opsz48 from '../components/CampingFill0Wght300Grad0Opsz48'
import IconCampingFill0Wght400Grad0Opsz48 from '../components/CampingFill0Wght400Grad0Opsz48'
import IconCampingFill0Wght500Grad0Opsz48 from '../components/CampingFill0Wght500Grad0Opsz48'
import IconCampingFill0Wght600Grad0Opsz48 from '../components/CampingFill0Wght600Grad0Opsz48'
import IconCampingFill0Wght700Grad0Opsz48 from '../components/CampingFill0Wght700Grad0Opsz48'
import IconCampingFill1Wght100Grad0Opsz48 from '../components/CampingFill1Wght100Grad0Opsz48'
import IconCampingFill1Wght200Grad0Opsz48 from '../components/CampingFill1Wght200Grad0Opsz48'
import IconCampingFill1Wght300Grad0Opsz48 from '../components/CampingFill1Wght300Grad0Opsz48'
import IconCampingFill1Wght400Grad0Opsz48 from '../components/CampingFill1Wght400Grad0Opsz48'
import IconCampingFill1Wght500Grad0Opsz48 from '../components/CampingFill1Wght500Grad0Opsz48'
import IconCampingFill1Wght600Grad0Opsz48 from '../components/CampingFill1Wght600Grad0Opsz48'
import IconCampingFill1Wght700Grad0Opsz48 from '../components/CampingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCamping = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCampingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCampingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCampingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCampingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCampingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCampingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCampingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCampingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCampingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCampingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCampingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCampingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCampingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCampingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
