import IconCleaningServicesFill0Wght100Grad0Opsz48 from '../components/CleaningServicesFill0Wght100Grad0Opsz48'
import IconCleaningServicesFill0Wght200Grad0Opsz48 from '../components/CleaningServicesFill0Wght200Grad0Opsz48'
import IconCleaningServicesFill0Wght300Grad0Opsz48 from '../components/CleaningServicesFill0Wght300Grad0Opsz48'
import IconCleaningServicesFill0Wght400Grad0Opsz48 from '../components/CleaningServicesFill0Wght400Grad0Opsz48'
import IconCleaningServicesFill0Wght500Grad0Opsz48 from '../components/CleaningServicesFill0Wght500Grad0Opsz48'
import IconCleaningServicesFill0Wght600Grad0Opsz48 from '../components/CleaningServicesFill0Wght600Grad0Opsz48'
import IconCleaningServicesFill0Wght700Grad0Opsz48 from '../components/CleaningServicesFill0Wght700Grad0Opsz48'
import IconCleaningServicesFill1Wght100Grad0Opsz48 from '../components/CleaningServicesFill1Wght100Grad0Opsz48'
import IconCleaningServicesFill1Wght200Grad0Opsz48 from '../components/CleaningServicesFill1Wght200Grad0Opsz48'
import IconCleaningServicesFill1Wght300Grad0Opsz48 from '../components/CleaningServicesFill1Wght300Grad0Opsz48'
import IconCleaningServicesFill1Wght400Grad0Opsz48 from '../components/CleaningServicesFill1Wght400Grad0Opsz48'
import IconCleaningServicesFill1Wght500Grad0Opsz48 from '../components/CleaningServicesFill1Wght500Grad0Opsz48'
import IconCleaningServicesFill1Wght600Grad0Opsz48 from '../components/CleaningServicesFill1Wght600Grad0Opsz48'
import IconCleaningServicesFill1Wght700Grad0Opsz48 from '../components/CleaningServicesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCleaningServices = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCleaningServicesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCleaningServicesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCleaningServicesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCleaningServicesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCleaningServicesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCleaningServicesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCleaningServicesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCleaningServicesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCleaningServicesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCleaningServicesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCleaningServicesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCleaningServicesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCleaningServicesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCleaningServicesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
