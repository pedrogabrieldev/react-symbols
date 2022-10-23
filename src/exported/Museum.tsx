import IconMuseumFill0Wght100Grad0Opsz48 from '../components/MuseumFill0Wght100Grad0Opsz48'
import IconMuseumFill0Wght200Grad0Opsz48 from '../components/MuseumFill0Wght200Grad0Opsz48'
import IconMuseumFill0Wght300Grad0Opsz48 from '../components/MuseumFill0Wght300Grad0Opsz48'
import IconMuseumFill0Wght400Grad0Opsz48 from '../components/MuseumFill0Wght400Grad0Opsz48'
import IconMuseumFill0Wght500Grad0Opsz48 from '../components/MuseumFill0Wght500Grad0Opsz48'
import IconMuseumFill0Wght600Grad0Opsz48 from '../components/MuseumFill0Wght600Grad0Opsz48'
import IconMuseumFill0Wght700Grad0Opsz48 from '../components/MuseumFill0Wght700Grad0Opsz48'
import IconMuseumFill1Wght100Grad0Opsz48 from '../components/MuseumFill1Wght100Grad0Opsz48'
import IconMuseumFill1Wght200Grad0Opsz48 from '../components/MuseumFill1Wght200Grad0Opsz48'
import IconMuseumFill1Wght300Grad0Opsz48 from '../components/MuseumFill1Wght300Grad0Opsz48'
import IconMuseumFill1Wght400Grad0Opsz48 from '../components/MuseumFill1Wght400Grad0Opsz48'
import IconMuseumFill1Wght500Grad0Opsz48 from '../components/MuseumFill1Wght500Grad0Opsz48'
import IconMuseumFill1Wght600Grad0Opsz48 from '../components/MuseumFill1Wght600Grad0Opsz48'
import IconMuseumFill1Wght700Grad0Opsz48 from '../components/MuseumFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMuseum = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMuseumFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMuseumFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMuseumFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMuseumFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMuseumFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMuseumFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMuseumFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMuseumFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMuseumFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMuseumFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMuseumFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMuseumFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMuseumFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMuseumFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
